<template>
  <div class="res-card">
    <div class="res-img">
      <img :src="imgSrc" :alt="unit.name" @error="handleImgError" />
      <div class="res-overlay">
        <router-link :to="'/residences/' + unit.id" class="view-details-btn">
          View Details
        </router-link>
      </div>
    </div>
    <div class="res-info">
      <h3>{{ unit.name }}</h3>
      <span class="res-type">{{ unit.type }}</span>
      <div class="res-meta">
        <span>{{ unit.sqft }} SQ FT</span>
        <span class="price">{{ unit.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  unit: {
    type: Object,
    required: true,
  },
});

const fallbackImg =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop";
const imgSrc = ref(props.unit.image);

const handleImgError = () => {
  imgSrc.value = fallbackImg;
};
</script>

<style scoped>
.res-card {
  transition: transform 0.4s ease;
}

.res-img {
  position: relative;
  height: 400px;
  overflow: hidden;
  margin-bottom: 25px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.res-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.res-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.view-details-btn {
  padding: 15px 35px;
  background: #fff;
  color: #000;
  border: none;
  font-family: var(--font-heading);
  font-size: 1rem;
  cursor: pointer;
  transform: translateY(20px);
  transition: all 0.4s ease;
}

.res-card:hover .res-img img {
  transform: scale(1.1);
}

.res-card:hover .res-overlay {
  opacity: 1;
}

.res-card:hover .view-details-btn {
  transform: translateY(0);
}

.res-info h3 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 8px;
  font-weight: 400;
}

.res-type {
  display: block;
  color: var(--text-gold);
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.res-meta {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  font-size: 0.85rem;
  color: #888;
  letter-spacing: 1px;
}

.res-meta .price {
  color: #fff;
  font-weight: 500;
}

@media (max-width: 768px) {
  .res-img {
    height: 350px;
  }
}
</style>
