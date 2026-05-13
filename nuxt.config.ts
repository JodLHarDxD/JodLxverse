// https://nuxt.com/docs/api/configuration/nuxt-config
//
// Phase 0 — minimal scaffold.
// Phase 1 adds: css: ['~/assets/css/global.css'], Vite SVG ?inline support,
// app.head meta, html.remlock class hook, and Lenis client plugin auto-registration.
export default defineNuxtConfig({
  compatibilityDate: '2026-05-13',
  devtools: { enabled: true },

  // SSR stays on; `npm run generate` produces static HTML via SSR-at-build.
  // Flip nitro.preset to 'node-server' (or platform preset) when backend logic arrives.
  ssr: true,
  nitro: {
    preset: 'static'
  }
})
