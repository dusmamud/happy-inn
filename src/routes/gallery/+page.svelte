<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { gallery } from '#lib/site.ts';

	const categories = ['All', ...new Set(gallery.map((g) => g.category))];
	let active = $state('All');
	const shown = $derived(active === 'All' ? gallery : gallery.filter((g) => g.category === active));

	let dialog: HTMLDialogElement | null = $state(null);
	let selected = $state(0);
	const current = $derived(shown[selected]);

	function open(i: number) {
		selected = i;
		dialog?.showModal();
	}
	function step(d: number) {
		selected = (selected + d + shown.length) % shown.length;
	}
	function onKey(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}
</script>

<svelte:head>
	<title>Gallery — The Happy Inn</title>
	<meta name="description" content="Photos of The Happy Inn — rooms, spa and pool, dining, weddings and the San Francisco area." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="See It First"
		title="Photo Gallery"
		intro="Rooms, gardens, breakfasts and weddings — the inn exactly as our guests find it."
		stem="/images/hero"
		alt="Turquoise bedroom at The Happy Inn"
	/>
	<section class="mx-auto max-w-6xl px-4 py-12 lg:py-14" aria-label="Photo gallery">
		<div class="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery by category">
			{#each categories as category (category)}
				<button
					type="button"
					onclick={() => (active = category)}
					aria-pressed={active === category}
					class="border px-5 py-2.5 text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors {active === category
						? 'border-gold-deep bg-gold-deep text-white'
						: 'border-linen text-ink/80 hover:border-gold-deep hover:text-gold-deep'}"
				>
					{category}
				</button>
			{/each}
		</div>
		<div class="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-3">
			{#each shown as image, i (image.stem + image.alt)}
				<Reveal>
					<button type="button" onclick={() => open(i)} class="group relative block w-full overflow-hidden text-left" aria-label="View larger: {image.alt}">
						<span class="block [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-105 [&_picture]:block">
							<Picture stem={image.stem} alt={image.alt} width={1000} height={750} sizes="(max-width: 1024px) 50vw, 360px" />
						</span>
						<span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent px-4 pt-10 pb-3 text-sm text-white">
							{image.alt} <span class="text-gold-soft">· {image.category}</span>
						</span>
						<span class="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/50 text-white opacity-0 transition-opacity group-hover:opacity-100"><Icon name="search" class="h-4 w-4" /></span>
					</button>
				</Reveal>
			{/each}
		</div>
	</section>

	<dialog
		bind:this={dialog}
		onkeydown={onKey}
		class="m-auto w-[min(92vw,880px)] bg-coal p-0 text-white backdrop:bg-ink/80"
		aria-label="Photo viewer"
	>
		{#if current}
			<div class="relative">
				<Picture stem={current.stem} alt={current.alt} width={1600} height={1067} eager sizes="92vw" class="aspect-[3/2] w-full object-cover" />
				<button type="button" onclick={() => dialog?.close()} aria-label="Close photo viewer" class="absolute top-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/60 text-white transition-colors hover:bg-ink"><Icon name="close" class="h-5 w-5" /></button>
				<button type="button" onclick={() => step(-1)} aria-label="Previous photo" class="absolute top-1/2 left-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white transition-colors hover:bg-ink"><Icon name="chevron-down" class="h-5 w-5 rotate-90" /></button>
				<button type="button" onclick={() => step(1)} aria-label="Next photo" class="absolute top-1/2 right-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white transition-colors hover:bg-ink"><Icon name="chevron-down" class="h-5 w-5 -rotate-90" /></button>
			</div>
			<p class="flex items-center justify-between gap-4 px-5 py-4 text-sm">
				<span>{current.alt} <span class="text-gold-soft">· {current.category}</span></span>
				<span class="shrink-0 text-white/75">{selected + 1} / {shown.length}</span>
			</p>
		{/if}
	</dialog>
</main>
