# JodLxVerse — LEARNINGS.md

---

### 2026-05-14 — Nuxt 3 SSR / Static — JodLxVerse full site build (Phases 0–6)

**Result**: success  
**Confidence**: 8/10  
**Duration**: multi-session (~6h across 3 sessions)  
**Plan**: BUILD_PROGRESS.md phases 0–6

**What worked**:
- `gsap.context()` via `useMotionLifecycle` composable: auto-reverts all tweens/ScrollTriggers on component unmount — no manual tracking arrays needed
- `HackyText.vue` `triggerOn` prop pattern: single component serves mount / scroll / hover / manual modes — avoids four separate components
- `Lenis + gsap.ticker` proxy: ScrollTrigger sees Lenis smooth-scroll position, not raw scroll — critical for correct pin/scrub timing
- Nuxt `components: [{ path: '~/components', pathPrefix: false }]`: flattens `<UiHackyText>` → `<HackyText>` for all components; avoids verbose prefix in templates
- `nitro.preset: 'static'` + `prerender.routes` seed list: Nuxt crawls all linked pages automatically from seeded roots — 26 routes prerendered without listing each one
- `titleTemplate: '%s | JodLxVerse'` in `nuxt.config.ts`: page titles auto-get the suffix; home page overrides with `titleTemplate: 'JodLxVerse — Keep. Protect. Reimagine.'` (non-template string bypasses global pattern cleanly)

**What failed or was escalated**:
- `vite: { assetsInclude: [], plugins: [] }` in nuxt.config.ts: on Windows, overrides Vite's default asset patterns; `/svg/degrees.svg` resolved to `D:\svg\` (drive root), causing 500. Fix: remove entire `vite: {}` block.
- `nitro.preset: 'static'` with `npm run dev`: static preset cannot serve dynamic routes without build step; use `nuxt dev` (default preset) for all dev-mode testing
- Phase 5 keeper `second-line` opacity: animated `autoAlpha: 1` but CSS set `opacity: 0.6` — fixed in Phase 6 review pass
- `article.excerpt` field referenced in slug useHead before confirming the article fixture schema had the field (it has `body` only) — caught and corrected before build

**Gaps identified**:
- OG image is a Pillow-generated placeholder (brand colors only, no real typography due to system font unavailability in script context) — needs designed replacement before launch
- Real production media assets (hero webp layers, tableau 9-layer images, protocol WebM videos) not present — placeholder files only; site will look sparse until assets land
- Font Path B (ABCWhyte, Hexaframe, Fraktion — commissioned fonts) deferred to pre-launch; Path A Inter/BigShoulders/SpaceGrotesk substitutes active, console.warn fires on load
- Storyblok CMS integration deferred; static fixtures in place for all content
- Lighthouse audit not run (requires browser + HTTP server); target: Performance ≥ 85, Accessibility ≥ 95, SEO 100

**GitHub research triggered**: no

**Proposed improvement**: 
- Add a `scripts/generate-og.py` Pillow script that renders the real og-image with loaded font files, so it can be regenerated after brand assets arrive
- Add `@nuxtjs/sitemap` module for dynamic sitemap generation once Storyblok journal articles are live (static sitemap.xml would fall out of date)
