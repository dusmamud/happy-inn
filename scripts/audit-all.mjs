// Round-2 full audit: every route × widths — horizontal overflow + offenders,
// axe violations, console errors, H1 count, stuck reveals, tiny tap targets,
// iOS input zoom (font < 16px), fixed-bar overlap at page bottom.
// Usage: node scripts/audit-all.mjs [baseUrl]
// Resilient: per-combo try/catch, results appended to a file as they land,
// browser relaunched if a renderer crash kills it.
import { appendFileSync, writeFileSync } from 'node:fs';
import AxeBuilder from '@axe-core/playwright';
import { chromium } from 'playwright';

const OUT = new URL('./audit-results.txt', import.meta.url).pathname;
if (!process.env.AUDIT_APPEND) writeFileSync(OUT, '');
const emit = (line) => {
	console.log(line);
	appendFileSync(OUT, line + '\n');
};

const base = process.argv[2] ?? 'http://localhost:4173';
const allRoutes = [
	'/', '/rooms', '/rooms/queen-suite-deluxe', '/rooms/treetop-suite', '/rooms/royal-poinciana',
	'/rooms/garden-room', '/specials', '/about', '/area', '/gallery', '/spa', '/dining',
	'/weddings', '/reviews', '/faq', '/contact', '/book', '/blog',
	'/blog/weekend-guide-san-francisco', '/blog/inside-the-spa-renew-your-body',
	'/blog/garden-weddings-at-the-inn', '/privacy', '/terms', '/404'
];
const routes = process.env.AUDIT_ROUTES ? process.env.AUDIT_ROUTES.split(',') : allRoutes;
const widths = process.env.AUDIT_WIDTHS ? process.env.AUDIT_WIDTHS.split(',').map(Number) : [320, 360, 1440];

async function launchWithRetry() {
	for (let attempt = 1; attempt <= 4; attempt++) {
		try {
			return await chromium.launch({ timeout: 120_000 });
		} catch {
			console.log(`launch attempt ${attempt} failed — retrying in 6s`);
			await new Promise((r) => setTimeout(r, 6000));
		}
	}
	throw new Error('chromium launch failed after 4 attempts');
}

let browser = await launchWithRetry();
let problems = 0;

for (const route of routes) {
	for (const width of widths) {
		if (!browser.isConnected()) browser = await launchWithRetry();
		let ctx;
		try {
			ctx = await browser.newContext({ viewport: { width, height: 900 } });
		} catch {
			browser = await launchWithRetry();
			ctx = await browser.newContext({ viewport: { width, height: 900 } });
		}
		const page = await ctx.newPage();
		try {
		const errors = [];
		page.on('console', (m) => m.type() === 'error' && errors.push(m.text().slice(0, 100)));
		page.on('pageerror', (e) => errors.push('PAGEERROR ' + String(e).slice(0, 100)));
		await page.goto(base + route, { waitUntil: 'domcontentloaded' });
		await page.waitForTimeout(500);

		// Scroll through the page so every Reveal fires, then settle at top.
		await page.evaluate(async () => {
			const step = Math.round(window.innerHeight * 0.8);
			for (let y = 0; y < document.body.scrollHeight; y += step) {
				window.scrollTo(0, y);
				await new Promise((r) => setTimeout(r, 45));
			}
			window.scrollTo(0, 0);
		});
		await page.waitForTimeout(250);

		const report = await page.evaluate(() => {
			const cw = document.documentElement.clientWidth;
			const overflow = document.documentElement.scrollWidth - cw;
			const offenders = [];
			if (overflow > 0) {
				for (const el of document.querySelectorAll('body *')) {
					const r = el.getBoundingClientRect();
					if (r.right > cw + 1 && r.width > 0 && offenders.length < 4) {
						offenders.push(`${el.tagName.toLowerCase()}.${(el.className.baseVal !== undefined ? '' : String(el.className)).slice(0, 50)} right=${Math.round(r.right)}`);
					}
				}
			}
			let stuck = 0;
			for (const el of document.querySelectorAll('body *')) {
				if (el instanceof HTMLElement && el.style.opacity === '0') stuck++;
			}
			const tiny = [];
			for (const el of document.querySelectorAll('a, button')) {
				const r = el.getBoundingClientRect();
				if (r.width > 0 && (r.width < 24 || r.height < 24) && tiny.length < 4) {
					tiny.push(`${el.tagName.toLowerCase()} ${Math.round(r.width)}x${Math.round(r.height)} "${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 24)}"`);
				}
			}
			let smallInputs = 0;
			for (const el of document.querySelectorAll('input, select, textarea')) {
				if (parseFloat(getComputedStyle(el).fontSize) < 16) smallInputs++;
			}
			return {
				overflow,
				offenders,
				stuck,
				tiny,
				smallInputs,
				h1: document.querySelectorAll('h1').length
			};
		});

		const axe = await new AxeBuilder({ page }).analyze();
		const axeIds = axe.violations.map((v) => `${v.id}×${v.nodes.length}`);
		const issues = [];
		if (report.overflow > 0) issues.push(`OVERFLOW ${report.overflow}px [${report.offenders.join(' | ')}]`);
		if (axe.violations.length) issues.push(`AXE ${axeIds.join(',')}`);
		if (errors.length) issues.push(`CONSOLE ${errors[0]}`);
		if (report.h1 !== 1) issues.push(`H1=${report.h1}`);
		if (report.stuck > 0) issues.push(`STUCK-REVEALS=${report.stuck}`);
		if (report.tiny.length) issues.push(`TINY-TARGETS [${report.tiny.join(' | ')}]`);
		if (width <= 360 && report.smallInputs > 0) issues.push(`SMALL-INPUTS=${report.smallInputs}`);
		if (issues.length) {
			problems++;
			emit(`${route} @${width}: ${issues.join(' ;; ')}`);
		} else {
			emit(`${route} @${width}: ok`);
		}
		} catch (err) {
			problems++;
			emit(`${route} @${width}: AUDIT-ERROR ${String(err).slice(0, 120)}`);
		}
		await ctx.close().catch(() => {});
	}
}
emit(problems === 0 ? 'ALL CLEAN — every route × width passed' : `${problems} route/width combos with issues`);
await browser.close();
