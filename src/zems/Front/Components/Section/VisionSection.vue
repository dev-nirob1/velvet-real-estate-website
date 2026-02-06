<template>
  <section class="vision-section">
    <div class="container mobile-pad">
      <div class="vision-grid">
        <div class="vision-text fade-in-scroll">
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
        <div class="vision-image fade-in-scroll">
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

<script setup></script>

<style scoped>
.vision-section {
  padding: 150px 0;
  position: relative;
  background: linear-gradient(to bottom, #0a0a0a, #0f0f0f);
}

.vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.vision-text p {
  font-size: 1.1rem;
  color: #999;
  line-height: 1.8;
  margin: 30px 0 50px;
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
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4));
}

@media (max-width: 1024px) {
  .vision-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .vision-image {
    height: 400px;
    order: -1;
  }
}
</style>
