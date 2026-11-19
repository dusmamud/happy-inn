<script lang="ts">
	// Scroll-reveal wrapper powered by Motion (motion.dev — the Framer Motion
	// team's framework-agnostic successor). Animates transform + opacity only,
	// honours prefers-reduced-motion, and is progressively enhanced: without
	// JS the content is simply visible.
	import { animate, inView } from 'motion';
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet; delay?: number; class?: string };
	let { children, delay = 0, class: className = '' }: Props = $props();
	let el: HTMLDivElement | undefined = $state();

	$effect(() => {
		if (!el) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		el.style.opacity = '0';
		const stop = inView(
			el,
			() => {
				animate(
					el!,
					{ opacity: [0, 1], y: [26, 0] },
					{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
				);
			},
			{ amount: 0.2 }
		);
		return stop;
	});
</script>

<div bind:this={el} class={className}>
	{@render children()}
</div>
