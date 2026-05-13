# CLAUDE.md — JodLxVerse Recreation Session Context

> **Inject at the start of every Claude Code session.**
> Read this file AND BLUEPRINT.md before doing anything else.
> Confirm both are read, then ask which Phase to start.

---

## PROJECT

**Name:** JodLxVerse
**Owner:** Jodl (Hriddhish Ranjan Sarkar)
**Original reference:** https://kprverse.com/
**Stack:** Nuxt 3 · Vue 3 · GSAP 3 · ScrollTrigger · Lenis v1.x · Storyblok (mocked for dev)
**Build target:** `nuxt generate` (static) initially; SSR if backend logic added
**Source of truth:** `BLUEPRINT.md` in project root
**Identity decision:** [BRAND] direction not yet finalized — see BLUEPRINT.md Section 1

---

## SOURCE OF TRUTH HIERARCHY

```
1. BLUEPRINT.md sections marked [REAL_CODE]   → trust verbatim, never modify
2. BLUEPRINT.md sections marked [REAL_DOM]    → trust as architectural pattern
3. BLUEPRINT.md sections marked [PATTERN]     → use as scaffolding, verify against original site if precision matters
4. BLUEPRINT.md sections marked [BRAND]       → STOP and ask the user
5. Your judgment                              → LAST RESORT, always with a FLAG
```

When two sources conflict: `[REAL_CODE]` > `[REAL_DOM]` > `[PATTERN]` > judgment.

---

## HARD RULES (NON-NEGOTIABLE)

