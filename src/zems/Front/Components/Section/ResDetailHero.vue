<template>
  <section class="unit-hero">
    <div class="unit-hero-img" :style="{ backgroundImage: `url(${imgSrc})` }">
      <img :src="imgSrc" v-show="false" @error="handleImgError" />
    </div>
    <div class="overlay-gradient"></div>
    <div class="hero-content text-center">
      <span class="fade-in">{{ tower }}</span>
      <h1 class="gold-text-hero fade-in-up">{{ name }}</h1>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  tower: String,
  name: String,
  image: String,
});

const fallbackImg =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop";
const imgSrc = ref(props.image);

watch(
  () => props.image,
  (newVal) => {
    imgSrc.value = newVal;
  },
  { immediate: true },
);

const handleImgError = () => {
  imgSrc.value = fallbackImg;
};
</script>

<style scoped>
.unit-hero {
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.unit-hero-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  animation: zoomSlow 20s infinite alternate linear;
}

@keyframes zoomSlow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.overlay-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.8)
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 10;
}

.hero-content span {
  display: block;
  letter-spacing: 8px;
  font-size: 0.9rem;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.gold-text-hero {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 5rem);
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--text-gold);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards 0.5s;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards 0.7s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
