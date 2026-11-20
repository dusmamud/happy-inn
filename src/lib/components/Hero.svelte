<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { booking, hero, intro, roomFromPrice, site } from '#lib/site.ts';

	let slide = $state(0);
	const total = hero.slides.length;

	function go(next: number) {
		slide = (next + total) % total;
	}

	// Booking widget state (mock availability check)
	let inDay = $state(booking.checkIn.day);
	let outDay = $state(booking.checkOut.day);
	let guests = $state(booking.guests);
	let status = $state('');

	const nights = $derived(outDay - inDay);
	const estimate = $derived(nights > 0 ? nights * roomFromPrice : 0);

	function step(target: 'in' | 'out' | 'guests', delta: number) {
		if (target === 'in') inDay = Math.min(30, Math.max(1, inDay + delta));
		if (target === 'out') outDay = Math.min(31, Math.max(2, outDay + delta));
		if (target === 'guests') guests = Math.min(6, Math.max(1, guests + delta));
		status = '';
	}

	function checkAvailability(event: SubmitEvent) {
		event.preventDefault();
		status =
			nights < 1
				? 'Check-out must be after check-in — please pick a later check-out day.'
				: `Good news — rooms are available for ${nights} night${nights === 1 ? '' : 's'} for ${guests} guest${guests === 1 ? '' : 's'}, from $${estimate} total. Continue to booking to secure your room.`;
	}
</script>

