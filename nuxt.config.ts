// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-05-13',
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    preset: 'static'
  },

  // Global CSS — §3–§10 foundation tokens, type scale, easings, keyframes, reset
  css: ['~/assets/css/global.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
    // Vue page transition matching §9 .fade-* classes
    pageTransition: { name: 'fade', mode: 'out-in' },
  },

  vite: {
    // Allow importing SVG files as raw inline strings via the ?inline query
    // Usage in components: import LogoSvg from '~/assets/svg/logo.svg?inline'
    assetsInclude: [],
    plugins: [],
  },
})
