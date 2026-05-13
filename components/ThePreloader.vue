<template>
  <Teleport to="body">
    <Transition name="preloader-fade">
      <div class="preloader" v-if="visible">

        <!-- Center: click-to-enable-sound CTA -->
        <div class="cta-audio" @click="handleClick" :class="{ ready: progress >= 100 }">
          <div class="icon">
            <svg class="spin-cw" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="17" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5" opacity="0.35" />
              <polygon points="20,9 29,28 11,28" fill="currentColor" opacity="0.55" />
            </svg>
          </div>
          <p class="type-caption4 cta-label">CLICK TO ENABLE SOUND</p>
        </div>

        <!-- Bottom: progress bar + status text -->
        <div class="progress-bar">
          <span class="type-caption4 prefix">&gt;&gt;</span>
          <span class="type-caption4 pct">LOADING - {{ Math.floor(progress) }}%</span>
          <div class="fill-track">
            <div class="fill" :style="{ transform: `scaleX(${progress / 100})` }" />
          </div>
          <span class="type-caption4 status">{{ statusText }}</span>
        </div>

      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const visible  = ref(true)
const progress = ref(0)

const statusText = computed(() => {
  if (progress.value < 30) return 'HTTPS://JODLXVERSE.COM/JODLX/KAI-14/REACTOR/ISOTOPE-C/43LK2L'
  if (progress.value < 60) return 'INITIALIZING SYSTEM...12'
  if (progress.value < 90) return 'LOADING ATTRIBUTES'
  return 'LOADING - 100%'
})

function handleClick() {
  if (progress.value < 100) return
  visible.value = false
}

onMounted(() => {
  const id = setInterval(() => {
    progress.value = Math.min(100, progress.value + Math.random() * 7 + 2)
    if (progress.value >= 100) { progress.value = 100; clearInterval(id) }
  }, 80)
})
</script>

<style scoped>
.preloader {
  align-items: center;
  background: #FAF9F5;
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: var(--z-loader);
}

.cta-audio {
  align-items: center;
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  opacity: 0.4;
  transition: opacity 0.4s ease;
  user-select: none;
}
.cta-audio.ready {
  cursor: pointer;
  opacity: 1;
}

.icon .spin-cw {
  animation: spin-cw 4s linear infinite;
}

@keyframes spin-cw {
  to { transform: rotate(360deg); }
}

.progress-bar {
  align-items: center;
  bottom: 40px;
  display: flex;
  gap: 1.2rem;
  left: 40px;
  position: absolute;
  right: 40px;
}

.prefix  { opacity: 0.4; }
.pct     { opacity: 0.7; white-space: nowrap; }

.fill-track {
  background: rgba(0, 0, 0, 0.08);
  flex: 1;
  height: 1px;
  overflow: hidden;
}
.fill {
  background: #000;
  height: 100%;
  transform: scaleX(0);
  transform-origin: left center;
  width: 100%;
  will-change: transform;
}

.status {
  max-width: 38%;
  opacity: 0.45;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.preloader-fade-leave-active { transition: opacity 0.6s ease; }
.preloader-fade-leave-to     { opacity: 0; }
</style>
