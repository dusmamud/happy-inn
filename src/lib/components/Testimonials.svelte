<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { site, testimonials } from '#lib/site.ts';

	type Props = { limit?: number; heading?: boolean };
	let { limit = 3, heading = true }: Props = $props();
	const shown = $derived(testimonials.slice(0, limit));
</script>

<section aria-label="Guest reviews" class="bg-mist py-14 lg:py-20">
	<div class="mx-auto max-w-6xl px-4">
		{#if heading}
			<p class="text-center text-[11px] font-semibold tracking-[0.35em] text-gold-deep uppercase">Guest Reviews</p>
			<h2 class="mt-2 text-center font-serif text-4xl font-medium text-ink sm:text-5xl">Loved By Our Guests</h2>
			<p class="mt-4 flex items-center justify-center gap-2 text-center text-sm text-ink/80">
				<span class="flex text-gold-deep" aria-hidden="true">
					{#each Array(5) as _, i (i)}<Icon name="star" class="h-4 w-4" />{/each}
				</span>
				<strong class="font-serif text-lg text-ink">{site.rating.score} / 5</strong>
				from {site.rating.count.toLocaleString('en-US')} verified guest reviews
			</p>
		{/if}
		<div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each shown as item, i (item.author)}
				<Reveal delay={i * 0.08}>
					<figure class="flex h-full flex-col bg-white p-6 shadow-sm">
						<span class="flex text-gold-deep" role="img" aria-label="Rated {item.rating} out of 5 stars">
							{#each Array(5) as _, s (s)}
								<Icon name="star" class="h-4 w-4 {s < item.rating ? '' : 'opacity-25'}" />
							{/each}
						</span>
						<blockquote class="mt-4 flex-1 leading-relaxed text-ink/85">“{item.quote}”</blockquote>
						<figcaption class="mt-5 border-t border-linen pt-4 text-sm">
							<span class="font-semibold text-ink">{item.author}</span>
							<span class="text-ink/75"> · {item.location}</span>
							<span class="mt-1 block text-xs text-ink/75">
								{item.date} · {item.source} · Stayed in the {item.room}
							</span>
						</figcaption>
					</figure>
				</Reveal>
			{/each}
		</div>
		{#if limit < testimonials.length}
			<p class="mt-9 text-center">
				<a href="/reviews" class="inline-block border border-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-gold-deep uppercase transition-colors hover:bg-gold-deep hover:text-white">
					Read All Reviews
				</a>
			</p>
		{/if}
	</div>
</section>
