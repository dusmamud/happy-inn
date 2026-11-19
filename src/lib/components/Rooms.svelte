<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import RoomCard from '#lib/components/RoomCard.svelte';
	import { rooms, roomsSection } from '#lib/site.ts';

	let track: HTMLDivElement | undefined = $state();

	function scrollByCards(direction: 1 | -1) {
		track?.scrollBy({ left: direction * 320, behavior: 'smooth' });
	}
</script>

<section id="rooms" aria-label="Room listings" class="scroll-mt-28 bg-mist py-14 lg:py-20">
	<div class="mx-auto max-w-6xl px-4">
		<Reveal>
			<div class="grid items-end gap-8 lg:grid-cols-[1fr_1.2fr]">
				<div>
					<p class="text-[11px] font-semibold tracking-[0.35em] text-gold-deep uppercase">{roomsSection.eyebrow}</p>
					<h2 class="mt-2 font-serif text-4xl font-medium text-ink sm:text-5xl">{roomsSection.title}</h2>
					<p class="mt-5 flex gap-3">
						<button type="button" onclick={() => scrollByCards(-1)} aria-label="Scroll rooms back" class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-coal text-white transition-colors hover:bg-gold-deep">
							<Icon name="arrow-left" class="h-5 w-5" />
						</button>
						<button type="button" onclick={() => scrollByCards(1)} aria-label="Scroll rooms forward" class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-coal text-white transition-colors hover:bg-gold-deep">
							<Icon name="arrow-right" class="h-5 w-5" />
						</button>
					</p>
				</div>
				<div class="space-y-4 leading-relaxed text-ink/80">
					{#each roomsSection.intro as paragraph (paragraph)}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>
		</Reveal>

		<div
			bind:this={track}
			class="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			aria-label="Rooms carousel"
		>
			{#each rooms as room, i (room.slug)}
				<div class="w-[280px] shrink-0 snap-start sm:w-[300px]">
					<Reveal delay={i * 0.06}>
						<RoomCard {room} />
					</Reveal>
				</div>
			{/each}
			<div class="flex w-[220px] shrink-0 snap-start items-stretch">
				<a href={roomsSection.cta.href} class="flex w-full flex-col items-center justify-center gap-3 bg-coal px-6 text-center text-white transition-colors hover:bg-gold-deep">
					<Icon name="palm" class="h-9 w-9 text-gold-soft" />
					<span class="font-serif text-2xl font-medium">{roomsSection.cta.label}</span>
					<span class="text-sm text-white/85">Every room, every rate — in one place</span>
				</a>
			</div>
		</div>
	</div>
</section>
