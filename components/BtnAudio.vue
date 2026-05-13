<template>
  <div class="btn-audio" @click="toggle" :aria-label="playing ? 'Mute' : 'Enable audio'">
    <span v-for="i in 4" :key="i" class="line" :ref="el => { if (el) bars[i - 1] = el }" />
  </div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'

const playing = ref(false)
const bars = ref([])
let rafId = null

function toggle() {
  playing.value = !playing.value
}

function animateBars() {
  bars.value.forEach(bar => {
    if (!bar) return
    bar.style.transform = `scaleY(${0.6 + Math.random() * 0.8})`
  })
  rafId = requestAnimationFrame(animateBars)
}

function stopAnimation() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
  bars.value.forEach(bar => { if (bar) bar.style.transform = 'scaleY(1)' })
}

watch(playing, val => val ? animateBars() : stopAnimation())
onUnmounted(() => { if (rafId) cancelAnimationFrame(rafId) })
</script>

<style scoped>
.btn-audio {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  pointer-events: auto;
  position: relative;
  will-change: transform;
}

.btn-audio .line {
  background: currentColor;
  display: block;
  height: 13px;
  margin: 0 1px;
  transform-origin: center;
  width: 1px;
}
</style>
