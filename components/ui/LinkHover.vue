<template>
  <span
    class="link-hover"
    :class="{ disabled }"
    @mouseenter="enter"
    @mouseleave="leave"
  >
    <span class="bg" ref="bgEl"></span>
    <span class="content"><slot /></span>
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps({
  disabled: { type: Boolean, default: false },
})

const bgEl = ref(null)

onMounted(() => {
  // Let GSAP own the transform from the start to avoid CSS/GSAP conflicts
  gsap.set(bgEl.value, { x: '-101%' })
})

function enter() {
  if (!bgEl.value) return
  gsap.to(bgEl.value, { x: '0%', duration: 0.3, ease: 'power4.out' })
}

function leave() {
  if (!bgEl.value) return
  gsap.to(bgEl.value, {
    x: '101%',
    duration: 0.3,
    ease: 'power4.out',
    onComplete: () => gsap.set(bgEl.value, { x: '-101%' }),
  })
}
</script>

<style scoped>
.link-hover {
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;
}

.link-hover.disabled { display: contents; }
.link-hover.disabled .bg { display: none; }

.link-hover .bg {
  background: currentColor;
  height: 100%;
  left: 0;
  opacity: 0.12;
  position: absolute;
  top: 0;
  width: 100%;
}

.link-hover .content {
  display: inline-block;
  max-width: 100%;
  position: relative;
}
</style>
