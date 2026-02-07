<template>
  <section class="ph-narrative">
    <div class="container">
      <div class="narrative-grid">
        <div class="narrative-content fade-in-scroll">
          <span class="subtitle">THE EXPERIENCE</span>
          <h2>Life at the Top</h2>
          <p>
            Spanning the entire top three floors, Penthouse Alpha offers
            360-degree views of Central Park, the Hudson, and the Atlantic. This
            is not just a residence; it is a palace in the clouds, designed for
            those who have conquered the world below.
          </p>
          <div class="specs-grid">
            <div class="spec-item">
              <span class="val">8,200</span>
              <span class="lbl">SQ FT</span>
            </div>
            <div class="spec-item">
              <span class="val">5</span>
              <span class="lbl">BEDS</span>
            </div>
            <div class="spec-item">
              <span class="val">6.5</span>
              <span class="lbl">BATHS</span>
            </div>
          </div>
        </div>
        <div class="narrative-img fade-in-scroll">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop"
            alt="Penthouse View"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ph-narrative {
  padding: 150px 0;
  background: #050505;
  color: #fff;
}

.narrative-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.subtitle {
  color: #c5a059;
  letter-spacing: 5px;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 25px;
}

.ph-narrative h2 {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  margin-bottom: 40px;
  font-weight: 400;
  line-height: 1.1;
}

.narrative-content p {
  color: #888;
  line-height: 1.9;
  font-size: 1.15rem;
  margin-bottom: 60px;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
}

.spec-item {
  display: flex;
  flex-direction: column;
}

.spec-item .val {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 5px;
}

.spec-item .lbl {
  font-size: 0.75rem;
  color: #666;
  letter-spacing: 2px;
}

.narrative-img {
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  /* padding: 30px; */
}

.narrative-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

@media (max-width: 1024px) {
  .narrative-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
