<template>
  <span class="cornerCutSvg">
    <!-- Folder-tab notch — right-triangle positioned at top-right of parent card -->
    <svg
      class="shape"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="0,0 16,0 16,16" fill="currentColor" />
    </svg>
  </span>
</template>

<style scoped>
.cornerCutSvg {
  pointer-events: none;
}

.cornerCutSvg .shape {
  opacity: 0.15;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
