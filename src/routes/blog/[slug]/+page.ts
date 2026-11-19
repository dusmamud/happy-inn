import { error } from '@sveltejs/kit';
import { blogPosts } from '#lib/site.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => blogPosts.map((post) => ({ slug: post.slug }));

export const load: PageLoad = ({ params }) => {
	const post = blogPosts.find((p) => p.slug === params.slug);
	if (!post) error(404, 'Article not found');
	return { post };
};
