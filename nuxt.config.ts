// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-05-13',
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/', '/journal', '/media', '/gallery', '/about', '/protocol'],
    },
  },

  // Flatten component imports — components/ui/Foo.vue resolves as <Foo />, not <UiFoo />
  components: [{ path: '~/components', pathPrefix: false }],

  // Global CSS — §3–§10 foundation tokens, type scale, easings, keyframes, reset
  css: ['~/assets/css/global.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s | JodLxVerse',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1a1628' },
        { name: 'description', content: 'JodLxVerse — Keep. Protect. Reimagine. A living world built on curiosity, coherence, and creation.' },
        { property: 'og:site_name', content: 'JodLxVerse' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:description', content: 'JodLxVerse — Keep. Protect. Reimagine. A living world built on curiosity, coherence, and creation.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/og-image.png' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // Preload critical fonts to eliminate FOUT on first paint
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/InterVariable.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/BigShouldersDisplay-Bold.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/IBMPlexMono-VariableFont.woff2', crossorigin: 'anonymous' },
        { rel: 'canonical', href: 'https://jodlxverse.com/' },
      ],
    },
    // Vue page transition matching §9 .fade-* classes
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
})
