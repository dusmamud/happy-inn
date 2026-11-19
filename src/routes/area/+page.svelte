<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { attractions, site } from '#lib/site.ts';

	const arrival = [
		{ title: 'Address', text: site.contact.address },
		{ title: 'Check-In / Out', text: `Check-in from ${site.checkInTime} · check-out until ${site.checkOutTime}. Early check-in from 1:00 PM for direct bookings.` },
		{ title: 'Parking', text: 'Complimentary on-site parking for one car per room, plus two EV charging points by the garden gate.' },
		{ title: 'Getting Here', text: 'Staunton Amtrak station is a 6-minute walk. Shenandoah Valley Regional Airport (SHD) is 20 minutes by car — ask us about transfers.' }
	];
</script>

<svelte:head>
	<title>About The Area — The Happy Inn</title>
	<meta name="description" content="What to see and do around The Happy Inn in Staunton, Virginia — downtown, Shakespeare, the Blue Ridge Parkway, plus arrival, parking and check-in information." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Explore"
		title="About The Area"
		intro="Staunton was voted one of the best small towns in America — here is what our guests love within minutes of the inn."
		stem="/images/outdoor"
		alt="Guests sightseeing outdoors near the inn"
	/>
	<section class="mx-auto max-w-6xl px-4 py-14 lg:py-16" aria-label="Nearby attractions">
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each attractions as place, i (place.name)}
				<Reveal delay={(i % 3) * 0.07}>
					<article class="h-full bg-white shadow-sm">
						<div class="[&_img]:h-48 [&_img]:w-full [&_img]:object-cover [&_picture]:block">
							<Picture stem={place.image.stem} alt={place.image.alt} width={800} height={600} sizes="(max-width: 1024px) 100vw, 360px" />
						</div>
						<div class="p-6">
							<p class="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] text-gold-deep uppercase">
								<Icon name="pin" class="h-4 w-4" /> {place.distance}
							</p>
							<h2 class="mt-2 font-serif text-[22px] font-medium text-ink">{place.name}</h2>
							<p class="mt-2 leading-relaxed text-ink/80">{place.text}</p>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>

		<div class="mt-12 bg-coal px-7 py-9 text-white">
			<h2 class="font-serif text-3xl font-medium">Location & Arrival</h2>
			<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each arrival as item (item.title)}
					<div>
						<h3 class="text-[11px] font-semibold tracking-[0.25em] text-gold-soft uppercase">{item.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-white/85">{item.text}</p>
					</div>
				{/each}
			</div>
			<p class="mt-7 flex flex-wrap gap-3">
				<a href="/contact" class="bg-gold-deep px-6 py-3 text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-gold">Ask Us Anything</a>
				<a href="https://maps.google.com/?q=Staunton,+VA" target="_blank" rel="noreferrer" class="border border-white/40 px-6 py-3 text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:border-gold-soft hover:text-gold-soft">Open In Maps</a>
			</p>
		</div>
	</section>
</main>
