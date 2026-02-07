<template>
  <div class="penthouse-page">
    <PhHero />
    <PhNarrative />
    <PhBreak />
    <PhFeatures />
    <PhCTA />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import PhHero from "../Components/Section/PhHero.vue";
import PhNarrative from "../Components/Section/PhNarrative.vue";
import PhBreak from "../Components/Section/PhBreak.vue";
import PhFeatures from "../Components/Section/PhFeatures.vue";
import PhCTA from "../Components/Section/PhCTA.vue";

onMounted(() => {
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

<style>
/* Global-ish animations for Penthouse page */
.fade-in-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
