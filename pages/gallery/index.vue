<template>
  <div class="page-gallery">

    <!-- §31 — Hero -->
    <section class="gallery-hero" data-theme="light">
      <DotCaption class="active type-caption4">JODLERS COLLECTION</DotCaption>
      <h1 class="type-dh1">GALLERY</h1>
    </section>

    <!-- §31 — Citizen Card Grid -->
    <section class="citizen-grid" data-theme="light">
      <CitizenCard v-for="citizen in citizens" :key="citizen.id" :citizen="citizen" />
    </section>

  </div>
</template>

<script setup>
useHead({ title: 'Gallery — JodLxVerse' })

const citizens = [
  {
    id: 1,
    url:         '#',
    image:       null,
    name:        'JODLER #0001',
    tagline:     'Architect of Cognition',
    description: 'First forged. Last to yield. Bearer of the original transmission.',
  },
  {
    id: 2,
    url:         '#',
    image:       null,
    name:        'JODLER #0002',
    tagline:     'The Watcher',
    description: 'Silent in the fractures. Sees the patterns others cannot.',
  },
  {
    id: 3,
    url:         '#',
    image:       null,
    name:        'JODLER #0003',
    tagline:     'Keeper of Records',
    description: 'Every choice made in the world leaves a trace. She reads them all.',
  },
  {
    id: 4,
    url:         '#',
    image:       null,
    name:        'JODLER #0004',
    tagline:     'Breach Walker',
    description: 'Crosses thresholds others refuse. Carries a map no one else can read.',
  },
  {
    id: 5,
    url:         '#',
    image:       null,
    name:        'JODLER #0005',
    tagline:     'Signal Runner',
    description: 'Built for speed. Thinks in frequencies. Finds a path where none exists.',
  },
  {
    id: 6,
    url:         '#',
    image:       null,
    name:        'JODLER #0006',
    tagline:     'Null Field Operator',
    description: 'Operates in the spaces between decisions. Invisible by design.',
  },
]
</script>

<style scoped>
.gallery-hero {
  background: #FAF9F5;
  padding: calc(var(--menu-top) + 4rem) var(--grid-side-margin) 4rem var(--menu-left);
}

.gallery-hero .active { margin-bottom: 2rem; }

.citizen-grid {
  background: #FAF9F5;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 4rem var(--grid-side-margin) 8rem var(--menu-left);
}
@media (max-width: 767px) {
  .citizen-grid {
    grid-template-columns: 1fr;
    padding: 3rem 2rem 6rem;
  }
  .gallery-hero { padding: calc(var(--menu-top) + 2rem) 2rem 2rem; }
}
</style>
