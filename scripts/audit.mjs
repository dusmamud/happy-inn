// One-off audit of the live preview: axe a11y, console errors, dead links,
// anchor targets, page weight and LCP. Usage: node scripts/audit.mjs [url]
import AxeBuilder from '@axe-core/playwright';
import { chromium } from 'playwright';

const base = process.argv[2] ?? 'http://127.0.0.1:4173/';
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const consoleErrors = [];
page.on('console', (m) => m.type() === 'error' && consoleErrors.push(m.text().slice(0, 160)));
page.on('pageerror', (e) => consoleErrors.push('PAGEERROR ' + String(e).slice(0, 160)));

let bytes = 0;
let requests = 0;
page.on('response', async (r) => {
	try {
		const b = await r.body();
		bytes += b.length;
		requests++;
	} catch {}
});

await page.goto(base, { waitUntil: 'networkidle' });

const lcp = await page.evaluate(
	() =>
		new Promise((resolve) => {
			let value = 0;
			const po = new PerformanceObserver((list) => {
				for (const e of list.getEntries()) value = e.startTime;
			});
			po.observe({ type: 'largest-contentful-paint', buffered: true });
			setTimeout(() => resolve(Math.round(value)), 600);
		})
);

const axe = await new AxeBuilder({ page }).analyze();
console.log('AXE violations:', axe.violations.length);
for (const v of axe.violations) console.log(' -', v.id, `(${v.impact})`, v.nodes.length, 'nodes —', v.help);

const links = await page.evaluate(() => {
	const out = { anchors: [], missingTargets: [], imgsNoAlt: 0, headings: [] };
	const seen = new Set();
	for (const a of document.querySelectorAll('a[href]')) {
		const href = a.getAttribute('href');
		if (!seen.has(href)) {
			seen.add(href);
			out.anchors.push(href);
		}
		if (href?.startsWith('#') && href.length > 1 && !document.querySelector(href)) {
			out.missingTargets.push(href);
		}
	}
	for (const img of document.querySelectorAll('img')) {
		if (img.getAttribute('alt') === null) out.imgsNoAlt++;
	}
	for (const h of document.querySelectorAll('h1,h2,h3')) out.headings.push(h.tagName + ':' + h.textContent.trim().slice(0, 40));
	return out;
});
console.log('UNIQUE HREFS:', JSON.stringify(links.anchors));
console.log('MISSING ANCHOR TARGETS:', JSON.stringify([...new Set(links.missingTargets)]));
console.log('IMGS WITHOUT ALT ATTR:', links.imgsNoAlt);
console.log('HEADINGS:', JSON.stringify(links.headings));
console.log('H1 COUNT:', await page.locator('h1').count());
console.log('CONSOLE ERRORS:', consoleErrors.length, JSON.stringify(consoleErrors.slice(0, 5)));
console.log(`PAGE WEIGHT: ${(bytes / 1024).toFixed(0)} KB in ${requests} requests, LCP ~${lcp}ms (local, unthrottled)`);
await browser.close();
