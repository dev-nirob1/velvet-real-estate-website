<template>
  <section class="ph-features">
    <div class="container">
      <div class="features-header text-center fade-in-scroll">
        <span class="subtitle">DETAILS</span>
        <h2>Unparalleled Specifications</h2>
      </div>
      <div class="features-grid">
        <div class="feature-item fade-in-scroll">
          <i class="fa-solid fa-wind gold-icon"></i>
          <h3>Private Air</h3>
          <p>
            Dedicated HVAC and air purification system for the penthouse levels.
          </p>
        </div>
        <div class="feature-item fade-in-scroll" style="transition-delay: 0.1s">
          <i class="fa-solid fa-elevator gold-icon"></i>
          <h3>Direct Elevator</h3>
          <p>Keyed elevator access opening directly into your Grand Foyer.</p>
        </div>
        <div class="feature-item fade-in-scroll" style="transition-delay: 0.2s">
          <i class="fa-solid fa-water gold-icon"></i>
          <h3>Sky Pool</h3>
          <p>Private heated lap pool on the north-facing terrace.</p>
        </div>
        <div class="feature-item fade-in-scroll" style="transition-delay: 0.3s">
          <i class="fa-solid fa-martini-glass gold-icon"></i>
          <h3>Entertaining</h3>
          <p>Double-height Great Room capable of hosting 200 guests.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ph-features {
  padding: 150px 0;
  background: #0a0a0a;
  color: #fff;
}

.features-header {
  margin-bottom: 80px;
}

.subtitle {
  color: #c5a059;
  letter-spacing: 5px;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 25px;
}

.ph-features h2 {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  font-weight: 400;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.feature-item {
  background: rgba(255, 255, 255, 0.02);
  padding: 50px 30px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s ease;
  text-align: center;
}

.feature-item:hover {
  background: rgba(197, 160, 89, 0.05);
  border-color: #c5a059;
  transform: translateY(-10px);
}

.gold-icon {
  font-size: 2.5rem;
  color: #c5a059;
  margin-bottom: 30px;
}

.feature-item h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #fff;
}

.feature-item p {
  color: #888;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .ph-features h2 {
    font-size: 2.5rem;
  }
}
</style>
