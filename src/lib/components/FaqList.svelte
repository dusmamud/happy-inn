<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { faqs } from '#lib/site.ts';

	type Props = { items?: typeof faqs };
	let { items = faqs }: Props = $props();
	let open = $state(0);
</script>

<div class="mx-auto max-w-3xl">
	{#each items as faq, i (faq.q)}
		<div class="border-b border-linen">
			<h3>
				<button
					type="button"
					aria-expanded={open === i}
					onclick={() => (open = open === i ? -1 : i)}
					class="flex w-full items-center justify-between gap-4 py-5 text-left font-serif text-lg font-medium text-ink transition-colors hover:text-gold-deep sm:text-xl"
				>
					{faq.q}
					<Icon name={open === i ? 'chevron-up' : 'chevron-down'} class="h-5 w-5 shrink-0 text-gold-deep" />
				</button>
			</h3>
			{#if open === i}
				<p class="pr-8 pb-6 leading-relaxed text-ink/80">{faq.a}</p>
			{/if}
		</div>
	{/each}
</div>
