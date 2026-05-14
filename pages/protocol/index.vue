<template>
  <div class="page-protocol" ref="pageEl">

    <!-- §33 — Hero -->
    <section class="protocol-hero" data-theme="dark">
      <h1 class="type-dh1">PROTOCOL</h1>
    </section>

    <!-- §33 — Chapter I: VISION -->
    <section class="protocol-section" id="vision" data-theme="dark">
      <video
        class="transparentVideo"
        src="/videos/protocol/desktop/exp_symbol_mark.webm"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
      />
      <DotCaption class="type-caption4">I · VISION</DotCaption>
      <h2 class="type-h0">INTELLIGENCE DELTA.</h2>
      <div class="protocol-content type-body1">
        <p>
          Intelligence is not a quantity. It is a delta — the rate of coherent change
          across a system over time. JodLxVerse was built on this single premise.
          Every framework, every project, every JODLER is a measurement of that delta.
        </p>
        <p>
          The cosmological-cognitive model asks: if the universe is a computation, what
          is it computing? And more importantly — what are we computing inside it?
        </p>
      </div>
    </section>

    <!-- §33 — Chapter II: WORLD -->
    <section class="protocol-section" id="world" data-theme="dark">
      <video
        class="transparentVideo"
        src="/videos/protocol/desktop/exp_symbol_focus.webm"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
      />
      <DotCaption class="type-caption4">II · WORLD</DotCaption>
      <h2 class="type-h0">THE F(X)+C PATTERN.</h2>
      <div class="protocol-content type-body1">
        <p>
          Across every scale of reality — from quantum to cosmic — the same pattern
          emerges: transformation applied to a state, offset by a constant. f(x)+c.
          Change plus continuity. Motion plus memory.
        </p>
        <p>
          The JodLxVerse world is built as a direct expression of this universal pattern.
          Every faction, every terrain, every JODLER is an instantiation of f(x)+c
          operating at a different resolution.
        </p>
      </div>
    </section>

    <!-- §33 — Chapter III: CHARACTERS -->
    <section class="protocol-section" id="characters" data-theme="dark">
      <video
        class="transparentVideo"
        src="/videos/protocol/desktop/exp_symbol_exposition.webm"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
      />
      <DotCaption class="type-caption4">III · CHARACTERS</DotCaption>
      <h2 class="type-h0">FRAMEWORKS FOR THOUGHT.</h2>
      <div class="protocol-content type-body1">
        <p>
          SCA — Structural Causation Architecture. Maps the skeleton of cause beneath
          any event or decision. KDA — Knowledge Delta Architecture. Traces how knowing
          changes what becomes possible. AGA — Adaptive Goal Architecture. Models how
          objectives evolve under pressure.
        </p>
        <p>
          WPA — Worldbuilding Pattern Architecture. The framework that generated the
          JodLxVerse itself. COHERENCE — the meta-framework: a measure of internal
          consistency under recursive scrutiny.
        </p>
      </div>
    </section>

    <!-- §33 — Chapter IV: PORTAL -->
    <section class="protocol-section" id="portal" data-theme="dark">
      <video
        class="transparentVideo"
        src="/videos/protocol/desktop/exp_symbol_portal.webm"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
      />
      <DotCaption class="type-caption4">IV · PORTAL</DotCaption>
      <h2 class="type-h0">CURIOSITY ENGINE.</h2>
      <div class="protocol-content type-body1">
        <p>
          Heuristic Intelligence is not a shortcut. It is the recognition that the most
          important decisions must be made with incomplete information — and that the
          quality of those decisions is determined by the quality of the heuristics
          applied to them.
        </p>
        <p>
          The Curiosity Engine is a methodology for generating better heuristics
          through structured exploration. Ask the question you haven't thought to ask.
          That is where the portal opens.
        </p>
      </div>
    </section>

    <!-- §33 — Chapter V: UNION -->
    <section class="protocol-section" id="union" data-theme="dark">
      <video
        class="transparentVideo"
        src="/videos/protocol/desktop/exp_symbol_union.webm"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
      />
      <DotCaption class="type-caption4">V · UNION</DotCaption>
      <h2 class="type-h0">SANATANA DHARMA + AI ARCHITECTURE.</h2>
      <div class="protocol-content type-body1">
        <p>
          The oldest frameworks for understanding consciousness and the newest tools
          for building it are not in conflict. They are in dialogue. Sanatana Dharma
          provides the cosmological context. AI architecture provides the operational
          language.
        </p>
        <p>
          The union of these two traditions is not a theory. It is a practice —
          one that the JodLxVerse enacts every time a new JODLER is forged, every time
          a new connection is drawn between the ancient and the emerging.
        </p>
      </div>
    </section>

    <!-- Decorative footer -->
    <section class="protocol-footer" data-theme="dark">
      <img src="/svg/record-bars.svg" class="record-bars" aria-hidden="true" alt="">
      <img src="/svg/discord.svg" class="discord-icon" aria-hidden="true" alt="">
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createStaggeredSectionReveal, useMotionLifecycle } from '~/composables/useScrollTrigger'

