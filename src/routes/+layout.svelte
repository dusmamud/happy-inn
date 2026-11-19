<script lang="ts">
	import '../app.css';
	import { site } from '#lib/site.ts';

	let { children } = $props();

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'LodgingBusiness',
		name: site.name,
		description: site.description,
		url: site.url,
		email: site.contact.email,
		telephone: site.contact.phone,
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '4319 Roosevelt Street',
			addressLocality: 'San Francisco',
			addressRegion: 'CA',
			postalCode: '94143',
			addressCountry: 'US'
		}
	};
</script>

<svelte:head>
	<title>{site.name} — {site.tagline}</title>
	<meta name="description" content={site.description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.name} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={site.url} />
	<meta property="og:locale" content="en_US" />
	<link rel="preload" as="font" type="font/woff2" href="/fonts/playfair-500.woff2" crossorigin="anonymous" />
	<link rel="preload" as="font" type="font/woff2" href="/fonts/inter-400.woff2" crossorigin="anonymous" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

{@render children()}
