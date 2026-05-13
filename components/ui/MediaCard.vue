<template>
  <a class="media-card" :class="`type-${item.type}`" :href="item.detailUrl">
    <div class="card-frame">
      <CornerCutSvg />
      <img v-if="item.type === 'image'" :src="item.thumbnail" :alt="item.title" loading="lazy">
      <video
        v-else-if="item.type === 'video'"
        :poster="item.thumbnail"
        muted
        playsinline
      >
        <source v-if="item.preview" :src="item.preview" type="video/webm">
      </video>
      <div v-else-if="item.type === 'audio'" class="waveform-placeholder">
        <span v-for="i in 12" :key="i" class="bar"></span>
      </div>
    </div>

    <div class="card-meta">
      <DotCaption class="type-caption4">{{ item.type }}</DotCaption>
      <span class="type-caption4">{{ item.date }}</span>
    </div>

    <h3 class="card-title type-h3">{{ item.title }}</h3>
  </a>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
})
</script>

<style scoped>
.media-card {
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
}

.card-frame {
  aspect-ratio: 4 / 3;
  background: var(--cl-black);
  overflow: hidden;
  position: relative;
}

.card-frame img,
.card-frame video {
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out-quart);
  width: 100%;
}

.media-card:hover .card-frame img,
.media-card:hover .card-frame video {
  transform: scale(1.04);
}

.waveform-placeholder {
  align-items: flex-end;
  display: flex;
  gap: 3px;
  height: 100%;
  justify-content: center;
  padding: 2rem;
}

.waveform-placeholder .bar {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 1px;
  display: block;
  width: 4px;
}

.waveform-placeholder .bar:nth-child(odd)  { height: 40%; }
.waveform-placeholder .bar:nth-child(even) { height: 25%; }

.card-meta {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>
