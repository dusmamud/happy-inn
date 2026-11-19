<script lang="ts">
	import About from '#lib/components/About.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import { about } from '#lib/site.ts';
</script>

<svelte:head>
	<title>About The Inn — The Happy Inn</title>
	<meta name="description" content="The story of The Happy Inn: an 1880’s conch cottage and 1904 Queen Anne Victorian mansion in Staunton, Virginia, revived by hosts Dean and Paul." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Our Story"
		title="About The Inn"
		intro="Two historic houses, one garden, and a simple idea — a stay that feels like being welcomed home."
		stem="/images/about-pool"
		alt="Boardwalk through the palms at The Happy Inn"
	/>
	<About />
	<Stats />
	<section class="mx-auto max-w-6xl px-4 py-14 lg:py-16" aria-label="Meet your hosts">
		<p class="text-center text-[11px] font-semibold tracking-[0.35em] text-gold-deep uppercase">The People</p>
		<h2 class="mt-2 text-center font-serif text-4xl font-medium text-ink">Meet Your Hosts</h2>
		<div class="mt-10 grid gap-6 md:grid-cols-2">
			{#each about.hosts as host, i (host.name)}
				<Reveal delay={i * 0.08}>
					<article class="h-full bg-mist p-8">
						<h3 class="font-serif text-2xl font-medium text-ink">{host.name}</h3>
						<p class="mt-1 text-[11px] font-semibold tracking-[0.25em] text-gold-deep uppercase">{host.role}</p>
						<p class="mt-4 leading-relaxed text-ink/85">{host.text}</p>
					</article>
				</Reveal>
			{/each}
		</div>
		<div class="mt-10 grid gap-4 sm:grid-cols-2">
			<div class="overflow-hidden [&_img]:aspect-[16/10] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
				<Picture stem="/images/room-garden" alt="The Garden Room inside the historic cottage" width={1000} height={700} sizes="(max-width: 640px) 100vw, 520px" />
			</div>
			<div class="overflow-hidden [&_img]:aspect-[16/10] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
				<Picture stem="/images/breakfast" alt="Breakfast on the veranda of the mansion" width={1000} height={700} sizes="(max-width: 640px) 100vw, 520px" />
			</div>
		</div>
		<p class="mt-10 text-center">
			<a href="/book" class="inline-block bg-gold-deep px-8 py-4 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">Come And Stay</a>
		</p>
	</section>
</main>
