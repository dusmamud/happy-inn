import { site } from '#lib/site.ts';

export const prerender = true;

export function GET() {
	const body = `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`;
	return new Response(body, { headers: { 'content-type': 'text/plain' } });
}
