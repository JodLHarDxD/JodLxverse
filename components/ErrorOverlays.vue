<template>
  <div>
    <div class="widescreen-warning" v-if="viewportTooSmall">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="10" width="40" height="28" rx="2" stroke="currentColor" stroke-width="1.5" />
        <path d="M14 22L4 24L14 26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M34 22L44 24L34 26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      <p class="type-caption4">
        Your Browser resolution is currently not supported.<br>
        Try resizing the window to experience the site.
      </p>
    </div>
    <div class="landscape-warning" v-if="mobileLandscape">
      <svg class="icon-rotate" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="4" width="24" height="40" rx="2" stroke="currentColor" stroke-width="1.5" />
        <path d="M36 14L44 8V20Z" fill="currentColor" />
      </svg>
      <p class="type-caption4">Please turn your device to portrait mode</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const MIN_WIDTH = 1024
const viewportTooSmall = ref(false)
const mobileLandscape  = ref(false)

function check() {
  const w = window.innerWidth
  const h = window.innerHeight
  const mobile = w <= 767
  viewportTooSmall.value = !mobile && w < MIN_WIDTH
  mobileLandscape.value  = mobile && w > h
}

onMounted(() => {
  check()
  window.addEventListener('resize', check)
  window.addEventListener('orientationchange', check)
})
onUnmounted(() => {
  window.removeEventListener('resize', check)
  window.removeEventListener('orientationchange', check)
})
</script>

<style scoped>
.widescreen-warning,
.landscape-warning {
  align-items: center;
  background: #FAF9F5;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  inset: 0;
  justify-content: center;
  padding: 4rem;
  position: fixed;
  text-align: center;
  z-index: var(--z-resize-overlays);
}

.widescreen-warning p,
.landscape-warning p {
  max-width: 28rem;
}
</style>
