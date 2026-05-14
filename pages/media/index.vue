<template>
  <div class="page-media" ref="pageEl">

    <!-- §30 — Hero -->
    <section class="media-hero" data-theme="light">
      <DotCaption class="active type-caption4">ALL</DotCaption>
      <h1 class="type-dh1">MEDIA</h1>
      <div class="meta-bar">
        <span class="type-caption4">DISCOVER THE JODLXVERSE WORLD</span>
        <DotCaption class="type-caption4">{{ items.length }} ITEMS</DotCaption>
      </div>
    </section>

    <!-- §30 — Media Grid -->
    <section class="media-grid" data-theme="light">
      <MediaCard v-for="item in items" :key="item.id" :item="item" />
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createStaggeredSectionReveal, useMotionLifecycle } from '~/composables/useScrollTrigger'

useHead({
  title: 'Media',
  meta: [
    { name: 'description', content: 'Explore images, videos, and audio from the JodLxVerse universe.' },
    { property: 'og:title', content: 'Media | JodLxVerse' },
    { property: 'og:description', content: 'Explore images, videos, and audio from the JodLxVerse universe.' },
    { property: 'og:url', content: 'https://jodlxverse.com/media/' },
  ],
})

const pageEl = ref(null)

const items = [
  { id: 1, type: 'image', title: 'The Keep — Panorama',         date: '18.08.22', thumbnail: null, detailUrl: '#' },
  { id: 2, type: 'video', title: 'Origin Story Trailer',         date: '02.12.23', thumbnail: null, preview: null, detailUrl: '#' },
  { id: 3, type: 'image', title: 'Faction — The Architects',     date: '14.03.24', thumbnail: null, detailUrl: '#' },
  { id: 4, type: 'audio', title: 'Transmission Log 001',         date: '09.07.24', thumbnail: null, detailUrl: '#' },
  { id: 5, type: 'image', title: 'JODLERS: Character Sheet',     date: '21.01.25', thumbnail: null, detailUrl: '#' },
  { id: 6, type: 'video', title: 'New Eden Dreams — Cinematic',  date: '27.03.26', thumbnail: null, preview: null, detailUrl: '#' },
]

useMotionLifecycle(({ gsap }) => {
  const root = pageEl.value
  if (!root) return null

  createStaggeredSectionReveal(
    root,
    '.media-hero',
    '.dot-caption, .type-dh1, .meta-bar'
  )

  gsap.from(root.querySelectorAll('.media-card'), {
    autoAlpha: 0,
    y: 38,
    duration: 0.75,
    stagger: {
      each: 0.06,
      grid: 'auto',
      from: 'start',
    },
    ease: 'power3.out',
    scrollTrigger: {
      trigger: root.querySelector('.media-grid'),
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  })
})
</script>

<style scoped>
.media-hero {
  background: #FAF9F5;
  padding: calc(var(--menu-top) + 4rem) var(--grid-side-margin) 4rem var(--menu-left);
}

.media-hero .active { margin-bottom: 2rem; }

.media-hero h1 { margin-bottom: 3rem; }

.meta-bar {
  align-items: center;
  border-top: 1px solid var(--line-dark);
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
}

.media-grid {
  background: #FAF9F5;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 4rem var(--grid-side-margin) 8rem var(--menu-left);
}
@media (max-width: 1023px) { .media-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 767px)  { .media-grid { grid-template-columns: 1fr; padding: 3rem 2rem; } }

@media (max-width: 767px) {
  .media-hero { padding: calc(var(--menu-top) + 2rem) 2rem 2rem; }
}
</style>
