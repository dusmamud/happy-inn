<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Footer from '#lib/components/Footer.svelte';
	import Header from '#lib/components/Header.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { roomFromPrice, site } from '#lib/site.ts';

	let { children } = $props();

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'LodgingBusiness',
		name: site.name,
		description: site.description,
		url: site.url,
		telephone: site.contact.phone,
		email: site.contact.email,
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '4319 Roosevelt Street',
			addressLocality: 'San Francisco',
			addressRegion: 'CA',
			postalCode: '94143',
			addressCountry: 'US'
		},
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: site.rating.score,
			reviewCount: site.rating.count
		}
	};
	const jsonLdText = JSON.stringify(jsonLd).replace(/</g, '\\u003c');
	const showBookBar = $derived(!page.url.pathname.startsWith('/book'));
</script>

<svelte:head>
	<title>{site.name} — {site.tagline}</title>
	<meta name="description" content={site.description} />
	<link rel="canonical" href={site.url + page.url.pathname} />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content="{site.name} — {site.tagline}" />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={site.url + page.url.pathname} />
	<meta property="og:image" content="{site.url}/images/hero-1200.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{site.name} — {site.tagline}" />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content="{site.url}/images/hero-1200.jpg" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static JSON-LD built from site data above -->
	{@html `<script type="application/ld+json">${jsonLdText}<\/script>`}
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
>
	Skip to content
</a>

<Header />

{@render children()}

<Footer />

{#if showBookBar}
	<div class="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-linen bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] backdrop-blur lg:hidden" style="padding-bottom: calc(0.75rem + env(safe-area-inset-bottom))">
		<p class="text-sm text-ink">
			<span class="text-ink/75">Rooms from</span>
			<strong class="font-serif text-lg text-gold-deep">${roomFromPrice}</strong><span class="text-ink/75">/night</span>
		</p>
		<a href="/book" class="inline-flex items-center gap-2 bg-gold-deep px-6 py-3 text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
			<Icon name="check" class="h-4 w-4" /> Book Now
		</a>
	</div>
	<div class="h-16 lg:hidden" aria-hidden="true"></div>
{/if}
