<script lang="ts">
	import BookingForm from '#lib/components/BookingForm.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
</script>

<svelte:head>
	<title>Book Your Stay — The Happy Inn</title>
	<meta name="description" content="Book direct at The Happy Inn — full price shown before you confirm, free cancellation up to 48 hours before arrival, breakfast included." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Reserve Direct & Save"
		title="Book Your Stay"
		intro="The total price is shown before you confirm — no hidden fees, and free cancellation up to 48 hours before arrival."
		stem="/images/room-queen"
		alt="Queen Suite Deluxe ready for arrival"
	/>
	<section class="mx-auto max-w-6xl px-4 py-12 lg:py-14" aria-label="Booking form">
		<BookingForm />
	</section>
</main>
