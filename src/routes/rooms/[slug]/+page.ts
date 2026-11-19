import { error } from '@sveltejs/kit';
import { rooms } from '#lib/site.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => rooms.map((room) => ({ slug: room.slug }));

export const load: PageLoad = ({ params }) => {
	const room = rooms.find((r) => r.slug === params.slug);
	if (!room) error(404, 'Room not found');
	const others = rooms.filter((r) => r.slug !== room.slug);
	return { room, others };
};
