<template>
  <section class="stats-bar">
    <div class="container stats-container">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        ref="statItems"
        class="stat-item fade-in-scroll"
        :style="{ transitionDelay: `${index * 0.1}s` }"
      >
        <span class="num">{{ stat.value }}</span>
        <span class="label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const stats = [
  { value: "82", label: "Stories" },
  { value: "12", label: "Penthouses" },
  { value: "360°", label: "Views" },
];

const statItems = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 },
  );

  statItems.value.forEach((item) => observer.observe(item));
});
</script>

<style scoped>
.stats-bar {
  background: #0f0f0f;
  padding: 80px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.stats-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}

.stat-item {
  text-align: center;
  flex: 1;
  min-width: 200px;
}

.stat-item .num {
  display: block;
  font-family: var(--font-heading);
  font-size: 3.5rem;
  color: var(--text-gold);
  line-height: 1.2;
}

.stat-item .label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #666;
  margin-top: 10px;
  display: block;
}

@media (max-width: 768px) {
  .stats-bar {
    padding: 60px 0;
  }

  .stat-item .num {
    font-size: 2.5rem;
  }
}
</style>
