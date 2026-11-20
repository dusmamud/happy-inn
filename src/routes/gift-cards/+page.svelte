<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { giftCards, site } from '#lib/site';

	let amount = $state(250);
	let recipient = $state('');
	let email = $state('');
	let message = $state('');
	let sent = $state(false);
	let error = $state('');

	function buy(e: SubmitEvent) {
		e.preventDefault();
		error = '';
		if (recipient.trim().length < 2) error = 'Please add the recipient’s name.';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) error = 'Please add a valid email for delivery.';
		if (error) return;
		sent = true;
	}
</script>

<svelte:head>
	<title>Gift Cards — {site.name}</title>
	<meta name="description" content="Give a stay at The Happy Inn in San Francisco — gift cards from $100, delivered by email in minutes, valid 24 months on any dates." />
</svelte:head>

<main id="main">
<PageHero
	eyebrow="Gift Cards"
	title="Give A Stay At The Inn"
	intro="The gift that always fits: a night (or a whole weekend) under the palms, delivered by email in minutes."
	stem="/images/about-pool"
	alt="The boardwalk to the pool at The Happy Inn"
/>

<section class="mx-auto max-w-6xl px-4 pt-16 lg:pt-24">
	<div class="grid gap-6 md:grid-cols-3">
		{#each giftCards as card, i (card.amount)}
			<Reveal delay={i * 0.08} class="h-full">
				<button
					type="button"
					onclick={() => (amount = card.amount)}
					aria-pressed={amount === card.amount}
					class="flex h-full w-full flex-col border p-7 text-left transition-colors {amount === card.amount ? 'border-gold-deep bg-mist' : 'border-linen bg-white hover:border-gold-soft'}"
				>
					<p class="flex items-baseline gap-2">
						<span class="font-serif text-[44px] text-gold-deep">${card.amount}</span>
						{#if card.perk === 'Most popular'}<span class="bg-gold-deep px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-white uppercase">Most Popular</span>{/if}
					</p>
					<h2 class="mt-2 font-serif text-[22px] text-ink">{card.name}</h2>
					<p class="mt-2 flex-1 text-[15px] leading-relaxed text-ink/85">{card.text}</p>
					<p class="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-gold-deep uppercase">
						<Icon name="check" class="h-4 w-4" /> {card.perk}
					</p>
				</button>
			</Reveal>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-16 lg:py-24">
	<div class="grid items-start gap-10 lg:grid-cols-2">
		<Reveal>
			<h2 class="font-serif text-[30px] text-ink sm:text-[34px]">How It Works</h2>
			<ol class="mt-6 space-y-5">
				{#each ['Choose an amount above — every card is valid for 24 months, on any dates, for any room.', 'Add the recipient and a note. We email the card within minutes, beautifully formatted and ready to forward or print.', 'They book directly with us whenever they like — the card balance applies automatically, and anything left over stays on the card.'] as step, i (step)}
					<li class="flex gap-4">
						<span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-deep font-serif text-white">{i + 1}</span>
						<p class="pt-1.5 text-[15px] leading-relaxed text-ink/85">{step}</p>
					</li>
				{/each}
			</ol>
			<div class="mt-8 hidden lg:block">
				<Picture stem="/images/breakfast" alt="Breakfast by the pool — the morning every gift card includes" sizes="(min-width: 1024px) 560px, 100vw" imgClass="aspect-[16/10] w-full object-cover" />
			</div>
		</Reveal>

		<Reveal delay={0.1}>
			{#if sent}
				<div class="border border-linen bg-mist p-8 text-center" role="status">
					<span class="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-deep text-white"><Icon name="check" class="h-7 w-7" /></span>
					<h2 class="mt-4 font-serif text-[26px] text-ink">Gift Card On Its Way</h2>
					<p class="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-ink/85">
						A ${amount} gift card for {recipient} is being delivered to {email}. (Demo checkout — no payment was taken.)
					</p>
					<button type="button" onclick={() => (sent = false)} class="mt-5 text-[12px] font-semibold tracking-[0.14em] text-gold-deep uppercase hover:underline">Send Another</button>
				</div>
			{:else}
				<form onsubmit={buy} novalidate class="border border-linen bg-white p-6 sm:p-8">
					<h2 class="font-serif text-[26px] text-ink">Send A ${amount} Gift Card</h2>
					<div class="mt-5 space-y-4">
						<div>
							<label for="gc-recipient" class="mb-1.5 block text-[13px] font-semibold tracking-wide text-ink">Recipient’s Name</label>
							<input id="gc-recipient" bind:value={recipient} autocomplete="off" class="w-full border border-linen px-3.5 py-3 text-ink outline-none focus:border-gold-deep" placeholder="e.g. Maya Kapoor" />
						</div>
						<div>
							<label for="gc-email" class="mb-1.5 block text-[13px] font-semibold tracking-wide text-ink">Delivery Email</label>
							<input id="gc-email" type="email" bind:value={email} autocomplete="email" class="w-full border border-linen px-3.5 py-3 text-ink outline-none focus:border-gold-deep" placeholder="them@example.com" />
						</div>
						<div>
							<label for="gc-message" class="mb-1.5 block text-[13px] font-semibold tracking-wide text-ink">Your Note <span class="font-normal text-ink/75">(optional)</span></label>
							<textarea id="gc-message" bind:value={message} rows="3" class="w-full border border-linen px-3.5 py-3 text-ink outline-none focus:border-gold-deep" placeholder="Happy birthday — the garden is waiting."></textarea>
						</div>
					</div>
					{#if error}<p class="mt-4 border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-800" role="alert">{error}</p>{/if}
					<button type="submit" class="mt-6 w-full bg-gold-deep px-6 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-gold-ink">
						Buy ${amount} Gift Card
					</button>
					<p class="mt-3 text-center text-[13px] text-ink/75">Demo checkout — no payment is taken. Cards never expire within 24 months.</p>
				</form>
			{/if}
		</Reveal>
	</div>
</section>
</main>
