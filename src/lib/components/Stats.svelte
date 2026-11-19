<script lang="ts">
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { stats } from '#lib/site.ts';
</script>

<section aria-label="The Happy Inn in numbers" class="relative overflow-hidden">
	<div class="absolute inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_picture]:block [&_picture]:h-full">
		<Picture stem="/images/outdoor" alt="" width={1600} height={800} sizes="100vw" />
		<div class="absolute inset-0 bg-ink/85"></div>
	</div>
	<Reveal class="relative">
		<dl class="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-14 text-center text-white lg:grid-cols-4 lg:py-16">
			{#each stats as stat (stat.label)}
				<div>
					<dd class="font-serif text-5xl font-medium text-gold-soft lg:text-6xl">{stat.value}</dd>
					<dt class="mt-2 text-[11px] font-semibold tracking-[0.3em] text-white uppercase">{stat.label}</dt>
				</div>
			{/each}
		</dl>
	</Reveal>
</section>
