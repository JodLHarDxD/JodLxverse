# EXTRACTION_PROMPT.md
# Copy-paste this into the Claude Code Chrome extension on any kprverse.com page
# to get note4.txt-quality (real code, not visual inference) extraction.
#
# USAGE:
#   1. Navigate to the target page (e.g. https://kprverse.com/media)
#   2. Open Claude Code Chrome extension
#   3. Paste everything below the === line
#   4. Add: TARGET PAGE: https://kprverse.com/[page]  at the bottom
#   5. Save output as note_[page].txt
#   6. Feed into BLUEPRINT.md rebuild

===================================================================

You are extracting a bit-for-bit recreation specification from this exact page.
Output a single markdown file. ZERO guessing. ZERO visual inference. ZERO approximations.

═══════════════════════════════════════════════════════════
HARD RULE: REAL CODE ONLY
═══════════════════════════════════════════════════════════

For every value you output:
- Fetch the actual source. Open DevTools → Network → CSS tab.
- Fetch every `.css` file loaded from `/_nuxt/*.css` directly via fetch().
- Read the raw CSS source text.
- Copy values VERBATIM from the source. No rounding. No paraphrasing.
- If you cannot find a value in the actual CSS source, mark it `[NOT IN CSS]` and skip it.
- If you describe something visually instead of from code, mark it `[VISUAL ONLY]`.

DO NOT:
- Write "approximately", "~", "around", or "similar to"
- Round pixel values (30.7px stays 30.7px, never 31px)
- Round letter-spacing (-0.095em stays exact, never -0.1em)
- Guess font weights (450 is not 500, 573 is not 600)
- Invent class names you haven't seen in the DOM
- Describe what something "looks like" — describe what the CSS rule IS
- Use commercial font name substitutes ("similar to Neue Machina")
- Skip a section because it seems obvious — extract it anyway

═══════════════════════════════════════════════════════════
EXTRACTION METHODOLOGY (follow in order)
═══════════════════════════════════════════════════════════

STEP 1 — Inventory the page
- List every `/_nuxt/*.css` file loaded (check Network tab, filter CSS)
- List every `/_nuxt/*.js` chunk (these reveal component names)
- List every image asset loaded (note the full path including `/_nuxt/` or `/images/`)
- List every SVG asset loaded (note class names on them)
- List every video asset loaded (note class names)
- List every font file loaded

STEP 2 — Fetch PAGE-SPECIFIC CSS files first (MOST IMPORTANT)
Identify which CSS files are unique to THIS page (named after the page, like
`content-protocol.*.css`, `Protocol.*.css`, `Media.*.css`, `journal.*.css`).
These are the highest priority. Fetch and paste them FIRST:

```js
const css = await fetch(pageSpecificCssUrl).then(r => r.text());
console.log(css);
```

Do not summarize. Do not paraphrase. Paste the ENTIRE file content verbatim.

STEP 3 — Fetch component CSS files loaded ONLY on this page
Compare the CSS file list against the common set (entry.css, btn-burger.css, etc.).
Any CSS file that appears here but NOT on every page is page-specific. Fetch those too.

STEP 4 — Entry CSS (abbreviated if needed)
We already have entry.css from previous extractions. Only paste it if you have room.
If space is limited, SKIP entry.css and keep page-specific files.

STEP 5 — Walk the DOM
For each visible element on the page:
- Right-click → Inspect
- Read the actual class list (copy-paste, do not type from memory)
- Read computed styles if relevant
- Note: HTML element type, exact text content, exact class names, parent hierarchy

STEP 6 — Capture interactive states
- Hover every interactive element while watching DevTools
- Note which classes get added on hover (e.g. `.hovering`, `.is-open`, `.active`)
- Click hamburger, modals, dropdowns — note class changes
- Scroll the page — note scroll-triggered class additions
- Resize to mobile — note responsive behavior

STEP 7 — Extract links and assets
- Every <a> tag's href (internal and external)
- Every <img> src with dimensions
- Every <video> src and poster
- Every inline SVG source

═══════════════════════════════════════════════════════════
OUTPUT FORMAT
═══════════════════════════════════════════════════════════

