<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { blogPosts } from '#lib/site.ts';
</script>

<svelte:head>
	<title>Journal — The Happy Inn</title>
	<meta name="description" content="Stories from The Happy Inn and San Francisco — weekend guides, spa rituals and garden weddings." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="Notes From The Inn"
		title="The Happy Inn Journal"
		intro="Weekend guides, spa stories and wedding days — written by the people who run the inn."
		stem="/images/outdoor"
		alt="Exploring the area around the inn"
	/>
	<section class="mx-auto max-w-6xl px-4 py-14 lg:py-16" aria-label="Journal articles">
		<div class="grid gap-6 md:grid-cols-3">
			{#each blogPosts as post, i (post.slug)}
				<Reveal delay={i * 0.07}>
					<article class="flex h-full flex-col bg-white shadow-md">
						<a href="/blog/{post.slug}" class="block [&_img]:h-52 [&_img]:w-full [&_img]:object-cover [&_picture]:block" aria-label="Read: {post.title}">
							<Picture stem={post.image.stem} alt={post.image.alt} width={800} height={600} sizes="(max-width: 768px) 100vw, 360px" />
						</a>
						<div class="flex flex-1 flex-col p-6">
							<p class="text-[11px] font-semibold tracking-[0.25em] text-gold-deep uppercase">{post.date}</p>
							<h2 class="mt-2 font-serif text-[22px] leading-snug font-medium text-ink">
								<a href="/blog/{post.slug}" class="hover:text-gold-deep">{post.title}</a>
							</h2>
							<p class="mt-3 flex-1 leading-relaxed text-ink/80">{post.excerpt}</p>
							<a href="/blog/{post.slug}" class="mt-5 text-sm font-semibold text-gold-deep underline decoration-gold/50 underline-offset-4 hover:text-ink">Read the story →</a>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>
</main>
