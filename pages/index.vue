<template>
  <div class="page-home" ref="pageEl">

    <!-- §28.1 — Hero -->
    <section class="section-hero" data-theme="dark">
      <div class="hero-art-layers" aria-hidden="true">
        <img class="layer layer-bg"        src="/images/compressed/webp/hero/hero-bg.webp"        data-parallax="0.2" alt="">
        <img class="layer layer-mid"       src="/images/compressed/webp/hero/hero-mid.webp"       data-parallax="0.5" alt="">
        <img class="layer layer-character" src="/images/compressed/webp/hero/hero-character.webp" data-parallax="0.8" alt="">
        <img class="layer layer-fg"        src="/images/compressed/webp/hero/hero-fg.webp"        data-parallax="1.0" alt="">
      </div>

      <DotCaption class="section-label type-caption4">001</DotCaption>

      <p class="type-body1 hero-intro">
        JodLxVerse is a brand that focuses on collective narrative and empowering
        storytellers. JodLxVerse is a living story, an uncharted world waiting to
        be explored, to be imagined.
      </p>

      <div class="hero-wordmark">
        <span class="prefix type-caption4">01K</span>
        <h1 class="type-dh1">KEEP.</h1>
        <span class="prefix type-caption4">02P</span>
        <h1 class="type-dh1">PROTECT.</h1>
        <span class="prefix type-caption4">03R</span>
        <h1 class="type-dh1">REIMAGINE.</h1>
      </div>

      <div class="scroll-indicator type-caption4">Scroll</div>
    </section>

    <!-- §28.2 — Project Intro -->
    <section class="homeProjectIntro" data-theme="light">
      <DotCaption class="type-caption4">001</DotCaption>

      <h2 class="type-h0">
        A FAMILIAR WORLD...<br>SET ON A DIFFERENT PATH.
      </h2>

      <div class="two-col">
        <div class="col-left">
          <div class="card folder-tab">
            <CornerCutSvg />
            <img src="/images/compressed/webp/project-intro/trailer-side-media.webp" alt="" loading="lazy">
          </div>
          <p class="type-body1">
            JodLxVerse is a living world built on curiosity, coherence, and creation.
            Every element of this universe is designed to reward exploration.
          </p>
        </div>
        <div class="col-right">
          <div class="character-card folder-tab" data-tilt>
            <CornerCutSvg />
            <img src="/images/compressed/webp/hero/hero-character.webp" alt="" loading="lazy">
            <DotCaption class="character-label type-caption4">ANI</DotCaption>
          </div>
        </div>
      </div>

      <img class="decoration deg" src="/svg/degrees.svg" aria-hidden="true" alt="">
      <img class="decoration arr" src="/svg/double-arrow-right.svg" aria-hidden="true" alt="">
    </section>

    <!-- §28.3 — Keeper Intro (pinned cinematic) -->
    <section class="homeKeeperIntro" data-theme="dark" data-pin-section>
      <DotCaption class="type-caption4">002</DotCaption>

      <h2 class="type-h0">
        YOU ARE A JODLER:<br>
        AN AGENT OF POWER AND CHANGE IN THIS WORLD.
      </h2>

      <div class="terminal-text type-caption4">
        <HackyText trigger-on="scroll">