```markdown
# [PAGE NAME] — 100% Real Code Extracted Design Specification

> URL: [full URL]
> Page title: [exact <title> tag content]
> Extracted: [date]
> All data below is extracted DIRECTLY from actual source CSS files.
> Zero guessing. Zero visual inference. Pure source code.

---

## 1. ASSETS LOADED (from Network tab)

### CSS files (page-specific marked with ★)
- ★ /_nuxt/[page-specific].css
- /_nuxt/[shared].css
...

### JS chunks
...

### Images
...

### SVGs
...

### Videos
...

### Fonts loaded
...

---

## 2. PAGE-SPECIFIC CSS (from [page-name].css — real code)

```css
[paste ENTIRE file verbatim — this is the most important section]
```

## 3. [COMPONENT] CSS (from [component].css — real code)

```css
[paste entire component CSS]
```

[Repeat for every page-specific component CSS file]

---

## N. DOM STRUCTURE

### Section: [name]
```html
<element class="[exact class list]" data-theme="[value]" [other attrs]>
  [exact text content]
  <child class="[exact class list]">
    ...
  </child>
</element>
```

Walk every major visible section of the page from top to bottom.

---

## N+1. INTERACTIVE STATES OBSERVED

### Element: .class-name
- Default state: [classes present]
- On hover: [classes added/removed, CSS property changes]
- On click: [classes added/removed]
- On scroll past trigger: [classes added/removed]

---

## N+2. LINKS REFERENCE

| Element text | href | Type |
|---|---|---|
| [text] | [url] | internal/external/mailto |

---

## N+3. RESPONSIVE BEHAVIOR (real @media rules from page-specific CSS)

```css
@media only screen and (max-width: 767px) {
  [paste ALL mobile override rules for this page]
}
```

---

## N+4. JS-DRIVEN BEHAVIOR (observed, NOT in CSS)

Behaviors that happen via JavaScript:
- [behavior]: triggered by [event]
- [behavior]: triggered by [event]

Mark clearly — these cannot be extracted from CSS.

---

## N+5. GSAP / SCROLL ANIMATIONS (observed)

ScrollTrigger patterns observed on this page:
- Section [name]: pin/scrub/parallax/stagger — describe trigger points and behavior
- Element [class]: animation type and approximate timing

---

## N+6. NOTES ON GAPS

What I could NOT extract:
- [thing]: [reason — e.g. "WebGL canvas, no DOM/CSS", "CORS-blocked external CSS"]
```

═══════════════════════════════════════════════════════════
PRIORITY ORDER (if you run out of output space)
═══════════════════════════════════════════════════════════

1. Page-specific CSS files (NEVER skip these)
2. DOM structure walk
3. Interactive states
4. Component CSS files unique to this page
5. Links reference
6. Responsive @media rules
7. JS-driven behavior notes
8. Asset inventory
9. Entry.css (SKIP — we already have it)

═══════════════════════════════════════════════════════════
SELF-CHECK BEFORE OUTPUTTING
═══════════════════════════════════════════════════════════

[ ] Did I fetch and paste page-specific CSS files in full?
[ ] Did I avoid "approximately", "~", "around", "similar to"?
[ ] Did I keep exact decimals (e.g. 0.625vw, -0.075em, font-weight: 573)?
[ ] Did I copy class names character-for-character from the DOM?
[ ] Did I mark visual-only observations as [VISUAL ONLY]?
[ ] Did I walk the DOM section by section?
[ ] Did I record hover/click/scroll state changes?
[ ] Did I note @media rules from the page-specific CSS?
[ ] Did I skip entry.css to save space for page-specific content?

═══════════════════════════════════════════════════════════
EXAMPLES OF GOOD vs BAD
═══════════════════════════════════════════════════════════

BAD: "Hero title is approximately 180-220px, looks similar to Neue Machina"
GOOD:
```css
.type-dh1 {
  font-family: Hexaframe;
  font-size: 50.4rem;
  font-weight: 700;
  letter-spacing: -0.095em;
  line-height: 0.87;
}
```

BAD: "The card has a subtle hover shadow"
GOOD:
```css
.media-card:hover .card-frame img {
  transform: scale(1.04);
  transition: transform 0.5s cubic-bezier(.165, .84, .44, 1);
}
```

BAD: "Article list uses a grid layout"
GOOD:
```css
.article-grid {
  column-gap: var(--grid-column-gap);
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
}
.article-grid .col-left  { grid-column: 1 / span 16; }
.article-grid .col-right { grid-column: 17 / span 32; }
```

═══════════════════════════════════════════════════════════
BEGIN EXTRACTION ON THIS PAGE NOW
═══════════════════════════════════════════════════════════

TARGET PAGE: https://kprverse.com/[REPLACE_WITH_ACTUAL_PAGE]
