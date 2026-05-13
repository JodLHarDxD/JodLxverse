# JodLxVerse — BLUEPRINT.md

> **Bit-for-bit recreation specification, rebranded from kprverse.com**
>
> Original source: https://kprverse.com/
> Rebrand: KPR → **JodLx**, KPRverse → **JodLxVerse**, KEEPERS → **JODLERS** (or your final choice)
>
> **Provenance flags throughout this document:**
> - `[REAL_CODE]` — extracted directly from production CSS files (`/_nuxt/*.css`). Verbatim.
> - `[REAL_DOM]`  — extracted from live DOM inspection on the production site
> - `[PATTERN]`   — extrapolated from the established design system for pages we didn't deep-extract. Built using only real tokens from `[REAL_CODE]`; no values invented outside the system.
> - `[BRAND]`     — your replacement value goes here

---

## TABLE OF CONTENTS

1. Project Identity & Brand Map
2. Tech Stack
3. Responsive System & Base Sizing
4. CSS Design Tokens (`:root`)
5. Color Palette
6. Typography System (Complete Type Scale)
7. Font Loading
8. Easing Library
9. Keyframe Animations
10. Global Reset & Utilities
11. Grid System
12. TheFrame (Persistent Chrome)
13. FrameLayer (Theme Inversion System)
14. FrameProgress (Scroll Indicator)
15. BtnBurger
16. FrameSubmenu (Per-Page Filter Tabs)
17. BtnAudio
18. IconMark (Crosshair)
19. HackyText (Glitch Scramble)
20. Dot Component
21. DotCaption
22. LinkHover
23. CornerCutSvg
24. TheMenu (Hamburger Overlay)
25. ThePreloader
26. TheConsole / TheConsoleLoading
27. TheFooter
28. Page: Story / Home (`/`)
29. Page: Journal (`/journal`)
30. Page: Media (`/media`)
31. Page: Gallery (`/gallery`)
32. Page: About (`/about`)
33. Page: Protocol (`/protocol`)
34. Asset Manifest
35. Z-Index Stack
36. Error States
37. Build Order Reference

---

## 1. PROJECT IDENTITY & BRAND MAP

This section is the **single point of edit** for rebranding. Every reference to JodLx elsewhere in this document traces back to here.

### Identity Map

| Field                    | Original (KPR)                                | JodLxVerse                                       |
|--------------------------|-----------------------------------------------|--------------------------------------------------|
| Brand short              | KPR                                           | **JodLx**                                        |
| Brand long               | KPRverse                                      | **JodLxVerse**                                   |
| Tagline                  | "The Keepers World"                           | **[BRAND]** "The JodLx Architecture" or similar  |
| Domain                   | kprverse.com                                  | **[BRAND]** your domain                           |
| Footer wordmark SVG      | `footer_kpr.034b6b12.svg`                     | **`footer_jodlx.svg`** (replace with your SVG)   |
| Collection noun (plural) | KEEPERS                                       | **JODLERS** or [BRAND]                           |
| Collection noun (singular) | Keeper                                      | **Jodler** or [BRAND]                            |
| Hero verbs (3-word)      | KEEP. PROTECT. REIMAGINE.                     | **[BRAND]** pick 3 verbs                          |
| Faction 1 / Tableau 1    | THE KEEP                                      | **[BRAND]**                                       |
| Faction 2 / Tableau 2    | FACTIONS                                      | **[BRAND]**                                       |
| World / Tableau 3        | THE WORLD                                     | **[BRAND]**                                       |
| Live counter             | "28 Keepers Live"                             | **"N Jodlers Live"** [BRAND]                     |
| Twitter URL              | https://twitter.com/KPRVERSE                  | **[BRAND]**                                       |
| Discord URL              | https://discord.com/invite/kpr                | **[BRAND]**                                       |
| OpenSea collection       | https://opensea.io/collection/kprverse        | **[BRAND]** or remove if not NFT                  |
| Careers URL              | https://kpr.homerun.co/?lang=en               | **[BRAND]** or remove                             |
| Contact email            | hello@kprverse.com                            | **hello@[BRAND]**                                 |
| Brand book ZIP           | `kpr_brandbook_v1-0.zip` (Storyblok CDN)      | **`jodlx_brandbook_v1-0.zip`** [BRAND]           |
| Console encryption ID    | `Encrypted Protocol cl67-56203000` (varies)   | **[BRAND]** any pattern `XXNN-NNNNNNNN`          |
| Mainnet label            | "Keep Mainnet"                                | **"JodLx Mainnet"** [BRAND]                      |
| Console URL fragment     | `KPRVERSE.COM/KPCO/KAI-14/...`                | **[BRAND]** your fictional path                  |
| Footer log filenames     | `KAI_53815.JPG`, `AUDIO_LOG_2018116.WAV`      | **[BRAND]** fictional file references            |
| Hero character label     | "ANI"                                         | **[BRAND]** your avatar/concept name             |
| Coordinates display      | `N 35°27.37 E 139°38.57` (Tokyo)              | **[BRAND]** your coordinates                     |
| Copyright year           | © 2022                                        | © 2026                                            |

### Identity Tone — JodLxVerse Direction

The site architecture works for any of these directions. Pick one before filling `[BRAND]` tokens:

- **Direction A — Personal Reasoning Architecture Portfolio:** SCA, KDA, AGA, WPA, COHERENCE as the "Protocol" page. VoxDub, TreadX, MediaStrip as the "Collection" cards. Verbs: REASON. BUILD. EVOLVE.
- **Direction B — Worldbuilding (preserves KPR cinematic tone):** Original anime-cyberpunk feel, fictional universe. Verbs: KEEP. PROTECT. REIMAGINE.
- **Direction C — AI Research Showcase:** Your papers and frameworks as the content. Verbs: QUESTION. STRUCTURE. CONVERGE.

---

## 2. TECH STACK [REAL_CODE — confirmed across note4 + note5]

| Layer            | Technology                                                  |
|------------------|-------------------------------------------------------------|
| Framework        | **Nuxt 3** (Vue 3 SPA/SSR)                                   |
| CSS              | Scoped component CSS — each Vue component ships a hashed `.css` chunk |
| Atomic CSS       | **UnoCSS** (utility class patterns)                          |
| Font rendering   | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale` |
| Base font size   | `10px` on `<html>` (desktop), responsive via `clamp()`       |
| Design width (desktop) | `1600px`                                              |
| Design height (desktop)| `850px`                                               |
| Design width (mobile)  | `375px`                                               |
| Design height (mobile) | `667px`                                               |
| Scale mode             | `width`                                               |
| Desktop scale min/max  | `0.64 → 1.2`                                          |
| Mobile scale min/max   | `0.8533 → 2.728`                                      |
| Smooth scroll    | Lenis v1.x (`@studio-freight/lenis`)                         |
| Scroll animation | GSAP 3 + ScrollTrigger                                       |
| 3D / WebGL       | Custom Three.js / R3F-equivalent (canvas `class="gl"`)       |
| Image format     | `.webp` from `/images/compressed/webp/`                      |
| Video format     | `.webm` (transparent video where needed)                     |
| SVG handling     | Inline via Vite `?inline` query                              |
| CMS              | Storyblok (assets on `a.storyblok.com`)                      |
| Wallet           | Ethereum (custom `wallet-info` component)                    |
| Font loading     | Self-hosted `@font-face` (variable fonts)                    |

---

## 3. RESPONSIVE SYSTEM [REAL_CODE]

```css
/* Mobile: max-width 767px */
@media only screen and (max-width: 767px) { ... }

/* Desktop: min-width 768px */
@media only screen and (min-width: 768px) { ... }

/* Desktop font-size scaling */
@media only screen and (min-width: 768px) {
  html { font-size: clamp(6.4px, 0.625vw, 12px); }
}

/* Mobile font-size scaling */
@media only screen and (max-width: 767px) {
  html { font-size: clamp(8.5333px, 2.6667vw, 27.28px); }
}

/* Override lock (forces fixed 10px base) */
html.remlock { font-size: 10px !important; }
```

**Critical:** Root `font-size: 10px` makes `1rem = 10px` at base. All rem values throughout assume this. Never change the base without recalculating every rem.

---

## 4. CSS DESIGN TOKENS — `:root` [REAL_CODE]

```css
:root {
  /* ─── Z-INDEX LAYERS ─────────────────────────────────────── */
  --z-frame:           100;
  --z-footer:          200;
  --z-overlays:        300;
  --z-resize-overlays: 350;
  --z-loader:          400;
  --z-menu:            500;
  --z-console:         600;
  --z-debug:          1000;

  /* ─── VIEWPORT HEIGHT (JS-updated for mobile browser chrome) */
  --vh100max:   100vh;
  --vh100:      100vh;
  --vh100min:   100vh;
  --jsvh100min: 100vh;
  --roughMin:   calc(100vh - 30vw);
  --safe100min: max(var(--roughMin), var(--jsvh100min));

  /* ─── SPACING / RADIUS ───────────────────────────────────── */
  --radius:   1rem;   /* 10px */
  --overlap:  2rem;   /* 20px */
  --parallax: 4rem;   /* 40px */

  /* ─── LINES / DIVIDERS ───────────────────────────────────── */
  --line-light:     hsla(0, 0%, 100%, 0.2);
  --line-dark:      rgba(0, 0, 0, 0.1);
  --line-thickness: 1px;

  /* ─── FRAME / CHROME DIMENSIONS ──────────────────────────── */
  --menu-width:   67px;
  --menu-height:  51px;
  --menu-pad:     20px;
  --menu-radius:  10px;
  --menu-submenu: 0px;

  /* ─── DERIVED FRAME POSITIONS ────────────────────────────── */
  --menu-top:    calc(var(--menu-pad) + var(--menu-height));  /* = 71px */
  --menu-bottom: calc(var(--menu-pad));                        /* = 20px */
  --menu-left:   calc(var(--menu-pad) + var(--menu-width));   /* = 87px */
  --menu-right:  calc(var(--menu-pad));                        /* = 20px */

  /* ─── COLORS ─────────────────────────────────────────────── */
  --cl-black:    #000000;
  --cl-white:    #ffffff;
  --cl-green:    #c0fb50;   /* neon lime accent */
  --cl-lavender: #968adf;   /* soft purple */
  --cl-error:    #b83e35;
  --cl-debug:    hsla(0, 0%, 100%, 0.3);

  /* ─── GRID SYSTEM ────────────────────────────────────────── */
  --grid-columns:     48;
  --grid-column-gap:  0px;
  --grid-side-margin: 6rem;       /* 60px desktop, 20px mobile */
  --scrollbar-width:  0px;        /* 14px on .windows */
  --grid-max-width:   1776px;
  --grid-width-input: calc(100vw - var(--scrollbar-width) - var(--grid-side-margin) * 2);
  --grid-width:       min(var(--grid-width-input), var(--grid-max-width));
  --grid-column-width: calc(
    (var(--grid-width) - (var(--grid-columns) - 1) * var(--grid-column-gap))
    / var(--grid-columns)
  );
}

