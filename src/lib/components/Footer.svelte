<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import { footer, site } from '#lib/site.ts';

	let email = $state('');
	let subscribed = $state(false);
	function subscribe(event: SubmitEvent) {
		event.preventDefault();
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) subscribed = true;
	}
	const socials = [
		{ name: 'facebook', label: 'Facebook', href: 'https://www.facebook.com' },
		{ name: 'twitter', label: 'Twitter', href: 'https://www.twitter.com' },
		{ name: 'youtube', label: 'YouTube', href: 'https://www.youtube.com' },
		{ name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com' }
	] as const;
</script>

<footer class="bg-coal text-white">
	<!-- Newsletter band (matches reference) -->
	<div class="border-b border-white/10">
		<div class="mx-auto grid max-w-6xl items-center gap-5 px-4 py-9 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
			<p class="flex flex-wrap items-center gap-x-4 gap-y-2">
				<span class="text-[11px] font-semibold tracking-[0.3em] text-gold-soft uppercase">Follow Us</span>
				<span class="flex gap-2">
					{#each socials as social (social.name)}
						<a
							href={social.href}
							target="_blank"
							rel="noreferrer"
							aria-label="The Happy Inn on {social.label}"
							class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-gold-soft hover:text-gold-soft"
						>
							<Icon name={social.name} class="h-4 w-4" />
						</a>
					{/each}
				</span>
			</p>
			<span class="hidden h-10 w-px bg-white/15 md:block" aria-hidden="true"></span>
			<div class="min-w-0">
				{#if subscribed}
					<p class="flex items-center gap-2 text-sm text-gold-soft" role="status">
						<Icon name="check" class="h-5 w-5" /> Thank you — you are on the list. Watch your inbox for inn news and offers.
					</p>
				{:else}
					<form onsubmit={subscribe} class="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center" aria-label="Newsletter signup">
						<label for="newsletter-email" class="shrink-0 text-[11px] font-semibold tracking-[0.3em] text-gold-soft uppercase">Join Newsletter</label>
						<input
							id="newsletter-email"
							type="email"
							required
							bind:value={email}
							placeholder="Your email address"
							class="w-full min-w-0 border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/75 focus:border-gold-soft focus:outline-none sm:max-w-56"
						/>
						<button type="submit" aria-label="Subscribe to the newsletter" class="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-gold-deep text-white transition-colors hover:bg-gold">
							<Icon name="send" class="h-5 w-5" />
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>

	<!-- Main footer columns (matches reference) -->
	<div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1.1fr]">
		<div>
			<h3 class="font-serif text-xl font-medium text-gold-soft">{site.name}</h3>
			<p class="mt-4 max-w-sm leading-relaxed text-white/85">{footer.about}</p>
			<p class="mt-4 flex flex-wrap gap-2">
				{#each footer.badges as badge (badge)}
					<span class="border border-gold/50 px-2.5 py-1 text-[11px] tracking-[0.14em] text-gold-soft uppercase">{badge}</span>
				{/each}
			</p>
			<p class="mt-4 text-sm text-white/85">
				{site.contact.address}<br />
				<a href={site.contact.phoneHref} class="transition-colors hover:text-gold-soft">{site.contact.phone}</a><br />
				<a href="mailto:{site.contact.email}" class="transition-colors hover:text-gold-soft">{site.contact.email}</a>
			</p>
		</div>
		{#each footer.columns as column (column.title)}
			<nav aria-label="Footer — {column.title}">
				<h3 class="font-serif text-xl font-medium text-gold-soft">{column.title}</h3>
				<ul class="mt-4 space-y-2.5">
					{#each column.links as link (link.label)}
						<li>
							<a href={link.href} class="text-white/85 transition-colors hover:text-gold-soft">{link.label}</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/each}
		<div>
			<h3 class="font-serif text-xl font-medium text-gold-soft">{footer.gallery.title}</h3>
			<div class="mt-4 grid grid-cols-3 gap-2">
				{#each footer.gallery.images as image (image.stem)}
					<a href="/gallery" class="block [&_img]:aspect-square [&_img]:w-full [&_img]:object-cover [&_picture]:block" aria-label="Open the gallery — {image.alt}">
						<Picture stem={image.stem} alt={image.alt} width={480} height={480} sizes="120px" />
					</a>
				{/each}
			</div>
			<p class="mt-4 flex gap-5 text-sm">
				<a href="/privacy" class="text-white/85 transition-colors hover:text-gold-soft">Privacy Policy</a>
				<a href="/terms" class="text-white/85 transition-colors hover:text-gold-soft">Terms of Stay</a>
				<a href="/faq" class="text-white/85 transition-colors hover:text-gold-soft">FAQ</a>
			</p>
		</div>
	</div>

	<div class="bg-coal-deep">
		<p class="mx-auto max-w-6xl px-4 py-4 text-center text-[13px] text-white/80">{footer.copyright}</p>
	</div>
</footer>
