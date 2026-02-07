<template>
  <div class="residences-page">
    <PageHero
      subtitle="THE COLLECTION"
      title="Manhattan's <br /> Crown Jewels"
      :backgroundImage="'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'"
    />
    <ResGridSection />
  </div>
</template>

<script setup>
import PageHero from "../Components/Section/PageHero.vue";
import ResGridSection from "../Components/Section/ResGridSection.vue";
</script>

<style scoped>
.residences-page {
  background: #050505;
  min-height: 100vh;
}
</style>
