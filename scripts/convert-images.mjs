// Convert a master PNG into AVIF / WebP / JPG / PNG at 480 / 800 / 1200 / 1600.
// Usage: node scripts/convert-images.mjs static/images/hero.png
// Requires sharp (once per project): npm i -D sharp
// Output files sit next to the master, e.g. hero-480.avif … hero-1600.png,
// which is exactly what #lib/components/Picture.svelte expects.
import { basename, dirname, extname, join } from 'node:path';

const input = process.argv[2];
if (!input) {
	console.error('Usage: node scripts/convert-images.mjs <master.png>');
	process.exit(1);
}

let sharp;
try {
	({ default: sharp } = await import('sharp'));
} catch {
	console.error('sharp is not installed. Run: npm i -D sharp');
	process.exit(1);
}

const widths = [480, 800, 1200, 1600];
const stem = join(dirname(input), basename(input, extname(input)));

for (const width of widths) {
	const image = sharp(input).resize(width);
	await image.clone().avif({ quality: 72 }).toFile(`${stem}-${width}.avif`);
	await image.clone().webp({ quality: 80 }).toFile(`${stem}-${width}.webp`);
	await image.clone().jpeg({ quality: 82 }).toFile(`${stem}-${width}.jpg`);
	await image.clone().png().toFile(`${stem}-${width}.png`);
	console.log(`done ${width}w`);
}
console.log('All formats written for', stem);
