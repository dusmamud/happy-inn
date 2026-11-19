<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import { rooms, roomsSection } from '#lib/site.ts';

	let track: HTMLDivElement | undefined = $state();
	let booked = $state('');
	const scroll = (dir: 1 | -1) => track?.scrollBy({ left: dir * 340, behavior: 'smooth' });
</script>

<section id="rooms" class="scroll-mt-28 bg-gradient-to-b from-white from-55% to-linen py-14 lg:py-20">
	<div class="mx-auto max-w-6xl px-4">
		<p class="text-center text-[11px] font-semibold tracking-[0.35em] text-gold-deep uppercase">{roomsSection.eyebrow}</p>
		<h2 class="mt-2 text-center font-serif text-4xl font-medium text-ink sm:text-5xl">{roomsSection.title}</h2>

		<div class="mt-12 grid items-start gap-10 lg:grid-cols-[290px_1fr]">
			<div>
				{#each roomsSection.intro as paragraph (paragraph.slice(0, 24))}
					<p class="font-serif text-[15px] leading-[1.85] text-ink/70 [&+p]:mt-4">{paragraph}</p>
				{/each}
				<a
					href={roomsSection.cta.href}
					class="mt-7 inline-block bg-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink"
				>
					{roomsSection.cta.label}
				</a>
				<div class="mt-8 flex gap-2">
					<button type="button" onclick={() => scroll(-1)} aria-label="Previous rooms" class="inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-ink/60 transition-colors hover:border-gold-deep hover:text-gold-deep">
						<Icon name="chevron-left" class="h-4 w-4" />
					</button>
					<button type="button" onclick={() => scroll(1)} aria-label="Next rooms" class="inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-gold-deep hover:text-gold-deep">
						<Icon name="chevron-right" class="h-4 w-4" />
					</button>
				</div>
				{#if booked}
					<p role="status" class="mt-5 rounded-lg bg-white px-4 py-3 text-sm text-ink shadow-sm">
						{booked} selected — this is a mock booking, nothing was reserved.
					</p>
				{/if}
			</div>

			<div bind:this={track} class="no-scrollbar -mx-4 flex min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 lg:mx-0 lg:px-0" aria-label="Room listings carousel">
				{#each rooms as room (room.name)}
					<article class="w-[270px] shrink-0 snap-start bg-white shadow-md sm:w-[300px]">
						<div class="[&_img]:h-52 [&_img]:w-full [&_img]:object-cover [&_picture]:block">
							<Picture stem={room.image.stem} alt={room.image.alt} width={800} height={600} sizes="300px" />
						</div>
						<div class="p-5">
							<h3 class="font-serif text-[22px] font-medium text-ink">{room.name}</h3>
							<p class="mt-2.5 min-h-24 text-sm leading-relaxed text-ink/65">{room.description}</p>
							<div class="mt-4 flex items-end justify-between border-t border-linen pt-4">
								<span class="text-xs text-ink/50">price</span>
								<p class="font-serif text-[22px] text-gold-deep">
									{room.price}<span class="text-sm text-ink/55">{room.unit}</span>
								</p>
							</div>
							<button
								type="button"
								onclick={() => (booked = room.name)}
								class="mt-4 w-full border border-gold-deep px-4 py-3 text-[11px] font-semibold tracking-[0.18em] text-gold-deep uppercase transition-colors hover:bg-gold-deep hover:text-white"
							>
								Book This Room
							</button>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