//INITIALIZING JODLXVERSE STORY LOADING...[47%]
Location_Data Character_Attributes JodLx Transmissions
        </HackyText>
      </div>

      <div class="coordinates type-caption4">
        <img src="/svg/degrees.svg" aria-hidden="true" alt="">
        N 35°27.37 E 139°38.57
      </div>

      <h2 class="type-h0 second-line">
        WHAT WILL YOU DO WITH THIS POWER?<br>
        WILL YOU CHOOSE TO PROTECT OR DESTROY?<br>
        TO GIVE OR TO TAKE?
      </h2>
    </section>

    <!-- §28.4 — Collection Intro -->
    <section class="homeCollectionIntro" data-theme="light">
      <div class="col-left">
        <DotCaption class="type-caption4">004</DotCaption>
        <h2 class="type-h0">
          10,000 UNIQUE<br>DIGITAL COLLECTIBLES.
        </h2>
        <img src="/svg/measurement-lines.svg" class="decoration" aria-hidden="true" alt="">
      </div>
      <div class="col-right">
        <DotCaption class="type-caption4">INITIAL COLLECTION</DotCaption>
        <p class="type-body1">
          The first JODLERS were forged at the intersection of intelligence and imagination.
          Each one carries a unique constellation of traits, histories, and capabilities.
        </p>
      </div>
      <div class="collectionGallery" aria-hidden="true">
        <div class="card-stack">
          <div
            v-for="card in collectionCards"
            :key="card.title"
            class="collection-card"
          >
            <span class="type-caption4">{{ card.code }}</span>
            <strong class="type-h3">{{ card.title }}</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- §28.5 — Tableau Panels -->
    <section class="homeTableau" data-theme="dark">
      <div
        v-for="panel in tableauPanels"
        :key="panel.id"
        class="card-panel"
        :class="{ 'is-holding': holdingId === panel.id }"
        @mousedown="holdingId = panel.id"
        @mouseup="holdingId = null"
        @mouseleave="holdingId = null"
        @touchstart.prevent="holdingId = panel.id"
        @touchend="holdingId = null"
      >
        <CornerCutSvg />
        <div class="layers">
          <div class="layer-placeholder" />
        </div>
        <DotCaption class="panel-label type-caption4">{{ panel.label }}</DotCaption>
        <div class="caption type-body1">{{ panel.caption }}</div>
        <div class="click-hold-prompt type-caption4">CLICK &amp; HOLD</div>
      </div>
    </section>

    <!-- §28.6 — JODLERS Wordmark Transition -->
    <section class="homeKeepersTransition" data-theme="light">
      <h1 class="type-dh1 keepers-wordmark">JODLERS</h1>
      <p class="type-body1">BECOME A JODLER...</p>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createStaggeredSectionReveal, useMotionLifecycle } from '~/composables/useScrollTrigger'

useHead({
  titleTemplate: 'JodLxVerse — Keep. Protect. Reimagine.',
  meta: [
    { name: 'description', content: 'JodLxVerse is a living world built on curiosity, coherence, and creation. Keep. Protect. Reimagine.' },
    { property: 'og:title', content: 'JodLxVerse — Keep. Protect. Reimagine.' },
    { property: 'og:description', content: 'JodLxVerse is a living world built on curiosity, coherence, and creation.' },
    { property: 'og:url', content: 'https://jodlxverse.com/' },
  ],
})

const pageEl = ref(null)
const holdingId = ref(null)

const tableauPanels = [
  { id: 'keep',     label: '001 • THE KEEP',    caption: 'The last stronghold of all knowledge and memory.' },
  { id: 'factions', label: '002 • FACTIONS',    caption: 'Alliances forged from the fragments of the old world.' },
  { id: 'universe', label: '003 • THE WORLD',   caption: 'An uncharted expanse waiting for those bold enough to explore.' },
]

const collectionCards = [
  { code: 'SCA', title: 'Structural Causation' },
  { code: 'KDA', title: 'Knowledge Delta' },
  { code: 'AGA', title: 'Adaptive Goals' },
  { code: 'WPA', title: 'World Pattern' },
]

