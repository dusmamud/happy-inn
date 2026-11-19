# The Happy Inn

**Live:** https://happy-inn.pages.dev · **Repo:** https://github.com/dusmamud/happy-inn

One-page hotel website recreated **same-to-same from the client's reference
screenshot**, built to dusmamud's frontend standard on the verified
SvelteKit starter. Deploys to Cloudflare Pages via GitHub Actions
(`.github/workflows/deploy.yml`, same pattern as creatix) on every push
to `main`.

- **Stack:** Svelte 5.58 (runes only) · SvelteKit 3.3 · Vite 8.3 ·
  Tailwind CSS 4.3 · TypeScript 6 · adapter-static (prerender + SSR)
- **Content:** all copy lives in one mock-data file, `src/lib/site.ts` —
  real data replaces it only after the client approves the design.
- **Images:** 10 generated PNG masters in `static/images/`, converted to
  AVIF → WebP → JPG → PNG at 480/800/1200/1600 with
  `node scripts/convert-images.mjs static/images/<name>.png` (needs
  `sharp`), and every image renders through
  `#lib/components/Picture.svelte`. Nothing is hotlinked.
- **Fonts:** Playfair Display + Inter, self-hosted woff2 in
  `static/fonts/` (`font-display: swap`). Icons are custom inline SVG
  (`#lib/components/Icon.svelte`) — no icon fonts.
- **Sections (as in the screenshot):** dark topbar → header + weather →
  hero carousel with offer bar → booking widget (check-in / check-out /
  guests steppers + mock availability check) → About with tabs → stats
  band (28,989 guests · 17 rooms · 98% · 97%) → Room Listings carousel
  (189 / 125 / 149 / 99 per night) → six feature cards → newsletter +
  footer with Rooms Gallery.
- **Rules kept:** mobile-first (360/640/768/1024/1280/1440, no horizontal
  scroll at 320px), WCAG 2.2 AA contrast, 44px+ tap targets, visible
  focus, `prefers-reduced-motion`, semantic HTML, SEO meta + LodgingBusiness
  JSON-LD, sitemap/robots endpoints.

## Run

```bash
npm install
npm run dev     # local dev
npm run build   # static build in build/
npm run check   # svelte-check (0 errors expected)
npm test        # Vitest unit tests
npm run test:e2e # Playwright (runs in CI; browsers not downloaded on the VM)
```
