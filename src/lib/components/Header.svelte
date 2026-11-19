<script lang="ts">
	import { page } from '$app/state';
	import Icon from '#lib/components/Icon.svelte';
	import { nav, site } from '#lib/site.ts';

	const extraLinks = [
		{ label: 'Gallery', href: '/gallery' },
		{ label: 'Spa', href: '/spa' },
		{ label: 'Dining', href: '/dining' },
		{ label: 'Weddings', href: '/weddings' },
		{ label: 'Reviews', href: '/reviews' },
		{ label: 'FAQ', href: '/faq' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Contact', href: '/contact' }
	];
	let menuOpen = $state(false);
	const current = $derived(page.url.pathname);
	const isActive = (href: string) => (href === '/' ? current === '/' : current.startsWith(href));
</script>

<!-- Top contact bar (matches reference) -->
<div role="region" aria-label="Hotel contact information" class="bg-coal-deep text-[13px] text-white">
	<div class="mx-auto flex min-h-11 max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-2 lg:justify-between">
		<div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
			<span class="inline-flex items-center gap-1.5">
				<Icon name="pin" class="h-4 w-4 text-gold-soft" />
				{site.contact.address}
			</span>
			<a href={site.contact.phoneHref} class="inline-flex items-center gap-1.5 transition-colors hover:text-gold-soft">
				<Icon name="phone" class="h-4 w-4 text-gold-soft" />
				{site.contact.phone}
			</a>
			<a href="mailto:{site.contact.email}" class="hidden items-center gap-1.5 transition-colors hover:text-gold-soft sm:inline-flex">
				<Icon name="mail" class="h-4 w-4 text-gold-soft" />
				{site.contact.email}
			</a>
		</div>
		<div class="hidden items-center gap-4 lg:flex">
			<span class="flex items-center gap-3 text-gold-soft">
				<a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="The Happy Inn on Facebook" class="transition-colors hover:text-white"><Icon name="facebook" class="h-4 w-4" /></a>
				<a href="https://www.twitter.com" target="_blank" rel="noreferrer" aria-label="The Happy Inn on Twitter" class="transition-colors hover:text-white"><Icon name="twitter" class="h-4 w-4" /></a>
				<a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="The Happy Inn on YouTube" class="transition-colors hover:text-white"><Icon name="youtube" class="h-4 w-4" /></a>
				<a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="The Happy Inn on Instagram" class="transition-colors hover:text-white"><Icon name="instagram" class="h-4 w-4" /></a>
			</span>
			<a href="/book" class="inline-flex items-center gap-1.5 border-l border-white/25 pl-4 transition-colors hover:text-gold-soft">
				<Icon name="check" class="h-4 w-4 text-gold-soft" />
				Book Your Stay
			</a>
		</div>
	</div>
</div>

<!-- Main header (matches reference: wordmark left, weather pill, nav) -->
<header class="sticky top-0 z-40 bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur">
	<div class="mx-auto max-w-6xl px-4">
		<div class="relative flex items-center justify-between gap-3 py-4 lg:py-5">
			<a href="/" class="flex items-center gap-3" aria-label="The Happy Inn — home">
				<Icon name="palm" class="h-9 w-9 text-gold-deep" />
				<span class="font-serif text-[26px] leading-none font-semibold text-ink sm:text-3xl">
					The <span class="text-gold-deep italic">Happy</span> Inn
				</span>
			</a>
			<div class="hidden items-center gap-3 md:flex">
				<span class="inline-flex items-center gap-2 border border-linen bg-mist px-4 py-2 text-[13px] font-medium text-ink">
					<Icon name="cloud-sun" class="h-5 w-5 text-gold-deep" />
					{site.weather.label}
					<strong class="font-serif text-base">{site.weather.temperature}</strong>
				</span>
				<span class="hidden items-center gap-1.5 text-[13px] text-ink/80 xl:inline-flex">
					<span class="flex text-gold-deep" aria-hidden="true"><Icon name="star" class="h-3.5 w-3.5" /></span>
					<strong class="text-ink">{site.rating.score}</strong> · {site.rating.count.toLocaleString('en-US')} reviews
				</span>
			</div>
			<button
				type="button"
				class="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
				aria-expanded={menuOpen}
				aria-controls="site-menu"
				aria-label="Toggle menu"
				onclick={() => (menuOpen = !menuOpen)}
			>
				<Icon name={menuOpen ? 'close' : 'menu'} class="h-6 w-6" />
			</button>
			<a
				href="/book"
				class="absolute top-full right-0 hidden -translate-y-1/2 bg-gold-deep px-6 py-3 text-[12px] font-semibold tracking-[0.14em] text-white uppercase shadow-md transition-colors hover:bg-ink lg:block"
			>
				Book Now
			</a>
		</div>

		<nav id="site-menu" aria-label="Primary" class={menuOpen ? 'block pb-4 lg:pb-0' : 'hidden lg:block'}>
			<ul class="flex flex-col gap-1 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-9">
				{#each nav as item (item.href)}
					<li>
						<a
							href={item.href}
							aria-current={isActive(item.href) ? 'page' : undefined}
							onclick={() => (menuOpen = false)}
							class="block border-b-2 px-1 py-2.5 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors {isActive(item.href)
								? 'border-gold-deep text-gold-deep'
								: 'border-transparent text-ink/80 hover:text-gold-deep'}"
						>
							{item.label}
						</a>
					</li>
				{/each}
				{#each extraLinks as item (item.href)}
					<li class="lg:hidden">
						<a
							href={item.href}
							aria-current={isActive(item.href) ? 'page' : undefined}
							onclick={() => (menuOpen = false)}
							class="block border-b-2 border-transparent px-1 py-2.5 text-[13px] font-medium tracking-[0.08em] uppercase {isActive(item.href) ? 'text-gold-deep' : 'text-ink/80'}"
						>
							{item.label}
						</a>
					</li>
				{/each}
				<li class="pt-2 lg:hidden">
					<a href="/book" class="block bg-gold-deep px-5 py-3.5 text-center text-[12px] font-semibold tracking-[0.14em] text-white uppercase">Book Now</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
