<script lang="ts">
	import About from '#lib/components/About.svelte';
	import FaqList from '#lib/components/FaqList.svelte';
	import Features from '#lib/components/Features.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Rooms from '#lib/components/Rooms.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import { faqs, gallery, offers, perks } from '#lib/site.ts';
</script>

<main id="main">
	<Hero />

	<!-- Book-direct perks (best practice: give guests a reason to book direct) -->
	<section aria-label="Why book direct" class="border-y border-linen bg-white">
		<div class="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each perks as perk, i (perk.title)}
				<Reveal delay={i * 0.06}>
					<p class="flex gap-3">
						<Icon name="check" class="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
						<span>
							<strong class="block font-serif text-lg font-medium text-ink">{perk.title}</strong>
							<span class="mt-0.5 block text-sm leading-relaxed text-ink/80">{perk.text}</span>
						</span>
					</p>
				</Reveal>
			{/each}
		</div>
	</section>

	<About />
	<Stats />
	<Rooms />
	<Features />

	<!-- Featured offer -->
	<section aria-label="Featured special offer" class="mx-auto max-w-6xl px-4 pb-14 lg:pb-20">
		<Reveal>
			<div class="grid overflow-hidden bg-coal text-white lg:grid-cols-2">
				<div class="[&_img]:h-64 [&_img]:w-full [&_img]:object-cover sm:[&_img]:h-80 lg:[&_img]:h-full [&_picture]:block">
					<Picture stem={offers[0].image.stem} alt={offers[0].image.alt} width={1200} height={900} sizes="(max-width: 1024px) 100vw, 560px" />
				</div>
				<div class="flex flex-col justify-center p-8 lg:p-12">
					<p class="text-[11px] font-semibold tracking-[0.35em] text-gold-soft uppercase">Special Offer · {offers[0].badge}</p>
					<h2 class="mt-3 font-serif text-3xl font-medium text-balance sm:text-4xl">{offers[0].name}</h2>
					<p class="mt-4 leading-relaxed text-white/85">{offers[0].description}</p>
					<ul class="mt-5 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
						{#each offers[0].includes as item (item)}
							<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" /> {item}</li>
						{/each}
					</ul>
					<p class="mt-6 flex flex-wrap items-center gap-4">
						<a href="/specials" class="bg-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-gold">View All Specials</a>
						<span class="font-serif text-xl text-gold-soft">{offers[0].price}</span>
					</p>
				</div>
			</div>
		</Reveal>
	</section>

	<Testimonials />

	<!-- Gallery preview -->
	<section aria-label="Photo gallery preview" class="mx-auto max-w-6xl px-4 py-14 lg:py-20">
		<p class="text-center text-[11px] font-semibold tracking-[0.35em] text-gold-deep uppercase">The Inn In Pictures</p>
		<h2 class="mt-2 text-center font-serif text-4xl font-medium text-ink sm:text-5xl">A Glimpse Inside</h2>
		<div class="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
			{#each gallery.slice(0, 8) as image, i (image.stem + image.category)}
				<Reveal delay={(i % 4) * 0.05}>
					<a href="/gallery" class="group block overflow-hidden" aria-label="Open the full gallery — {image.alt}">
						<span class="block [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-105 [&_picture]:block">
							<Picture stem={image.stem} alt={image.alt} width={800} height={600} sizes="(max-width: 1024px) 50vw, 280px" />
						</span>
					</a>
				</Reveal>
			{/each}
		</div>
		<p class="mt-8 text-center">
			<a href="/gallery" class="inline-block border border-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-gold-deep uppercase transition-colors hover:bg-gold-deep hover:text-white">View Full Gallery</a>
		</p>
	</section>

	<!-- FAQ preview -->
	<section aria-label="Frequently asked questions" class="bg-mist py-14 lg:py-20">
		<div class="mx-auto max-w-6xl px-4">
			<p class="text-center text-[11px] font-semibold tracking-[0.35em] text-gold-deep uppercase">Good To Know</p>
			<h2 class="mt-2 text-center font-serif text-4xl font-medium text-ink sm:text-5xl">Questions, Answered</h2>
			<div class="mt-10">
				<FaqList items={faqs.slice(0, 4)} />
			</div>
			<p class="mt-8 text-center">
				<a href="/faq" class="text-sm font-semibold text-gold-deep underline decoration-gold/50 underline-offset-4 hover:text-ink">See all questions & our policies →</a>
			</p>
		</div>
	</section>
</main>