<!-- Hero carousel (matches reference: full-bleed image + offer bar) -->
<section class="relative" aria-roledescription="carousel" aria-label="The Happy Inn highlights">
	<div class="relative h-[62svh] max-h-[560px] min-h-[380px] overflow-hidden bg-mist lg:h-[74svh]">
		{#each hero.slides as item, i (item.stem)}
			<div
				class="absolute inset-0 transition-opacity duration-700 {i === slide ? 'opacity-100' : 'pointer-events-none opacity-0'} [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_picture]:block [&_picture]:h-full"
				aria-hidden={i !== slide}
			>
				<Picture stem={item.stem} alt={item.alt} eager={i === 0} width={1600} height={1000} sizes="100vw" />
			</div>
		{/each}
		<div class="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"></div>

		<!-- H1 overlay (SEO/a11y fix from audit: the page previously had no H1) -->
		<div class="absolute inset-x-0 bottom-24 px-4 text-center text-white sm:bottom-28">
			<p class="text-[11px] font-semibold tracking-[0.4em] text-gold-soft uppercase">Welcome To</p>
			<h1 class="mt-1 font-serif text-4xl font-medium text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-6xl">
				{site.name} — {site.tagline}
			</h1>
		</div>

		<button
			type="button"
			onclick={() => go(slide - 1)}
			aria-label="Previous slide"
			class="absolute top-1/2 left-3 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/35 text-white transition-colors hover:bg-ink/60 sm:inline-flex"
		>
			<Icon name="chevron-left" class="h-5 w-5" />
		</button>
		<button
			type="button"
			onclick={() => go(slide + 1)}
			aria-label="Next slide"
			class="absolute top-1/2 right-3 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/35 text-white transition-colors hover:bg-ink/60 sm:inline-flex"
		>
			<Icon name="chevron-right" class="h-5 w-5" />
		</button>
		<div class="absolute inset-x-0 bottom-20 flex justify-center gap-2 sm:bottom-24">
			{#each hero.slides as item, i (item.stem)}
				<button
					type="button"
					onclick={() => go(i)}
					aria-label="Go to slide {i + 1}"
					aria-current={i === slide}
					class="h-2 rounded-full transition-all {i === slide ? 'w-7 bg-gold-soft' : 'w-2 bg-white/70 hover:bg-white'}"
				></button>
			{/each}
		</div>
	</div>

	<!-- Offer bar (matches reference) -->
	<div class="relative z-10 mx-auto -mt-14 grid max-w-5xl gap-3 px-4 sm:grid-cols-3">
		{#each hero.offers as offer (offer.label)}
			<a
				href={offer.href}
				class="group flex items-center justify-between gap-3 px-6 py-5 shadow-lg transition-transform hover:-translate-y-0.5 {offer.style === 'light'
					? 'bg-white text-ink'
					: 'bg-gold-deep text-white'}"
			>
				<span>
					<span class="block font-serif text-lg leading-snug font-medium">{offer.label}</span>
					{#if offer.badge}<span class="mt-1 inline-block bg-white px-2 py-0.5 text-[11px] font-bold tracking-[0.14em] text-gold-deep uppercase">{offer.badge}</span>{/if}
				</span>
				<Icon name="arrow-right" class="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
			</a>
		{/each}
	</div>
</section>

<!-- Booking widget + welcome intro (matches reference) -->
<section id="booking" aria-label="Check room availability" class="mx-auto max-w-6xl scroll-mt-28 px-4 py-12 lg:py-16">
	<div class="grid items-start gap-10 lg:grid-cols-[400px_1fr]">
		<Reveal>
			<form onsubmit={checkAvailability} class="border border-linen bg-white shadow-[0_10px_36px_rgba(43,43,39,0.10)]" aria-label="Check room availability">
				<div class="grid grid-cols-3 divide-x divide-linen border-b border-linen">
					<div class="px-4 py-4 text-center">
						<p class="text-[10px] font-semibold tracking-[0.22em] text-ink/75 uppercase">Check-In</p>
						<p class="mt-1 text-[13px] text-ink/80">{booking.checkIn.month}</p>
						<p class="font-serif text-4xl leading-none text-ink">{String(inDay).padStart(2, '0')}</p>
						<p class="mt-2 flex items-center justify-center gap-3">
							<button type="button" onclick={() => step('in', -1)} aria-label="Check-in day earlier" class="inline-flex h-10 w-10 items-center justify-center text-gold-deep hover:bg-mist"><Icon name="chevron-down" class="h-4 w-4 rotate-90" /></button>
							<button type="button" onclick={() => step('in', 1)} aria-label="Check-in day later" class="inline-flex h-10 w-10 items-center justify-center text-gold-deep hover:bg-mist"><Icon name="chevron-down" class="h-4 w-4 -rotate-90" /></button>
						</p>
					</div>
					<div class="px-4 py-4 text-center">
						<p class="text-[10px] font-semibold tracking-[0.22em] text-ink/75 uppercase">Check-Out</p>
						<p class="mt-1 text-[13px] text-ink/80">{booking.checkOut.month}</p>
						<p class="font-serif text-4xl leading-none text-ink">{String(outDay).padStart(2, '0')}</p>
						<p class="mt-2 flex items-center justify-center gap-3">
							<button type="button" onclick={() => step('out', -1)} aria-label="Check-out day earlier" class="inline-flex h-10 w-10 items-center justify-center text-gold-deep hover:bg-mist"><Icon name="chevron-down" class="h-4 w-4 rotate-90" /></button>
							<button type="button" onclick={() => step('out', 1)} aria-label="Check-out day later" class="inline-flex h-10 w-10 items-center justify-center text-gold-deep hover:bg-mist"><Icon name="chevron-down" class="h-4 w-4 -rotate-90" /></button>
						</p>
					</div>
					<div class="px-4 py-4 text-center">
						<p class="text-[10px] font-semibold tracking-[0.22em] text-ink/75 uppercase">Guests</p>
						<p class="mt-1 text-[13px] text-ink/80">Adults</p>
						<p class="font-serif text-4xl leading-none text-ink">{String(guests).padStart(2, '0')}</p>
						<p class="mt-2 flex items-center justify-center gap-3">
							<button type="button" onclick={() => step('guests', -1)} aria-label="Fewer guests" class="inline-flex h-10 w-10 items-center justify-center text-gold-deep hover:bg-mist"><Icon name="chevron-down" class="h-4 w-4 rotate-90" /></button>
							<button type="button" onclick={() => step('guests', 1)} aria-label="More guests" class="inline-flex h-10 w-10 items-center justify-center text-gold-deep hover:bg-mist"><Icon name="chevron-down" class="h-4 w-4 -rotate-90" /></button>
						</p>
					</div>
				</div>
				<div class="flex items-center justify-between gap-3 px-5 py-4">
					<span class="inline-flex items-center gap-2 text-[13px] text-ink/80">
						<Icon name="phone" class="h-4 w-4 text-gold-deep" />
						{booking.assistanceLabel}
					</span>
					<a href={site.contact.phoneHref} class="text-[13px] font-medium text-gold-deep underline decoration-gold/50 underline-offset-4 hover:text-ink">{site.contact.phone}</a>
				</div>
				<button type="submit" class="w-full bg-ink px-6 py-4 text-[12px] font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-gold-deep">
					{booking.buttonLabel}
				</button>
				{#if status}
					<p class="px-5 py-4 text-sm leading-relaxed {nights < 1 ? 'font-medium text-red-800' : 'text-ink/85'}" role="status">
						{status}
						{#if nights >= 1}
							<a href="/book" class="font-semibold text-gold-deep underline underline-offset-4">Go to booking →</a>
						{/if}
					</p>
				{/if}
			</form>
		</Reveal>

		<Reveal delay={0.1}>
			<p class="border-l-2 border-gold pl-5 font-serif text-xl leading-relaxed text-ink italic sm:text-2xl">
				{intro.text}
			</p>
			<ul class="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
				{#each intro.extras as extra (extra)}
					<li class="flex items-start gap-2.5 text-[15px] text-ink/85">
						<Icon name="check" class="mt-1 h-4 w-4 shrink-0 text-gold-deep" />
						{extra}
					</li>
				{/each}
			</ul>
			<p class="mt-7 flex flex-wrap gap-3">
				<a href="/book" class="bg-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">Book Your Stay</a>
				<a href="/rooms" class="border border-ink/25 px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:border-gold-deep hover:text-gold-deep">Explore Rooms</a>
			</p>
		</Reveal>
	</div>
</section>
