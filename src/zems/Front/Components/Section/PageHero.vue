<template>
  <section class="page-hero">
    <img
      v-if="backgroundImage"
      :src="backgroundImage"
      class="page-hero-img"
      alt="Hero Background"
      loading="eager"
    />
    <div class="overlay-gradient"></div>
    <div class="hero-content">
      <span class="fade-in">{{ subtitle }}</span>
      <h1 class="gold-text fade-in-up" v-html="title"></h1>
    </div>
  </section>
</template>

<script setup>
defineProps({
  subtitle: {
    type: String,
    default: "THE COLLECTION",
  },
  title: {
    type: String,
    default: "Manhattan's <br /> Crown Jewels",
  },
  backgroundImage: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.page-hero {
  height: 70vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  padding-top: 100px; /* Offset for fixed navbar */
  background-color: #050505;
}

.page-hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 1;
  animation: zoomSlow 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
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
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 2;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 900px;
  padding: 0 40px;
}

.hero-content span {
  display: block;
  font-size: 0.85rem;
  letter-spacing: 6px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #fff;
}

.gold-text {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 4.2rem);
  line-height: 1.2;
  margin-bottom: 0;
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--text-gold);
}

/* Animations */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards 1s;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.2s forwards 1.2s;
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

@media (max-width: 768px) {
  .page-hero {
    height: 60vh;
    padding-top: 80px;
  }
  .gold-text {
    font-size: 2.2rem;
  }
}
</style>
