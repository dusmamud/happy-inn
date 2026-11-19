<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { site } from '#lib/site.ts';

	let name = $state('');
	let email = $state('');
	let topic = $state('A stay');
	let message = $state('');
	let sent = $state(false);
	let error = $state('');

	function submit(event: SubmitEvent) {
		event.preventDefault();
		if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message.trim()) {
			error = 'Please add your name, a valid email and a short message.';
			return;
		}
		error = '';
		sent = true;
	}
</script>

<svelte:head>
	<title>Contact Us — The Happy Inn</title>
	<meta name="description" content="Contact The Happy Inn — address, phone, email, front desk hours and a message form for stays, spa bookings, weddings and events." />
</svelte:head>

<main id="main">
	<PageHero
		eyebrow="We Reply Personally"
		title="Contact Us"
		intro="Questions about a stay, the spa, a wedding or the veranda dinner — write to us and a human will answer."
		stem="/images/about-pool"
		alt="The garden path at The Happy Inn"
	/>
	<section class="mx-auto max-w-6xl px-4 py-14 lg:py-16" aria-label="Contact details and form">
		<div class="grid items-start gap-10 lg:grid-cols-[380px_1fr]">
			<div class="space-y-6">
				<div class="bg-coal p-7 text-white">
					<h2 class="font-serif text-2xl font-medium">Front Desk</h2>
					<ul class="mt-5 space-y-4 text-sm leading-relaxed">
						<li class="flex gap-3"><Icon name="pin" class="mt-0.5 h-5 w-5 shrink-0 text-gold-soft" /> {site.contact.address}</li>
						<li class="flex gap-3"><Icon name="phone" class="mt-0.5 h-5 w-5 shrink-0 text-gold-soft" /> <a href={site.contact.phoneHref} class="hover:text-gold-soft">{site.contact.phone}</a></li>
						<li class="flex gap-3"><Icon name="mail" class="mt-0.5 h-5 w-5 shrink-0 text-gold-soft" /> <a href="mailto:{site.contact.email}" class="hover:text-gold-soft">{site.contact.email}</a></li>
						<li class="flex gap-3"><Icon name="check" class="mt-0.5 h-5 w-5 shrink-0 text-gold-soft" /> Check-in {site.checkInTime} · Check-out {site.checkOutTime} · Desk staffed 7 AM – 10 PM, phone answered 24/7</li>
					</ul>
				</div>
				<div class="bg-mist p-7">
					<h2 class="font-serif text-2xl font-medium text-ink">Planning Something?</h2>
					<p class="mt-3 leading-relaxed text-ink/80">Weddings and whole-inn weekends start with a viewing. Tell us your dates in the form and we will walk you through the garden options.</p>
					<a href="/weddings" class="mt-4 inline-block text-sm font-semibold text-gold-deep underline underline-offset-4">See wedding packages →</a>
				</div>
			</div>

			{#if sent}
				<div class="border border-gold/50 bg-gold/10 px-7 py-10 text-center" role="status">
					<Icon name="check" class="mx-auto h-10 w-10 text-gold-deep" />
					<h2 class="mt-4 font-serif text-3xl font-medium text-ink">Message Sent (Mock)</h2>
					<p class="mx-auto mt-3 max-w-md leading-relaxed text-ink/80">Thank you, {name.split(' ')[0]}. In the live version this message would reach {site.contact.email} and we would reply within one working day. This demo stores nothing.</p>
				</div>
			{:else}
				<form onsubmit={submit} novalidate class="space-y-5" aria-label="Send us a message">
					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label for="ct-name" class="text-sm font-semibold text-ink">Your Name</label>
							<input id="ct-name" type="text" autocomplete="name" bind:value={name} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none" />
						</div>
						<div>
							<label for="ct-email" class="text-sm font-semibold text-ink">Email</label>
							<input id="ct-email" type="email" autocomplete="email" bind:value={email} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none" />
						</div>
					</div>
					<div>
						<label for="ct-topic" class="text-sm font-semibold text-ink">Topic</label>
						<select id="ct-topic" bind:value={topic} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none">
							<option>A stay</option><option>Spa booking</option><option>Wedding or event</option><option>Veranda dinner</option><option>Something else</option>
						</select>
					</div>
					<div>
						<label for="ct-message" class="text-sm font-semibold text-ink">Message</label>
						<textarea id="ct-message" rows="6" bind:value={message} class="mt-1.5 w-full border border-linen bg-white px-4 py-3.5 text-ink focus:border-gold-deep focus:outline-none"></textarea>
					</div>
					{#if error}<p class="text-sm font-medium text-red-800" role="alert">{error}</p>{/if}
					<button type="submit" class="bg-gold-deep px-8 py-4 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">Send Message</button>
				</form>
			{/if}
		</div>
	</section>
</main>
