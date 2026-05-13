<template>
  <div class="the-frame-progress">
    <div class="progress" ref="progressEl" />
    <div class="line" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progressEl = ref(null)

function updateProgress() {
  if (!progressEl.value) return
  const scrolled = window.scrollY || document.documentElement.scrollTop
  const total = document.documentElement.scrollHeight - window.innerHeight
  progressEl.value.style.transform = `scaleX(${total > 0 ? scrolled / total : 0})`
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})
onUnmounted(() => window.removeEventListener('scroll', updateProgress))
</script>

<style scoped>
.the-frame-progress {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.progress {
  background: currentColor;
  height: 100%;
  opacity: 0.06;
  transform: scaleX(0);
  transform-origin: left center;
  width: 100%;
  will-change: transform;
}

.line {
  border-right: 1px solid var(--colorLines);
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: left center;
  width: 100%;
  will-change: transform;
}
</style>