### Precision
- **Never round pixel values.** `font-weight: 573` stays 573 (not 600). `font-size: 50.4rem` stays 50.4rem (not 50). `letter-spacing: -0.095em` stays exact (not -0.1em).
- **Never invent a color** outside the 6 root tokens: `--cl-black`, `--cl-white`, `--cl-green` (#c0fb50), `--cl-lavender` (#968adf), `--cl-error` (#b83e35), `--cl-debug`. Section bg colors come from `[BRAND]` images, not CSS.
- **Never invent a font size** outside the `.type-*` classes in BLUEPRINT Section 6.
- **Never substitute fonts at the family level.** If `ABCWhytePlus` is missing, fall back to Inter and **log a warning**. Don't silently swap.
- **Use CSS custom properties everywhere.** Raw values only inside `/assets/css/global.css`. Component styles use `var(--token)`.

### Architecture
- **No full Tailwind.** UnoCSS is the production atomic CSS; we mirror with minimal utility classes if needed.
- **No third-party component libraries** (no Vuetify, Headless UI, Element Plus).
- **Scoped `<style>` per component** + global CSS variables. No CSS-in-JS.
- **All SVGs inline** via Vite `?inline` — never `<img src="...svg">`.
- **All images `.webp`** from `/images/compressed/webp/`.
- **All videos `.webm`** for transparent video, `.mp4` otherwise.
- **Z-index always uses tokens** (`var(--z-frame)` not `100`).
- **Variable fonts:** `font-stretch: 75% 125%; font-weight: 125 950` on ABCWhyte variants — preserve this contract.

### Brand Replacement
When you encounter `[BRAND]` in BLUEPRINT:
1. Check Section 1 brand map for a defined replacement.
2. If defined → use that replacement.
3. If undefined → **STOP and ask the user.** Do not invent copy.

### GSAP / Lenis / ScrollTrigger
- Initialize **Lenis first**, then ScrollTrigger proxy, then any animations.
- Lenis duration: `1.2s`. Easing: `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`.
- Use `gsap.ticker.add` to drive Lenis (NOT `requestAnimationFrame` directly).
- Call `gsap.ticker.lagSmoothing(0)` after Lenis setup.
- Run `ScrollTrigger.refresh()` after Lenis init AND on every route change.
- All animations: client-side only (`.client.js` plugin or `if (process.client)` guard).
- **Respect `prefers-reduced-motion`** — disable parallax, scrub, HackyText scramble.

### Theme Inversion
- Each section sets `data-theme="dark"` or `data-theme="light"` attribute.
- A ScrollTrigger observer toggles `.theme-dark` on `.the-frame-layer` as sections pass beneath.
- Frame elements use `currentColor` and `var(--colorLines)` — they invert automatically.

### Audio Bars
- 4 vertical lines, each `height: 13px; width: 1px; margin: 0 1px`.
- Animation via JS `requestAnimationFrame` (NOT CSS keyframes).
- Each line gets `transform: scaleY(N)` where N varies 0.6–1.4 randomly.
- When audio muted: scaleY = 1, all bars static at 13px.

### HackyText
- Two-element architecture: `.spacer` (invisible on desktop, holds layout) + `.animation` (absolute, runs scramble).
- Mobile: `.spacer` visible, `.animation` hidden via `display: none`.
- Character pool: `'!@#$%^&*()_+-=[]{}|;:,.<>?/~\`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'`.
- Per-character delay: ~15–30ms. Total duration: ~600ms.
- Resolution: left-to-right, each character cycles 3–6 times then locks.

---

## DO NOT

- ❌ Refactor working code unless explicitly asked
- ❌ Add features not specified in BLUEPRINT.md
- ❌ Change z-index values — the stack is exact
- ❌ Add `border-radius` to elements specified as 0 or unspecified
- ❌ Add animations before structure phase complete
- ❌ Use placeholder colors (`#ff0000`, `#ccc`, named CSS colors)
- ❌ Load IBM Plex Mono from Google Fonts — production self-hosts
- ❌ Swap `<NuxtLink>` for plain `<a>` — internal routing depends on it
- ❌ Collapse the 9-layer tableau structure into a single image
- ❌ Generate `[BRAND]` copy without explicit user guidance
- ❌ Use `<form>` tags inside Vue components unless explicitly needed
- ❌ Skip `ScrollTrigger.refresh()` after dynamic content loads
- ❌ Mix CSS units arbitrarily — follow BLUEPRINT's rem-vs-px choices exactly

---

## FONT STRATEGY [BRAND DECISION REQUIRED]

The production fonts are commercial. Three paths:

### Path A — MVP with free fallbacks (recommended start)
```css
/* In global.css, replace ABCWhyte/Plus/Inktrap with Inter Variable */
@font-face {
  font-family: 'ABCWhyte';
  font-stretch: 75% 125%;
  font-weight: 125 950;
  font-display: swap;
  src: url('/fonts/InterVariable.woff2') format('woff2-variations');
}
/* Same approach for ABCWhytePlus, ABCWhyteInktrap */

@font-face {
  font-family: 'IBMPlexMono';
  font-weight: 400 700;
  src: url('/fonts/IBMPlexMono-VariableFont.woff2') format('woff2-variations');
}

@font-face {
  font-family: 'Hexaframe';
  src: url('/fonts/BigShouldersDisplay-Bold.woff2') format('woff2');
}

@font-face {
  font-family: 'Fraktion';
  src: url('/fonts/SpaceGrotesk-Variable.woff2') format('woff2-variations');
}
```

**This works for development.** Visual differences vs. production: ~15% off, but architecture is correct.

### Path B — Commission custom fonts
For a real production rebrand of JodLxVerse, commission a Hexaframe replacement with hexagonal counters (signature element of the original) and license proper grotesque/inktrap pairs.

### Path C — Use original fonts (LEGAL RISK)
Do NOT reuse the KPR font files. Commercial license violation.

**Recommendation:** Path A for MVP. Commit to Path B before public launch.

---

## STORYBLOK STRATEGY

For local development, mock all CMS responses:

```
/server/mocks/
├── journal-articles.json     (9 entries: 3 each in UPDATES / COMMUNITY / FINDERS LAB)
├── media-items.json          (67 entries total: 51 image, 30 video, 0 audio)
├── gallery-citizens.json     (sample collection)
├── protocol-sections.json    (5 sections: vision/world/characters/portal/union)
└── about-content.json
```

No live API calls during build. Only enable Storyblok integration when user explicitly requests.

[BRAND] If JodLxVerse uses static markdown instead:
- Replace Storyblok types with `.md` files in `/content/`
- Use `@nuxt/content` module
- For MVP, hardcode content directly in Vue templates

---

## WALLET STRATEGY

The original is Web3 NFT. **JodLxVerse default: stub the wallet.**

```vue
<!-- components/ui/WalletConnect.vue (stub) -->
<template>
  <BtnMain @click="handleConnect">{{ label }}</BtnMain>
</template>
<script setup>
const label = ref('SIGN IN')
const handleConnect = () => {
  console.warn('[wallet stub] Connect triggered — implement or replace')
  // Replace with: route to /about, open newsletter modal, or remove entirely
}
</script>
```

Replace "SIGN IN" with:
- Static `<NuxtLink to="/about">` (simplest)
- Newsletter subscription form
- "Get Notified" waitlist
- Remove from header entirely

**Do NOT implement real Ethereum integration** unless user explicitly requests AND we discuss security implications first (key handling, MetaMask flow, signing UX).

---

## ACCESSIBILITY (DON'T SKIP)

- All interactive elements have visible focus styles (use lime `#c0fb50` outline at 2px)
- All `<img>` have meaningful `alt` (decorative: `alt=""`)
- Keyboard nav works through all major flows
- Color contrast: WCAG AA minimum (4.5:1 body, 3:1 UI)
- `prefers-reduced-motion: reduce` disables parallax + scrub + scramble
- Preloader audio CTA can be skipped via keyboard
- Use semantic HTML — `<nav>`, `<main>`, `<article>`, `<section>` with proper headings

```js
// Detect motion preference once at app init
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (prefersReducedMotion) {
  // GSAP: set final states immediately, no animations
  // Lenis: disable smooth scroll, native scrolling only
  // HackyText: render target text directly, no scramble
}
```

---

## SESSION PERSISTENCE

If interrupted:

1. Re-inject CLAUDE.md at session start
2. Check `git log` to see last committed phase
3. Look for `BUILD_PROGRESS.md` (Claude Code creates this) to find checkpoint
4. Resume from next unchecked item in BLUEPRINT.md Section 37
5. Do not redo completed work
6. Verify by spot-checking 2-3 components against BLUEPRINT before continuing

```
Build progress (update as each phase completes):
[ ] Phase 0 — Project setup
[ ] Phase 1 — Foundation (CSS tokens, fonts, Lenis)
[ ] Phase 2 — Global components (TheFrame, TheMenu, etc.)
[ ] Phase 3 — UI components
[ ] Phase 4 — Pages
[ ] Phase 5 — Animations
[ ] Phase 6 — Content & polish
```

---

## FLAG PROTOCOL

STOP and flag to the user when:

| Trigger                                                              | Ask                                              |
|----------------------------------------------------------------------|--------------------------------------------------|
| `[BRAND]` token without Section 1 mapping                            | "What should JodLx use for [field]?"             |
| Value seems impossible (negative dimensions, malformed)              | "BLUEPRINT specifies X — intentional?"           |
| Two BLUEPRINT sections contradict                                    | "Section A says X, Section B says Y — which?"   |
| Animation requires DOM restructure                                   | "This animation needs DOM change Y — proceed?"   |
| Asset path doesn't exist in project                                  | "Asset X not found — where should I get it?"     |
| Need to invent value not in spec                                     | "BLUEPRINT doesn't cover Y — invent or wait?"    |
| Dependency outside stack needed                                      | "Would need package X — install?"                |
| Production secret / API key                                          | "Need credential X — provide via .env?"          |
| Bundle > 500KB initial JS, FCP > 2s                                  | "Build is slow — optimize before continuing?"   |
| Font file missing                                                    | "Font X missing — use Inter fallback or stop?"   |
| `[PATTERN]` section needs precision and I'm not sure of the values   | "Section N is pattern-inferred — verify first?"  |

**Flag format:**
```
🚩 FLAG: [issue]
   Context: [where it surfaced]
   Need: [what I need from user to proceed]
   Default if no answer: [STOP / fallback / skip]
```

Silent invention is the failure mode that destroys long Claude Code sessions. Never silently invent.

---

## QUALITY GATES PER PHASE

### Phase 1 Complete
- [ ] `:root` has all CSS custom properties from BLUEPRINT Section 4
- [ ] All 6 `@font-face` declarations in place (or fallbacks with warnings)
- [ ] All 13 easings from Section 8 present in `:root`
- [ ] All 9 keyframes from Section 9 present
- [ ] `html { font-size: 10px }` set with `clamp()` responsive scaling
- [ ] Lenis initialized in `/plugins/lenis.client.js` with ScrollTrigger sync
- [ ] No console errors on `npm run dev`

### Phase 2 Complete
- [ ] TheFrame renders on all pages with correct insets (87px left, 71px top)
- [ ] Theme inversion works (test on light/dark sections)
- [ ] BtnBurger toggles TheMenu
- [ ] TheMenu opens with stagger animation matching pattern
- [ ] ThePreloader covers viewport, simulates progress, fades on CTA click
- [ ] TheFooter renders with all 4 columns + wordmark + bottom bar
- [ ] ErrorOverlays trigger correctly on resize <1024px landscape

### Phase 3 Complete
- [ ] All UI components render in isolation
- [ ] HackyText scramble runs on hover with proper `.spacer`/`.animation` architecture
- [ ] LinkHover slide-in works (NOT underline)
- [ ] DotCaption renders with 5×5px square dot (NOT bullet character)

### Phase 4 Complete
- [ ] All 6 pages route correctly via NuxtLink
- [ ] Each page's frame submenu matches BLUEPRINT Section 16 table
- [ ] Hero wordmarks render at correct size (50.4rem Hexaframe)
- [ ] Page transitions don't break Lenis or ScrollTrigger
- [ ] `data-theme` attributes trigger correct frame inversion

### Phase 5 Complete
- [ ] Parallax layers move at expected speeds
- [ ] Cinematic sections pin correctly with scrub
- [ ] Tableau panels slide in on scroll with click-and-hold reveal
- [ ] Card fan animation in Collection section works
- [ ] No jank or CLS (cumulative layout shift)
- [ ] `prefers-reduced-motion` properly disables motion

### Phase 6 Complete
- [ ] Lighthouse ≥90 desktop, ≥70 mobile
- [ ] Bundle: initial JS <500KB
- [ ] LCP <2.5s
- [ ] All `[BRAND]` tokens replaced
- [ ] All accessibility checks pass
- [ ] All commercial-font replacements documented

---

## STARTUP COMMAND TEMPLATE

When opening a fresh Claude Code session:

```
I'm building JodLxVerse — a rebrand of kprverse.com.

Read BLUEPRINT.md and CLAUDE.md in the project root before doing anything else.

Confirm you've read both, summarize the project in 3 sentences to verify
understanding, then tell me which Phase to start with based on the
BUILD_PROGRESS checklist.

Trust BLUEPRINT.md verbatim. Use the FLAG protocol when you hit gaps.
Do not invent values. Do not skip BLUEPRINT precision (e.g. font-weight: 573).
```

---

## END NOTE — THE PHILOSOPHY

This codebase is unusual — the original site is **genuinely sophisticated**:
- 13 cubic-bezier easings, 9 keyframes, 48-column grid
- 6 self-hosted variable fonts
- Custom HackyText / LinkHover / DotCaption / CornerCutSvg primitives
- Lenis + GSAP + ScrollTrigger triple integration
- Theme inversion system that flips frame chrome based on section bg
- 9-layer parallax tableau structure
- WebGL canvases for the most cinematic moments
- AE-exported SDF SVG for the preloader animation

It is not a beginner project. Drift even 2px on the burger button or 0.5px on letter-spacing and the result feels off in a way that's hard to debug after the fact.

**Read BLUEPRINT line → implement exactly → verify visually → move on.**

When in doubt: re-read BLUEPRINT.md.
When still in doubt: FLAG.
