<template>
  <section class="vision-section">
    <div class="container">
      <div class="vision-grid">
        <div ref="visionText" class="vision-text fade-in-scroll">
          <span class="subtitle">THE VISION</span>
          <h2>
            A Masterpiece <br />
            in the Sky
          </h2>
          <p>
            Rising above the city's pulse, Velvet & Gold represents the pinnacle
            of Manhattan living. Architecture that defies convention, interiors
            that whisper elegance, and a lifestyle reserved for the few.
          </p>
          <a href="#" class="text-link">READ THE STORY</a>
        </div>
        <div ref="visionImage" class="vision-image fade-in-scroll">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
            alt="Building Architecture"
          />
          <div class="img-overlay"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const visionText = ref(null);
const visionImage = ref(null);

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

  if (visionText.value) observer.observe(visionText.value);
  if (visionImage.value) observer.observe(visionImage.value);
});
</script>

<style scoped>
.vision-section {
  padding: 5rem 0;
  position: relative;
  background: linear-gradient(to bottom, #0a0a0a, #0f0f0f);
}

.vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.vision-text h2 {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  color: #fff;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 30px;
}

.vision-text p {
  font-size: 1.1rem;
  color: #999;
  line-height: 1.8;
  margin-bottom: 50px;
  max-width: 450px;
}

.text-link {
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--text-gold);
  padding-bottom: 5px;
  transition: 0.3s;
}

.text-link:hover {
  color: var(--text-gold);
}

.vision-image {
  position: relative;
  height: 600px;
  overflow: hidden;
}

.vision-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1.5s cubic-bezier(0.2, 1, 0.3, 1);
}

.vision-image:hover img {
  transform: scale(1.05);
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  pointer-events: none;
}

@media (max-width: 1024px) {
  .vision-section {
    padding: 100px 0;
  }
  .vision-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .vision-image {
    height: 450px;
    order: -1; /* Image appears first on mobile */
  }
}

@media (max-width: 768px) {
  .vision-text h2 {
    font-size: 2.5rem;
  }
}
</style>
