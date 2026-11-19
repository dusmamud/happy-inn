<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { spaTreatments } from '#lib/site.ts';
</script>

<svelte:head>
	<title>Spa & Wellness — The Happy Inn</title>
	<meta name="description" content="The 9,000-square-foot european style spa at The Happy Inn — Natura Bissé facials, massages, body rituals and waxing, with prices and durations." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Renew Your Body"
		title="Spa & Wellness"
		intro="Our 9,000-square-foot european style spa is the crown jewel of the inn — and Renew Your Body guests save 20% this month."
		stem="/images/spa"
		alt="Facial treatment in The Happy Inn spa"
	/>
	<section class="mx-auto max-w-6xl px-4 py-14 lg:py-16" aria-label="Spa treatments and prices">
		<div class="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
			<Reveal>
				<div class="overflow-hidden [&_img]:aspect-[4/5] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
					<Picture stem="/images/spa" alt="Therapist giving a facial treatment" width={900} height={1100} sizes="(max-width: 1024px) 100vw, 440px" />
				</div>
				<div class="mt-5 bg-mist p-6">
					<h2 class="font-serif text-2xl font-medium text-ink">Spa Hours</h2>
					<p class="mt-2 leading-relaxed text-ink/80">Open daily 9:00 AM – 7:00 PM. Hotel guests enjoy complimentary pool, sauna and garden access with every treatment. Book facials and massages at least a day ahead — call <a class="font-medium text-gold-deep underline underline-offset-4" href="tel:+10123456789">(012) 345 - 6789</a>.</p>
				</div>
			</Reveal>
			<Reveal delay={0.08}>
				<h2 class="font-serif text-3xl font-medium text-ink">Treatments & Prices</h2>
				<ul class="mt-6 divide-y divide-linen">
					{#each spaTreatments as treatment (treatment.name)}
						<li class="py-5">
							<p class="flex flex-wrap items-baseline justify-between gap-2">
								<span class="font-serif text-xl font-medium text-ink">{treatment.name}</span>
								<span class="font-serif text-xl text-gold-deep">${treatment.price} <span class="text-sm text-ink/75">· {treatment.duration}</span></span>
							</p>
							<p class="mt-1.5 leading-relaxed text-ink/80">{treatment.text}</p>
						</li>
					{/each}
				</ul>
				<p class="mt-7 flex flex-wrap gap-3">
					<a href="/book" class="bg-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">Add A Treatment To Your Stay</a>
					<a href="/specials" class="border border-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-gold-deep uppercase transition-colors hover:bg-gold-deep hover:text-white">Spa Escape — 20% Off</a>
				</p>
			</Reveal>
		</div>
	</section>
</main>
