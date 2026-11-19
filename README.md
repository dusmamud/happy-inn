# The Happy Inn

**Live:** https://happy-inn.pages.dev · **Repo:** https://github.com/dusmamud/happy-inn

Hotel website that began as a **same-to-same recreation of the client's
reference screenshot**, then upgraded (2026-11-19 audit) into a complete
multi-page boutique hotel website following current best practice:
web-research + axe audit → missing pages, sections and bugs fixed.
Deploys to Cloudflare Pages via GitHub Actions
(`.github/workflows/deploy.yml`, same pattern as creatix) on every push
to `main`.

- **Stack:** Svelte 5.58 (runes only) · SvelteKit 3.3 · Vite 8.3 ·
  Tailwind CSS 4.3 · TypeScript 6 · adapter-static (prerender + SSR) ·
  **Motion** (`motion` package — Motion.dev, the Framer Motion team's
  framework-agnostic successor; Framer Motion itself is React-only) for
  scroll-reveal animation, transform/opacity only, reduced-motion safe.
- **Pages (21 routes):** Home · Rooms & Rates · one page per room
  (`/rooms/[slug]`, photo gallery, size/bed/occupancy/view, amenities,
  sticky rate box) · Specials & Packages · About The Inn · About The Area
  (attractions + arrival/parking) · Gallery (category filter) · Spa
  (treatments + prices) · Dining (hours, menu) · Weddings (packages) ·
  Guest Reviews · FAQ & Policies · Contact (mock form) · Book (full
  booking form, live price summary incl. tax, mock confirmation with
  reference) · Journal + 3 articles · Privacy · Terms · designed 404.
- **Home sections:** hero carousel with H1 + offer bar → booking widget
  (validated dates, nightly estimate) → book-direct perks → About tabs →
  stats band → Room Listings carousel → experience cards (all linked) →
  featured offer → guest reviews (4.9/5, attributed, dated) → gallery
  preview → FAQ preview → newsletter footer. Sticky mobile Book Now bar
  (from $99/night) on every page except /book.
- **Audit fixes:** missing H1 added, 21 axe color-contrast failures →
  0 violations (home, room, book verified with @axe-core/playwright via
  `node scripts/audit.mjs`), dead footer/social links replaced with real
  routes, sitemap rebuilt with real URLs, og:image/canonical/twitter
  cards + favicon added, prices now show the $ symbol.
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
- **Rules kept:** mobile-first (360/640/768/1024/1280/1440, no horizontal
  scroll at 320px), WCAG 2.2 AA contrast, 44px+ tap targets, visible
  focus, `prefers-reduced-motion`, semantic HTML, SEO meta + LodgingBusiness
  JSON-LD with aggregateRating, sitemap/robots endpoints listing all routes.

## Run

```bash
npm install
npm run dev     # local dev
npm run build   # static build in build/
npm run check   # svelte-check (0 errors expected)
npm test        # Vitest unit tests
npm run test:e2e # Playwright (runs in CI; browsers not downloaded on the VM)
```