/* Windows scrollbar compensation */
:root.windows { --scrollbar-width: 14px; }

/* Mobile overrides */
@media only screen and (max-width: 767px) {
  :root {
    --radius:       0.5rem;
    --overlap:      1rem;
    --parallax:     2rem;
    --padding:      1.6rem;
    --menu-width:   0px;
    --menu-height:  4.1rem;
    --menu-pad:     0px;
    --menu-radius:  0rem;
    --menu-submenu: 3.8rem;
    --menu-bottom:  calc(var(--menu-pad) + var(--menu-submenu));
    --menu-left:    calc(var(--menu-pad));
    --grid-columns: 16;
    --grid-side-margin: 2rem;
    --scrollbar-width: 0px;
    --vh100min: var(--safe100min);
  }
}
```

---

## 5. COLOR PALETTE [REAL_CODE]

The production palette is **minimal by design**:

| Token             | Hex       | Role                                              |
|-------------------|-----------|---------------------------------------------------|
| `--cl-black`      | `#000000` | Footer bg, console, dark sections, primary text on light |
| `--cl-white`      | `#ffffff` | Light section bg, text on dark, button outlines  |
| `--cl-green`      | `#c0fb50` | Lime accent: active dot, live counter, focus highlights |
| `--cl-lavender`   | `#968adf` | Soft purple: hero atmosphere, section accents     |
| `--cl-error`      | `#b83e35` | Form validation, error states                    |
| `--cl-debug`      | `hsla(0,0%,100%,0.3)` | Debug overlays (dev only)             |

**That is the entire system color palette.** Everything else (the painted peach/orange in "You Are A Keeper", the magenta in Factions, the lavender mist of the hero) comes from **illustrated background images**, not CSS color tokens.

This is a critical architectural insight: the brand achieves its rich color identity through **art direction in image assets**, not through extensive color tokens. The UI itself is essentially **B/W + 4 accent colors**.

[BRAND] For JodLxVerse you may add 1-2 more accent tokens, but keep the UI palette minimal. Color richness should come from your hero illustrations and background art.

---

## 6. TYPOGRAPHY SYSTEM [REAL_CODE]

### Complete Type Scale

```css
/* ─── DISPLAY HEADING 1 — Hero wordmarks (JOURNAL, MEDIA, PROTOCOL) ─── */
.type-dh1 {
  font-family: Hexaframe;
  font-size: 50.4rem;             /* 504px at base 10px */
  font-weight: 700;
  letter-spacing: -0.095em;
  line-height: 0.87;
  font-feature-settings: "zero" on;
  font-variation-settings: "opsz" 0.5;
}

/* ─── HEADING 0 — Largest editorial display ─── */
.type-h0 {
  font-family: ABCWhytePlus;
  font-size: 8rem;                /* 80px */
  font-weight: 700;
  letter-spacing: -0.075em;
  line-height: 0.87;
  font-variation-settings: "opsz" 0.5;
  font-feature-settings: "zero" on;
}
@media (max-width: 767px) {
  .type-h0 { font-size: 4.8rem; }
}

/* ─── HEADING 1 ─── */
.type-h1 {
  font-family: ABCWhytePlus;
  font-size: 5.2rem;              /* 52px */
  font-weight: 650;
  letter-spacing: -0.07em;
  line-height: 0.9;
  text-transform: uppercase;
  font-variation-settings: "opsz" 0.5;
  font-feature-settings: "zero" on;
}
@media (max-width: 767px) {
  .type-h1 { font-size: 2.5rem; line-height: 0.95; }
}

/* ─── HEADING 2 ─── */
.type-h2 {
  font-family: ABCWhytePlus;
  font-size: 3.6rem;              /* 36px */
  font-weight: 600;
  letter-spacing: -0.06em;
  line-height: 0.85;
  text-transform: uppercase;
  font-variation-settings: "opsz" 0.5;
}
@media (max-width: 767px) {
  .type-h2 { font-size: 2.8rem; letter-spacing: -0.07em; }
}

/* ─── HEADING 3 ─── */
.type-h3 {
  font-family: ABCWhytePlus;
  font-size: 2.2rem;              /* 22px */
  font-weight: 573;               /* yes, 573 — variable font precision */
  letter-spacing: -0.04em;
  line-height: 0.975;
  font-variation-settings: "opsz" 0.5;
}
@media (max-width: 767px) {
  .type-h3 { font-size: 1.6rem; font-weight: 600; }
}

/* ─── BODY 1 ─── */
.type-body1 {
  font-family: ABCWhytePlus;
  font-size: 1.5rem;              /* 15px */
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.3;
  font-variation-settings: "opsz" 0;
}
@media (max-width: 767px) {
  .type-body1 { font-size: 1.2rem; line-height: 1.2; }
}

/* ─── BODY 2 ─── */
.type-body2 {
  font-family: ABCWhyte;
  font-size: 1.8rem;              /* 18px */
  font-weight: 350;
  letter-spacing: normal;
  line-height: 1.5;
  font-variation-settings: "opsz" 0;
}
@media (max-width: 767px) {
  .type-body2 { font-size: 1.5rem; line-height: 1.3; }
}

/* ─── CAPTION 2 — Most-used UI label (nav, tags, dates) ─── */
.type-caption2 {
  font-family: IBMPlexMono;
  font-size: 0.9rem;              /* 9px */
  font-weight: 450;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-transform: uppercase;
}

/* ─── CAPTION 3 ─── */
.type-caption3 {
  font-family: IBMPlexMono;
  font-size: 1rem;                /* 10px */
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-transform: uppercase;
}

/* ─── CAPTION 4 — Fixed px, not rem ─── */
.type-caption4 {
  font-family: IBMPlexMono;
  font-size: 11px;                /* FIXED — not responsive */
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1;
  text-transform: uppercase;
}

/* ─── BUTTON LABEL ─── */
.type-btn {
  font-family: IBMPlexMono;
  font-size: 1.1rem;              /* 11px */
  font-weight: 450;
  letter-spacing: -0.02em;
  line-height: 0.85;
  text-transform: uppercase;
}
@media (max-width: 767px) {
  .type-btn { font-size: 0.9rem; }
}

/* ─── GALLERY LABEL ─── */
.type-gallery {
  font-family: IBMPlexMono;
  font-size: 1.1rem;
  font-weight: 450;
  letter-spacing: -0.04em;
  line-height: 0.85;
  text-transform: uppercase;
}

/* ─── CITIZEN BODY ─── */
.type-citizen-body {
  font-family: ABCWhytePlus;
  font-size: 1.2rem;              /* 12px */
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.4;
}

/* ─── CITIZEN TITLE ─── */
.type-citizen-title {
  font-family: Fraktion;          /* PP Fraktion Sans */
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;
  text-transform: uppercase;
}
@media (max-width: 767px) {
  .type-citizen-title { font-size: 1rem; }
}

/* ─── CITIZEN 2 ─── */
.type-citizen2 {
  font-family: Fraktion;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
```

### Type Scale at a Glance

| Class               | Family       | Size      | Weight | LH    | LS         | Use |
|---------------------|--------------|-----------|--------|-------|------------|-----|
| `.type-dh1`         | Hexaframe    | 50.4rem   | 700    | 0.87  | -0.095em   | Hero wordmarks |
| `.type-h0`          | ABCWhytePlus | 8rem      | 700    | 0.87  | -0.075em   | Largest editorial display |
| `.type-h1`          | ABCWhytePlus | 5.2rem    | 650    | 0.9   | -0.07em    | Section headings |
| `.type-h2`          | ABCWhytePlus | 3.6rem    | 600    | 0.85  | -0.06em    | Sub-headings |
| `.type-h3`          | ABCWhytePlus | 2.2rem    | 573    | 0.975 | -0.04em    | Tertiary headings |
| `.type-body1`       | ABCWhytePlus | 1.5rem    | 400    | 1.3   | -0.02em    | Body copy |
| `.type-body2`       | ABCWhyte     | 1.8rem    | 350    | 1.5   | normal     | Long-form |
| `.type-caption2`    | IBMPlexMono  | 0.9rem    | 450    | 1.1   | -0.02em    | UI labels (most common) |
| `.type-caption3`    | IBMPlexMono  | 1rem      | 400    | 1.1   | -0.02em    | Captions |
| `.type-caption4`    | IBMPlexMono  | 11px      | 400    | 1.0   | -0.02em    | Fixed-size captions |
| `.type-btn`         | IBMPlexMono  | 1.1rem    | 450    | 0.85  | -0.02em    | Buttons |
| `.type-gallery`     | IBMPlexMono  | 1.1rem    | 450    | 0.85  | -0.04em    | Gallery labels |
| `.type-citizen-body`| ABCWhytePlus | 1.2rem    | 400    | 1.4   | -0.01em    | Character bio body |
| `.type-citizen-title`| Fraktion    | 1.2rem    | 700    | 1.1   | 0          | Character bio title |
| `.type-citizen2`    | Fraktion     | 1.1rem    | 500    | 1.1   | -0.02em    | Character meta |

