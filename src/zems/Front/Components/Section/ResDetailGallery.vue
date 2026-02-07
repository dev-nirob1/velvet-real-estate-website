<template>
  <section class="unit-gallery-section">
    <div class="container">
      <div class="gallery-header text-center">
        <span class="subtitle">COLLECTION</span>
        <h2 class="premium-title">Interior Gallery</h2>
      </div>
      <div class="unit-masonry">
        <div
          v-for="(img, index) in gallery"
          :key="index"
          class="m-item fade-in-scroll"
        >
          <div class="img-wrapper">
            <img
              :src="img"
              :alt="'Gallery Image ' + (index + 1)"
              @error="
                (e) =>
                  (e.target.src = fallbackImgs[index % fallbackImgs.length])
              "
            />
            <div class="gallery-overlay">
              <span class="overlay-text">The Sanctuary</span>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  gallery: Array,
});

const fallbackImgs = [
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop",
];
</script>

<style scoped>
.unit-gallery-section {
  padding: 120px 0;
  background: #0a0a0a;
}

.gallery-header {
  margin-bottom: 80px;
}

.subtitle {
  color: #c5a059;
  letter-spacing: 6px;
  font-size: 0.8rem;
  margin-bottom: 15px;
  display: block;
}

.premium-title {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: #fff;
  font-weight: 400;
}

.unit-masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.m-item {
  position: relative;
  overflow: hidden;
}

.img-wrapper {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-overlay {
  position: absolute;
  inset: 15px; /* Inset for border look */
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(0px);
  border: 1px solid rgba(197, 160, 89, 0.3);
  transform: scale(1.1);
}

.overlay-text {
  color: #fff;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  letter-spacing: 4px;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
}

.line {
  width: 0;
  height: 1px;
  background: #c5a059;
  margin-top: 20px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
}

.m-item:hover .img-wrapper img {
  transform: scale(1.1);
}

.m-item:hover .gallery-overlay {
  opacity: 1;
  backdrop-filter: blur(8px);
  transform: scale(1);
}

.m-item:hover .overlay-text {
  transform: translateY(0);
}

.m-item:hover .line {
  width: 60px;
}

@media (max-width: 1024px) {
  .unit-masonry {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .unit-masonry {
    grid-template-columns: 1fr;
  }
  .img-wrapper {
    height: 400px;
  }
  .premium-title {
    font-size: 2.2rem;
  }
}
</style>
