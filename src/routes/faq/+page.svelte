<script lang="ts">
	import FaqList from '#lib/components/FaqList.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { site } from '#lib/site.ts';

	const policies = [
		{ title: 'Cancellation', text: 'Free cancellation up to 48 hours before arrival on flexible direct rates. No-shows are charged the first night.' },
		{ title: 'Children', text: 'Children of all ages are welcome. Cots are free — just tell us when you book so the room is ready.' },
		{ title: 'Pets', text: 'Dogs welcome in the Garden Room and Royal Poinciana, $25 per stay. Bowls, treats and towels provided.' },
		{ title: 'Smoking', text: 'The inn and gardens are smoke-free. A covered smoking bench sits by the garden gate.' }
	];
</script>

<svelte:head>
	<title>FAQ & Policies — The Happy Inn</title>
	<meta name="description" content="Check-in times, cancellation, breakfast, parking, pets, children and accessibility at The Happy Inn — every question answered before you book." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Before You Book"
		title="Questions & Policies"
		intro="Everything guests ask us most — and the small print, written plainly."
		stem="/images/room-garden"
		alt="The accessible Garden Room at The Happy Inn"
	/>
	<section class="mx-auto max-w-6xl px-4 py-14 lg:py-16" aria-label="Frequently asked questions">
		<FaqList />
		<div class="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each policies as policy (policy.title)}
				<article class="bg-mist p-6">
					<h3 class="font-serif text-xl font-medium text-ink">{policy.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink/80">{policy.text}</p>
				</article>
			{/each}
		</div>
		<p class="mt-12 text-center text-ink/80">
			Still unsure? Call us on
			<a href={site.contact.phoneHref} class="font-semibold text-gold-deep underline underline-offset-4">{site.contact.phone}</a>
			or <a href="/contact" class="font-semibold text-gold-deep underline underline-offset-4">send a message</a> — a human answers, every time.
			<Icon name="phone" class="ml-1 inline h-4 w-4 text-gold-deep" />
		</p>
	</section>
</main>
