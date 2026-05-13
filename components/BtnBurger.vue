<template>
  <button
    class="btn-burger"
    :class="{ hovering: isHovering }"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    @click="toggle"
    aria-label="Toggle menu"
  >
    <svg class="icon-burger" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line ref="line1" x1="0" y1="4" x2="27" y2="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      <line ref="line2" x1="0" y1="12" x2="27" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  </button>
</template>

<script setup>
import { ref, watch } from 'vue'
import gsap from 'gsap'
import { useMenu } from '~/composables/useMenu.js'

const { isOpen, toggle } = useMenu()
const isHovering = ref(false)
const line1 = ref(null)
const line2 = ref(null)

watch(isOpen, (open) => {
  if (!line1.value || !line2.value) return
  if (open) {
    gsap.to(line1.value, { attr: { y1: 8, y2: 8, x1: 3, x2: 24 }, rotation: 45, transformOrigin: '50% 50%', duration: 0.3, ease: 'power3.out' })
    gsap.to(line2.value, { attr: { y1: 8, y2: 8, x1: 3, x2: 24 }, rotation: -45, transformOrigin: '50% 50%', duration: 0.3, ease: 'power3.out' })
  } else {
    gsap.to(line1.value, { attr: { y1: 4, y2: 4, x1: 0, x2: 27 }, rotation: 0, duration: 0.3, ease: 'power3.out' })
    gsap.to(line2.value, { attr: { y1: 12, y2: 12, x1: 0, x2: 27 }, rotation: 0, duration: 0.3, ease: 'power3.out' })
  }
})
</script>

<style scoped>
.btn-burger {
  align-items: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--menu-radius) 0 0 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: auto;
  position: relative;
}

.btn-burger .icon-burger {
  stroke: currentColor;
  width: 27px;
}

.btn-burger.hovering {
  border-color: var(--color);
}
</style>
