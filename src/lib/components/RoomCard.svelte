<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import type { Room } from '#lib/site.ts';

	type Props = { room: Room };
	let { room }: Props = $props();
</script>

<article class="flex h-full w-full flex-col bg-white shadow-md">
	<a href="/rooms/{room.slug}" class="block [&_img]:h-52 [&_img]:w-full [&_img]:object-cover [&_picture]:block" aria-label="View the {room.name}">
		<Picture stem={room.image.stem} alt={room.image.alt} width={800} height={600} sizes="(max-width: 640px) 100vw, 320px" />
	</a>
	<div class="flex flex-1 flex-col p-5">
		<h3 class="font-serif text-[22px] font-medium text-ink">
			<a href="/rooms/{room.slug}" class="hover:text-gold-deep">{room.name}</a>
		</h3>
		<p class="mt-2 flex items-center gap-4 text-xs font-medium text-ink/80">
			<span class="inline-flex items-center gap-1"><Icon name="users" class="h-3.5 w-3.5 text-gold-deep" /> Sleeps {room.occupancy}</span>
			<span>{room.size}</span>
			<span>{room.bed}</span>
		</p>
		<p class="mt-2.5 flex-1 text-sm leading-relaxed text-ink/80">{room.description}</p>
		<div class="mt-4 flex items-end justify-between border-t border-linen pt-4">
			<span class="text-xs text-ink/75">price from</span>
			<p class="font-serif text-[22px] text-gold-deep">
				${room.price}<span class="text-sm text-ink/75">{room.unit}</span>
			</p>
		</div>
		<a
			href="/book?room={room.slug}"
			class="mt-4 block border border-gold-deep px-4 py-3 text-center text-[11px] font-semibold tracking-[0.18em] text-gold-deep uppercase transition-colors hover:bg-gold-deep hover:text-white"
		>
			Book This Room
		</a>
	</div>
</article>