### Critical Precision Values — Never Round
- `.type-h3` font-weight: **`573`** (yes, a variable-font weight precision number)
- `.type-h0` letter-spacing: **`-0.075em`**
- `.type-dh1` letter-spacing: **`-0.095em`**
- `.type-caption4` font-size: **`11px`** (fixed px, NOT 1.1rem)
- All other captions: `-0.02em` letter-spacing
- `.type-body2` letter-spacing: **`normal`** (not 0, literally `normal`)

---

## 7. FONT LOADING [REAL_CODE]

Six self-hosted font families. **All ABCWhyte variants are variable fonts** (`font-stretch: 75% 125%; font-weight: 125 950`).

```css
@font-face {
  font-family: ABCWhyteInktrap;
  font-stretch: 75% 125%;
  font-weight: 125 950;
  font-display: swap;
  src: url('./_nuxt/ABCWhyteInktrapVariable.woff2') format('woff2-variations'),
       url('./_nuxt/ABCWhyteInktrapVariable.woff')  format('woff'),
       url('./_nuxt/ABCWhyteInktrapVariable.ttf')   format('truetype');
}

@font-face {
  font-family: ABCWhytePlus;
  font-stretch: 75% 125%;
  font-weight: 125 950;
  font-display: swap;
  src: url('./_nuxt/ABCWhytePlusVariable.woff2') format('woff2-variations'),
       url('./_nuxt/ABCWhytePlusVariable.woff')  format('woff'),
       url('./_nuxt/ABCWhytePlusVariable.ttf')   format('truetype');
}

@font-face {
  font-family: ABCWhyte;
  font-stretch: 75% 125%;
  font-weight: 125 950;
  font-display: swap;
  src: url('./_nuxt/ABCWhyteVariable.woff2') format('woff2-variations'),
       url('./_nuxt/ABCWhyteVariable.woff')  format('woff'),
       url('./_nuxt/ABCWhyteVariable.ttf')   format('truetype');
}

@font-face {
  font-family: Hexaframe;
  font-stretch: normal;
  font-display: swap;
  src: url('./_nuxt/HexaframeCF-Bold.otf') format('opentype');
}

@font-face {
  font-family: IBMPlexMono;
  font-weight: 400;
  src: url('./_nuxt/IBMPlexMono-Regular.ttf') format('truetype');
}
@font-face {
  font-family: IBMPlexMono;
  font-weight: 500;
  src: url('./_nuxt/IBMPlexMono-Text.ttf') format('truetype');
}
@font-face {
  font-family: IBMPlexMono;
  font-weight: 600;
  src: url('./_nuxt/IBMPlexMono-Medium.ttf') format('truetype');
}
@font-face {
  font-family: IBMPlexMono;
  font-weight: 700;
  src: url('./_nuxt/IBMPlexMono-Bold.ttf') format('truetype');
}

@font-face {
  font-family: Fraktion;
  font-weight: 700;
  src: url('./_nuxt/PPFraktionSans-Bold.ttf') format('truetype');
}
@font-face {
  font-family: Fraktion;
  font-weight: 500;
  src: url('./_nuxt/PPFraktionSans-Medium.ttf') format('truetype');
}

/* CJK i18n (loaded via Google Fonts) */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Sans+SC:wght@400;700;900&family=Noto+Sans+TC:wght@400;700;900&display=swap');
```

### Font Licensing Reality [BRAND]

These are **commercial fonts** — you cannot reuse KPR's font files. For JodLxVerse you need licensed alternatives:

| Original         | Open/Free Alternative              | Premium Alternative              |
|------------------|------------------------------------|----------------------------------|
| **Hexaframe** (custom geometric display, hex counters) | Big Shoulders Display (Google) | Custom commission, or Editor (Pangram Pangram) |
| **ABCWhyte** / Plus / Inktrap | Inter Variable (Google) | GT America, Söhne, Migra |
| **IBM Plex Mono** | IBM Plex Mono (Apache 2.0 — FREE) | Same — already free |
| **Fraktion** (PP Fraktion Sans) | Space Grotesk (Google) | PP Fraktion (Pangram Pangram, licensed) |

**Recommendation for MVP:** Use Inter (display + body) + IBM Plex Mono. Both Google Fonts, free, near-identical character to ABCWhyte + IBMPlexMono.

---

## 8. EASING LIBRARY [REAL_CODE]

Only **13 easings exist** in the production code (not the 22 I previously inferred):

```css
:root {
  --ease-in-quad:     cubic-bezier(0.55,  0.085, 0.68,  0.53);
  --ease-out-quad:    cubic-bezier(0.25,  0.46,  0.45,  0.94);
  --ease-in-cubic:    cubic-bezier(0.55,  0.055, 0.675, 0.19);
  --ease-out-cubic:   cubic-bezier(0.215, 0.61,  0.355, 1.0);
  --ease-in-quart:    cubic-bezier(0.895, 0.03,  0.685, 0.22);
  --ease-out-quart:   cubic-bezier(0.165, 0.84,  0.44,  1.0);
  --ease-in-quint:    cubic-bezier(0.755, 0.05,  0.855, 0.06);
  --ease-out-quint:   cubic-bezier(0.23,  1.0,   0.32,  1.0);
  --ease-in-back:     cubic-bezier(0.6,  -0.28,  0.735, 0.045);
  --ease-out-back:    cubic-bezier(0.175, 0.885, 0.32,  1.275);
  --ease-in-expo:     cubic-bezier(0.95,  0.05,  0.795, 0.035);
  --ease-out-expo:    cubic-bezier(0.19,  1.0,   0.22,  1.0);
  --ease-in-out-sine: cubic-bezier(0.445, 0.05,  0.55,  0.95);
}
```

---

## 9. KEYFRAME ANIMATIONS [REAL_CODE]

Only **9 keyframes exist** in the production system:

```css
@keyframes spin-clockwise         { to { transform: rotate(1turn); } }
@keyframes spin-counterclockwise  { to { transform: rotate(-1turn); } }
@keyframes dashoffset             { to { stroke-dashoffset: 0; } }

@keyframes flash {
  0%   { opacity: 0.2; }
  20%  { opacity: 1; }
  40%  { opacity: 0.2; }
  60%  { opacity: 1; }
  80%  { opacity: 0.2; }
  100% { opacity: 1; }
}

@keyframes pulse {
  0%   { opacity: 1; transform: none; }
  100% { opacity: 0; transform: scale(1.5); }
}

@keyframes blink {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-30%); }
}

@keyframes slideright {
  0%   { transform: translate(-100%); }
  100% { transform: translate(200%); }
}

@keyframes redraw {
  0%   { transform: translate(-100%); }
  100% { transform: translate(0); }
}
```

### Vue Transition Classes (real code)

```css
.fade-enter-active { transition: 0.2s; }
.fade-enter-from   { opacity: 0; }
.fade-leave-active { transition: 0.2s; }
.fade-leave-to     { opacity: 0; }
```

### Note on Audio Bars
There is **no `@keyframes audiobar*`** in production code. The audio bars animate via JS, not CSS (see Section 17 — `.btn-audio`).

---

## 10. GLOBAL RESET & UTILITIES [REAL_CODE]

```css
html {
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
  font-size: 10px;
}
html.remlock { font-size: 10px !important; }

body, html { height: 100%; margin: 0; }

*, ::after, ::before {
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}

a { color: inherit; text-decoration: none; text-transform: inherit; }
svg { fill: currentcolor; }
ol, ul { list-style: none; margin: 0; padding: 0; }
h1, h2, h3, h4, p { margin: 0; }

button, input {
  appearance: auto;
  border: medium none currentcolor;
  border-image: initial;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  outline: none;
  padding: 0;
  text-transform: inherit;
}

input:-webkit-autofill,
input:-webkit-autofill:active,
input:-webkit-autofill:focus,
input:-webkit-autofill:hover {
  transition: 5000000s ease-in-out;
}

button {
  -webkit-tap-highlight-color: transparent;
  background: none;
  cursor: pointer;
}

.artboard {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.3;
  z-index: var(--z-debug);
}

.condensed { font-stretch: condensed; }
.expanded  { font-stretch: expanded; }

.center-align {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.flex-center-column {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.frame-container {
  padding-left:  calc(var(--menu-pad) + var(--menu-width));
  padding-right: calc(var(--menu-pad));
  width: 100%;
}

.frame-container-first {
  padding-left:  calc(var(--menu-pad) + var(--menu-width));
  padding-right: calc(var(--menu-pad));
  padding-top:   calc(var(--menu-pad) + var(--menu-height));
  width: 100%;
}

.the-grid {
  column-gap: var(--grid-column-gap);
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  height: calc(100% - var(--nav-height));
  left: calc(var(--nav-pad) + var(--nav-width));
  overflow: hidden;
  position: absolute;
  top: calc(var(--nav-pad) + var(--nav-height));
  width: calc(100% - var(--nav-width));
}
```

---

## 11. GRID SYSTEM [REAL_CODE]

48-column grid system (16 columns on mobile). Side margins are part of the grid tokens (see Section 4).

```css
.the-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);  /* 48 / 16 */
  column-gap: var(--grid-column-gap);                       /* 0 */
}
```

Sections use this grid to align their content. Components don't fight the grid — they use `grid-column: span N` to claim space.

---

## 12. THE FRAME — CHROME OVERLAY [REAL_CODE]

The persistent UI chrome on every page. Pointer-events pass through the center to content beneath.

