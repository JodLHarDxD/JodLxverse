<template>
  <span class="hacky-text" @mouseenter="handleHover">
    <span class="spacer" ref="spacerEl"><slot /></span>
    <span class="animation" ref="animEl"></span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps({
  triggerOn: { type: String, default: 'mount' }, // mount | scroll | manual | hover
  once: { type: Boolean, default: true },
})

const spacerEl = ref(null)
const animEl   = ref(null)
let scrollTrigger = null
let isAnimating = false

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

function scramble(targetText, el, opts = {}) {
  const { duration = 600, perCharDelay = 30 } = opts
  const length      = targetText.length
  const totalFrames = Math.ceil(duration / 16.67)
  let frame = 0
  isAnimating = true

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
    else {
      el.textContent = targetText
      isAnimating = false
    }
  }
  requestAnimationFrame(tick)
}

function trigger(opts) {
  const text = spacerEl.value?.textContent?.trim() || ''
  if (text && animEl.value && !isAnimating) scramble(text, animEl.value, opts)
}

function handleHover() {
  if (props.triggerOn === 'manual') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  trigger({ duration: 520, perCharDelay: 18 })
}

onMounted(() => {
  const text = spacerEl.value?.textContent?.trim() || ''
  if (animEl.value) animEl.value.textContent = text

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (props.triggerOn === 'scroll') {
    scrollTrigger = ScrollTrigger.create({
      trigger: spacerEl.value,
      start: 'top 85%',
      once: props.once,
      onEnter: () => trigger(),
      onEnterBack: () => {
        if (!props.once) trigger()
      },
    })
  } else if (props.triggerOn === 'mount') {
    trigger()
  }
})

onUnmounted(() => {
  if (scrollTrigger) scrollTrigger.kill()
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
  white-space: pre-line;
}

@media (max-width: 767px) {
  .animation { display: none; }
}
</style>
