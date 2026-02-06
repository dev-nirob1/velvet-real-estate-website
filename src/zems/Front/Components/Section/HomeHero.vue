<template>
  <section class="cinema-hero">
    <div
      class="video-bg"
      style="
        background-image: url(&quot;https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=60&w=1600&auto=format&fit=crop&fm=webp&quot;);
      "
    ></div>
    <div class="overlay-gradient"></div>

    <div class="hero-content">
      <span class="fade-in">THE MANHATTAN COLLECTION</span>
      <h1 class="gold-text fade-in-up">
        Beyond <br />
        Extravagance
      </h1>
      <div class="scroll-indicator fade-in">
        <span>EXPLORE</span>
        <div class="line"></div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.cinema-hero {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #050505;
  background-size: cover;
  background-position: center;
  z-index: 1;
  animation: zoomIn 20s infinite alternate;
}

@keyframes zoomIn {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.overlay-gradient {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 2;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 900px;
  padding: 0 40px;
}

.hero-content span {
  display: block;
  font-size: 0.8rem;
  letter-spacing: 6px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

/* Animations */
.fade-in {
  animation: fadeIn 1.5s ease forwards;
}
.fade-in-up {
  animation: fadeInUp 1.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.scroll-indicator span {
  font-size: 0.6rem;
  letter-spacing: 4px;
  color: #888;
}

.scroll-indicator .line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--text-gold), transparent);
}
</style>
