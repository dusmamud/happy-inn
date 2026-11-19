<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
</script>

<svelte:head>
	<title>Terms of Stay — The Happy Inn</title>
	<meta name="description" content="Terms of stay at The Happy Inn — check-in, cancellation, payment, pets and house rules (mock text for design approval)." />
</svelte:head>

<main id="main">
	<PageHero eyebrow="The Small Print, Plainly" title="Terms of Stay" stem="/images/room-treetop" alt="The Treetop Suite" />
	<section class="mx-auto max-w-3xl px-4 py-12 lg:py-16" aria-label="Terms of stay">
		<p class="text-sm text-ink/75">Mock terms for design approval — the client’s final legal text replaces this before launch.</p>
		<h2 class="mt-8 font-serif text-2xl font-medium text-ink">Reservations & Payment</h2>
		<p class="mt-3 leading-relaxed text-ink/85">A valid card guarantees your room for late arrival. No charge is taken before arrival on flexible rates; Advance Purchase rates are charged at booking and can be date-changed once, free.</p>
		<h2 class="mt-8 font-serif text-2xl font-medium text-ink">Cancellation</h2>
		<p class="mt-3 leading-relaxed text-ink/85">Free cancellation until 48 hours before your arrival day. Later cancellations and no-shows are charged the first night.</p>
		<h2 class="mt-8 font-serif text-2xl font-medium text-ink">Check-In & Check-Out</h2>
		<p class="mt-3 leading-relaxed text-ink/85">Check-in from 3:00 PM (1:00 PM for direct bookings when the room is ready), check-out until 11:00 AM. Photo ID is requested at check-in.</p>
		<h2 class="mt-8 font-serif text-2xl font-medium text-ink">House Rules</h2>
		<p class="mt-3 leading-relaxed text-ink/85">The inn and gardens are smoke-free. Dogs are welcome in designated rooms. Quiet hours in the garden run from 10:00 PM so every guest sleeps well.</p>
	</section>
</main>