useHead({
  title: 'Protocol',
  meta: [
    { name: 'description', content: 'The JodLx Protocol — vision, world, characters, portal, and union. An uncharted universe waiting to be explored.' },
    { property: 'og:title', content: 'Protocol | JodLxVerse' },
    { property: 'og:description', content: 'The JodLx Protocol — vision, world, characters, portal, and union. An uncharted universe waiting to be explored.' },
    { property: 'og:url', content: 'https://jodlxverse.com/protocol/' },
  ],
})

const pageEl = ref(null)

useMotionLifecycle(({ gsap }) => {
  const root = pageEl.value
  if (!root) return null

  createStaggeredSectionReveal(
    root,
    '.protocol-hero, .protocol-footer',
    '.type-dh1, img'
  )

  gsap.utils.toArray('.protocol-section', root).forEach((section) => {
    gsap.from(section.querySelectorAll('.dot-caption, .type-h0, .protocol-content p'), {
      autoAlpha: 0,
      y: 34,
      duration: 0.85,
      stagger: 0.075,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 78%',
        toggleActions: 'play none none reverse',
      },
    })

    const video = section.querySelector('.transparentVideo')
    if (video) {
      gsap.fromTo(video, {
        autoAlpha: 0.25,
        yPercent: 8,
      }, {
        autoAlpha: 0.6,
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  })
})
</script>

<style scoped>
.page-protocol { background: rgb(20, 35, 60); }

.protocol-hero {
  min-height: 50vh;
  padding: calc(var(--menu-top) + 4rem) var(--grid-side-margin) 6rem var(--menu-left);
  display: flex;
  align-items: flex-end;
}

.protocol-section {
  min-height: 80vh;
  padding: 8rem var(--grid-side-margin) 8rem var(--menu-left);
  position: relative;
}

.protocol-section > :deep(.dot-caption) { margin-bottom: 2rem; }
.protocol-section .type-h0 { margin-bottom: 3rem; max-width: 56rem; }

.protocol-content {
  max-width: 64rem;
}

.protocol-content p + p { margin-top: 1.5em; }
.protocol-content { opacity: 0.75; }

.transparentVideo {
  height: 40vh;
  max-width: 40vw;
  object-fit: contain;
  opacity: 0.6;
  pointer-events: none;
  position: absolute;
  right: var(--grid-side-margin);
  top: 8rem;
}

.protocol-footer {
  align-items: center;
  border-top: 1px solid rgba(255,255,255,0.08);
  display: flex;
  gap: 2rem;
  padding: 3rem var(--grid-side-margin) 3rem var(--menu-left);
}

.record-bars,
.discord-icon {
  height: 2rem;
  opacity: 0.3;
}

@media (max-width: 767px) {
  .protocol-hero    { padding: calc(var(--menu-top) + 2rem) 2rem 4rem; }
  .protocol-section { padding: 6rem 2rem; min-height: 60vh; }
  .transparentVideo { display: none; }
  .protocol-footer  { padding: 3rem 2rem; }
}
</style>
