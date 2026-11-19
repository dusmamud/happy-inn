<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { dining } from '#lib/site.ts';
</script>

<svelte:head>
	<title>Dining & Breakfast — The Happy Inn</title>
	<meta name="description" content="Complimentary poolside breakfast, veranda dinners and afternoon tea at The Happy Inn — hours, highlights and the breakfast menu." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Eat & Drink"
		title="Dining At The Inn"
		intro={dining.hours + ' — and it is complimentary with every direct booking.'}
		stem="/images/breakfast"
		alt="Breakfast spread served poolside at The Happy Inn"
	/>
	<section class="mx-auto max-w-6xl px-4 py-14 lg:py-16" aria-label="Dining highlights">
		<div class="grid gap-6 md:grid-cols-3">
			{#each dining.highlights as item, i (item.name)}
				<Reveal delay={i * 0.07}>
					<article class="h-full bg-mist p-7">
						<h2 class="font-serif text-2xl font-medium text-ink">{item.name}</h2>
						<p class="mt-3 leading-relaxed text-ink/80">{item.text}</p>
					</article>
				</Reveal>
			{/each}
		</div>

		<div class="mt-12 grid items-start gap-10 lg:grid-cols-2">
			<Reveal>
				<div class="overflow-hidden [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
					<Picture stem="/images/breakfast" alt="Poolside breakfast table with fruit, pastries and salmon" width={1000} height={750} sizes="(max-width: 1024px) 100vw, 520px" />
				</div>
			</Reveal>
			<Reveal delay={0.08}>
				<h2 class="font-serif text-3xl font-medium text-ink">Breakfast Menu</h2>
				<p class="mt-2 text-sm text-ink/75">Everything below is included with your room when you book direct. Veranda dinner is priced per guest.</p>
				<ul class="mt-5 divide-y divide-linen">
					{#each dining.menu as row (row.item)}
						<li class="flex items-baseline justify-between gap-4 py-3.5">
							<span class="text-ink/85">{row.item}</span>
							<span class="font-serif text-lg text-gold-deep">{row.price === 0 ? 'Included' : `$${row.price}`}</span>
						</li>
					{/each}
				</ul>
				<p class="mt-6">
					<a href="/contact" class="inline-block border border-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-gold-deep uppercase transition-colors hover:bg-gold-deep hover:text-white">Reserve The Veranda Dinner</a>
				</p>
			</Reveal>
		</div>
	</section>
</main>
