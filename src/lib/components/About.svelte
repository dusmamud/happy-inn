<script lang="ts">
	import Picture from '#lib/components/Picture.svelte';
	import { about } from '#lib/site.ts';

	let active = $state(about.tabs[0].id);
	const tab = $derived(about.tabs.find((t) => t.id === active) ?? about.tabs[0]);
</script>

<section id="about" class="mx-auto max-w-6xl scroll-mt-28 px-4 py-14 lg:py-20">
	<p class="text-center text-[11px] font-semibold tracking-[0.35em] text-gold-deep uppercase">{about.eyebrow}</p>
	<h2 class="mt-2 text-center font-serif text-4xl font-medium text-ink sm:text-5xl">{about.title}</h2>

	<div role="tablist" aria-label="About The Happy Inn" class="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-2">
		{#each about.tabs as t (t.id)}
			<button
				type="button"
				role="tab"
				aria-selected={active === t.id}
				onclick={() => (active = t.id)}
				class="pb-2 text-[12px] font-semibold tracking-[0.2em] uppercase transition-colors {active === t.id
					? 'border-b-2 border-gold-deep text-gold-deep'
					: 'border-b-2 border-transparent text-ink/60 hover:text-ink'}"
			>
				{t.label}
			</button>
		{/each}
	</div>

	<div class="mt-12 grid items-start gap-12 lg:grid-cols-2">
		<div role="tabpanel">
			<h3 class="font-serif text-3xl font-medium text-ink sm:text-4xl">{tab.heading}</h3>
			{#each tab.paragraphs as paragraph, i (paragraph.slice(0, 24))}
				{#if i === 0}
					<p class="mt-6 leading-[1.9] text-ink/75">
						<span class="float-left mr-3 font-serif text-[64px] leading-[0.85] text-ink">{paragraph.charAt(0)}</span>{paragraph.slice(1)}
					</p>
				{:else}
					<p class="mt-5 leading-[1.9] text-ink/75">{paragraph}</p>
				{/if}
			{/each}
			<a
				href={about.cta.href}
				class="mt-8 inline-block bg-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink"
			>
				{about.cta.label}
			</a>
		</div>

		<div class="relative pb-14 sm:pb-20">
			<div class="[&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
				<Picture stem={about.images.room.stem} alt={about.images.room.alt} width={1200} height={900} sizes="(max-width: 1024px) 100vw, 50vw" />
			</div>
			<div class="absolute right-0 -bottom-0 w-3/5 border-8 border-white shadow-xl [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
				<Picture stem={about.images.pool.stem} alt={about.images.pool.alt} width={800} height={600} sizes="(max-width: 1024px) 60vw, 30vw" />
			</div>
		</div>
	</div>
</section>
