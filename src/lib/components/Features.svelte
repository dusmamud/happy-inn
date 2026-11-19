<script lang="ts">
	import Picture from '#lib/components/Picture.svelte';
	import { features } from '#lib/site.ts';
</script>

<section id="specials" class="mx-auto max-w-6xl scroll-mt-28 px-4 py-14 lg:py-20">
	<div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
		{#each features as feature (feature.title)}
			<article id={feature.title === 'Play Outdoors' ? 'area' : undefined} class="scroll-mt-28">
				<div class="[&_img]:aspect-[3/2] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
					<Picture
						stem={feature.image.stem}
						alt={feature.image.alt}
						width={800}
						height={533}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
				</div>
				<h3 class="mt-5 font-serif text-[22px] font-medium text-ink">{feature.title}</h3>
				<p class="mt-2 max-w-md text-sm leading-relaxed text-ink/65">{feature.description}</p>
			</article>
		{/each}
	</div>
</section>
