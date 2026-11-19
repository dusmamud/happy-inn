<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import RoomCard from '#lib/components/RoomCard.svelte';
	import { perks, rooms } from '#lib/site.ts';
	import Icon from '#lib/components/Icon.svelte';
</script>

<svelte:head>
	<title>Rooms & Rates — The Happy Inn</title>
	<meta name="description" content="Every room at The Happy Inn with photos, size, bed configuration, occupancy, amenities and rates — book direct for the best price." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Stay With Us"
		title="Rooms & Rates"
		intro="Four room styles in our 1904 Queen Anne mansion and 1880’s conch cottage — each one different, every rate includes breakfast."
		stem="/images/room-treetop"
		alt="Treetop Suite windows above the neighbourhood canopy"
	/>
	<section class="mx-auto max-w-6xl px-4 py-14 lg:py-16" aria-label="All rooms">
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each rooms as room, i (room.slug)}
				<Reveal delay={(i % 3) * 0.07}>
					<RoomCard {room} />
				</Reveal>
			{/each}
			<Reveal delay={0.14}>
				<div class="flex h-full flex-col justify-center bg-coal p-7 text-white">
					<h3 class="font-serif text-2xl font-medium">Why Book Direct?</h3>
					<ul class="mt-4 space-y-3 text-sm leading-relaxed text-white/85">
						{#each perks as perk (perk.title)}
							<li class="flex gap-2.5"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" /><span><strong class="text-white">{perk.title}.</strong> {perk.text}</span></li>
						{/each}
					</ul>
					<a href="/book" class="mt-6 bg-gold-deep px-6 py-3.5 text-center text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-gold">Check Availability</a>
				</div>
			</Reveal>
		</div>
		<p class="mt-8 text-center text-sm text-ink/75">All rates in USD, per night, before tax. Free cancellation up to 48 hours before arrival on direct bookings.</p>
	</section>
</main>