```css
.the-frame {
  height: 100vh;
  pointer-events: none;
  width: 100%;
  z-index: var(--z-frame);  /* 100 */
}
@media (max-width: 767px) {
  .the-frame { position: fixed; }
}

.frame-bounds-bottom,
.frame-bounds-left,
.frame-bounds-right,
.frame-bounds-top {
  pointer-events: auto;
  position: absolute;
}

.frame-bounds-top {
  height: var(--menu-top);   /* 71px (20 pad + 51 height) */
  left: 0;
  top: 0;
  width: 100vw;
}

.frame-bounds-left {
  height: 100vh;
  left: 0;
  top: 0;
  width: var(--menu-left);   /* 87px (20 pad + 67 width) */
}

.frame-bounds-bottom {
  bottom: 0;
  height: var(--menu-bottom);  /* 20px */
  right: 0;
  width: 100vw;
}

.frame-bounds-right {
  bottom: 0;
  height: 100vh;
  right: 0;
  width: var(--menu-right);  /* 20px */
}
```

**DOM structure:**
```vue
<TheFrame>
  <FrameBoundsTop>
    <Hamburger />      <!-- 67px slot -->
    <FrameSubmenu />   <!-- filter tabs, fills rest -->
  </FrameBoundsTop>
  <FrameBoundsLeft>
    <IconMark />       <!-- crosshair, ~39px -->
    <BtnAudio />       <!-- audio bars, bottom -->
  </FrameBoundsLeft>
  <FrameBoundsRight />
  <FrameBoundsBottom>
    <FrameProgress />
  </FrameBoundsBottom>
</TheFrame>
```

---

## 13. THE FRAME LAYER — THEME SYSTEM [REAL_CODE]

The frame inverts its colors based on the section beneath it. Light theme is default; `theme-dark` flips it.

```css
.the-frame-layer {
  --color:         #000;
  --colorLines:    var(--line-dark);     /* rgba(0,0,0,0.1) */
  --colorOpposite: #fff;
  color: var(--color);
  pointer-events: none;
}

.the-frame-layer.theme-dark {
  --color:         #fff;
  --colorLines:    var(--line-light);    /* hsla(0,0%,100%,0.2) */
  --colorOpposite: #000;
}

.mask    { overflow: hidden; }
.pad     { padding: var(--menu-pad); }   /* 20px */
.content {
  height: 100%;
  position: relative;
  width: 100%;
  will-change: transform;
}

.line-outer {
  border: var(--line-thickness) solid var(--colorLines);
  border-radius: var(--menu-radius);     /* 10px */
}

/* TOP ROW (hamburger + filter tabs) */
.top {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: var(--menu-height);            /* 51px */
  justify-content: center;
  position: relative;
}
.top .type-caption2 { font-size: inherit; }

.top .hamburger {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 67px;
}
@media (max-width: 767px) {
  .top .hamburger {
    border-right: var(--line-thickness) solid var(--colorLines);
    width: 45px;
  }
}
.top .hamburger .btn-burger { height: 100%; width: 100%; }

.top .bar { flex: 1; height: 100%; position: relative; }
.top .line {
  background: var(--colorLines);
  bottom: 0;
  height: var(--line-thickness);
  left: 0;
  position: absolute;
  width: 100%;
}

/* LEFT SIDEBAR */
.left {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: var(--menu-width);   /* 67px */
}
.left .icon-mark { width: 39px; }
.left .bottom    { bottom: 0; position: absolute; width: 100%; }
.left button     { aspect-ratio: 1/1; position: relative; width: 100%; }

.left .line {
  background: var(--colorLines);
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: var(--line-thickness);
}
```

**JS contract:** Each section on each page sets a `data-theme="dark"` or `data-theme="light"` attribute. A scroll-driven observer toggles `.theme-dark` on `.the-frame-layer` as sections pass beneath. ScrollTrigger handles this.

---

## 14. FRAME PROGRESS INDICATOR [REAL_CODE]

```css
.the-frame-progress { overflow: hidden; }

.progress {
  background: currentColor;
  height: 100%;
  opacity: 0.06;                  /* very subtle */
  transform-origin: left center;
  width: 100%;
  will-change: transform;
}

.line {
  border-right: 1px solid var(--colorLines);
  height: 100%;
  transform-origin: left center;
  width: 100%;
  will-change: transform;
}
```

**JS contract:** `.progress` element has `transform: scaleX(N)` set on it by JS as page scrolls. N = 0 at top, 1 at bottom.

---

## 15. BTN BURGER [REAL_CODE]

```css
.btn-burger {
  align-items: center;
  border: 1px solid transparent;
  border-radius: var(--menu-radius) 0 0 0;  /* 10px top-left only */
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: auto;
  position: relative;
}

.btn-burger .icon-burger {
  stroke: currentColor;
  width: 27px;
}

.btn-burger.hovering {
  border-color: var(--color);
}
```

**Icon:** 2 horizontal lines (not 3 — design choice). Animates to X via JS when menu opens.

---

## 16. FRAME SUBMENU — PER-PAGE FILTER TABS [REAL_CODE]

```css
.the-frame-submenu {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.group {
  font-family: IBMPlexMono;
  font-size: 11px;            /* FIXED px */
  font-weight: 450;
  font-style: normal;
  font-feature-settings: "zero" on;
  letter-spacing: -0.02em;
  line-height: 1;
  text-transform: uppercase;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  pointer-events: auto;
  width: 100%;
}

.submenu > * {
  margin: 0 1rem;
  opacity: 0.4;               /* inactive */
}
.submenu > .active {
  opacity: 1;                 /* active */
}
.submenu.showAll > * {
  opacity: 1;
}

/* Superscript counts (e.g. ALL⁶⁷) */
.super {
  display: inline-block;
  font-size: 8px;
  letter-spacing: -0.04em;
  margin-left: 0.3rem;
  transform: translateY(-0.4em);
}

.group > .right {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
}
.group .left > * { margin-left: 3.8rem; }
```

### Frame Nav Items Per Page

| Page         | Submenu Items                                              |
|--------------|------------------------------------------------------------|
| `/`          | PROJECT • THE KEEP • FACTIONS • THE WORLD                  |
| `/journal`   | ALL • UPDATES • COMMUNITY • FINDERS LAB                    |
| `/media`     | ALL⁶⁷ • IMAGE⁵¹ • VIDEO³⁰ • AUDIO⁰  (superscript = counts) |
| `/gallery`   | KEEPERS COLLECTION • MY COLLECTION                         |
| `/about`     | CONNECT ON TWITTER / DISCORD                               |
| `/protocol`  | VISION • WORLD • CHARACTERS • PORTAL • UNION               |

[BRAND] You can keep these or rename; the spec covers any 4–5 tab combination.

---

## 17. BTN AUDIO [REAL_CODE]

```css
.btn-audio {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  pointer-events: auto;
  position: relative;
  will-change: transform;
}

.btn-audio .line {
  background: currentColor;
  height: 13px;              /* each bar */
  margin: 0 1px;             /* 1px gap */
  transform-origin: center;
  width: 1px;                /* 1px wide */
}
```

**JS contract:** Each `.line` gets `transform: scaleY(N)` animated via `requestAnimationFrame` when audio is active. N varies 0.6–1.4 randomly per bar. When audio is muted, scaleY returns to 1 and all bars sit at 13px static.

---

## 18. ICON MARK — CROSSHAIR [REAL_CODE]

```css
.icon-mark path {
  fill: currentColor;
}
/* Width set elsewhere: 39px in .the-frame-layer .left .icon-mark */
```

**Shape:** 4-pointed star / crosshair `✛`. SVG path.
**JS contract:** Slow rotation via GSAP/rAF. Tied to scroll position with a subtle vertical nudge.

---

## 19. HACKY TEXT — GLITCH SCRAMBLE [REAL_CODE]

```css
.hacky-text {
  position: relative;
}

.spacer {
  max-width: 100%;
  opacity: 0;          /* desktop: invisible, holds layout space */
}
@media (max-width: 767px) {
  .spacer {
    opacity: 1;        /* mobile: shown as static text */
    white-space: pre-line;
  }
}

.animation {
  left: 0;
  max-width: 100%;
  position: absolute;
  top: 0;
}
@media (max-width: 767px) {
  .animation { display: none; }  /* mobile: hidden, spacer takes over */
}
```

**Architecture:**
- `.spacer` (a `<span>` with the final target text) holds layout space invisibly on desktop.
- `.animation` (another `<span>` positioned absolutely on top) runs the JS character-scramble animation.
- On mobile, scramble disables — static text shows via `.spacer`.

**JS implementation pattern:**
```js
const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function scramble(targetText, el, opts = {}) {
  const { duration = 600, perCharDelay = 30 } = opts;
  const length = targetText.length;
  const totalFrames = Math.ceil(duration / 16.67);
  let frame = 0;

  function tick() {
    let output = '';
    for (let i = 0; i < length; i++) {
      const resolvedAt = i * (perCharDelay / 16.67);
      if (frame >= resolvedAt + 4) {
        output += targetText[i];
      } else if (frame >= resolvedAt) {
        output += chars[Math.floor(Math.random() * chars.length)];
      } else {
        output += ' ';
      }
    }
    el.textContent = output;
    frame++;
    if (frame < totalFrames) requestAnimationFrame(tick);
    else el.textContent = targetText;
  }
  requestAnimationFrame(tick);
}
```

---

## 20. DOT COMPONENT [REAL_CODE]

```css
.dot {
  background: currentColor;
  display: inline-block;
  height: 0.5rem;           /* 5px */
  margin-right: 9px;
  max-height: 0.5rem;
  max-width: 0.5rem;
  min-height: 0.5rem;
  min-width: 0.5rem;
  width: 0.5rem;
}

.dot.stroke {
  background: none;
  border: 1px solid;
}
```

**Important:** Not a `•` character — it's a 5×5px square div. The constrained min/max ensures it never reflows.

---

## 21. DOT CAPTION [REAL_CODE]

```css
.dot-caption {
  position: relative;
}

.dot-caption .dot {
  position: relative;
  top: -0.1em;         /* optical alignment with text baseline */
}

.dot-caption .dot.hidden {
  opacity: 0;
}

.dot-caption .link-hover {
  color: currentColor;
}

.dot-caption.singleLine {
  align-items: center;
  white-space: nowrap;
}
.dot-caption.singleLine .dot {
  margin-top: 0;
}
```

