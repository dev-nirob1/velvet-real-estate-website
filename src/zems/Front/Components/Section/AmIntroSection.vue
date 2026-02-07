<template>
  <section class="am-intro text-center">
    <div class="container narrow">
      <p class="lead-text fade-in-scroll">
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

defineProps({
  text: {
    type: String,
    required: true,
  },
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
.am-intro {
  padding: 100px 0;
  background: #050505;
}

.narrow {
  max-width: 800px;
  margin: 0 auto;
}

.lead-text {
  font-size: 1.5rem;
  line-height: 1.8;
  color: #fff;
  font-weight: 300;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .am-intro {
    padding: 60px 0;
  }
  .lead-text {
    font-size: 1.2rem;
  }
}
</style>
