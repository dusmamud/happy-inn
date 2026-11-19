// Capture demo screenshots of the built site from the local preview server.
// Usage: npm run preview (in another shell) && node scripts/screenshot.mjs
import { chromium } from 'playwright';

const base = process.env.PREVIEW_URL ?? 'http://127.0.0.1:4173/';
const out = new URL('../screenshots/', import.meta.url).pathname;

const browser = await chromium.launch();
try {
	const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
	await desktop.goto(base, { waitUntil: 'networkidle' });
	await desktop.screenshot({ path: `${out}desktop-top.png` });
	await desktop.screenshot({ path: `${out}desktop-full.png`, fullPage: true });
	console.log('desktop ok');

	const mobile = await browser.newPage({ viewport: { width: 360, height: 800 } });
	await mobile.goto(base, { waitUntil: 'networkidle' });
	await mobile.screenshot({ path: `${out}mobile-top.png` });
	await mobile.screenshot({ path: `${out}mobile-full.png`, fullPage: true });
	const overflow = await mobile.evaluate(
		() => document.documentElement.scrollWidth - document.documentElement.clientWidth
	);
	console.log('mobile ok, horizontal overflow =', overflow);
} finally {
	await browser.close();
}
