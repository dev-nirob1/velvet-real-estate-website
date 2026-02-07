<template>
  <div class="home-page">
    <HeroSection />
    <StatsBar />
  </div>
</template>

<script setup>
import HeroSection from "../Components/Section/HeroSection.vue";
import StatsBar from "../Components/Section/StatsBar.vue";
</script>

<style scoped>
.home-page {
  background: #050505;
}
</style>
