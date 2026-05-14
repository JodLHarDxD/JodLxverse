import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { nextTick, onMounted, onUnmounted } from 'vue'

export function usePrefersReducedMotion() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Component-scoped GSAP setup with automatic cleanup.
 * The setup callback is skipped entirely when reduced motion is requested.
 */
export function useMotionLifecycle(setup) {
  let ctx = null
  let cleanup = null

  onMounted(async () => {
    await nextTick()

    if (usePrefersReducedMotion()) {
      ScrollTrigger.refresh()
      return
    }

    ctx = gsap.context(() => {
      cleanup = setup({ gsap, ScrollTrigger })
    })

    ScrollTrigger.refresh()
  })

  onUnmounted(() => {
    if (typeof cleanup === 'function') cleanup()
    if (ctx) ctx.revert()
  })
}

/**
 * Reusable ScrollTrigger factory.
 * Always call onUnmounted(() => trigger.kill()) to avoid memory leaks
 * when the component that owns the trigger is destroyed.
 */
export function useScrollTrigger(config) {
  const trigger = ScrollTrigger.create(config)
  return trigger
}

/**
 * Pin an element for a scrubbed animation (cinematic sections).
 * @param {Ref} el - Vue ref to the element to pin
 * @param {Object} animation - GSAP timeline or tween
 * @param {Object} opts - ScrollTrigger options to merge
 */
export function usePinnedSection(el, animation, opts = {}) {
  return ScrollTrigger.create({
    trigger: el.value,
    pin: true,
    scrub: 1,
    start: 'top top',
    end: '+=100%',
    animation,
    ...opts,
  })
}

/**
 * Fade + translate-Y reveal on scroll entry.
 * @param {Ref|Element} el
 * @param {Object} opts - overrides for gsap.from() defaults
 */
export function useRevealOnScroll(el, opts = {}) {
  const target = el?.value ?? el
  if (usePrefersReducedMotion()) return null

  return gsap.from(target, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    ...opts,
  })
}

/**
 * Staggered reveal for a list of children.
 * @param {Ref|Element} container - parent element
 * @param {string} childSelector - CSS selector for children
 * @param {Object} opts
 */
export function useStaggerReveal(container, childSelector = '*', opts = {}) {
  const parent = container?.value ?? container
  if (usePrefersReducedMotion() || !parent) return null

  return gsap.from(parent.querySelectorAll(childSelector), {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: parent,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    ...opts,
  })
}

export function createSectionReveal(root, selector, opts = {}) {
  if (usePrefersReducedMotion() || !root) return []

  return gsap.utils.toArray(selector, root).map((target) => gsap.from(target, {
    autoAlpha: 0,
    y: 36,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 86%',
      toggleActions: 'play none none reverse',
    },
    ...opts,
  }))
}

export function createStaggeredSectionReveal(root, sectionSelector, childSelector, opts = {}) {
  if (usePrefersReducedMotion() || !root) return []

  return gsap.utils.toArray(sectionSelector, root).map((section) => {
    const children = section.querySelectorAll(childSelector)
    if (!children.length) return null

    return gsap.from(children, {
      autoAlpha: 0,
      y: 28,
      duration: 0.75,
      stagger: 0.07,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
      ...opts,
    })
  }).filter(Boolean)
}
