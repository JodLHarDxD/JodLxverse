<template>
  <a class="citizen-card" :href="citizen.url">
    <div class="card-art">
      <CornerCutSvg />
      <img v-if="citizen.image" :src="citizen.image" :alt="citizen.name" loading="lazy">
    </div>
    <h3 class="type-citizen-title">{{ citizen.name }}</h3>
    <p class="type-citizen2">{{ citizen.tagline }}</p>
    <p class="type-citizen-body">{{ citizen.description }}</p>
  </a>
</template>

<script setup>
defineProps({
  citizen: { type: Object, required: true },
})
</script>

<style scoped>
.citizen-card {
  color: inherit;
  display: block;
  text-decoration: none;
}

.card-art {
  aspect-ratio: 1;
  margin-bottom: 1.5rem;
  overflow: hidden;
  position: relative;
}

.card-art img {
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out-quart);
  width: 100%;
}

.citizen-card:hover .card-art img {
  transform: scale(1.04);
}
</style>
