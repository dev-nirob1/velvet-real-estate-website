<template>
  <div class="home-view">
    <HomeHero />
    <StatsBar />
    <VisionSection />
    <!-- Other sections will be added here -->
  </div>
</template>

<script setup>
import HomeHero from "../Components/Section/HomeHero.vue";
import StatsBar from "../Components/Section/StatsBar.vue";
import VisionSection from "../Components/Section/VisionSection.vue";
import { onMounted } from "vue";

onMounted(() => {
  // Initialize Scroll Reveal Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".fade-in-scroll")
    .forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.home-view {
  background: var(--bg-dark);
}
</style>
