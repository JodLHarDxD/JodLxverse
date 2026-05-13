<template>
  <div class="page-article">
    <article v-if="article" class="article-body" data-theme="light">
      <header class="article-header">
        <DotCaption class="type-caption4">{{ article.category }}</DotCaption>
        <h1 class="type-h0">{{ article.title }}</h1>
        <div class="article-meta">
          <span class="type-caption4">{{ article.date }}</span>
          <span class="type-caption4 author">by JodLxVerse</span>
        </div>
      </header>

      <div class="article-content type-body1">
        <p>{{ article.body }}</p>
      </div>

      <footer class="article-footer">
        <NuxtLink to="/journal" class="back-link type-btn">← BACK TO JOURNAL</NuxtLink>
      </footer>
    </article>

    <section v-else class="not-found" data-theme="light">
      <DotCaption class="type-caption4">404</DotCaption>
      <h1 class="type-h0">ARTICLE NOT FOUND</h1>
      <NuxtLink to="/journal" class="back-link type-btn">← BACK TO JOURNAL</NuxtLink>
    </section>
  </div>
</template>

<script setup>
const route   = useRoute()
const slug    = route.params.slug

const ARTICLES = {
  'our-origin-story': {
    slug:     'our-origin-story',
    category: 'UPDATES',
    date:     '18.08.22',
    title:    'Our Origin Story',
    body:     'Every world begins with a question. For JodLxVerse, that question was simple: what happens when curiosity becomes architecture? This is the story of how JodLxVerse came to be — from a single thought to a living, breathing universe.',
  },
  'three-year-anniversary': {
    slug:     'three-year-anniversary',
    category: 'COMMUNITY',
    date:     '14.09.25',
    title:    'Three Year Anniversary',
    body:     'Three years into the JodLxVerse journey, and the world has only grown more layered. What started as an experiment in collective narrative has become something we could not have predicted — a community of JODLERS who have made this world their own.',
  },
  'ned-how-to-play': {
    slug:     'ned-how-to-play',
    category: 'FINDERS LAB',
    date:     '27.03.26',
    title:    'New Eden Dreams: How To Play',
    body:     'New Eden Dreams is the latest chapter in the JodLxVerse. Here is everything you need to know to navigate the new mechanics, find hidden transmissions, and make your mark on the evolving narrative.',
  },
}

const article = ARTICLES[slug] || null

useHead({ title: article ? `${article.title} — JodLxVerse` : 'Article Not Found — JodLxVerse' })
</script>

<style scoped>
.article-body,
.not-found {
  background: #FAF9F5;
  min-height: 100vh;
  padding: calc(var(--menu-top) + 4rem) var(--grid-side-margin) 8rem var(--menu-left);
}

.article-header { margin-bottom: 4rem; }
.article-header > :deep(.dot-caption) { margin-bottom: 2rem; }
.article-header .type-h0 { margin-bottom: 2rem; max-width: 56rem; }

.article-meta {
  align-items: center;
  display: flex;
  gap: 2rem;
  opacity: 0.5;
}

.article-content {
  max-width: 72rem;
}

.article-content p + p { margin-top: 1.5em; }

.article-footer { margin-top: 6rem; }

.back-link {
  border: 1px solid var(--line-dark);
  color: inherit;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: border-color 0.3s;
}
.back-link:hover { border-color: #000; }

.not-found { display: flex; flex-direction: column; gap: 3rem; }

@media (max-width: 767px) {
  .article-body,
  .not-found { padding: calc(var(--menu-top) + 2rem) 2rem 4rem; }
}
</style>
