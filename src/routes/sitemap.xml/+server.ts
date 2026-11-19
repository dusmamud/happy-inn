import { blogPosts, rooms, site } from '#lib/site.ts';

export const prerender = true;

export function GET() {
	const pages = [
		'',
		'rooms',
		...rooms.map((room) => `rooms/${room.slug}`),
		'specials',
		'about',
		'area',
		'gallery',
		'spa',
		'dining',
		'weddings',
		'reviews',
		'faq',
		'contact',
		'book',
		'blog',
		...blogPosts.map((post) => `blog/${post.slug}`),
		'privacy',
		'terms'
	];
	const urls = pages.map((page) => `  <url><loc>${site.url}/${page}</loc></url>`).join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	return new Response(body, { headers: { 'content-type': 'application/xml' } });
}