Usage: `<DotCaption>SECTION LABEL</DotCaption>` renders as `■ SECTION LABEL` (with the dot offset slightly above baseline for optical balance).

---

## 22. LINK HOVER [REAL_CODE]

```css
.link-hover {
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;
}

.link-hover.disabled { display: contents; }
.link-hover.disabled .bg { display: none; }

.link-hover .bg {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translate(-101%);   /* off-screen left */
  width: 100%;
  /* JS animates to translate(0%) on hover */
}

.link-hover .content {
  display: inline-block;
  max-width: 100%;
  position: relative;            /* sits above .bg */
}
```

**JS contract:** On hover, `.bg` animates `transform: translate(-101%) → translate(0%)` over ~300ms with `--ease-out-quart`. On unhover, slides further right and away.

**Important:** This is a **slide-in background**, not an underline. Common AI misinterpretation.

---

## 23. CORNER CUT SVG [REAL_CODE]

```css
.cornerCutSvg .shape {
  position: absolute;
  /* Shape dimensions come from inline SVG props */
}
```

Decorative folder-tab notch SVG used on tableau panel cards. Inline SVG, dimensions set per usage.

---

## 24. THE MENU — HAMBURGER OVERLAY [REAL_CODE]

```css
.the-menu {
  display: none;            /* JS toggles to flex */
  height: 100vh;
  overflow: hidden;
  pointer-events: auto;
  transform: translateZ(0); /* GPU layer */
  width: 100vw;
  z-index: var(--z-menu);   /* 500 */
}
@media (max-width: 767px) {
  .the-menu { height: 100%; }
}

.underlay .graphic {
  background: linear-gradient(90deg, #fff 27.97%, hsla(0, 0%, 100%, 0.75));
  opacity: 0.85;
}

.container {
  align-items: center;
  border-radius: var(--menu-radius);  /* 10px */
  color: #fff;
  display: flex;
  flex-direction: row;
  height: calc(100% - var(--menu-pad) * 2);
  justify-content: center;
  left: var(--menu-pad);
  position: absolute;
  text-transform: uppercase;
  top: var(--menu-pad);
  width: fit-content;
}
@media (max-width: 767px) {
  .container { height: 100%; left: 0; overflow: hidden; top: 0; width: 100%; }
}

.content {
  flex: 1;
  height: 100%;
  position: relative;
  width: 60rem;             /* 600px content column */
}
[lang="ja-jp"] .content,
[lang="zh-cn"] .content,
[lang="zh-tw"] .content { width: 46rem; }

.content .content-inner,
.content .content-outer {
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
}

.content .content-inner {
  align-items: flex-start;
  background: #000;
  border-radius: var(--menu-radius) 0 0 var(--menu-radius);  /* left rounded */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
@media (max-width: 767px) {
  .content .content-inner { border-radius: var(--menu-radius); }
}

.content .section {
  align-items: stretch;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 2.5rem;
  width: 100%;
}
@media (max-width: 767px) {
  .content .section { padding: 2rem var(--padding); }
}
.content .section:last-child { border-bottom: none; }

.content .left  { width: 14.5rem; }
.content .right { flex: 1; }

.section.close { border-bottom: none; height: 6rem; }
.section.nav   { flex: 1; padding-top: 3.7rem; }
.section.nav .right { align-items: flex-start; }
```

### Menu Sections (top to bottom)

1. **Close** — X button, top right
2. **Nav** — Discover / Story / Protocol / Journal / Media / Gallery / About / Careers↗
3. **Connect** — Twitter / Discord
4. **Buy On** — OpenSea
5. **Locale** — `us-en` dropdown
6. **Footer** — `© 2026` + Live Counter

**Sub-labels** under nav items: `PAGE 001` (Story), `PAGE 002` (Protocol), `PAGE 003` (Journal), etc.

---

## 25. THE PRELOADER [REAL_CODE foundation + PATTERN content]

```css
.preloader {
  background: #FAF9F5;          /* off-white cream */
  position: fixed;
  inset: 0;
  z-index: var(--z-loader);      /* 400 */
}
```

### DOM Structure
```
.preloader
├── .progress-bar  (bottom: 40px, left/right: 40px, 1px height)
│   ├── ">>" prefix     (.type-caption4, black)
│   ├── "LOADING - XX%" (.type-caption4, JS-updated)
│   ├── .progress-fill  (1px black line, JS width 0→100%)
│   └── .status-text    (.type-caption4, right side, cycles per Section 25.1)
└── .cta-audio  (center)
    ├── .icon            (loading-triangles.svg, AE-exported SDF, spin-clockwise)
    ├── SVG ring button:
    │   Desktop: loading-audio-cta-ring.svg (59×59px)
    │   Mobile:  loading-audio-cta-ring-m.svg (27×27px)
    └── "CLICK TO ENABLE SOUND"  (.type-caption4, centered)
```

### 25.1 Status Text Sequence [BRAND]

| Progress % | Status Text                                                        |
|------------|--------------------------------------------------------------------|
| 0–30%      | `HTTPS://JODLXVERSE.COM/JODLX/KAI-14/REACTOR/ISOTOPE-C/43LK2L`     |
| 30–60%     | `INITIALIZING SYSTEM...12`                                          |
| 60–90%     | `LOADING ATTRIBUTES`                                                |
| 90–100%    | `LOADING - 100%`                                                    |

### Exit Sequence
1. Progress reaches 100%
2. User must click `.cta-audio` (gates page interactivity, also enables Web Audio)
3. `.preloader` fades opacity 1→0 over 600ms
4. Lenis initializes, ScrollTrigger.refresh() called
5. Preloader DOM removed

---

## 26. THE CONSOLE / TERMINAL OVERLAY [REAL_CODE foundation]

```css
.the-console {
  z-index: var(--z-console);  /* 600 */
  position: fixed;
}
```

### DOM Structure
```
.the-console
├── Header
│   ├── .encrypted   "Encrypted Protocol cl67-56203000" [BRAND randomized ID]
│   ├── .icon         (mainnet.svg, 11×10px)
│   └── .mainnet-label "JodLx Mainnet" [BRAND]
├── .terminal  (scrolling output, .type-caption3, white on dark)
└── Input row
    ├── input[type="text"]  placeholder="type your command" (.type-caption3)
    └── ghost label "Type Your Command"
```

[BRAND] Repurpose options:
- Chatbot interface (LLM-backed)
- Project status / log display
- Command-driven navigation
- Easter egg lore unlocks

---

## 27. THE FOOTER [REAL_CODE + REAL_DOM]

```css
.the-footer {
  background: #000000;
  color: #FFFFFF;
  z-index: var(--z-footer);   /* 200 */
  width: 100%;
}
```

### DOM Structure

```
footer.the-footer
├── .top-grid  (4-column flex/grid)
│   │
│   ├── Column 1 — Terminal Flavor (.type-caption4, white, uppercase)
│   │     "// INITIALIZING"
│   │     "NEW FILES IN DATABASE"
│   │     ""
│   │     "[BRAND] FILE_001.JPG"
│   │     "[BRAND] AUDIO_LOG_NNNN.WAV"
│   │     ""
│   │     "ACTIVATE CONSOLE FOR ACCESS..."
│   │
│   ├── Column 2 — Discover More
│   │     .section-header "● DISCOVER MORE" (.type-caption2 + Dot)
│   │     <LinkHover>STORY</LinkHover>      → /
│   │     <LinkHover>JOURNAL</LinkHover>    → /journal
│   │     <LinkHover>MEDIA</LinkHover>      → /media
│   │     <LinkHover>GALLERY</LinkHover>    → /gallery
│   │     <LinkHover>ABOUT</LinkHover>      → /about
│   │     <LinkHover>CAREERS ↗</LinkHover>  → [BRAND]
│   │
│   ├── Column 3 — Join the Conversation
│   │     .section-header "● JOIN THE CONVERSATION"
│   │     <LinkHover>TWITTER</LinkHover>  → [BRAND]
│   │     <LinkHover>DISCORD</LinkHover>  → [BRAND]
│   │
│   └── Column 4 — More Details
│         .section-header "● MORE DETAILS"
│         .label "CONTACT US AT"  (white 50% opacity)
│         <LinkHover>hello@[BRAND]</LinkHover>
│         <BtnMain>↓ DOWNLOAD BRAND BOOK</BtnMain>
│           → jodlx_brandbook_v1-0.zip [BRAND]
│
├── .divider  (1px, hsla(0,0%,100%,0.1), full width)
│
├── .footer-wordmark
│     <img src="/_nuxt/footer_jodlx.svg?inline">  [BRAND]
│     Natural size: 1548×537px
│     Scales fluid to viewport width
│
└── .bottom-bar  (flex row, .type-caption4)
      Left:
        <LinkHover>PRIVACY POLICY</LinkHover>     → /legal/privacy-policy
        <LinkHover>TERMS OF SERVICE</LinkHover>   → /legal/terms-of-service
        <LinkHover>LEGAL LICENSE</LinkHover>      → /legal/legal-license
      Right:
        © 2026 [BRAND year]
```

### Brand Book Button
```css
.btn-presskit {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: #fff;
  padding: 10px 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  /* Inherits .type-btn */
}
.btn-presskit:hover {
  background: rgba(255, 255, 255, 0.05);
}
.btn-presskit .icon-download { width: 12px; height: 12px; }
```

---

## 28. PAGE: STORY / HOME (`/`) [REAL_DOM from note.txt]

### Frame submenu
`PROJECT • THE KEEP • FACTIONS • THE WORLD`

### Section 28.1 — Hero: "KEEP. PROTECT. REIMAGINE." [BRAND verbs]

```
Theme: dark (forces white frame chrome)
Background: full-viewport painted illustration
  - Original: purple/lavender mountain landscape with ANI character
  - JodLx: [BRAND] your hero illustration
```

