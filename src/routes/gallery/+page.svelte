<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { gallery } from '#lib/site.ts';

	const categories = ['All', ...new Set(gallery.map((g) => g.category))];
	let active = $state('All');
	const shown = $derived(active === 'All' ? gallery : gallery.filter((g) => g.category === active));
</script>

<svelte:head>
	<title>Gallery — The Happy Inn</title>
	<meta name="description" content="Photos of The Happy Inn — rooms, spa and pool, dining, weddings and the Staunton area." />
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
			{#each shown as image (image.stem + image.alt)}
				<Reveal>
					<figure class="group relative overflow-hidden">
						<span class="block [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-105 [&_picture]:block">
							<Picture stem={image.stem} alt={image.alt} width={1000} height={750} sizes="(max-width: 1024px) 50vw, 360px" />
						</span>
						<figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent px-4 pt-10 pb-3 text-sm text-white">
							{image.alt} <span class="text-gold-soft">· {image.category}</span>
						</figcaption>
					</figure>
				</Reveal>
			{/each}
		</div>
	</section>
</main>
