<template>
  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item fade-in-scroll">
          <span class="num">82</span>
          <span class="label">Stories</span>
        </div>
        <div class="stat-item fade-in-scroll" style="transition-delay: 0.1s">
          <span class="num">12</span>
          <span class="label">Penthouses</span>
        </div>
        <div class="stat-item fade-in-scroll" style="transition-delay: 0.2s">
          <span class="num">360°</span>
          <span class="label">Views</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.stats-bar {
  padding: 60px 0;
  background: #000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.stats-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.stat-item {
  text-align: center;
}

.num {
  display: block;
  font-family: var(--font-heading);
  font-size: 3.5rem;
  color: var(--text-gold);
  line-height: 1;
  margin-bottom: 10px;
}

.label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #666;
}

@media (max-width: 768px) {
  .stats-grid {
    flex-wrap: wrap;
    gap: 30px;
  }
  .stat-item {
    width: 45%;
  }
}
</style>
