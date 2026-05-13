<template>
  <component
    :is="tag"
    class="btn-main type-btn"
    v-bind="attrs"
    @mouseenter="enter"
    @mouseleave="leave"
  >
    <span class="bg" ref="bgEl"></span>
    <span class="content"><slot /></span>
  </component>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  href: { type: String, default: null },
})

const tag   = computed(() => props.href ? 'a' : 'button')
const attrs = computed(() => props.href ? { href: props.href } : { type: 'button' })

const bgEl = ref(null)

onMounted(() => {
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
.btn-main {
  border: 1px solid currentColor;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 1rem 2rem;
  position: relative;
  text-decoration: none;
  background: none;
}

.btn-main .bg {
  background: currentColor;
  height: 100%;
  left: 0;
  opacity: 0.1;
  position: absolute;
  top: 0;
  width: 100%;
}

.btn-main .content {
  position: relative;
}
</style>
