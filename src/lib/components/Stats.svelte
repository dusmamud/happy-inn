<script lang="ts">
	import Picture from '#lib/components/Picture.svelte';
	import { stats } from '#lib/site.ts';
</script>

<section aria-label="The Happy Inn in numbers" class="relative overflow-hidden">
	<div class="absolute inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_picture]:block [&_picture]:h-full">
		<Picture stem="/images/hero" alt="" width={1600} height={900} sizes="100vw" />
	</div>
	<div class="absolute inset-0 bg-ink/70"></div>
	<dl class="relative mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-14 text-center text-white lg:grid-cols-4">
		{#each stats as stat (stat.label)}
			<div>
				<dd class="font-serif text-4xl font-medium sm:text-5xl">{stat.value}</dd>
				<dt class="mt-2 text-[11px] font-semibold tracking-[0.25em] text-white/85 uppercase">{stat.label}</dt>
			</div>
		{/each}
	</dl>
</section>
