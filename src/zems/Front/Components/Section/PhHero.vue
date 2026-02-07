<template>
  <section class="ph-hero">
    <div
      class="ph-hero-bg parallax"
      style="
        background-image: url(&quot;https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop&quot;);
      "
    ></div>
    <div class="ph-overlay-gradient"></div>
    <div class="ph-hero-content text-center">
      <span class="fade-in tracking-widest">THE CROWN JEWEL</span>
      <h1 class="gold-text-large fade-in-up">
        Penthouse <br />
        Alpha
      </h1>
      <p class="fade-in-scroll desc">
        The highest outdoor terrace in the Western Hemisphere.
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll(".parallax");
    parallax.forEach((el) => {
      const speed = 0.5;
      el.style.backgroundPositionY = -(scrolled * speed) + "px";
    });
  });
});
</script>

<style scoped>
.ph-hero {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
}

.ph-hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.ph-overlay-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.9)
  );
  z-index: 2;
}

.ph-hero-content {
  position: relative;
  z-index: 10;
  max-width: 900px;
  padding: 0 20px;
}

.tracking-widest {
  letter-spacing: 12px;
  font-size: 0.9rem;
  color: #fff;
  display: block;
  margin-bottom: 30px;
  opacity: 0.8;
}

.gold-text-large {
  font-family: var(--font-heading);
  font-size: clamp(4rem, 12vw, 8rem);
  line-height: 0.9;
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--text-gold);
  margin-bottom: 40px;
}

.desc {
  font-size: 1.25rem;
  color: #ccc;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s forwards 0.5s;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1.5s forwards 0.8s;
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
  .gold-text-large {
    font-size: 3.5rem;
  }
}
</style>
