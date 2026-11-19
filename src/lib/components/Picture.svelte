<script lang="ts">
	// Reusable image component — every image in every project renders
	// through this, never hand-written <picture> markup in pages.
	// Load order: AVIF -> WebP -> JPG -> PNG fallback (native <picture>,
	// no JS detection). Files live in static/images/ as
	// <stem>-<width>.<ext> for widths 480 / 800 / 1200 / 1600.
	// Generate them from the PNG master with scripts/convert-images.mjs.
	type Props = {
		stem: string;
		alt: string;
		widths?: number[];
		sizes?: string;
		eager?: boolean;
		width?: number;
		height?: number;
		class?: string;
	};

	let {
		stem,
		alt,
		widths = [480, 800, 1200, 1600],
		sizes = '(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 1200px',
		eager = false,
		width = 1600,
		height = 900,
		class: className = ''
	}: Props = $props();

	const srcsetFor = (ext: string) =>
		widths.map((w) => `${stem}-${w}.${ext} ${w}w`).join(', ');
	const avifSrcset = $derived(srcsetFor('avif'));
	const webpSrcset = $derived(srcsetFor('webp'));
	const jpgSrcset = $derived(srcsetFor('jpg'));
	const pngSrcset = $derived(srcsetFor('png'));
	const fallback = $derived(`${stem}-${Math.max(...widths)}.png`);
</script>

<picture>
	<source type="image/avif" srcset={avifSrcset} {sizes} />
	<source type="image/webp" srcset={webpSrcset} {sizes} />
	<source type="image/jpeg" srcset={jpgSrcset} {sizes} />
	<img
		src={fallback}
		srcset={pngSrcset}
		{sizes}
		{alt}
		{width}
		{height}
		loading={eager ? 'eager' : 'lazy'}
		fetchpriority={eager ? 'high' : 'auto'}
		class={className}
	/>
</picture>
