<script lang="ts">
	import Picture from '#lib/components/Picture.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} — The Happy Inn Journal</title>
	<meta name="description" content={post.excerpt} />
</svelte:head>

<main id="main">
	<article class="mx-auto max-w-3xl px-4 py-12 lg:py-16">
		<nav aria-label="Breadcrumb" class="text-sm text-ink/75">
			<a href="/" class="hover:text-gold-deep">Home</a> <span aria-hidden="true">/</span>
			<a href="/blog" class="hover:text-gold-deep">Journal</a> <span aria-hidden="true">/</span>
			<span aria-current="page" class="text-ink">Article</span>
		</nav>
		<p class="mt-8 text-[11px] font-semibold tracking-[0.3em] text-gold-deep uppercase">{post.date} · The Happy Inn Journal</p>
		<h1 class="mt-3 font-serif text-4xl leading-tight font-medium text-balance text-ink sm:text-5xl">{post.title}</h1>
		<div class="mt-8 overflow-hidden [&_img]:aspect-[16/9] [&_img]:w-full [&_img]:object-cover [&_picture]:block">
			<Picture stem={post.image.stem} alt={post.image.alt} eager width={1200} height={700} sizes="(max-width: 768px) 100vw, 760px" />
		</div>
		{#each post.body as paragraph, i (paragraph.slice(0, 24))}
			<p class="mt-6 text-lg leading-relaxed text-ink/85">
				{#if i === 0}<span class="float-left mr-3 font-serif text-6xl leading-[0.85] text-gold-deep">{paragraph.charAt(0)}</span>{paragraph.slice(1)}{:else}{paragraph}{/if}
			</p>
		{/each}
		<p class="mt-10 flex flex-wrap gap-3 border-t border-linen pt-8">
			<a href="/book" class="bg-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">Plan Your Own Stay</a>
			<a href="/blog" class="border border-ink/25 px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:border-gold-deep hover:text-gold-deep">More Stories</a>
		</p>
	</article>
</main>
