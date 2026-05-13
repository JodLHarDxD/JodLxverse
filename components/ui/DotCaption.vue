<template>
  <span class="dot-caption" :class="{ singleLine }">
    <Dot :class="{ hidden: hideDot }" />
    <LinkHover><slot /></LinkHover>
  </span>
</template>

<script setup>
defineProps({
  singleLine: { type: Boolean, default: false },
  hideDot:    { type: Boolean, default: false },
})
</script>

<style scoped>
.dot-caption {
  align-items: flex-start;
  display: inline-flex;
  position: relative;
}

:deep(.dot) {
  position: relative;
  top: -0.1em;
}

:deep(.dot.hidden) {
  opacity: 0;
}

:deep(.link-hover) {
  color: currentColor;
}

.dot-caption.singleLine {
  align-items: center;
  white-space: nowrap;
}

.dot-caption.singleLine :deep(.dot) {
  margin-top: 0;
}
</style>
