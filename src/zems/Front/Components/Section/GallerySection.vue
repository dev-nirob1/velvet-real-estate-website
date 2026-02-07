<template>
  <section class="gallery-section">
    <!-- Section Title Overlay -->
    <div class="header-overlay">
      <div class="container">
        <div class="gallery-header fade-in-scroll" ref="header">
          <span class="subtitle">INTERIORS</span>
          <h2>Curated Living</h2>
          <p class="header-desc">
            Designed by master architects for the discerned.
          </p>
        </div>
      </div>
    </div>

    <!-- Full-Width Swiper -->
    <swiper
      :modules="[EffectFade, Navigation, Autoplay]"
      :effect="'fade'"
      :loop="true"
      :navigation="{
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      }"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      class="gallery-swiper"
      @swiper="onSwiper"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="gallery-slide"
      >
        <div class="slide-img">
          <img :src="slide.image" :alt="slide.title" />
          <div class="img-overlay"></div>
        </div>

        <!-- Caption Overlay aligned to container -->
        <div class="caption-overlay">
          <div class="container">
            <div class="card-caption">
              <h3>{{ slide.title }}</h3>
              <p>{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Custom Navigation Arrows -->
      <div class="gallery-nav-controls">
        <div class="container">
          <div class="nav-arrows">
            <button class="gallery-prev custom-arrow">
              <span class="arrow-icon">←</span>
            </button>
            <button class="gallery-next custom-arrow">
              <span class="arrow-icon">→</span>
            </button>
          </div>
        </div>
      </div>
    </swiper>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  {
    title: "Grand Salon",
    desc: "Double-height ceilings with panoramic views.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Master Suite",
    desc: "Silk walls and italian marble finishes.",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Spa Sanctuary",
    desc: "Private wellness center in-residence.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
  },
];

const header = ref(null);

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
});
</script>

<style scoped>
.gallery-section {
  position: relative;
  height: 100vh;
  background: #000;
  overflow: hidden;
}

/* Header Positioning */
.header-overlay {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  z-index: 100;
  pointer-events: none;
}

.gallery-header h2 {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  color: #fff;
  margin-bottom: 10px;
}

.header-desc {
  color: #ccc;
  font-size: 1.1rem;
  letter-spacing: 1px;
}

/* Swiper Styles */
.gallery-swiper {
  width: 100%;
  height: 100%;
}

.gallery-slide {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-img {
  width: 100%;
  height: 100%;
}

.slide-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

/* Caption Positioning */
.caption-overlay {
  position: absolute;
  bottom: 120px;
  left: 0;
  width: 100%;
  z-index: 50;
}

.card-caption {
  max-width: 600px;
  border-left: 3px solid var(--text-gold);
  padding-left: 40px;
}

.card-caption h3 {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: #fff;
  margin-bottom: 5px;
  line-height: 1;
}

.card-caption p {
  color: #ddd;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

/* Navigation Controls */
.gallery-nav-controls {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  z-index: 110;
  pointer-events: none;
}

.nav-arrows {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  pointer-events: auto;
}

.custom-arrow {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.custom-arrow:hover {
  background: var(--text-gold);
  border-color: var(--text-gold);
  color: #000;
  transform: scale(1.1);
}

.arrow-icon {
  font-size: 1.5rem;
}

@media (max-width: 1024px) {
  .gallery-header h2 {
    font-size: 2.8rem;
  }
  .card-caption h3 {
    font-size: 2.5rem;
  }
  .card-caption {
    padding-left: 30px;
  }
}

@media (max-width: 768px) {
  .header-overlay {
    top: 60px;
  }
  .gallery-header h2 {
    font-size: 2.2rem;
  }
  .header-desc {
    font-size: 0.9rem;
  }

  .caption-overlay {
    bottom: 80px;
  }
  .card-caption h3 {
    font-size: 2rem;
  }
  .card-caption p {
    font-size: 1rem;
  }

  .nav-arrows {
    justify-content: center;
    margin-top: 15rem; /* Push arrows down on mobile to avoid center clash */
  }
}
</style>
