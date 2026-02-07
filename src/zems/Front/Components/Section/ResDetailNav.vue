<template>
  <section class="unit-nav">
    <router-link to="/residences" class="back-link">
      <i class="fa-solid fa-arrow-left"></i> Back to All Residences
    </router-link>
    <router-link
      v-if="nextUnit"
      :to="'/residences/' + nextUnit.id"
      class="next-unit"
    >
      Next Residence: {{ nextUnit.name }}
      <i class="fa-solid fa-arrow-right"></i>
    </router-link>
  </section>
</template>

<script setup>
defineProps({
  nextUnit: Object,
});
</script>

<style scoped>
.unit-nav {
  padding: 60px 80px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: #050505;
}

.unit-nav a {
  color: #888;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 12px;
}

.unit-nav a i {
  transition: transform 0.3s ease;
}

.unit-nav a:hover {
  color: #c5a059;
}

.back-link:hover i {
  transform: translateX(-5px);
}

.next-unit:hover i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .unit-nav {
    flex-direction: column;
    gap: 30px;
    padding: 40px 20px;
    text-align: center;
    align-items: center;
  }
}
</style>
