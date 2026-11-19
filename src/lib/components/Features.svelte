<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { features } from '#lib/site.ts';
</script>

<section id="specials" aria-label="Experiences at the inn" class="mx-auto max-w-6xl scroll-mt-28 px-4 py-14 lg:py-20">
	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each features as feature, i (feature.title)}
			<Reveal delay={(i % 3) * 0.07}>
				<article class="group bg-white shadow-sm transition-shadow hover:shadow-lg">
					<a href={feature.href} class="block">
						<span class="block overflow-hidden [&_img]:h-52 [&_img]:w-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-105 [&_picture]:block">
							<Picture stem={feature.image.stem} alt={feature.image.alt} width={800} height={600} sizes="(max-width: 640px) 100vw, 360px" />
						</span>
						<span class="block p-6">
							<span class="flex items-center justify-between gap-3">
								<h3 class="font-serif text-[22px] font-medium text-ink transition-colors group-hover:text-gold-deep">{feature.title}</h3>
								<Icon name="arrow-right" class="h-5 w-5 shrink-0 text-gold-deep transition-transform group-hover:translate-x-1" />
							</span>
							<span class="mt-2 block leading-relaxed text-ink/80">{feature.description}</span>
						</span>
					</a>
				</article>
			</Reveal>
		{/each}
	</div>
</section>
