<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import { booking, hero, intro, site } from '#lib/site.ts';

	let slide = $state(0);
	const total = hero.slides.length;
	const prev = () => (slide = (slide - 1 + total) % total);
	const next = () => (slide = (slide + 1) % total);

	let checkInDay = $state(booking.checkIn.day);
	let checkOutDay = $state(booking.checkOut.day);
	let guests = $state(booking.guests);
	let checked = $state(false);

	const clampDay = (d: number) => Math.min(31, Math.max(1, d));
	function step(kind: 'in' | 'out' | 'guests', dir: 1 | -1) {
		checked = false;
		if (kind === 'in') checkInDay = clampDay(checkInDay + dir);
		if (kind === 'out') checkOutDay = clampDay(checkOutDay + dir);
		if (kind === 'guests') guests = Math.min(10, Math.max(1, guests + dir));
	}
	const pad = (n: number) => String(n).padStart(2, '0');
</script>

<section id="home" class="relative">
	<div class="relative h-[380px] overflow-hidden sm:h-[500px] lg:h-[580px]">
		{#key slide}
			<div class="hero-fade absolute inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_picture]:block [&_picture]:h-full">
				<Picture
					stem={hero.slides[slide].stem}
					alt={hero.slides[slide].alt}
					eager
					width={1600}
					height={900}
					sizes="100vw"
				/>
			</div>
		{/key}

		<button
			type="button"
			onclick={prev}
			aria-label="Previous photo"
			class="absolute top-1/2 left-0 z-10 inline-flex h-12 w-10 -translate-y-1/2 items-center justify-center bg-black/45 text-white transition-colors hover:bg-black/65"
		>
			<Icon name="chevron-left" class="h-5 w-5" />
		</button>
		<button
			type="button"
			onclick={next}
			aria-label="Next photo"
			class="absolute top-1/2 right-0 z-10 inline-flex h-12 w-10 -translate-y-1/2 items-center justify-center bg-black/45 text-white transition-colors hover:bg-black/65"
		>
			<Icon name="chevron-right" class="h-5 w-5" />
		</button>

		<a
			href="#booking"
			class="absolute right-0 bottom-40 z-10 hidden items-center gap-2 bg-gold-deep px-2 py-4 text-[11px] font-semibold tracking-[0.3em] text-white uppercase [writing-mode:vertical-rl] lg:inline-flex"
		>
			<Icon name="calendar" class="h-4 w-4 rotate-90" /> Reservations
		</a>

		<a
			href="#booking"
			aria-label="Scroll down to booking"
			class="absolute bottom-24 left-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:bg-black/25 sm:inline-flex lg:bottom-28"
		>
			<Icon name="chevron-down" class="h-5 w-5" />
		</a>
	</div>

	<div class="relative z-20 mx-auto -mt-20 max-w-6xl px-4 sm:-mt-16">
		<div class="grid shadow-lg sm:grid-cols-3 lg:ml-auto lg:max-w-3xl">
			{#each hero.offers as offer (offer.label)}
				<a
					href={offer.href}
					class="flex items-center justify-center gap-2 px-4 py-4 text-center text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors {offer.style ===
					'light'
						? 'bg-white text-ink hover:bg-mist'
						: 'bg-gold-deep text-white hover:bg-ink'}"
				>
					{#if offer.style === 'light'}<Icon name="calendar" class="h-4 w-4 text-gold-deep" />{/if}
					{offer.label}
					{#if offer.badge}
						<span class="bg-ink px-1.5 py-0.5 text-[10px] tracking-normal text-white">{offer.badge}</span>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</section>

<section id="booking" class="mx-auto max-w-6xl scroll-mt-28 px-4 py-12 lg:py-16">
	<div class="grid items-start gap-10 lg:grid-cols-2">
		<div>
			<div class="grid max-w-xl grid-cols-3 gap-3">
				{#each [{ kind: 'in' as const, label: 'Check In', month: booking.checkIn.month, day: checkInDay, icon: 'clock' }, { kind: 'out' as const, label: 'Check Out', month: booking.checkOut.month, day: checkOutDay, icon: 'clock' }, { kind: 'guests' as const, label: 'Guests', month: '', day: guests, icon: 'users' }] as cell (cell.kind)}
					<div class="relative bg-mist px-3 py-4 text-center shadow-sm">
						<p class="text-[10px] font-semibold tracking-[0.2em] text-ink/70 uppercase">{cell.label}</p>
						{#if cell.month}<p class="mt-2 font-serif text-sm text-gold-deep italic">{cell.month}</p>{/if}
						<p class="font-serif text-5xl font-light {cell.month ? '' : 'mt-4'}">{pad(cell.day)}</p>
						<Icon name={cell.icon} class="mx-auto mt-2 h-4 w-4 text-ink/40" />
						<div class="absolute top-1/2 right-1.5 flex -translate-y-1/2 flex-col">
							<button type="button" class="p-1 text-ink/50 hover:text-gold-deep" aria-label="Increase {cell.label.toLowerCase()}" onclick={() => step(cell.kind, 1)}>
								<Icon name="chevron-up" class="h-3.5 w-3.5" />
							</button>
							<button type="button" class="p-1 text-ink/50 hover:text-gold-deep" aria-label="Decrease {cell.label.toLowerCase()}" onclick={() => step(cell.kind, -1)}>
								<Icon name="chevron-down" class="h-3.5 w-3.5" />
							</button>
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
				<div>
					<p class="text-xs text-ink/55">{booking.assistanceLabel}</p>
					<a href={site.contact.phoneHref} class="font-serif text-xl text-ink hover:text-gold-deep">{site.contact.phone}</a>
				</div>
				<button
					type="button"
					onclick={() => (checked = true)}
					class="bg-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink"
				>
					{booking.buttonLabel}
				</button>
			</div>
			{#if checked}
				<p role="status" class="mt-4 max-w-xl rounded-lg bg-mist px-4 py-3 text-sm text-ink">
					Good news — rooms are available for {booking.checkIn.month} {checkInDay} – {booking.checkOut.month} {checkOutDay} for {guests}
					{guests === 1 ? 'guest' : 'guests'}. This is a mock check, nothing was booked.
				</p>
			{/if}
		</div>

		<div>
			<p class="leading-relaxed text-ink/85">
				<strong class="font-serif text-lg font-semibold">The Happy Inn is</strong>
				{intro.text.replace('The Happy Inn is', '').trim()}
			</p>
			<ul class="mt-5 space-y-2.5">
				{#each intro.extras as extra (extra)}
					<li class="flex items-start gap-2.5 text-sm text-ink/80">
						<Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
						{extra}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