**DOM:**
```vue
<section class="section-hero" data-theme="dark">
  <div class="hero-art-layers">
    <!-- Parallax layers, each <img> moves at different scroll speed -->
    <img class="layer layer-bg"      src="hero-bg.webp"     data-parallax="0.2">
    <img class="layer layer-mid"     src="hero-mid.webp"    data-parallax="0.5">
    <img class="layer layer-character" src="hero-character.webp" data-parallax="0.8">
    <img class="layer layer-fg"      src="hero-fg.webp"     data-parallax="1.0">
  </div>

  <DotCaption class="section-label">001</DotCaption>

  <p class="type-body1 hero-intro">
    [BRAND] is a brand that focuses on collective narrative and empowering
    storytellers. [BRAND] is a living story, an uncharted world waiting to
    be explored, to be imagined.
  </p>

  <div class="hero-wordmark">
    <span class="prefix type-caption4">01K</span>
    <h1 class="type-dh1">KEEP.</h1>      <!-- [BRAND] verb 1 -->
    <span class="prefix type-caption4">02P</span>
    <h1 class="type-dh1">PROTECT.</h1>   <!-- [BRAND] verb 2 -->
    <span class="prefix type-caption4">03R</span>
    <h1 class="type-dh1">REIMAGINE.</h1> <!-- [BRAND] verb 3 -->
  </div>

  <div class="scroll-indicator type-caption4">Scroll</div>
</section>
```

**Animation:** GSAP ScrollTrigger parallax — each layer translates `Y: -[parallax * scrollProgress]px`. Hero verbs stagger fade+translate on page load (post-preloader).

### Section 28.2 — Project Intro [BRAND copy]

```
Theme: light (black frame chrome)
Background: #FAF9F5 (off-white)
```

**DOM:**
```vue
<section class="homeProjectIntro" data-theme="light">
  <DotCaption>001</DotCaption>

  <h2 class="type-h0">
    A FAMILIAR WORLD... SET ON A DIFFERENT PATH.   <!-- [BRAND] -->
  </h2>

  <div class="two-col">
    <div class="col-left">
      <div class="card folder-tab">
        <CornerCutSvg />
        <img src="trailer-side-media.webp" alt="">  <!-- 546×306px -->
      </div>
      <p class="type-body1">[BRAND] body copy</p>
    </div>

    <div class="col-right">
      <div class="character-card folder-tab" data-tilt>
        <CornerCutSvg />
        <img src="character-art.webp" alt="">
        <DotCaption class="character-label">ANI</DotCaption>  <!-- [BRAND] -->
      </div>
    </div>
  </div>

  <img class="decoration deg" src="/svg/degrees.svg">           <!-- 300×45 -->
  <img class="decoration arr" src="/svg/double-arrow-right.svg"><!-- 213×150 -->
</section>
```

**Card hover effect:** Character card has 3D mouse-tilt — subtle `rotateX/rotateY` based on cursor position.

### Section 28.3 — You Are A Keeper (Cinematic Pinned) [BRAND copy]

```
Theme: dark (white frame chrome)
Background: full-viewport painted landscape, warm peach/orange (~#D4956A)
```

**DOM:**
```vue
<section class="homeKeeperIntro" data-theme="dark" data-pin-section>
  <div class="cinematic-bg">
    <!-- Multiple parallax layers: sky, terrain, aircraft, dotted-mesh -->
  </div>
  <div class="hud-overlay">
    <!-- 1px lines forming corner brackets at viewport corners -->
  </div>

  <DotCaption>002</DotCaption>

  <h2 class="type-h0">
    YOU ARE A [BRAND noun]:                <!-- KEEPER → JODLER -->
    AN AGENT OF POWER AND CHANGE IN THIS WORLD.
  </h2>

  <div class="terminal-text type-caption4">
    //INITIALIZING [BRAND] STORY LOADING...[47%]<br>
    Location_Data Character_Attributes [BRAND]x Transmissions
  </div>

  <div class="coordinates type-caption4">
    <img src="/svg/degrees.svg">
    N 35°27.37 E 139°38.57    <!-- [BRAND] your coordinates -->
  </div>

  <!-- Scroll continues to reveal: -->
  <h2 class="type-h0 second-line">
    WHAT WILL YOU DO WITH THIS POWER?
    WILL YOU CHOOSE TO PROTECT OR DESTROY?
    TO GIVE OR TO TAKE?
  </h2>
</section>
```

**Animation:** ScrollTrigger `pin: true, scrub: 1`. Background layers parallax at independent speeds. HackyText on terminal-text. Coordinates flicker via `@keyframes flash`.

### Section 28.4 — Collection [BRAND content]

```
Theme: light (black frame chrome)
Background: #968adf (--cl-lavender)
```

**DOM:**
```vue
<section class="homeCollectionIntro" data-theme="light">
  <div class="col-left">
    <DotCaption>004</DotCaption>
    <h2 class="type-h0">
      10,000 UNIQUE DIGITAL COLLECTIBLES.   <!-- [BRAND] adjust quantity/noun -->
    </h2>
    <img src="/svg/measurement-lines.svg" class="decoration"><!-- 258×260 -->
  </div>

  <div class="col-right">
    <DotCaption>INITIAL COLLECTION</DotCaption>
    <p class="type-body1">[BRAND] body copy about collection</p>
  </div>

  <div class="collectionGallery">
    <!-- Card fan/scatter — see animation pattern -->
    <div class="card-stack">
      <div class="card" v-for="card in cards">...</div>
    </div>
    <button class="collectionGallery__arrowUp">
      <img src="/svg/arrow-down.svg" style="transform: rotate(180deg)">
    </button>
    <button class="collectionGallery__arrowDown">
      <img src="/svg/arrow-down.svg">
    </button>
    <img class="face-traits-detail" src="face-traits.webp">  <!-- 800×699px -->
  </div>
</section>
```

**Card fan animation:** ScrollTrigger reveals cards as fanned spread (each rotated, offset).
```js
gsap.to(cards, {
  rotation: (i) => (i - centerIdx) * 8,
  x: (i) => (i - centerIdx) * 60,
  y: (i) => Math.abs(i - centerIdx) * -10,
  stagger: 0.05,
  ease: "back.out(1.4)",
  scrollTrigger: { ... }
});
```

[BRAND] For JodLxVerse (non-NFT), repurpose as **project showcase**: each card is one of your projects (VoxDub, TreadX, MediaStrip...).

### Section 28.5 — Tableau Panels [REAL paths]

Three large illustrated panels with parallax + click-and-hold reveal.

**Image paths (preserve this 9-layer structure for the parallax depth illusion):**
```
/images/compressed/webp/tableau/[section]/second-layer/flow-0/set-[N]/
  cl.webp   — Center Large
  cs.webp   — Center Small (1000×1000px)
  trc.webp  — Top-Right Corner
  brc.webp  — Bottom-Right Corner
  blc.webp  — Bottom-Left Corner (500×500px)
  crl.webp  — Corner Right Large
  crs.webp  — Corner Right Small
  cbl.webp  — Corner Bottom Large
  cbs.webp  — Corner Bottom Small

Original sections: keep (6 sets), factions (6 sets), universe (5 sets)
Extras: tableau/factions/second-layer/extras/details.webp
```

**Panel DOM:**
```vue
<div class="card-panel" :class="{ 'is-holding': isHolding }">
  <CornerCutSvg />
  <div class="layers">
    <img class="layer cl"  src="...cl.webp">
    <img class="layer cs"  src="...cs.webp">
    <img class="layer trc" src="...trc.webp">
    <img class="layer brc" src="...brc.webp">
    <img class="layer blc" src="...blc.webp">
    <img class="layer crl" src="...crl.webp">
    <img class="layer crs" src="...crs.webp">
    <img class="layer cbl" src="...cbl.webp">
    <img class="layer cbs" src="...cbs.webp">
  </div>
  <DotCaption class="panel-label">001 • THE KEEP</DotCaption>   <!-- [BRAND] -->
  <div class="caption type-body1">
    The last stronghold of all knowledge...  <!-- [BRAND] -->
  </div>
  <div class="click-hold-prompt type-caption4">CLICK & HOLD</div>
</div>
```

**Click-hold interaction:**
```css
.card-panel.is-holding {
  transform: scale(0.98);
}
.card-panel.is-holding .layers .layer {
  /* Independent transforms reveal hidden second-layer detail */
}
```

### Section 28.6 — KEEPERS Wordmark Transition [BRAND]

```
Theme: light
Background: white
```

```vue
<section class="homeKeepersTransition" data-theme="light">
  <h1 class="type-dh1 keepers-wordmark">
    KEEPERS    <!-- [BRAND] JODLERS or your concept -->
  </h1>
  <div class="floating-cards">
    <!-- 3 small tableau panel thumbnails overlap the letterforms -->
    <div class="float-card card-keep">...</div>
    <div class="float-card card-factions">...</div>
    <div class="float-card card-world">...</div>
  </div>
  <p class="type-body1">BECOME A [BRAND]...</p>
</section>
```

---

## 29. PAGE: JOURNAL (`/journal`) [REAL_DOM from note2.txt + foundation tokens]

### Frame submenu
`ALL • UPDATES • COMMUNITY • FINDERS LAB`

### Section 29.1 — Hero

```vue
<section class="journal-hero" data-theme="light">
  <DotCaption class="active">ALL</DotCaption>

  <h1 class="type-dh1 journal-wordmark">JOURNAL</h1>

  <div class="meta-bar">
    <span class="type-caption4">DISCOVER WHAT'S NEW IN THE [BRAND] WORLD</span>
    <DotCaption>LATEST ARTICLE: 27.03.26</DotCaption>
  </div>
</section>
```

### Section 29.2 — Featured Article Hero

```vue
<section class="featured-article" data-theme="dark">
  <img class="featured-bg" src="featured-hero.webp">  <!-- full-bleed -->

  <div class="featured-overlay">
    <DotCaption class="type-caption4">FEATURED · 18.08.22</DotCaption>
    <h2 class="type-h0">OUR ORIGIN STORY</h2>      <!-- [BRAND] -->
    <a class="cta type-btn" href="/journal/our-origin-story">
      READ STORY →
    </a>
  </div>

  <!-- Side UI -->
  <div class="progress-dots">·····</div>
  <button class="arrow-prev"><ChevronLeft /></button>
  <button class="arrow-next"><ChevronRight /></button>
</section>
```

