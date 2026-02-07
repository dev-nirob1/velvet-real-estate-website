<template>
  <div class="home-page">
    <HeroSection />
    <StatsBar />
    <VisionSection />
    <AmenitiesSection />
    <GallerySection />
  </div>
</template>

<script setup>
import HeroSection from "../Components/Section/HeroSection.vue";
import StatsBar from "../Components/Section/StatsBar.vue";
import VisionSection from "../Components/Section/VisionSection.vue";
import AmenitiesSection from "../Components/Section/AmenitiesSection.vue";
import GallerySection from "../Components/Section/GallerySection.vue";
</script>

<style scoped>
.home-page {
  background: #050505;
}
</style>
