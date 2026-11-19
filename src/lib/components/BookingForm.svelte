<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { perks, rooms, spaTreatments } from '#lib/site.ts';

	const extras = [
		{ id: 'facial', label: 'Signature Facial (per guest)', price: 95 },
		{ id: 'massage', label: 'Deep Tissue Massage (per guest)', price: 85 },
		{ id: 'wine', label: 'Sparkling Wine On Arrival', price: 45 },
		{ id: 'late', label: 'Guaranteed Late Check-Out (1 PM)', price: 30 }
	];

	// The ?room= preselect is read on the client after mount — searchParams
	// are unavailable while the page is prerendered.
	let roomSlug = $state(rooms[0].slug);
	let roomParamApplied = false;
	$effect(() => {
		if (roomParamApplied) return;
		roomParamApplied = true;
		const wanted = new URLSearchParams(window.location.search).get('room');
		if (wanted && rooms.some((r) => r.slug === wanted)) roomSlug = wanted;
	});
	let checkIn = $state('2027-03-08');
	let checkOut = $state('2027-03-09');
	let guests = $state(2);
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let requests = $state('');
	let chosen = $state<string[]>([]);
	let errors = $state<Record<string, string>>({});
	let confirmed = $state('');

	const room = $derived(rooms.find((r) => r.slug === roomSlug) ?? rooms[0]);
	const nights = $derived.by(() => {
		const diff = (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86_400_000;
		return Number.isFinite(diff) ? Math.round(diff) : 0;
	});
	const extrasTotal = $derived(
		extras.filter((e) => chosen.includes(e.id)).reduce((sum, e) => sum + e.price * (e.id === 'facial' || e.id === 'massage' ? guests : 1), 0)
	);
	const subtotal = $derived(Math.max(nights, 0) * room.price + extrasTotal);
	const tax = $derived(Math.round(subtotal * 0.12));
	const total = $derived(subtotal + tax);
	const money = (n: number) => `$${n.toLocaleString('en-US')}`;

	function submit(event: SubmitEvent) {
		event.preventDefault();
		const next: Record<string, string> = {};
		if (!name.trim()) next.name = 'Please tell us your full name.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email address.';
		if (nights < 1) next.dates = 'Check-out must be at least one night after check-in.';
		if (guests > room.occupancy) next.guests = `The ${room.name} sleeps ${room.occupancy}. Choose another room for more guests.`;
		errors = next;
		if (Object.keys(next).length > 0) return;
		confirmed =
			'HI-' + name.trim().split(/\s+/).map((w) => w[0]).join('').toUpperCase() + '-' + checkIn.replaceAll('-', '').slice(2);
	}
</script>

{#if confirmed}
	<div class="mx-auto max-w-2xl border border-gold/50 bg-gold/10 px-6 py-10 text-center" role="status">
		<Icon name="check" class="mx-auto h-10 w-10 text-gold-deep" />
		<h2 class="mt-4 font-serif text-3xl font-medium text-ink">Thank You, {name.split(' ')[0]} — You’re Booked (Mock)</h2>
		<p class="mt-3 leading-relaxed text-ink/80">
			Your reference is <strong class="text-ink">{confirmed}</strong>. {nights} night{nights === 1 ? '' : 's'} in the
			{room.name} for {guests} guest{guests === 1 ? '' : 's'} — total {money(total)} including taxes.
			A confirmation would normally be emailed to {email}.
		</p>
		<p class="mt-3 text-sm text-ink/75">Free cancellation until 48 hours before arrival. This demo stores nothing — no payment was taken.</p>
		<a href="/rooms" class="mt-6 inline-block bg-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">Browse More Rooms</a>
	</div>
{:else}
	<form onsubmit={submit} novalidate class="grid gap-10 lg:grid-cols-[1fr_360px]">
		<div class="space-y-6">
			<div>
				<label for="bk-room" class="text-sm font-semibold text-ink">Room</label>
				<select id="bk-room" bind:value={roomSlug} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none">
					{#each rooms as r (r.slug)}
						<option value={r.slug}>{r.name} — ${r.price}/night · sleeps {r.occupancy}</option>
					{/each}
				</select>
			</div>
			<div class="grid gap-6 sm:grid-cols-3">
				<div>
					<label for="bk-in" class="text-sm font-semibold text-ink">Check-In</label>
					<input id="bk-in" type="date" bind:value={checkIn} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none" />
				</div>
				<div>
					<label for="bk-out" class="text-sm font-semibold text-ink">Check-Out</label>
					<input id="bk-out" type="date" bind:value={checkOut} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none" />
				</div>
				<div>
					<label for="bk-guests" class="text-sm font-semibold text-ink">Guests</label>
					<input id="bk-guests" type="number" min="1" max="6" bind:value={guests} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none" />
				</div>
			</div>
			{#if errors.dates}<p class="text-sm font-medium text-red-800" role="alert">{errors.dates}</p>{/if}
			{#if errors.guests}<p class="text-sm font-medium text-red-800" role="alert">{errors.guests}</p>{/if}

			<fieldset>
				<legend class="text-sm font-semibold text-ink">Enhance Your Stay</legend>
				<div class="mt-2 grid gap-2 sm:grid-cols-2">
					{#each extras as extra (extra.id)}
						<label class="flex cursor-pointer items-center gap-3 border border-linen bg-white px-4 py-3 text-sm text-ink/85 has-checked:border-gold-deep has-checked:bg-gold/10">
							<input type="checkbox" bind:group={chosen} value={extra.id} class="h-4 w-4 accent-[#7d5f27]" />
							<span class="flex-1">{extra.label}</span>
							<span class="font-semibold text-ink">+${extra.price}</span>
						</label>
					{/each}
				</div>
				<p class="mt-2 text-xs text-ink/75">Spa extras are priced per guest. See all {spaTreatments.length} treatments on the <a class="underline" href="/spa">Spa page</a>.</p>
			</fieldset>

			<div class="grid gap-6 sm:grid-cols-2">
				<div>
					<label for="bk-name" class="text-sm font-semibold text-ink">Full Name</label>
					<input id="bk-name" type="text" autocomplete="name" bind:value={name} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none" />
					{#if errors.name}<p class="mt-1 text-sm font-medium text-red-800">{errors.name}</p>{/if}
				</div>
				<div>
					<label for="bk-email" class="text-sm font-semibold text-ink">Email</label>
					<input id="bk-email" type="email" autocomplete="email" bind:value={email} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none" />
					{#if errors.email}<p class="mt-1 text-sm font-medium text-red-800">{errors.email}</p>{/if}
				</div>
				<div>
					<label for="bk-phone" class="text-sm font-semibold text-ink">Phone <span class="font-normal text-ink/75">(optional)</span></label>
					<input id="bk-phone" type="tel" autocomplete="tel" bind:value={phone} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none" />
				</div>
				<div>
					<label for="bk-requests" class="text-sm font-semibold text-ink">Special Requests <span class="font-normal text-ink/75">(optional)</span></label>
					<input id="bk-requests" type="text" bind:value={requests} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none" />
				</div>
			</div>
		</div>

		<aside class="h-fit bg-coal p-6 text-white lg:sticky lg:top-32" aria-label="Price summary">
			<h2 class="font-serif text-2xl font-medium">Your Stay</h2>
			<dl class="mt-5 space-y-3 text-sm">
				<div class="flex justify-between gap-4"><dt class="text-white/85">Room</dt><dd class="text-right font-medium">{room.name}</dd></div>
				<div class="flex justify-between gap-4"><dt class="text-white/85">Nights</dt><dd class="font-medium">{Math.max(nights, 0)}</dd></div>
				<div class="flex justify-between gap-4"><dt class="text-white/85">{money(room.price)} × {Math.max(nights, 0)} nights</dt><dd class="font-medium">{money(Math.max(nights, 0) * room.price)}</dd></div>
				{#if extrasTotal > 0}<div class="flex justify-between gap-4"><dt class="text-white/85">Extras</dt><dd class="font-medium">{money(extrasTotal)}</dd></div>{/if}
				<div class="flex justify-between gap-4"><dt class="text-white/85">Taxes & fees (12%)</dt><dd class="font-medium">{money(tax)}</dd></div>
				<div class="flex justify-between gap-4 border-t border-white/20 pt-3 text-base"><dt class="font-semibold">Total</dt><dd class="font-serif text-xl text-gold-soft">{money(total)}</dd></div>
			</dl>
			<p class="mt-4 text-xs leading-relaxed text-white/85">Total shown before you book — no hidden fees. Free cancellation up to 48 hours before arrival. Nothing is charged today in this demo.</p>
			<button type="submit" class="mt-5 w-full bg-gold-deep px-6 py-4 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-gold">
				Confirm Booking
			</button>
			<ul class="mt-5 space-y-2 text-xs text-white/85">
				{#each perks.slice(0, 3) as perk (perk.title)}
					<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-soft" /> {perk.title}</li>
				{/each}
			</ul>
		</aside>
	</form>
{/if}
