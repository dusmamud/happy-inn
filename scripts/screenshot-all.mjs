// Capture the upgraded site: hero shots + every key page, desktop & mobile.
// Usage: node scripts/screenshot-all.mjs [baseUrl]
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const base = process.argv[2] ?? 'http://127.0.0.1:4173';
await mkdir('screenshots', { recursive: true });
const browser = await chromium.launch();

const shots = [
	['home-hero-desktop', '/', 1440, 950, false],
	['home-full-desktop', '/', 1440, 950, true],
	['home-hero-mobile', '/', 390, 844, false],
	['page-rooms', '/rooms', 1440, 950, false],
	['page-room-detail', '/rooms/queen-suite-deluxe', 1440, 950, false],
	['page-specials', '/specials', 1440, 950, false],
	['page-spa', '/spa', 1440, 950, false],
	['page-book', '/book', 1440, 950, false],
	['page-gallery', '/gallery', 1440, 950, false],
	['page-contact', '/contact', 1440, 950, false],
	['page-blog', '/blog', 1440, 950, false],
	['page-room-detail-mobile', '/rooms/queen-suite-deluxe', 390, 844, false]
];

for (const [name, path, width, height, full] of shots) {
	const ctx = await browser.newContext({ viewport: { width, height } });
	const page = await ctx.newPage();
	await page.goto(base + path, { waitUntil: 'networkidle' });
	await page.waitForTimeout(900); // let reveal animations settle
	await page.screenshot({ path: `screenshots/${name}.png`, fullPage: full });
	console.log('saved', name);
	await ctx.close();
}
await browser.close();
