# JodLxVerse — BUILD_PROGRESS

> Checkpoint file referenced by CLAUDE.md "Session Persistence".
> Update the checkbox + a short note as each phase completes.
> When resuming a session: read this, then `git log`, then BLUEPRINT.md §37.

---

## Identity Decisions (locked 2026-05-13)

| Decision        | Value                                                                                |
|-----------------|--------------------------------------------------------------------------------------|
| Direction       | **B — Worldbuilding** (preserves KPR cinematic tone; anime-cyberpunk feel)           |
| Hero verbs      | **KEEP. PROTECT. REIMAGINE.** (BLUEPRINT §1 default for Direction B)                 |
| Font path       | **A — Inter Variable + IBM Plex Mono + Big Shoulders Display + Space Grotesk** (MVP fallbacks; commit to Path B before launch) |
| Wallet          | **Removed for MVP** (no SIGN IN button in header — re-evaluate before launch)        |
| Project layout  | **Flat** — Nuxt app at project root alongside BLUEPRINT.md / CLAUDE.md (no subfolder)|

### `[BRAND]` tokens still pending (Direction B defaults where possible)

These are flagged for user input before they're needed:

- Tagline (Section 1: "The Keepers World" → ?)
- Domain
- Collection nouns (singular / plural) — default for B: JODLERS / Jodler
- Faction / Tableau names 1–3 (THE KEEP / FACTIONS / THE WORLD → ?)
- Live counter label
- Social URLs (Twitter, Discord, OpenSea, Careers)
- Contact email
- Brand book ZIP filename
- Console encryption ID format
- Mainnet label
- Console URL fragment
- Footer log filenames
- Hero character label (ANI → ?)
- Coordinates (Tokyo → ?)
- Footer wordmark SVG file

These do not block Phases 0–3. Phase 4 (pages) is when most surface.

---

## Phase Checklist

- [x] **Phase 0 — Project setup** — _2026-05-13_
  - package.json (Nuxt 3 + gsap + @studio-freight/lenis + vue + vue-router)
  - nuxt.config.ts (ssr: true, nitro preset: static, compatibilityDate: 2026-05-13)
  - tsconfig.json, .gitignore, `app.vue` (`<NuxtPage />` shell), `pages/index.vue` (placeholder)
  - Directory scaffold per BLUEPRINT §37: `assets/{css,svg,fonts}`, `components/ui`, `pages`, `plugins`, `composables`, `stores`, `public/{fonts,images/compressed/webp,svg,videos}` — each preserved by `.gitkeep`
  - Git initialized on `main`, no commits yet (awaiting user)
  - `npm install` complete (609 packages, 0 vulnerabilities)
  - `npm run dev` smoke test passes — `HTTP 200` on `localhost:3000`, body contains "Phase 0 scaffold complete"
  - Resolved Nuxt **3.21.5** (Nitro 2.13.4, Vite 7.3.3, Vue 3.5.34) — `^3.13.0` was the floor; npm picked latest 3.x

- [x] **Phase 1 — Foundation** — _2026-05-13_ — commit `f574ca9`
  - `assets/css/global.css` — §3-10 verbatim; @import at top, 6 @font-face (Path A), :root tokens, 13 easings, full .type-* scale, 9 keyframes, reset/utilities
  - `public/fonts/` — InterVariable.woff2 (344KB full variable), IBMPlexMono-VariableFont.woff2 (6.8KB static 400), BigShouldersDisplay-Bold.woff2 (4.6KB), SpaceGrotesk-Variable.woff2 (6.6KB)
  - `plugins/lenis.client.js` — Lenis 1.3.23 + gsap.ticker.add + ST proxy + lagSmoothing(0) + reduced-motion guard + page:finish refresh
  - `plugins/fonts.client.js` — Path A console.warn per CLAUDE.md
  - `composables/useScrollTrigger.js` — factory + usePinnedSection + useRevealOnScroll + useStaggerReveal
  - `nuxt.config.ts` — css: global.css, pageTransition: fade, app.head meta
  - Gate: all 6 items ✅; IBM Plex Mono is static 400 only (no variable WOFF2 exists); weights 450-700 fall back to 400 for MVP

- [ ] **Phase 2 — Global components**
  - TheFrame, TheFrameProgress, BtnBurger, TheFrameSubmenu, BtnAudio, IconMark, TheMenu, ThePreloader, TheConsole, TheFooter, ErrorOverlays

- [ ] **Phase 3 — UI components**
  - HackyText (with `.spacer` / `.animation` split), Dot (5×5px square), DotCaption, LinkHover (slide-in not underline), CornerCutSvg, BtnMain, ArticleCard, MediaCard, CitizenCard

- [ ] **Phase 4 — Pages**
  - `/` (Story/Home), `/journal`, `/journal/[slug]`, `/media`, `/gallery`, `/about`, `/protocol`

- [ ] **Phase 5 — Animations**
  - ScrollTrigger parallax, pin+scrub cinematic sections, text stagger reveals, card fan, tableau panel slide-ins, HackyText scramble triggers, reduced-motion overrides

- [ ] **Phase 6 — Content & polish**
  - Storyblok integration (or static fixtures), all `[BRAND]` replacements, asset optimization, wallet decision (already: removed for MVP — confirm), Lighthouse audit, accessibility audit

---

## FONT_NOTES — Path A asset checklist

Files to drop in `public/fonts/` during Phase 1 (variable WOFF2 where possible):

| Slot in BLUEPRINT          | Path A substitute              | Notes                                             |
|----------------------------|--------------------------------|---------------------------------------------------|
| `ABCWhyte`                 | `InterVariable.woff2`          | `font-stretch: 75% 125%; font-weight: 125 950`   |
| `ABCWhytePlus`             | `InterVariable.woff2` (alias)  | same file, alias via second @font-face            |
| `ABCWhyteInktrap`          | `InterVariable.woff2` (alias)  | same file, alias via third @font-face             |
| `IBMPlexMono`              | `IBMPlexMono-VariableFont.woff2` | weight 400–700 variable                          |
| `Hexaframe`                | `BigShouldersDisplay-Bold.woff2` | hexagonal-counter substitute (~70% close)        |
| `Fraktion`                 | `SpaceGrotesk-Variable.woff2`  | variable weight                                   |

When a font alias is loaded, console.warn() once: `[fonts] Using Path A fallback for <ABCWhyte|Hexaframe|Fraktion> — production should use commissioned/licensed font.`

---

## Open flags (none blocking Phase 1 entry)

- ✅ `lenis 1.3.23` (migrated from deprecated `@studio-freight/lenis` — same API, user approved)
- ✅ Initial commit made (`9f0de75`); Phase 1 commit (`f574ca9`)
- Path B (font commissioning) deferred to pre-launch — track in LEARNINGS.md when triggered

---

## How to resume

1. Re-inject `CLAUDE.md` and `BLUEPRINT.md` at session start
2. Read this file (top → bottom)
3. `git log --oneline -20` to see what's actually committed
4. Find the first unchecked phase above; cross-reference against BLUEPRINT §37 build order
5. Spot-check 2–3 already-built components against BLUEPRINT for precision drift before continuing
