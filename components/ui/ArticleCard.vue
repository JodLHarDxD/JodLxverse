<template>
  <a class="article-card" :class="`size-${size}`" :href="data.url">
    <div class="card-header">
      <DotCaption class="card-tag type-caption4">{{ data.category }}</DotCaption>
      <span class="card-date type-caption4">{{ data.date }}</span>
    </div>

    <h3 class="card-title type-h3">{{ data.title }}</h3>

    <div class="card-image">
      <img v-if="data.thumbnail" :src="data.thumbnail" :alt="data.title" loading="lazy">
      <!-- Inline chevron arrow -->
      <svg class="card-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </a>
</template>

<script setup>
defineProps({
  size: { type: String, default: 'small' },  // 'small' | 'large'
  data: { type: Object, required: true },
})
</script>

<style scoped>
.article-card {
  border: 1px solid var(--line-dark);
  color: inherit;
  display: block;
  padding: 2rem;
  text-decoration: none;
  transition: border-color 0.3s var(--ease-out-quart);
}

.article-card:hover {
  border-color: var(--color, #000);
}

.card-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.card-title {
  margin-bottom: 2rem;
}

.card-image {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
}

.card-image img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.card-arrow {
  bottom: 1rem;
  filter: drop-shadow(0 1px 3px rgba(0,0,0,0.6));
  position: absolute;
  right: 1rem;
}
</style>
