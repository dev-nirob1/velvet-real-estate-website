<template>
  <section class="ph-cta text-center">
    <div class="cta-content fade-in-scroll">
      <h2>Make it Yours</h2>
      <p>Private viewings available for qualified buyers.</p>
      <router-link to="/inquire" class="gold-btn"
        >Inquire for Pricing</router-link
      >
    </div>
  </section>
</template>

<style scoped>
.ph-cta {
  padding: 150px 0;
  background: #050505;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-content h2 {
  font-family: var(--font-heading);
  font-size: 4rem;
  margin-bottom: 30px;
  font-weight: 400;
}

.cta-content p {
  color: #888;
  font-size: 1.2rem;
  margin-bottom: 50px;
  letter-spacing: 1px;
}

.gold-btn {
  display: inline-block;
  padding: 20px 60px;
  border: 1px solid #c5a059;
  color: #c5a059;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 0.4s ease;
  font-size: 0.9rem;
}

.gold-btn:hover {
  background: #c5a059;
  color: #000;
  box-shadow: 0 0 30px rgba(197, 160, 89, 0.3);
}

@media (max-width: 768px) {
  .cta-content h2 {
    font-size: 2.5rem;
  }
}
</style>
