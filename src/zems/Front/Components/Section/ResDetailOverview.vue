<template>
  <section class="unit-overview">
    <div class="container text-center">
      <div class="spec-grid fade-in-scroll">
        <div class="spec-item" v-for="spec in specs" :key="spec.label">
          <span class="label">{{ spec.label }}</span>
          <span class="val">{{ spec.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  specs: Array,
});
</script>

<style scoped>
.unit-overview {
  padding: 80px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: #050505;
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.spec-item .label {
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.spec-item .val {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: #fff;
}

@media (max-width: 1024px) {
  .spec-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .spec-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
