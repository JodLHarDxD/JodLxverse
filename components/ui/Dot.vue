<template>
  <span class="dot" :class="{ stroke }"></span>
</template>

<script setup>
defineProps({
  stroke: { type: Boolean, default: false },
})
</script>

<style scoped>
.dot {
  background: currentColor;
  display: inline-block;
  height: 0.5rem;
  margin-right: 9px;
  max-height: 0.5rem;
  max-width: 0.5rem;
  min-height: 0.5rem;
  min-width: 0.5rem;
  width: 0.5rem;
}

.dot.stroke {
  background: none;
  border: 1px solid;
}
</style>
