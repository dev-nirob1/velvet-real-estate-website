<template>
  <section class="amenities-section">
    <div class="container">
      <div class="amenities-header text-center fade-in-scroll" ref="header">
        <span class="subtitle">LIFESTYLE</span>
        <h2>Unrivaled Amenities</h2>
      </div>

      <swiper
        :modules="[Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :breakpoints="{
          640: { slidesPerView: 1.5, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }"
        class="amenities-swiper fade-in-scroll"
        ref="slider"
      >
        <swiper-slide
          v-for="(item, index) in amenities"
          :key="index"
          class="amenity-card"
        >
          <div class="am-img">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="am-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const amenities = [
  {
    title: "Horizon Pool",
    desc: "75-foot infinity pool overlooking the skyline.",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Gold Lounge",
    desc: "Exclusive residents-only bar and social club.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Wellness Spa",
    desc: "Hammam, sauna, and private treatment rooms.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "24/7 Concierge",
    desc: "White-glove service for every need.",
    image:
      "https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?q=80&w=800&auto=format&fit=crop",
  },
];

const header = ref(null);
const slider = ref(null);

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

  if (header.value) observer.observe(header.value);
  // Swiper is a component, so we observe its element
  const swiperEl = document.querySelector(".amenities-swiper");
  if (swiperEl) observer.observe(swiperEl);
});
</script>

<style scoped>
.amenities-section {
  padding: 5rem 0; /* Using rem to match user's recent preference */
  background: #0f0f0f;
  overflow: hidden;
}

.amenities-header {
  margin-bottom: 60px;
}

.amenities-swiper {
  padding-bottom: 60px !important;
}

.am-img {
  height: 450px;
  overflow: hidden;
  margin-bottom: 25px;
  background: #151515;
}

.am-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.7);
}

.amenity-card:hover .am-img img {
  transform: scale(1.1);
  filter: brightness(1);
}

.am-content h3 {
  font-family: var(--font-heading);
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 400;
}

.am-content p {
  color: #888;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Custom Swiper Pagination */
:deep(.swiper-pagination-bullet) {
  background: #fff;
  opacity: 0.2;
  width: 8px;
  height: 8px;
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--text-gold) !important;
  opacity: 1;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .am-img {
    height: 350px;
  }

  .am-content h3 {
    font-size: 1.3rem;
  }
}
</style>
