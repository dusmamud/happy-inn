<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
</script>

<div class="mx-auto max-w-3xl px-4 py-20 text-center lg:py-28">
	<Icon name="palm" class="mx-auto h-12 w-12 text-gold-deep" />
	<p class="mt-5 text-[11px] font-semibold tracking-[0.35em] text-gold-deep uppercase">Error 404</p>
	<h1 class="mt-3 font-serif text-4xl font-medium text-ink sm:text-5xl">This Path Leads To The Garden, Not A Page</h1>
	<p class="mx-auto mt-4 max-w-md leading-relaxed text-ink/80">
		The page you are looking for has wandered off. Let us walk you back — the rooms, the spa and breakfast are all this way.
	</p>
	<p class="mt-8 flex flex-wrap justify-center gap-3">
		<a href="/" class="bg-gold-deep px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink">Back To Home</a>
		<a href="/rooms" class="border border-ink/25 px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:border-gold-deep hover:text-gold-deep">View Rooms</a>
		<a href="/book" class="border border-ink/25 px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:border-gold-deep hover:text-gold-deep">Book A Stay</a>
	</p>
</div>
