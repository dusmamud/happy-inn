<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { nav, site } from '#lib/site.ts';

	let menuOpen = $state(false);
	const socials = [
		{ name: 'facebook', label: 'The Happy Inn on Facebook' },
		{ name: 'twitter', label: 'The Happy Inn on X' },
		{ name: 'youtube', label: 'The Happy Inn on YouTube' },
		{ name: 'instagram', label: 'The Happy Inn on Instagram' }
	];
</script>

<div class="bg-coal text-[13px] text-white/85">
	<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 lg:justify-between">
		<div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
			<span class="inline-flex items-center gap-1.5">
				<Icon name="pin" class="h-3.5 w-3.5 text-gold-soft" />{site.contact.address}
			</span>
			<a class="inline-flex items-center gap-1.5 hover:text-white" href={site.contact.phoneHref}>
				<Icon name="phone" class="h-3.5 w-3.5 text-gold-soft" />{site.contact.phone}
			</a>
			<a class="inline-flex items-center gap-1.5 hover:text-white" href="mailto:{site.contact.email}">
				<Icon name="mail" class="h-3.5 w-3.5 text-gold-soft" />{site.contact.email}
			</a>
		</div>
		<div class="hidden items-center gap-1 lg:flex">
			{#each socials as social (social.name)}
				<a
					href="#home"
					aria-label={social.label}
					class="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/75 transition-colors hover:text-gold-soft"
				>
					<Icon name={social.name} class="h-4 w-4" />
				</a>
			{/each}
			<span class="ml-2 inline-flex items-center gap-1.5 border-l border-white/20 pl-3 text-white/75">
				<Icon name="search" class="h-3.5 w-3.5" /> Search …
			</span>
		</div>
	</div>
</div>

<header class="sticky top-0 z-40 border-b border-linen bg-white/95 backdrop-blur">
	<div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
		<a href="#home" class="flex items-center gap-3" aria-label="The Happy Inn — home">
			<span class="flex flex-col items-center border border-gold px-3 py-1.5 text-ink">
				<Icon name="palm" class="h-5 w-5 text-gold-deep" />
				<span class="font-serif text-[13px] font-semibold tracking-[0.18em] whitespace-nowrap">THE HAPPY</span>
				<span class="text-[9px] font-semibold tracking-[0.55em] text-gold-deep">INN</span>
			</span>
		</a>

		<nav aria-label="Primary" class="hidden items-center gap-7 lg:flex">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					aria-current={item.active ? 'page' : undefined}
					class="text-[13px] font-medium whitespace-nowrap transition-colors {item.active
						? 'text-gold-deep underline underline-offset-8'
						: 'text-ink/80 hover:text-gold-deep'}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<span class="hidden items-center gap-2 rounded-full bg-linen px-3.5 py-2 text-xs font-medium text-ink/80 sm:inline-flex">
				{site.weather.label}
				<Icon name="sun" class="h-4 w-4 text-gold-deep" />
				<span class="font-serif text-sm font-semibold">{site.weather.temperature}</span>
			</span>
			<button
				type="button"
				class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-linen lg:hidden"
				aria-expanded={menuOpen}
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				onclick={() => (menuOpen = !menuOpen)}
			>
				<Icon name={menuOpen ? 'close' : 'menu'} class="h-5 w-5" />
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav aria-label="Mobile" class="border-t border-linen bg-white px-4 pt-2 pb-4 lg:hidden">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					aria-current={item.active ? 'page' : undefined}
					onclick={() => (menuOpen = false)}
					class="block rounded-lg px-3 py-3 text-sm font-medium {item.active
						? 'text-gold-deep'
						: 'text-ink/85'} hover:bg-mist"
				>
					{item.label}
				</a>
			{/each}
		</nav>
	{/if}
</header>
