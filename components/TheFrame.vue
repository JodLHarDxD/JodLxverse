<template>
  <div class="the-frame the-frame-layer" :class="{ 'theme-dark': isDark }" ref="frameEl">

    <!-- TOP: hamburger + submenu filter tabs -->
    <div class="frame-bounds-top">
      <div class="pad line-outer">
        <div class="top">
          <div class="hamburger">
            <BtnBurger class="btn-burger" />
          </div>
          <div class="bar">
            <TheFrameSubmenu />
            <div class="line" />
          </div>
        </div>
      </div>
    </div>

    <!-- LEFT: icon-mark + audio bars -->
    <div class="frame-bounds-left">
      <div class="left">
        <IconMark class="icon-mark" />
        <div class="bottom">
          <button aria-label="Toggle audio"><BtnAudio /></button>
        </div>
        <div class="line" />
      </div>
    </div>

    <!-- RIGHT: visual edge only -->
    <div class="frame-bounds-right" />

    <!-- BOTTOM: scroll progress indicator -->
    <div class="frame-bounds-bottom">
      <TheFrameProgress />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const frameEl = ref(null)
const isDark = ref(false)
let observer = null

onMounted(() => {
  const sections = document.querySelectorAll('[data-theme]')
  if (!sections.length) return

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isDark.value = entry.target.dataset.theme === 'dark'
      }
    })
  }, { threshold: 0.4 })

  sections.forEach(s => observer.observe(s))
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
/* §12 — frame shell */
.the-frame {
  height: 100vh;
  inset: 0;
  pointer-events: none;
  position: fixed;
  width: 100%;
  z-index: var(--z-frame);
}
@media (max-width: 767px) {
  .the-frame { position: fixed; }
}

.frame-bounds-bottom,
.frame-bounds-left,
.frame-bounds-right,
.frame-bounds-top {
  pointer-events: auto;
  position: absolute;
}

.frame-bounds-top {
  height: var(--menu-top);
  left: 0;
  top: 0;
  width: 100vw;
}

.frame-bounds-left {
  height: 100vh;
  left: 0;
  top: 0;
  width: var(--menu-left);
}

.frame-bounds-bottom {
  bottom: 0;
  height: var(--menu-bottom);
  right: 0;
  width: 100vw;
}

.frame-bounds-right {
  bottom: 0;
  height: 100vh;
  right: 0;
  width: var(--menu-right);
}

/* §13 — theme layer */
.the-frame-layer {
  --color:         #000;
  --colorLines:    var(--line-dark);
  --colorOpposite: #fff;
  color: var(--color);
  pointer-events: none;
}

.the-frame-layer.theme-dark {
  --color:         #fff;
  --colorLines:    var(--line-light);
  --colorOpposite: #000;
}

.mask    { overflow: hidden; }
.pad     { padding: var(--menu-pad); }
.content {
  height: 100%;
  position: relative;
  width: 100%;
  will-change: transform;
}

.line-outer {
  border: var(--line-thickness) solid var(--colorLines);
  border-radius: var(--menu-radius);
  height: 100%;
}

/* TOP row */
.top {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: var(--menu-height);
  justify-content: center;
  position: relative;
}

.top .hamburger {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 67px;
}
@media (max-width: 767px) {
  .top .hamburger {
    border-right: var(--line-thickness) solid var(--colorLines);
    width: 45px;
  }
}

.top .hamburger :deep(.btn-burger) { height: 100%; width: 100%; }

.top .bar { flex: 1; height: 100%; position: relative; }

.top .line {
  background: var(--colorLines);
  bottom: 0;
  height: var(--line-thickness);
  left: 0;
  position: absolute;
  width: 100%;
}

/* LEFT sidebar */
.left {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: var(--menu-width);
}

.left :deep(.icon-mark) { width: 39px; }

.left .bottom    { bottom: 0; position: absolute; width: 100%; }
.left button     { aspect-ratio: 1 / 1; background: transparent; border: none; cursor: pointer; position: relative; width: 100%; }

.left .line {
  background: var(--colorLines);
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: var(--line-thickness);
}
</style>
