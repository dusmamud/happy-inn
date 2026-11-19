<script lang="ts">
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { about } from '#lib/site.ts';

	let active = $state(about.tabs[0].id);
	const tab = $derived(about.tabs.find((t) => t.id === active) ?? about.tabs[0]);
</script>

<section id="about" aria-label="About the inn" class="mx-auto max-w-6xl scroll-mt-28 px-4 py-14 lg:py-20">
	<div class="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
		<Reveal>
			<p class="text-[11px] font-semibold tracking-[0.35em] text-gold-deep uppercase">{about.eyebrow}</p>
			<h2 class="mt-2 font-serif text-4xl font-medium text-ink sm:text-5xl">{about.title}</h2>

			<div class="mt-7 flex flex-wrap gap-x-7 gap-y-2 border-b border-linen" role="tablist" aria-label="About the inn">
				{#each about.tabs as item (item.id)}
					<button
						type="button"
						role="tab"
						aria-selected={active === item.id}
						onclick={() => (active = item.id)}
						class="border-b-2 pb-2.5 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors {active === item.id
							? 'border-gold-deep text-gold-deep'
							: 'border-transparent text-ink/80 hover:text-ink'}"
					>
						{item.label}
					</button>
				{/each}
			</div>

			<div role="tabpanel" class="pt-6">
				<h3 class="font-serif text-2xl font-medium text-ink">{tab.heading}</h3>
				{#each tab.paragraphs as paragraph, i (paragraph.slice(0, 24))}
					<p class="mt-4 leading-relaxed text-ink/80">
						{#if i === 0}
							<span class="float-left mr-3 font-serif text-6xl leading-[0.85] text-gold-deep">{paragraph.charAt(0)}</span>{paragraph.slice(1)}
						{:else}
							{paragraph}
						{/if}
					</p>
				{/each}
			</div>

			<a
				href={about.cta.href}
				class="mt-8 inline-block border border-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-gold-deep uppercase transition-colors hover:bg-gold-deep hover:text-white"
			>
				{about.cta.label}
			</a>
		</Reveal>

		<Reveal delay={0.1}>
			<div class="grid grid-cols-[1fr_0.72fr] items-start gap-4">
				<div class="overflow-hidden shadow-md [&_img]:aspect-[3/4] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
					<Picture stem={about.images.room.stem} alt={about.images.room.alt} width={800} height={1000} sizes="(max-width: 1024px) 60vw, 340px" />
				</div>
				<div class="mt-10 overflow-hidden shadow-md [&_img]:aspect-[3/4] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
					<Picture stem={about.images.pool.stem} alt={about.images.pool.alt} width={800} height={1000} sizes="(max-width: 1024px) 40vw, 260px" />
				</div>
			</div>
		</Reveal>
	</div>
</section>
