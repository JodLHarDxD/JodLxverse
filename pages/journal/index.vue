<template>
  <div class="page-journal" ref="pageEl">

    <!-- §29.1 — Hero -->
    <section class="journal-hero" data-theme="light">
      <DotCaption class="active type-caption4">ALL</DotCaption>
      <h1 class="type-dh1 journal-wordmark">JOURNAL</h1>
      <div class="meta-bar">
        <span class="type-caption4">DISCOVER WHAT'S NEW IN THE JODLXVERSE WORLD</span>
        <DotCaption class="type-caption4">LATEST ARTICLE: 27.03.26</DotCaption>
      </div>
    </section>

    <!-- §29.2 — Featured Article -->
    <section class="featured-article" data-theme="dark">
      <div class="featured-overlay">
        <DotCaption class="type-caption4">FEATURED · 18.08.22</DotCaption>
        <h2 class="type-h0">OUR ORIGIN STORY</h2>
        <NuxtLink class="cta type-btn" to="/journal/our-origin-story">
          READ STORY →
        </NuxtLink>
      </div>
    </section>

    <!-- §29.3 — Article Grid -->
    <section class="article-grid" data-theme="light">
      <div class="grid-left">
        <DotCaption class="type-caption4">36 STORIES</DotCaption>

        <nav class="category-nav">
          <a class="category-item active type-h2">ALL NEWS</a>
          <a class="category-item type-h3">UPDATES</a>
          <a class="category-item type-h3">COMMUNITY</a>
          <a class="category-item type-h3">FINDERS LAB</a>
        </nav>

        <ArticleCard size="small" :data="articles[1]" />
      </div>

      <div class="grid-right">
        <ArticleCard size="large" :data="articles[2]" />
      </div>
    </section>

    <div class="load-more">
      <a class="type-btn">LOAD MORE ···</a>
    </div>

    <!-- §29.5 — To Be Continued -->
    <section class="to-be-continued" data-theme="dark">
      <div class="content-left">
        <DotCaption class="type-caption4">TO BE CONTINUED</DotCaption>
        <h2 class="type-h0">
          THE JODLXVERSE<br>
          WORLD IS EVER<br>
          EVOLVING.
        </h2>
      </div>
      <div class="content-right">
        <blockquote class="type-body1">
          There is the life you have, and there is the life you want.<br>
          The difference? The choices you make, and the calls you answer.
        </blockquote>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createStaggeredSectionReveal, useMotionLifecycle } from '~/composables/useScrollTrigger'

useHead({
  title: 'Journal',
  meta: [
    { name: 'description', content: 'Discover the latest stories, updates, and community news from the JodLxVerse world.' },
    { property: 'og:title', content: 'Journal | JodLxVerse' },
    { property: 'og:description', content: 'Discover the latest stories, updates, and community news from the JodLxVerse world.' },
    { property: 'og:url', content: 'https://jodlxverse.com/journal/' },
  ],
})

const pageEl = ref(null)

const articles = [
  {
    url: '/journal/our-origin-story',
    category: 'UPDATES',
    date: '18.08.22',
    title: 'Our Origin Story',
    thumbnail: null,
  },
  {
    url: '/journal/three-year-anniversary',
    category: 'COMMUNITY',
    date: '14.09.25',
    title: 'Three Year Anniversary',
    thumbnail: null,
  },
  {
    url: '/journal/ned-how-to-play',
    category: 'FINDERS LAB',
    date: '27.03.26',
    title: 'New Eden Dreams: How To Play',
    thumbnail: null,
  },
]

useMotionLifecycle(({ gsap }) => {
  const root = pageEl.value
  if (!root) return null

  createStaggeredSectionReveal(
    root,
    '.journal-hero, .featured-article, .article-grid, .to-be-continued',
    '.dot-caption, .type-dh1, .type-h0, .type-body1, .type-h2, .type-h3, .meta-bar, .cta, blockquote'
  )

  gsap.from(root.querySelectorAll('.article-card'), {
    autoAlpha: 0,
    y: 42,
    rotation: (index) => index === 0 ? -1.5 : 1.5,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: root.querySelector('.article-grid'),
      start: 'top 78%',
      toggleActions: 'play none none reverse',
    },
  })

  gsap.to(root.querySelector('.featured-overlay'), {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
      trigger: root.querySelector('.featured-article'),
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})
</script>

<style scoped>
/* §29.1 Hero */
.journal-hero {
  background: #FAF9F5;
  padding: calc(var(--menu-top) + 4rem) var(--grid-side-margin) 4rem var(--menu-left);
}

.journal-hero .active { margin-bottom: 2rem; }

.journal-wordmark { margin-bottom: 3rem; }

.meta-bar {
  align-items: center;
  border-top: 1px solid var(--line-dark);
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
}

/* §29.2 Featured */
.featured-article {
  background: #1a1628;
  min-height: 60vh;
  padding: 6rem var(--grid-side-margin) 6rem var(--menu-left);
  position: relative;
}

.featured-overlay {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-end;
  min-height: inherit;
}

.featured-overlay .type-h0 { max-width: 48rem; }

.cta {
  align-self: flex-start;
  border: 1px solid rgba(255,255,255,0.4);
  color: inherit;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: border-color 0.3s;
}
.cta:hover { border-color: #fff; }

/* §29.3 Article Grid */
.article-grid {
  background: #FAF9F5;
  display: grid;
  gap: 0;
  grid-template-columns: 35fr 65fr;
  padding: 6rem var(--grid-side-margin) 6rem var(--menu-left);
}
@media (max-width: 767px) { .article-grid { grid-template-columns: 1fr; } }

.grid-left {
  border-right: 1px solid var(--line-dark);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-right: 4rem;
}

.grid-right { padding-left: 4rem; }

.category-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-item {
  color: inherit;
  cursor: pointer;
  opacity: 0.4;
  text-decoration: none;
  transition: opacity 0.2s;
}
.category-item:hover,
.category-item.active { opacity: 1; }

.load-more {
  background: #FAF9F5;
  padding: 3rem var(--grid-side-margin) 3rem var(--menu-left);
}

.load-more a {
  color: inherit;
  cursor: pointer;
  opacity: 0.5;
  text-decoration: none;
  transition: opacity 0.2s;
}
.load-more a:hover { opacity: 1; }

/* §29.5 To Be Continued */
.to-be-continued {
  background: #1a1628;
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
  min-height: 50vh;
  padding: 8rem var(--grid-side-margin) 8rem var(--menu-left);
}
@media (max-width: 767px) { .to-be-continued { grid-template-columns: 1fr; } }

.content-left .type-h0 { margin-top: 2rem; }

.content-right {
  align-items: flex-end;
  display: flex;
}

blockquote {
  border-left: 1px solid rgba(255,255,255,0.2);
  font-style: italic;
  margin: 0;
  opacity: 0.7;
  padding-left: 2rem;
}

@media (max-width: 767px) {
  .journal-hero { padding: calc(var(--menu-top) + 2rem) 2rem 2rem; }
  .featured-article { padding: 4rem 2rem; }
  .article-grid { padding: 4rem 2rem; }
  .to-be-continued { padding: 6rem 2rem; }
}
</style>
