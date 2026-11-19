<script lang="ts">
	import About from '#lib/components/About.svelte';
	import Features from '#lib/components/Features.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Header from '#lib/components/Header.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Rooms from '#lib/components/Rooms.svelte';
	import Stats from '#lib/components/Stats.svelte';
</script>

<a
	href="#booking"
	class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
>
	Skip to booking
</a>

<Header />

<main>
	<Hero />
	<About />
	<Stats />
	<Rooms />
	<Features />
</main>

<Footer />