useMotionLifecycle(({ gsap }) => {
  const root = pageEl.value
  if (!root) return null

  gsap.from(root.querySelectorAll('.hero-wordmark .prefix, .hero-wordmark h1'), {
    autoAlpha: 0,
    y: 40,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.08,
  })

  gsap.utils.toArray('.hero-art-layers [data-parallax]', root).forEach((layer) => {
    const speed = Number(layer.dataset.parallax || 0.5)
    gsap.to(layer, {
      y: -180 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: root.querySelector('.section-hero'),
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  createStaggeredSectionReveal(
    root,
    '.homeProjectIntro, .homeCollectionIntro, .homeKeepersTransition',
    '.type-h0, .type-body1, .dot-caption, .folder-tab, .decoration, .keepers-wordmark'
  )

  const tiltCard = root.querySelector('[data-tilt]')
  const onTiltMove = (event) => {
    const rect = tiltCard.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    gsap.to(tiltCard, {
      rotateX: y * -8,
      rotateY: x * 10,
      transformPerspective: 900,
      duration: 0.35,
      ease: 'power2.out',
    })
  }
  const onTiltLeave = () => {
    gsap.to(tiltCard, { rotateX: 0, rotateY: 0, duration: 0.45, ease: 'power2.out' })
  }
  if (tiltCard) {
    tiltCard.addEventListener('mousemove', onTiltMove)
    tiltCard.addEventListener('mouseleave', onTiltLeave)
  }

  const keeper = root.querySelector('.homeKeeperIntro')
  if (keeper && window.innerWidth > 767) {
    const keeperTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: keeper,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: '+=160%',
      },
    })

    keeperTimeline
      .from(keeper.querySelector('.terminal-text'), { autoAlpha: 0, y: 32, duration: 0.35 }, 0)
      .from(keeper.querySelector('.coordinates'), { autoAlpha: 0, y: 24, duration: 0.35 }, 0.15)
      .fromTo(
        keeper.querySelector('.second-line'),
        { autoAlpha: 0.18, y: 90 },
        { autoAlpha: 0.6, y: 0, duration: 0.75 },
        0.35
      )
  }

  gsap.fromTo(root.querySelectorAll('.collection-card'), {
    autoAlpha: 0,
    x: 0,
    y: 72,
    rotation: 0,
  }, {
    autoAlpha: 1,
    x: (index) => (index - 1.5) * 52,
    y: (index) => Math.abs(index - 1.5) * -12,
    rotation: (index) => (index - 1.5) * 8,
    duration: 0.8,
    stagger: 0.05,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: root.querySelector('.collectionGallery'),
      start: 'top 78%',
      toggleActions: 'play none none reverse',
    },
  })

  gsap.from(root.querySelectorAll('.card-panel'), {
    autoAlpha: 0,
    xPercent: (index) => (index - 1) * 32,
    duration: 1,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: root.querySelector('.homeTableau'),
      start: 'top 72%',
      toggleActions: 'play none none reverse',
    },
  })

  gsap.utils.toArray('.card-panel .layer-placeholder', root).forEach((layer) => {
    gsap.to(layer, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: layer.closest('.card-panel'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  return () => {
    if (tiltCard) {
      tiltCard.removeEventListener('mousemove', onTiltMove)
      tiltCard.removeEventListener('mouseleave', onTiltLeave)
    }
  }
})
</script>

<style scoped>
/* ─── Hero §28.1 ──────────────────────────────── */
.section-hero {
  align-items: flex-end;
  background: #1a1628;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100vh;
  padding: var(--menu-top) var(--grid-side-margin) 6rem var(--menu-left);
  position: relative;
}

.hero-art-layers {
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.hero-art-layers .layer {
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  will-change: transform;
}

.section-label { margin-bottom: 2rem; }

.hero-intro {
  margin-bottom: 4rem;
  max-width: 40rem;
  opacity: 0.75;
  position: relative;
}

.hero-wordmark {
  position: relative;
  text-align: right;
}

.hero-wordmark .prefix {
  display: block;
  opacity: 0.4;
}

.hero-wordmark h1 {
  display: block;
  line-height: 0.9;
  margin-bottom: 0.5rem;
}

.scroll-indicator {
  bottom: 2rem;
  left: var(--menu-left);
  opacity: 0.4;
  position: absolute;
  writing-mode: vertical-lr;
}

/* ─── Project Intro §28.2 ──────────────────────── */
.homeProjectIntro {
  background: #FAF9F5;
  padding: 8rem var(--grid-side-margin) 8rem var(--menu-left);
  position: relative;
}

.homeProjectIntro > :deep(.dot-caption) { margin-bottom: 3rem; }

.homeProjectIntro .type-h0 { margin-bottom: 5rem; max-width: 56rem; }

.two-col {
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 767px) { .two-col { grid-template-columns: 1fr; } }

.card.folder-tab,
.character-card.folder-tab {
  border: 1px solid var(--line-dark);
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
}

.card.folder-tab img,
.character-card.folder-tab img {
  display: block;
  width: 100%;
}

.character-label { margin-top: 1.5rem; }

.decoration { pointer-events: none; }
.decoration.deg {
  bottom: 4rem;
  opacity: 0.3;
  position: absolute;
  right: var(--grid-side-margin);
}
.decoration.arr {
  bottom: 8rem;
  opacity: 0.15;
  position: absolute;
  right: calc(var(--grid-side-margin) + 4rem);
}

/* ─── Keeper Intro §28.3 ──────────────────────── */
.homeKeeperIntro {
  background: #2a1f3d;
  min-height: 100vh;
  padding: 8rem var(--grid-side-margin) 8rem var(--menu-left);
  position: relative;
}

.homeKeeperIntro > :deep(.dot-caption) { margin-bottom: 4rem; }

.homeKeeperIntro .type-h0 { max-width: 64rem; }

.terminal-text {
  margin: 4rem 0;
  opacity: 0.5;
}

.coordinates {
  align-items: center;
  animation: flash 3s ease-in-out infinite;
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
  opacity: 0.6;
}
.coordinates img { height: 1rem; opacity: 0.6; }

.second-line { margin-top: 6rem; opacity: 0.6; }

/* ─── Collection §28.4 ────────────────────────── */
.homeCollectionIntro {
  background: var(--cl-lavender);
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
  padding: 8rem var(--grid-side-margin) 8rem var(--menu-left);
}
@media (max-width: 767px) { .homeCollectionIntro { grid-template-columns: 1fr; } }

.homeCollectionIntro .decoration {
  display: block;
  margin-top: 3rem;
  opacity: 0.4;
}

.homeCollectionIntro .col-right > :deep(.dot-caption) { margin-bottom: 2rem; }

.collectionGallery {
  grid-column: 1 / -1;
  min-height: 24rem;
  position: relative;
}

.card-stack {
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: min(36rem, 80vw);
}

.collection-card {
  background: var(--cl-white);
  border: 1px solid var(--line-dark);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 18rem;
  justify-content: space-between;
  left: 50%;
  padding: 2rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: 50% 120%;
  width: 24rem;
  will-change: transform;
}

.collection-card strong { max-width: 16rem; }

/* ─── Tableau §28.5 ───────────────────────────── */
.homeTableau {
  background: #0d0d0d;
  display: grid;
  gap: 0;
  grid-template-columns: repeat(3, 1fr);
  min-height: 60vh;
}
@media (max-width: 767px) { .homeTableau { grid-template-columns: 1fr; } }

.card-panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 50vh;
  overflow: hidden;
  padding: 3rem;
  position: relative;
  transition: transform 0.2s var(--ease-out-quart);
}

.card-panel.is-holding { transform: scale(0.98); }

.layers { inset: 0; position: absolute; }
.layer-placeholder {
  background: linear-gradient(135deg, #141424 0%, #22172e 45%, #10151c 100%);
  height: 112%;
  width: 100%;
  will-change: transform;
}

.panel-label { margin-bottom: 1rem; }

.caption {
  max-width: 28rem;
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 0.25s var(--ease-out-quart), transform 0.25s var(--ease-out-quart);
}

.card-panel.is-holding .caption {
  opacity: 1;
  transform: translateY(0);
}

.click-hold-prompt {
  margin-top: 1.5rem;
  opacity: 0.35;
}

/* ─── JODLERS Transition §28.6 ────────────────── */
.homeKeepersTransition {
  background: #fff;
  overflow: hidden;
  padding: 6rem var(--grid-side-margin) 6rem var(--menu-left);
  text-align: center;
}

.keepers-wordmark {
  font-size: clamp(6rem, 18vw, 22rem);
  letter-spacing: -0.05em;
  line-height: 0.85;
  opacity: 0.06;
}

.homeKeepersTransition .type-body1 {
  margin-top: 3rem;
  opacity: 0.6;
}

@media (max-width: 767px) {
  .section-hero { padding: var(--menu-top) 2rem 4rem; }
  .homeProjectIntro,
  .homeKeeperIntro { padding: 6rem 2rem; }
  .homeCollectionIntro { padding: 6rem 2rem; }
}
</style>
