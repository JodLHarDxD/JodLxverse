<template>
  <Teleport to="body">
    <div class="the-menu" :style="{ display: isOpen ? 'flex' : 'none' }">

      <!-- Translucent background underlay -->
      <div class="underlay">
        <div class="graphic" />
      </div>

      <!-- Main panel -->
      <div class="container">
        <div class="content">
          <div class="content-outer" />
          <div class="content-inner">

            <!-- Close row -->
            <div class="section close">
              <button class="btn-close" @click="close" aria-label="Close menu">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </button>
            </div>

            <!-- Navigation -->
            <div class="section nav">
              <div class="left">
                <span class="type-caption4">NAVIGATION</span>
              </div>
              <div class="right">
                <NuxtLink
                  v-for="item in navItems"
                  :key="item.path"
                  :to="item.path"
                  class="nav-item"
                  @click="close"
                >
                  <span class="type-h3">{{ item.label }}</span>
                  <span class="type-caption4 page-num">{{ item.page }}</span>
                </NuxtLink>
              </div>
            </div>

            <!-- Connect -->
            <div class="section connect">
              <div class="left">
                <span class="type-caption4">CONNECT</span>
              </div>
              <div class="right">
                <a href="#" class="nav-item type-caption2" target="_blank" rel="noopener noreferrer">TWITTER ↗</a>
                <a href="#" class="nav-item type-caption2" target="_blank" rel="noopener noreferrer">DISCORD ↗</a>
              </div>
            </div>

            <!-- Buy On -->
            <div class="section buy">
              <div class="left">
                <span class="type-caption4">BUY ON</span>
              </div>
              <div class="right">
                <a href="#" class="nav-item type-caption2" target="_blank" rel="noopener noreferrer">OPENSEA ↗</a>
              </div>
            </div>

            <!-- Locale -->
            <div class="section locale">
              <div class="left">
                <span class="type-caption4">LOCALE</span>
              </div>
              <div class="right">
                <span class="type-caption4">US-EN</span>
              </div>
            </div>

            <!-- Footer row -->
            <div class="section footer-row">
              <span class="type-caption4">© 2026 JODLXVERSE</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useMenu } from '~/composables/useMenu.js'

const { isOpen, close } = useMenu()

const navItems = [
  { path: '/',         label: 'STORY',    page: 'PAGE 001' },
  { path: '/protocol', label: 'PROTOCOL', page: 'PAGE 002' },
  { path: '/journal',  label: 'JOURNAL',  page: 'PAGE 003' },
  { path: '/media',    label: 'MEDIA',    page: 'PAGE 004' },
  { path: '/gallery',  label: 'GALLERY',  page: 'PAGE 005' },
  { path: '/about',    label: 'ABOUT',    page: 'PAGE 006' },
]
</script>

<style scoped>
.the-menu {
  align-items: stretch;
  height: 100vh;
  left: 0;
  overflow: hidden;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transform: translateZ(0);
  width: 100vw;
  z-index: var(--z-menu);
}
@media (max-width: 767px) {
  .the-menu { height: 100%; }
}

.underlay {
  inset: 0;
  position: absolute;
}

.underlay .graphic {
  background: linear-gradient(90deg, #fff 27.97%, hsla(0, 0%, 100%, 0.75));
  height: 100%;
  opacity: 0.85;
  width: 100%;
}

.container {
  align-items: center;
  border-radius: var(--menu-radius);
  color: #fff;
  display: flex;
  flex-direction: row;
  height: calc(100% - var(--menu-pad) * 2);
  justify-content: center;
  left: var(--menu-pad);
  position: absolute;
  text-transform: uppercase;
  top: var(--menu-pad);
  width: fit-content;
}
@media (max-width: 767px) {
  .container { height: 100%; left: 0; overflow: hidden; top: 0; width: 100%; }
}

.content {
  flex: 1;
  height: 100%;
  position: relative;
  width: 60rem;
}
[lang="ja-jp"] .content,
[lang="zh-cn"] .content,
[lang="zh-tw"] .content { width: 46rem; }

.content .content-inner,
.content .content-outer {
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
}

.content .content-inner {
  align-items: flex-start;
  background: #000;
  border-radius: var(--menu-radius) 0 0 var(--menu-radius);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
@media (max-width: 767px) {
  .content .content-inner { border-radius: var(--menu-radius); }
}

.content .section {
  align-items: stretch;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 2.5rem;
  width: 100%;
}
@media (max-width: 767px) {
  .content .section { padding: 2rem var(--padding); }
}
.content .section:last-child { border-bottom: none; }

.content .left  { min-width: 14.5rem; width: 14.5rem; }
.content .right { align-items: flex-start; display: flex; flex: 1; flex-direction: column; gap: 0.8rem; }

.section.close {
  align-items: center;
  border-bottom: none;
  height: 6rem;
  justify-content: flex-end;
}

.section.nav {
  flex: 1;
  padding-top: 3.7rem;
}
.section.nav .right { align-items: flex-start; }

.btn-close {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  opacity: 0.7;
  padding: 0.8rem;
}
.btn-close:hover { opacity: 1; }

.nav-item {
  color: inherit;
  display: block;
  text-decoration: none;
}
.nav-item:hover { opacity: 0.7; }

.page-num {
  display: block;
  margin-top: 0.2rem;
  opacity: 0.4;
}
</style>
