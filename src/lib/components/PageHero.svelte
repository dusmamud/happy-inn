<script lang="ts">
	import Picture from '#lib/components/Picture.svelte';

	type Props = {
		eyebrow: string;
		title: string;
		intro?: string;
		stem: string;
		alt: string;
	};
	let { eyebrow, title, intro = '', stem, alt }: Props = $props();
</script>

<section class="relative overflow-hidden" aria-label={title}>
	<div class="relative h-56 sm:h-72 lg:h-80 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_picture]:block [&_picture]:h-full">
		<Picture {stem} {alt} eager width={1600} height={900} sizes="100vw" />
		<div class="absolute inset-0 bg-ink/55"></div>
		<div class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
			<p class="text-[11px] font-semibold tracking-[0.35em] text-gold-soft uppercase">{eyebrow}</p>
			<h1 class="mt-2 font-serif text-4xl font-medium text-balance sm:text-5xl">{title}</h1>
			{#if intro}<p class="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">{intro}</p>{/if}
		</div>
	</div>
</section>
