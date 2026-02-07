<template>
  <section :class="['am-feature-row', { reverse: reverse }]">
    <div class="am-feature-img fade-in-scroll">
      <img :src="image" :alt="title" />
    </div>
    <div class="am-feature-text fade-in-scroll">
      <span class="subtitle">{{ subtitle }}</span>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <ul v-if="features && features.length" class="feature-list">
        <li v-for="(feature, index) in features" :key="index">
          <i class="fa-solid fa-check gold-icon-sm"></i>
          {{ feature }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

defineProps({
  title: String,
  subtitle: String,
  description: String,
  image: String,
  features: Array,
  reverse: Boolean,
});

onMounted(() => {
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
});
</script>

<style scoped>
.am-feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 500px;
  background: #050505;
}

.am-feature-img {
  height: 100%;
  overflow: hidden;
}

.am-feature-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.am-feature-text {
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #0a0a0a;
}

.am-feature-row.reverse .am-feature-text {
  order: -1;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.am-feature-row:not(.reverse) .am-feature-text {
  border-left: 1px solid rgba(255, 255, 255, 0.05);
}

.am-feature-text h2 {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: #fff;
  margin-bottom: 30px;
  font-weight: 400;
}

.am-feature-text p {
  color: #999;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 500px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  color: #ccc;
  font-size: 1rem;
}

.gold-icon-sm {
  color: var(--text-gold);
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .am-feature-row {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  .am-feature-row.reverse .am-feature-text {
    order: 1;
  }
  .am-feature-img {
    height: 400px;
  }
  .am-feature-text {
    padding: 60px 20px;
  }
}
</style>
