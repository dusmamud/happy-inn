<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import { footer, site } from '#lib/site.ts';

	let email = $state('');
	let subscribed = $state(false);
	function subscribe(event: SubmitEvent) {
		event.preventDefault();
		subscribed = true;
	}
	const socials = [
		{ name: 'facebook', label: 'The Happy Inn on Facebook' },
		{ name: 'twitter', label: 'The Happy Inn on X' },
		{ name: 'youtube', label: 'The Happy Inn on YouTube' },
		{ name: 'instagram', label: 'The Happy Inn on Instagram' }
	];
</script>

<footer>
	<div class="bg-coal text-white/85">
		<div class="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-7 px-4 py-9 lg:grid-cols-[1fr_auto_auto]">
			<ul class="space-y-2 text-sm">
				<li class="flex items-center gap-2.5">
					<Icon name="pin" class="h-4 w-4 shrink-0 text-gold-soft" />{site.contact.address}
				</li>
				<li>
					<a href={site.contact.phoneHref} class="flex items-center gap-2.5 hover:text-white">
						<Icon name="phone" class="h-4 w-4 shrink-0 text-gold-soft" />{site.contact.phone}
					</a>
				</li>
				<li>
					<a href="mailto:{site.contact.email}" class="flex items-center gap-2.5 hover:text-white">
						<Icon name="mail" class="h-4 w-4 shrink-0 text-gold-soft" />{site.contact.email}
					</a>
				</li>
			</ul>

			{#if subscribed}
				<p role="status" class="rounded-lg bg-white/10 px-4 py-3 text-sm">
					Thank you — you are on the list. (Mock subscribe, nothing was sent.)
				</p>
			{:else}
				<form class="flex w-full min-w-0 sm:max-w-sm" onsubmit={subscribe}>
					<label class="sr-only" for="newsletter-email">Email Address</label>
					<input
						id="newsletter-email"
						type="email"
						required
						bind:value={email}
						placeholder="Email Address"
						autocomplete="email"
						class="min-w-0 flex-1 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/55"
					/>
					<button type="submit" class="bg-gold-deep px-5 py-3 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">
						Subscribe
					</button>
				</form>
			{/if}

			<div class="flex items-center gap-3">
				{#each footer.badges as badge (badge)}
					<span class="border border-white/25 px-3 py-2 font-serif text-sm text-white/75 italic">{badge}</span>
				{/each}
			</div>
		</div>
	</div>

	<div class="bg-coal-deep text-white/70">
		<div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
			<div>
				<span class="inline-flex flex-col items-center border border-gold px-3 py-1.5 text-white">
					<Icon name="palm" class="h-5 w-5 text-gold-soft" />
					<span class="font-serif text-[13px] font-semibold tracking-[0.18em] whitespace-nowrap">THE HAPPY</span>
					<span class="text-[9px] font-semibold tracking-[0.55em] text-gold-soft">INN</span>
				</span>
				<p class="mt-5 max-w-xs text-sm leading-relaxed">{footer.about}</p>
				<div class="mt-5 flex gap-2">
					{#each socials as social (social.name)}
						<a href="#home" aria-label={social.label} class="inline-flex h-10 w-10 items-center justify-center bg-white/10 text-white/85 transition-colors hover:bg-gold-deep hover:text-white">
							<Icon name={social.name} class="h-4 w-4" />
						</a>
					{/each}
				</div>
			</div>

			{#each footer.columns as column (column.title)}
				<nav aria-label="Footer — {column.title}">
					<h3 class="font-serif text-xl text-white">{column.title}</h3>
					<ul class="mt-5 space-y-2.5 text-sm">
						{#each column.links as link (link)}
							<li>
								<a href="#home" class="inline-flex items-center gap-1.5 transition-colors hover:text-gold-soft">
									<Icon name="chevron-right" class="h-3 w-3 text-gold-soft" />{link}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			{/each}

			<div>
				<h3 class="font-serif text-xl text-white">{footer.gallery.title}</h3>
				<div class="mt-5 grid max-w-60 grid-cols-3 gap-1.5">
					{#each footer.gallery.images as image (image.alt)}
						<div class="[&_img]:h-16 [&_img]:w-full [&_img]:object-cover [&_picture]:block">
							<Picture stem={image.stem} alt={image.alt} widths={[480]} width={480} height={320} sizes="80px" />
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="border-t border-white/10 py-5 text-center text-xs text-white/55">
			{footer.copyright}
		</div>
	</div>
</footer>
