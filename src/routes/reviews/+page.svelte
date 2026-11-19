<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import { testimonials } from '#lib/site.ts';
</script>

<svelte:head>
	<title>Guest Reviews — The Happy Inn</title>
	<meta name="description" content="Recent guest reviews of The Happy Inn from Google, Tripadvisor and Booking.com — rated 4.9 out of 5 across 1,284 stays." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Social Proof"
		title="Guest Reviews"
		intro="Real words from recent stays — the breakfast, the spa, the garden, and the welcome at the door."
		stem="/images/room-queen"
		alt="A much-loved room at The Happy Inn"
	/>
	<Testimonials limit={testimonials.length} heading={false} />
	<section class="mx-auto max-w-3xl px-4 pb-16 text-center" aria-label="Review summary">
		<p class="leading-relaxed text-ink/80">
			Reviews shown are a representative selection from Google Reviews, Tripadvisor and Booking.com.
			Stayed with us recently? We read and reply to every review — thank you for helping the next guest choose the inn with confidence.
		</p>
		<a href="/book" class="mt-7 inline-block bg-gold-deep px-8 py-4 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">Book Your Stay</a>
	</section>
</main>
