<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import { weddingPackages } from '#lib/site.ts';
</script>

<svelte:head>
	<title>Weddings & Events — The Happy Inn</title>
	<meta name="description" content="Garden weddings and events at The Happy Inn — packages for 40 to 80 guests, veranda dinners and whole-inn weekends, with an events coordinator." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Your Special Day"
		title="Weddings At The Inn"
		intro="Vows beneath the Royal Poinciana, dinner on the 1904 veranda, and the whole garden lit for dancing."
		stem="/images/wedding"
		alt="Couple exchanging rings at a garden wedding at The Happy Inn"
	/>
	<section class="mx-auto max-w-6xl px-4 py-14 lg:py-16" aria-label="Wedding packages">
		<div class="grid gap-6 lg:grid-cols-3">
			{#each weddingPackages as pkg, i (pkg.name)}
				<Reveal delay={i * 0.07}>
					<article class="flex h-full flex-col border border-linen bg-white p-7 shadow-sm">
						<h2 class="font-serif text-2xl font-medium text-ink">{pkg.name}</h2>
						<p class="mt-1 text-sm text-ink/75">{pkg.guests}</p>
						<p class="mt-4 font-serif text-3xl text-gold-deep">{pkg.price}</p>
						<ul class="mt-5 flex-1 space-y-2.5 text-sm leading-relaxed text-ink/85">
							{#each pkg.includes as item (item)}
								<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /> {item}</li>
							{/each}
						</ul>
						<a href="/contact" class="mt-7 bg-gold-deep px-6 py-3.5 text-center text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">Enquire About This Package</a>
					</article>
				</Reveal>
			{/each}
		</div>
		<div class="mt-10 overflow-hidden [&_img]:aspect-[21/9] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
			<Picture stem="/images/wedding" alt="Wedding celebration in the inn garden" width={1600} height={700} sizes="100vw" />
		</div>

		<div class="mt-12 grid gap-6 lg:grid-cols-2">
			<div class="bg-mist p-7 sm:p-9">
				<h2 class="font-serif text-[28px] font-medium text-ink">Meetings & Small Events</h2>
				<p class="mt-3 text-[15px] leading-relaxed text-ink/85">
					The veranda room seats 24 boardroom-style or 40 theatre-style, with garden breaks, veranda lunches and
					rooms upstairs for anyone who would rather not drive home. Day-delegate rate from $65 per person,
					including coffee, lunch and parking.
				</p>
				<ul class="mt-4 space-y-2 text-sm leading-relaxed text-ink/85">
					<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /> Projector, screen & fast Wi-Fi included</li>
					<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /> Half-day and full-day hire</li>
					<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /> Retreat add-ons: spa sessions & garden dinners</li>
				</ul>
				<a href="/contact" class="mt-6 inline-block bg-ink px-6 py-3.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-gold-deep">Plan An Event</a>
			</div>
			<div class="bg-coal p-7 text-white sm:p-9">
				<h2 class="font-serif text-[28px] font-medium">Good To Know</h2>
				<ul class="mt-4 space-y-3 text-[15px] leading-relaxed text-white/90">
					<li class="flex gap-2.5"><Icon name="check" class="mt-1 h-4 w-4 shrink-0 text-gold-soft" /> Garden events run until 10:00 PM; the veranda until midnight.</li>
					<li class="flex gap-2.5"><Icon name="check" class="mt-1 h-4 w-4 shrink-0 text-gold-soft" /> A 25% deposit confirms your date; the balance is due 14 days before.</li>
					<li class="flex gap-2.5"><Icon name="check" class="mt-1 h-4 w-4 shrink-0 text-gold-soft" /> Rain plan included: the 1904 veranda seats the full party under cover.</li>
					<li class="flex gap-2.5"><Icon name="check" class="mt-1 h-4 w-4 shrink-0 text-gold-soft" /> Every package includes a planning session with our events coordinator.</li>
				</ul>
			</div>
		</div>
	</section>
	<Testimonials limit={3} />
</main>
