<template>
  <div v-if="unit" class="res-detail-page">
    <ResDetailHero :tower="unit.tower" :name="unit.name" :image="unit.image" />

    <ResDetailOverview :specs="unitSpecs" />

    <ResDetailFeatures
      :title="'Light, Air, and Elevation.'"
      :description="unit.description"
      :features="unit.features"
      :image="unit.kitchenImage"
    />

    <ResDetailGallery :gallery="unit.gallery" />

    <ResDetailNav :nextUnit="nextUnit" />
  </div>

  <!-- Loading / Error States -->
  <div v-else-if="unit === undefined" class="error-container">
    <div class="container text-center">
      <h2 class="gold-text">Residence Not Found</h2>
      <p>The unit you are looking for does not exist or has been removed.</p>
      <router-link to="/residences" class="next-btn" style="margin-top: 30px">
        Browse Residences
      </router-link>
    </div>
  </div>

  <div v-else class="loading-state">
    <div class="loader"></div>
    <p>Authenticating Luxury...</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { units } from "../Data/residences_data.js";

// Sub-components
import ResDetailHero from "../Components/Section/ResDetailHero.vue";
import ResDetailOverview from "../Components/Section/ResDetailOverview.vue";
import ResDetailFeatures from "../Components/Section/ResDetailFeatures.vue";
import ResDetailGallery from "../Components/Section/ResDetailGallery.vue";
import ResDetailNav from "../Components/Section/ResDetailNav.vue";

const route = useRoute();
const unit = ref(null);

const findUnit = () => {
  const idValue = route.params.id;
  if (!units || units.length === 0) return;

  const id = parseInt(idValue);
  const found = units.find((u) => u.id === id);
  unit.value = found || undefined;
};

const unitSpecs = computed(() => {
  if (!unit.value) return [];
  const parts = unit.value.type.split("/");
  return [
    { label: "Bedrooms", value: parts[0]?.trim() || "N/A" },
    { label: "Bathrooms", value: parts[1]?.trim() || "N/A" },
    { label: "Area", value: unit.value.sqft + " SQ FT" },
    { label: "Exposure", value: unit.value.exposure },
  ];
});

const nextUnit = computed(() => {
  if (!unit.value) return null;
  const currentIndex = units.findIndex((u) => u.id === unit.value.id);
  return units[(currentIndex + 1) % units.length];
});

const setupObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".fade-in-scroll")
    .forEach((el) => observer.observe(el));
};

watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      findUnit();
      window.scrollTo(0, 0);
      await nextTick();
      setupObserver();
    }
  },
  { immediate: true },
);
</script>

<style scoped>
.res-detail-page {
  background: #050505;
  color: #fff;
  min-height: 100vh;
}

.loading-state,
.error-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #050505;
  color: #fff;
}

.gold-text {
  font-family: var(--font-heading);
  color: #c5a059;
  font-size: 3rem;
  margin-bottom: 20px;
}

.error-container p {
  color: #888;
  font-size: 1.1rem;
}

.loader {
  width: 40px;
  height: 40px;
  border: 2px solid rgba(197, 160, 89, 0.1);
  border-top-color: #c5a059;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.next-btn {
  display: inline-block;
  padding: 15px 40px;
  border: 1px solid #c5a059;
  color: #c5a059;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.3s;
}

.next-btn:hover {
  background: #c5a059;
  color: #000;
}
</style>
