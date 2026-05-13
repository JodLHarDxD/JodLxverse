import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  // Respect prefers-reduced-motion — CLAUDE.md hard rule
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let lenis = null

  if (!prefersReducedMotion) {
    // BLUEPRINT §CLAUDE.md: Lenis duration 1.2s, specific easing function
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    // Drive Lenis via GSAP ticker (NOT requestAnimationFrame directly — CLAUDE.md)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Eliminate GSAP lag compensation so Lenis stays in sync
    gsap.ticker.lagSmoothing(0)

    // Proxy ScrollTrigger through Lenis scroll position
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    lenis.on('scroll', ScrollTrigger.update)
    ScrollTrigger.refresh()
  } else {
    // Reduced-motion: disable smooth scroll entirely, use native scrolling
    ScrollTrigger.refresh()
  }

  // Refresh ScrollTrigger on every route change (CLAUDE.md hard rule)
  nuxtApp.hook('page:finish', () => {
    ScrollTrigger.refresh()
  })

  // Provide lenis instance to all components via useNuxtApp().provide
  return {
    provide: { lenis },
  }
})
