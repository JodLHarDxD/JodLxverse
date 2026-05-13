<template>
  <span class="hacky-text">
    <span class="spacer" ref="spacerEl"><slot /></span>
    <span class="animation" ref="animEl"></span>
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const spacerEl = ref(null)
const animEl   = ref(null)

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

function scramble(targetText, el, opts = {}) {
  const { duration = 600, perCharDelay = 30 } = opts
  const length      = targetText.length
  const totalFrames = Math.ceil(duration / 16.67)
  let frame = 0

  function tick() {
    let output = ''
    for (let i = 0; i < length; i++) {
      const resolvedAt = i * (perCharDelay / 16.67)
      if (frame >= resolvedAt + 4) {
        output += targetText[i]
      } else if (frame >= resolvedAt) {
        output += CHARS[Math.floor(Math.random() * CHARS.length)]
      } else {
        output += ' '
      }
    }
    el.textContent = output
    frame++
    if (frame < totalFrames) requestAnimationFrame(tick)
    else el.textContent = targetText
  }
  requestAnimationFrame(tick)
}

function trigger(opts) {
  const text = spacerEl.value?.textContent?.trim() || ''
  if (text && animEl.value) scramble(text, animEl.value, opts)
}

onMounted(() => {
  const text = spacerEl.value?.textContent?.trim() || ''
  if (animEl.value) animEl.value.textContent = text
  // Run initial scramble (Phase 5 will add ScrollTrigger)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) trigger()
})

defineExpose({ trigger })
</script>

<style scoped>
.hacky-text {
  position: relative;
}

.spacer {
  max-width: 100%;
  opacity: 0;
}

@media (max-width: 767px) {
  .spacer {
    opacity: 1;
    white-space: pre-line;
  }
}

.animation {
  left: 0;
  max-width: 100%;
  position: absolute;
  top: 0;
}

@media (max-width: 767px) {
  .animation { display: none; }
}
</style>
