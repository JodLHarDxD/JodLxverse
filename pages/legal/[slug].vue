<template>
  <main class="legal-page" data-theme="light">
    <DotCaption class="type-caption4">{{ label }}</DotCaption>
    <h1 class="type-h0">{{ title }}</h1>
    <p class="type-body1">
      This page is a launch placeholder for the JodLxVerse legal archive.
      Final policy copy will be completed during content polish.
    </p>
    <NuxtLink to="/" class="back-link type-btn">BACK TO STORY</NuxtLink>
  </main>
</template>

<script setup>
const route = useRoute()

const legalPages = {
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms Of Service',
  'legal-license': 'Legal License',
}

const title = legalPages[route.params.slug] || 'Legal'
const label = 'LEGAL'

useHead({ title })
</script>

<style scoped>
.legal-page {
  background: #FAF9F5;
  min-height: 100vh;
  padding: calc(var(--menu-top) + 4rem) var(--grid-side-margin) 8rem var(--menu-left);
}

.legal-page > :deep(.dot-caption) { margin-bottom: 2rem; }

.legal-page .type-h0 {
  margin-bottom: 3rem;
  max-width: 64rem;
}

.legal-page .type-body1 {
  margin-bottom: 4rem;
  max-width: 56rem;
}

.back-link {
  border: 1px solid var(--line-dark);
  color: inherit;
  display: inline-block;
  padding: 1rem 2rem;
}

@media (max-width: 767px) {
  .legal-page { padding: calc(var(--menu-top) + 2rem) 2rem 4rem; }
}
</style>
