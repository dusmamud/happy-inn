<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { loyalty, offers, perks } from '#lib/site.ts';
</script>

<svelte:head>
	<title>Specials & Packages — The Happy Inn</title>
	<meta name="description" content="Seasonal specials and packages at The Happy Inn — spa escapes, stay-3-pay-2, romantic getaways and advance purchase savings. Book direct for the best rate." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Save When You Book Direct"
		title="Specials & Packages"
		intro="Offers you will only find here — never on the big booking sites."
		stem="/images/spa"
		alt="Guest enjoying a spa treatment at The Happy Inn"
	/>
	<section class="mx-auto max-w-6xl px-4 py-14 lg:py-16" aria-label="All offers">
		<div class="grid gap-6 md:grid-cols-2">
			{#each offers as offer, i (offer.slug)}
				<Reveal delay={(i % 2) * 0.08}>
					<article class="flex h-full flex-col bg-white shadow-md">
						<div class="relative [&_img]:h-56 [&_img]:w-full [&_img]:object-cover [&_picture]:block">
							<Picture stem={offer.image.stem} alt={offer.image.alt} width={1000} height={700} sizes="(max-width: 768px) 100vw, 520px" />
							<span class="absolute top-4 left-4 bg-gold-deep px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-white uppercase">{offer.badge}</span>
						</div>
						<div class="flex flex-1 flex-col p-7">
							<h2 class="font-serif text-2xl font-medium text-ink">{offer.name}</h2>
							<p class="mt-3 flex-1 leading-relaxed text-ink/80">{offer.description}</p>
							<ul class="mt-4 grid gap-1.5 text-sm text-ink/85 sm:grid-cols-2">
								{#each offer.includes as item (item)}
									<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /> {item}</li>
								{/each}
							</ul>
							<p class="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-linen pt-5">
								<span class="font-serif text-xl text-gold-deep">{offer.price}</span>
								<a href="/book" class="bg-gold-deep px-6 py-3 text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">Book This Offer</a>
							</p>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>

		<div class="mt-12 bg-coal px-7 py-10 text-white">
			<h2 class="text-center font-serif text-3xl font-medium">{loyalty.title}</h2>
			<p class="mx-auto mt-3 max-w-2xl text-center text-[15px] leading-relaxed text-white/85">{loyalty.text}</p>
			<div class="mt-8 grid gap-4 sm:grid-cols-3">
				{#each loyalty.tiers as tier (tier.name)}
					<div class="border border-white/20 p-5">
						<h3 class="font-serif text-xl text-gold-soft">{tier.name}</h3>
						<p class="mt-0.5 text-[13px] tracking-wide text-white/75 uppercase">{tier.stays}</p>
						<ul class="mt-3 space-y-2 text-sm leading-relaxed text-white/90">
							{#each tier.perks as p (p)}
								<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" /> {p}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
			<p class="mt-6 text-center text-sm text-white/80">Joining is automatic with your first direct booking — use code <strong class="text-gold-soft">HAPPY10</strong> for 10% off that first stay.</p>
		</div>

		<div class="mt-12 bg-mist px-7 py-9">
			<h2 class="text-center font-serif text-3xl font-medium text-ink">Always Included When You Book Direct</h2>
			<div class="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each perks as perk (perk.title)}
					<p class="flex gap-3">
						<Icon name="check" class="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
						<span><strong class="block font-serif text-lg font-medium text-ink">{perk.title}</strong><span class="mt-0.5 block text-sm leading-relaxed text-ink/80">{perk.text}</span></span>
					</p>
				{/each}
			</div>
		</div>
	</section>
</main>
