<template>
  <div class="the-frame-submenu">
    <div class="group">
      <div class="submenu showAll">
        <span
          v-for="item in items"
          :key="item.id"
          :class="{ active: activeId === item.id }"
          @click="activeId = item.id"
        >{{ item.label }}<span v-if="item.count != null" class="super">{{ item.count }}</span></span>
      </div>
      <div class="right" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeId = ref(null)

const MAP = {
  '/':         [{ id: 'project', label: 'PROJECT' }, { id: 'keep', label: 'THE KEEP' }, { id: 'factions', label: 'FACTIONS' }, { id: 'world', label: 'THE WORLD' }],
  '/journal':  [{ id: 'all', label: 'ALL' }, { id: 'updates', label: 'UPDATES' }, { id: 'community', label: 'COMMUNITY' }, { id: 'lab', label: 'FINDERS LAB' }],
  '/media':    [{ id: 'all', label: 'ALL', count: 67 }, { id: 'image', label: 'IMAGE', count: 51 }, { id: 'video', label: 'VIDEO', count: 30 }, { id: 'audio', label: 'AUDIO', count: 0 }],
  '/gallery':  [{ id: 'keepers', label: 'KEEPERS COLLECTION' }, { id: 'mine', label: 'MY COLLECTION' }],
  '/about':    [{ id: 'twitter', label: 'CONNECT ON TWITTER' }, { id: 'discord', label: 'CONNECT ON DISCORD' }],
  '/protocol': [{ id: 'vision', label: 'VISION' }, { id: 'world', label: 'WORLD' }, { id: 'characters', label: 'CHARACTERS' }, { id: 'portal', label: 'PORTAL' }, { id: 'union', label: 'UNION' }],
}

const items = computed(() => MAP[route.path] ?? [])
watch(() => route.path, () => { activeId.value = null })
</script>

<style scoped>
.the-frame-submenu {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.group {
  align-items: center;
  display: flex;
  flex-direction: row;
  font-family: IBMPlexMono;
  font-feature-settings: "zero" on;
  font-size: 11px;
  font-style: normal;
  font-weight: 450;
  justify-content: space-between;
  letter-spacing: -0.02em;
  line-height: 1;
  pointer-events: auto;
  text-transform: uppercase;
  width: 100%;
}

.submenu { display: flex; flex-direction: row; }

.submenu > * {
  cursor: pointer;
  margin: 0 1rem;
  opacity: 0.4;
}

.submenu > .active { opacity: 1; }

.submenu.showAll > * { opacity: 1; }

.super {
  display: inline-block;
  font-size: 8px;
  letter-spacing: -0.04em;
  margin-left: 0.3rem;
  transform: translateY(-0.4em);
}

.group > .right {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
}

.group .left > * { margin-left: 3.8rem; }
</style>