### Section 29.3 — Article Grid

**Layout:** 2-column desktop / 1-column mobile.

Left column (~35% width): Category sidebar + small featured card.
Right column (~65% width): Large featured card.
Border: 1px solid var(--line-dark) between columns.

```vue
<section class="article-grid" data-theme="light">
  <div class="grid-left">
    <DotCaption>36 STORIES</DotCaption>   <!-- HackyText scrambles -->

    <nav class="category-nav">
      <a class="category-item active type-h2">ALL NEWS</a>
      <a class="category-item type-h3">UPDATES</a>
      <a class="category-item type-h3">COMMUNITY</a>
      <a class="category-item type-h3">FINDERS LAB</a>
    </nav>

    <ArticleCard size="small" :data="threeYearAnniversary" />
  </div>

  <div class="grid-right">
    <ArticleCard size="large" :data="newEdenDreams" />
  </div>
</section>

<div class="load-more">
  <a class="type-btn">LOAD MORE ···</a>     <!-- ··· animates -->
</div>
```

### Section 29.4 — Article Card Component

```vue
<a class="article-card" :class="`size-${size}`" :href="data.url">
  <div class="card-header">
    <DotCaption class="card-tag">{{ data.category }}</DotCaption>
    <span class="card-date type-caption4">{{ data.date }}</span>
  </div>

  <h3 class="card-title type-h3">{{ data.title }}</h3>

  <div class="card-image">
    <img :src="data.thumbnail" :alt="data.title">
    <ChevronRight class="card-arrow" />
  </div>
</a>
```

```css
.article-card {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--line-dark);
  padding: 2rem;
  transition: border-color 0.3s var(--ease-out-quart);
}
.article-card:hover {
  border-color: var(--color);
}
.article-card.size-small  { /* fits 35% column */ }
.article-card.size-large  { /* fits 65% column */ }

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.card-title {
  margin-bottom: 2rem;
}

.card-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-arrow {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  /* white, drop-shadow */
}
```

### Section 29.5 — "To Be Continued" Section

```vue
<section class="to-be-continued" data-theme="dark">
  <img class="bg-cinematic" src="continued-landscape.webp">

  <div class="content-left">
    <DotCaption class="type-caption4">TO BE CONTINUED</DotCaption>
    <h2 class="type-h0">
      THE [BRAND]<br>
      WORLD IS EVER<br>
      EVOLVING.
    </h2>
  </div>

  <div class="content-right">
    <div class="socials">
      <a href="[BRAND twitter]"><TwitterIcon /></a>
      <a href="[BRAND discord]"><DiscordIcon /></a>
    </div>
    <blockquote class="type-body1">
      There is the life you have, and there is the life you want.<br>
      The difference? The choices you make, and the calls you answer.
    </blockquote>
  </div>
</section>
```

### Article URLs (for routing) [BRAND]

| Article                       | Slug                              |
|-------------------------------|-----------------------------------|
| Our Origin Story              | `/journal/our-origin-story`       |
| Three Year Anniversary        | `/journal/three-year-anniversary` |
| New Eden Dreams: How To Play  | `/journal/ned-how-to-play`        |

---

## 30. PAGE: MEDIA (`/media`) [PATTERN]

### Frame submenu
`ALL⁶⁷ • IMAGE⁵¹ • VIDEO³⁰ • AUDIO⁰`

Superscript numbers = item counts fetched from CMS at runtime.

### Hero

```vue
<section class="media-hero" data-theme="light">
  <DotCaption class="active">ALL</DotCaption>
  <h1 class="type-dh1">MEDIA</h1>
  <div class="meta-bar">
    <span class="type-caption4">[BRAND tagline]</span>
    <DotCaption>67 ITEMS</DotCaption>
  </div>
</section>
```

### Media Grid (masonry pattern)

```vue
<section class="media-grid" data-theme="light">
  <MediaCard v-for="item in items" :item="item" />
</section>
```

```vue
<!-- MediaCard.vue -->
<a class="media-card" :class="`type-${item.type}`" :href="item.detailUrl">
  <div class="card-frame">
    <CornerCutSvg />
    <!-- Type-specific rendering: -->
    <img v-if="item.type === 'image'" :src="item.thumbnail">
    <video v-else-if="item.type === 'video'" :poster="item.thumbnail" muted>
      <source :src="item.preview" type="video/webm">
    </video>
    <div v-else-if="item.type === 'audio'" class="waveform-placeholder">
      <!-- audio bar visualization -->
    </div>
  </div>

  <div class="card-meta">
    <DotCaption class="type-caption4">{{ item.type }}</DotCaption>
    <span class="type-caption4">{{ item.date }}</span>
  </div>

  <h3 class="card-title type-h3">{{ item.title }}</h3>
</a>
```

```css
.media-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem var(--grid-side-margin);
}
@media (max-width: 1023px) { .media-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 767px)  { .media-grid { grid-template-columns: 1fr; } }

.media-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
}
.media-card .card-frame {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--cl-black);
}
.media-card img,
.media-card video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out-quart);
}
.media-card:hover img,
.media-card:hover video {
  transform: scale(1.04);
}
```

### Detail Page (popup overlay) [PATTERN]

When user clicks a media card, the existing `.the-popup-gallery` component (CSS file confirmed in note5.txt) opens as a fullscreen overlay with the media at higher fidelity. Implementation:

```css
.the-popup-gallery {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: var(--z-overlays);  /* 300 */
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## 31. PAGE: GALLERY (`/gallery`) [PATTERN]

### Frame submenu
`KEEPERS COLLECTION • MY COLLECTION` [BRAND rename]

### Hero

```vue
<section class="gallery-hero" data-theme="light">
  <DotCaption class="active">KEEPERS COLLECTION</DotCaption>
  <h1 class="type-dh1">GALLERY</h1>
</section>
```

### Citizen Card Grid

Uses the existing `.type-citizen-*` typography classes from the design system, which were specifically created for this page's character/collectible cards.

```vue
<section class="citizen-grid" data-theme="light">
  <CitizenCard v-for="citizen in citizens" :citizen="citizen" />
</section>
```

```vue
<!-- CitizenCard.vue -->
<a class="citizen-card" :href="citizen.url">
  <div class="card-art">
    <CornerCutSvg />
    <img :src="citizen.image">
  </div>
  <h3 class="type-citizen-title">{{ citizen.name }}</h3>
  <p class="type-citizen2">{{ citizen.tagline }}</p>
  <p class="type-citizen-body">{{ citizen.description }}</p>
</a>
```

```css
.citizen-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 4rem var(--grid-side-margin);
}
@media (max-width: 767px) { .citizen-grid { grid-template-columns: 1fr; } }

.citizen-card .card-art {
  aspect-ratio: 1;
  overflow: hidden;
  margin-bottom: 1.5rem;
}
.citizen-card .card-art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### "My Collection" Tab [BRAND]

Wallet-gated. If non-Web3, repurpose as:
- "Favorites" / saved items
- User profile content
- Remove entirely (single-tab gallery)

---

## 32. PAGE: ABOUT (`/about`) [PATTERN]

### Frame submenu
`CONNECT ON TWITTER / DISCORD` [BRAND social URLs]

### Hero

```vue
<section class="about-hero" data-theme="light">
  <h1 class="type-dh1">ABOUT</h1>
</section>
```

### Content Sections

The about page is editorial — long-form content with intermittent imagery. Use the existing `.type-body1`, `.type-body2`, `.type-h0`, `.type-h2` typography for content. Pattern:

```vue
<section class="about-content" data-theme="light">
  <article class="about-article">
    <DotCaption>[BRAND CHAPTER LABEL]</DotCaption>
    <h2 class="type-h0">[BRAND chapter title]</h2>
    <div class="type-body2">[BRAND long-form copy]</div>

    <img class="inline-image" src="...">

    <h3 class="type-h2">[BRAND sub-section]</h3>
    <div class="type-body2">[BRAND copy]</div>
  </article>
</section>
```

[BRAND] For Jodl personally, this is where you'd document:
- Your identity as a reasoning-architecture researcher
- The frameworks you've built (SCA, KDA, AGA, WPA, COHERENCE)
- Your active projects (VoxDub, TreadX, MediaStrip)
- Sanatana Dharma / Vedantic philosophical foundation
- Contact / collaboration

### CTA Section

```vue
<section class="about-cta" data-theme="dark">
  <h2 class="type-h0">CONNECT.</h2>
  <div class="social-cta">
    <BtnMain :href="brandTwitter">TWITTER</BtnMain>
    <BtnMain :href="brandDiscord">DISCORD</BtnMain>
  </div>
</section>
```

---

## 33. PAGE: PROTOCOL (`/protocol`) [PATTERN — informed by note5.txt assets]

### Frame submenu
`VISION • WORLD • CHARACTERS • PORTAL • UNION` [BRAND rename]

### Background
Deep navy (~`rgb(20,35,60)`) — distinct from rest of site. Forced `data-theme="dark"` throughout.

### Hero

```vue
<section class="protocol-hero" data-theme="dark">
  <h1 class="type-dh1">PROTOCOL</h1>
</section>
```

### Section Structure — 5 Chapters (with WebM video accents)

The original site loads 5 transparent WebM videos, one per submenu section:

| Submenu     | Video Asset                                         |
|-------------|-----------------------------------------------------|
| VISION      | `/videos/protocol/desktop/exp_symbol_mark.webm`     |
| WORLD       | `/videos/protocol/desktop/exp_symbol_focus.webm`    |
| CHARACTERS  | `/videos/protocol/desktop/exp_symbol_exposition.webm`|
| PORTAL      | `/videos/protocol/desktop/exp_symbol_portal.webm`   |
| UNION       | `/videos/protocol/desktop/exp_symbol_union.webm`    |

These are transparent video animations (alpha channel WebM) — used as motion accents per section.

