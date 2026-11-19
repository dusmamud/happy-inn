<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import RoomCard from '#lib/components/RoomCard.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const room = $derived(data.room);
	let activeImage = $state(0);
</script>

<svelte:head>
	<title>{room.name} — ${room.price}/night · The Happy Inn</title>
	<meta name="description" content="{room.name} at The Happy Inn: {room.size}, {room.bed}, sleeps {room.occupancy}, {room.view}. From ${room.price} per night, breakfast included when you book direct." />
</svelte:head>

<main id="main">
	<section class="mx-auto max-w-6xl px-4 pt-10 lg:pt-14" aria-label="{room.name} details">
		<nav aria-label="Breadcrumb" class="text-sm text-ink/75">
			<a href="/" class="hover:text-gold-deep">Home</a> <span aria-hidden="true">/</span>
			<a href="/rooms" class="hover:text-gold-deep">Rooms & Rates</a> <span aria-hidden="true">/</span>
			<span aria-current="page" class="text-ink">{room.name}</span>
		</nav>

		<div class="mt-6 grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
			<div>
				<div class="overflow-hidden [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover [&_picture]:block" aria-live="polite">
					<Picture stem={room.gallery[activeImage].stem} alt={room.gallery[activeImage].alt} eager width={1200} height={900} sizes="(max-width: 1024px) 100vw, 640px" />
				</div>
				<div class="mt-3 grid grid-cols-3 gap-3">
					{#each room.gallery as image, i (image.stem + image.alt)}
						<button
							type="button"
							onclick={() => (activeImage = i)}
							aria-label="Show photo {i + 1} of the {room.name}"
							aria-pressed={activeImage === i}
							class="overflow-hidden ring-gold-deep transition-shadow {activeImage === i ? 'ring-2' : 'opacity-80 hover:opacity-100'} [&_img]:aspect-[4/3] [&_img]:w-full [&_img]:object-cover [&_picture]:block"
						>
							<Picture stem={image.stem} alt="" width={480} height={360} sizes="200px" />
						</button>
					{/each}
				</div>

				<h1 class="mt-8 font-serif text-4xl font-medium text-ink sm:text-5xl">{room.name}</h1>
				<p class="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-ink/80">
					<span class="inline-flex items-center gap-1.5"><Icon name="users" class="h-4 w-4 text-gold-deep" /> Sleeps {room.occupancy}</span>
					<span>{room.size}</span><span>{room.bed}</span><span>{room.view}</span><span>{room.floor}</span>
				</p>
				{#each room.longDescription as paragraph (paragraph.slice(0, 24))}
					<p class="mt-5 leading-relaxed text-ink/85">{paragraph}</p>
				{/each}

				<h2 class="mt-9 font-serif text-2xl font-medium text-ink">Room Amenities</h2>
				<ul class="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
					{#each room.amenities as amenity (amenity)}
						<li class="flex items-start gap-2.5 text-ink/85"><Icon name="check" class="mt-1 h-4 w-4 shrink-0 text-gold-deep" /> {amenity}</li>
					{/each}
				</ul>
				<p class="mt-5 text-sm text-ink/75">Good to know: check-in from 3:00 PM, check-out until 11:00 AM. Free cancellation up to 48 hours before arrival. An accessible, step-free variant is available in the Garden Room.</p>
			</div>

			<aside class="bg-coal p-7 text-white lg:sticky lg:top-32" aria-label="Book the {room.name}">
				<p class="text-[11px] font-semibold tracking-[0.3em] text-gold-soft uppercase">Rate From</p>
				<p class="mt-2 font-serif text-5xl font-medium">${room.price}<span class="text-lg text-white/80">{room.unit}</span></p>
				<ul class="mt-5 space-y-2.5 text-sm text-white/85">
					<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" /> Complimentary poolside breakfast</li>
					<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" /> Free cancellation — 48 hours</li>
					<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" /> Best rate guarantee, book direct</li>
					<li class="flex gap-2"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" /> Free parking & Wi-Fi</li>
				</ul>
				<a href="/book?room={room.slug}" class="mt-6 block bg-gold-deep px-6 py-4 text-center text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-gold">Book This Room</a>
				<a href="/faq" class="mt-3 block text-center text-sm text-white/85 underline decoration-white/40 underline-offset-4 hover:text-gold-soft">Questions? Read the FAQ</a>
			</aside>
		</div>
	</section>

	<section class="mx-auto max-w-6xl px-4 py-14" aria-label="More rooms">
		<h2 class="font-serif text-3xl font-medium text-ink">You May Also Like</h2>
		<div class="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.others as other, i (other.slug)}
				<Reveal delay={i * 0.07}><RoomCard room={other} /></Reveal>
			{/each}
		</div>
	</section>

	<Testimonials limit={3} />
</main>
