<template>
  <section class="unit-split">
    <div class="split-text fade-in-scroll">
      <span class="subtitle">THE EXPERIENCE</span>
      <h2 class="premium-title">{{ title }}</h2>
      <p>{{ description }}</p>
      <ul class="feature-list">
        <li v-for="(feature, index) in features" :key="index">
          <i class="fa-solid fa-check gold-icon-sm"></i>
          {{ feature }}
        </li>
      </ul>
      <div class="btn-row">
        <router-link to="/inquire" class="next-btn"
          >Schedule Viewing</router-link
        >
      </div>
    </div>
    <div class="split-img-box fade-in-scroll">
      <img :src="imgSrc" alt="Kitchen Detail" @error="handleImgError" />
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  title: String,
  description: String,
  features: Array,
  image: String,
});

const fallbackImg =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop";
const imgSrc = ref(props.image);

watch(
  () => props.image,
  (newVal) => {
    imgSrc.value = newVal;
  },
  { immediate: true },
);

const handleImgError = () => {
  imgSrc.value = fallbackImg;
};
</script>

<style scoped>
.unit-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
  background: #050505;
}

.split-text {
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.subtitle {
  color: #c5a059; /* Premium Gold */
  letter-spacing: 4px;
  font-size: 0.8rem;
  margin-bottom: 20px;
  display: block;
}

.premium-title {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  margin: 30px 0;
  font-weight: 400;
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #c5a059;
  line-height: 1.1;
}

.split-text p {
  color: #999;
  line-height: 1.8;
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
}

.feature-list li {
  margin-bottom: 18px;
  color: #ccc;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

.gold-icon-sm {
  color: #c5a059;
}

.split-img-box {
  overflow: hidden;
}

.split-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.split-img-box:hover img {
  transform: scale(1.05);
}

.next-btn {
  display: inline-block;
  padding: 18px 45px;
  border: 1px solid #c5a059;
  color: #c5a059;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.85rem;
}

.next-btn:hover {
  background: #c5a059;
  color: #000;
}

@media (max-width: 1024px) {
  .unit-split {
    grid-template-columns: 1fr;
  }
  .split-text {
    padding: 80px 40px;
    order: 2;
  }
  .split-img-box {
    height: 400px;
    order: 1;
  }
  .premium-title {
    font-size: 2.8rem;
  }
}
</style>