```vue
<section class="protocol-section" id="vision" data-theme="dark">
  <video class="transparentVideo"
         src="/videos/jodlx/vision-symbol.webm"
         autoplay muted loop playsinline></video>

  <DotCaption>I · VISION</DotCaption>
  <h2 class="type-h0">[BRAND chapter title]</h2>

  <div class="protocol-content">
    <RenderRichText :content="cmsContent.vision" />
    <!-- Long-form, mixed h2/h3/body1/body2 -->
  </div>
</section>
```

[BRAND] For Jodl, Protocol page = your reasoning architecture documentation:

| Submenu     | JodLx Content                                              |
|-------------|------------------------------------------------------------|
| VISION      | Intelligence Delta thesis / cosmological-cognitive model   |
| WORLD       | The f(x)+c universal pattern across scales                 |
| CHARACTERS  | SCA / KDA / AGA / WPA frameworks                            |
| PORTAL      | Curiosity Engine / Heuristic Intelligence                  |
| UNION       | Synthesis — Sanatana Dharma + AI architecture              |

Each section is a long-form essay with the transparent video as a visual motif. This is the **single most impactful page** for JodLxVerse-as-research-portfolio.

### Decorative Assets (confirmed loaded on /protocol)
- `/svg/record-bars.svg` — class `protocolShell__recordBars` (likely scrubbing indicator)
- `/svg/double-arrow-right-white.svg` — section forward arrows
- `/svg/discord.svg` — class `protocolFooter__discordIcon` (a CTA at bottom)

---

## 34. ASSET MANIFEST [REAL paths from note + note5]

### Images
```
/images/compressed/webp/
├── project-intro/trailer-side-media.webp      (546×306)
├── collection/face-traits.webp                (800×699)
└── tableau/
    ├── keep/second-layer/flow-0/set-[0-5]/    (9 layers each: cl, cs, trc, brc, blc, crl, crs, cbl, cbs)
    ├── factions/second-layer/flow-0/set-[0-5]/
    ├── factions/second-layer/extras/details.webp
    └── universe/second-layer/flow-0/set-[0-4]/
```

### Videos
```
/videos/protocol/desktop/
├── exp_symbol_mark.webm        (VISION section, transparent)
├── exp_symbol_focus.webm       (WORLD)
├── exp_symbol_exposition.webm  (CHARACTERS)
├── exp_symbol_portal.webm      (PORTAL)
└── exp_symbol_union.webm       (UNION)
```

### SVGs (inline-imported via Vite ?inline)
```
/_nuxt/footer_kpr.034b6b12.svg               → /_nuxt/footer_jodlx.svg  [BRAND]
/_nuxt/loading-triangles.8c5d75b0.svg
/_nuxt/loading-audio-cta-ring.ac9090b0.svg   (desktop 59×59)
/_nuxt/loading-audio-cta-ring-m.9405220e.svg (mobile 27×27)
/_nuxt/mainnet.50f65c55.svg                  (11×10)
/_nuxt/resize.d8df7245.svg
/_nuxt/rotate.e88034b4.svg
/_nuxt/ohno.5849cafc.svg

/svg/
├── degrees.svg                 (300×45)
├── double-arrow-right.svg      (213×150)
├── double-arrow-right-white.svg
├── measurement-lines.svg       (258×260)
├── arrow-down.svg
├── discord.svg
└── record-bars.svg
```

### Storyblok-Hosted Assets
```
https://a.storyblok.com/f/165555/...
  └── kpr_brandbook_v1-0.zip    →  jodlx_brandbook_v1-0.zip  [BRAND]
```

---

## 35. Z-INDEX STACK [REAL_CODE]

| Layer               | z-index | Element                                      |
|---------------------|---------|----------------------------------------------|
| Page content        | 0–10    | All scroll content                           |
| Frame chrome        | 100     | `.the-frame` (nav, burger, audio, crosshair) |
| Footer              | 200     | `.the-footer`                                |
| Overlays            | 300     | Popups, gallery modals, video overlay        |
| Resize overlays     | 350     | Resolution / orientation warnings            |
| Loader              | 400     | `.preloader`                                 |
| Menu                | 500     | `.the-menu`, `.btn-burger`, `.btn-main`      |
| Console             | 600     | `.the-console`                               |
| Debug               | 1000    | Dev tools only                               |

100-unit gaps allow inserting new layers without restructuring.

---

## 36. ERROR STATES [REAL_CODE asset list — `.widescreen-warning`, `.landscape-warning`]

### Widescreen Warning (resolution too small)
```vue
<div class="widescreen-warning" v-if="viewportTooSmall">
  <img src="/_nuxt/resize.d8df7245.svg">
  <p class="type-caption4">
    Your Browser resolution is currently not supported.<br>
    Try resizing the window to experience the site.
  </p>
</div>
```

```css
.widescreen-warning {
  position: fixed;
  inset: 0;
  z-index: var(--z-resize-overlays);  /* 350 */
  background: #FAF9F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
```

### Landscape Warning (mobile landscape)
```vue
<div class="landscape-warning" v-if="mobileLandscape">
  <img src="/_nuxt/rotate.e88034b4.svg" class="icon-rotate">
  <p class="type-caption4">Please turn your device to portrait mode</p>
</div>
```

### Form Errors
```css
.input--error {
  border-color: var(--cl-error);   /* #b83e35 */
  background: rgba(184, 62, 53, 0.04);
}
.error-message {
  font-family: IBMPlexMono;
  font-size: 11px;
  color: var(--cl-error);
  margin-top: 4px;
  text-transform: uppercase;
}
```

---

## 37. BUILD ORDER REFERENCE

### Phase 0 — Setup
```
nuxt init jodlxverse
cd jodlxverse
npm install gsap @studio-freight/lenis

mkdir -p assets/{css,svg,fonts} components/{ui} pages plugins composables stores public/{fonts,images/compressed/webp,svg,videos}
```

### Phase 1 — Foundation
1. `assets/css/global.css` → Sections 4–10 from BLUEPRINT (verbatim)
2. `public/fonts/` → Place font files (or use Inter + IBM Plex Mono temporary fallbacks)
3. `plugins/lenis.client.js` → Lenis + ScrollTrigger setup
4. `composables/useScrollTrigger.js` → Reusable scroll patterns

### Phase 2 — Global Components
1. `components/TheFrame.vue` → Section 12–13
2. `components/TheFrameProgress.vue` → Section 14
3. `components/BtnBurger.vue` → Section 15
4. `components/TheFrameSubmenu.vue` → Section 16
5. `components/BtnAudio.vue` → Section 17
6. `components/IconMark.vue` → Section 18
7. `components/TheMenu.vue` → Section 24
8. `components/ThePreloader.vue` → Section 25
9. `components/TheConsole.vue` → Section 26
10. `components/TheFooter.vue` → Section 27
11. `components/ErrorOverlays.vue` → Section 36

### Phase 3 — UI Components
1. `components/ui/HackyText.vue` → Section 19
2. `components/ui/Dot.vue` → Section 20
3. `components/ui/DotCaption.vue` → Section 21
4. `components/ui/LinkHover.vue` → Section 22
5. `components/ui/CornerCutSvg.vue` → Section 23
6. `components/ui/BtnMain.vue` → button base + brand-book variant
7. `components/ui/ArticleCard.vue` → Section 29.4
8. `components/ui/MediaCard.vue` → Section 30
9. `components/ui/CitizenCard.vue` → Section 31

### Phase 4 — Pages
1. `pages/index.vue` → Section 28 (Story / Home)
2. `pages/journal/index.vue` → Section 29
3. `pages/journal/[slug].vue` → article detail
4. `pages/media/index.vue` → Section 30
5. `pages/gallery/index.vue` → Section 31
6. `pages/about/index.vue` → Section 32
7. `pages/protocol/index.vue` → Section 33

### Phase 5 — Animations
- ScrollTrigger parallax patterns (hero layers)
- Section pin + scrub (cinematic sections)
- Text stagger reveals
- Card fan scatter (collection)
- Tableau panel slide-ins
- HackyText scramble triggers
- `prefers-reduced-motion` overrides

### Phase 6 — Content & Polish
- Storyblok integration (or static fixtures for MVP)
- All `[BRAND]` token replacements throughout
- Asset optimization (WebP conversion, SVG minification)
- Wallet integration or stub
- Lighthouse audit (target ≥90 desktop)
- Accessibility audit

---

## END NOTES

**Precision-critical values — never round or substitute:**

- `font-size: 50.4rem` on `.type-dh1`
- `letter-spacing: -0.095em` on `.type-dh1`
- `font-weight: 573` on `.type-h3` (variable font precision)
- `font-size: 11px` on `.type-caption4` (px, not rem)
- `font-stretch: 75% 125%; font-weight: 125 950` on all ABCWhyte variants
- `--menu-width: 67px`, `--menu-height: 51px`
- `--cl-lavender: #968adf` (NOT `#9B8BD0`)
- 13 easings total (not 22)
- 9 keyframes total (no audiobar-related)
- 48-column grid desktop, 16 mobile
- Audio bars: `height: 13px; width: 1px; margin: 0 1px` per bar

**Architectural insights worth internalizing:**

- The minimal UI palette (B/W + 4 accents) is deliberate. Color richness lives in illustrations.
- The frame chrome inverts via a single `theme-dark` class toggle on `.the-frame-layer`.
- All `.dot` elements are 5×5px square divs, not `•` characters.
- LinkHover is a sliding background, not an underline.
- HackyText has a separate `.spacer` and `.animation` element architecture for layout stability.
- The `.type-citizen-*` typography classes exist specifically for the Gallery page character cards.
- Audio bars animate via JS, not CSS keyframes.
- Variable fonts (`font-weight: 125 950`) enable smooth weight transitions.
- The 9-layer tableau image structure creates depth through independent parallax.
- Console encryption IDs (cl67-56203000, fg45-14008131) appear to be session-randomized.

This document is the source of truth. When in doubt, return here.
