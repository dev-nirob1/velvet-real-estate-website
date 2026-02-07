<template>
  <section class="hero-section">
    <div
      class="hero-bg"
      style="
        background-image: url(&quot;https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=60&w=1600&auto=format&fit=crop&fm=webp&quot;);
      "
    ></div>
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <span class="subtitle">THE MANHATTAN COLLECTION</span>
      <h1 class="title">
        Beyond <br />
        Extravagance
      </h1>
    </div>

    <div class="scroll-down">
      <span>EXPLORE</span>
      <div class="line"></div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero-section {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #050505;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 1;
  animation: zoomSlowly 20s infinite alternate;
}

@keyframes zoomSlowly {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 900px;
  padding: 0 40px;
}

.subtitle {
  display: block;
  font-size: 0.8rem;
  letter-spacing: 6px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #fff;
  animation: fadeIn 1.5s ease forwards;
}

.title {
  font-family: "Italiana", serif;
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 1;
  margin-bottom: 0; /* Removed margin to ensure perfect vertical center */
  background: linear-gradient(to bottom, #e6cfa0, #c5a059, #9c7e3d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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

.scroll-down {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  animation: fadeIn 2s ease forwards;
}

.scroll-down span {
  font-size: 0.6rem;
  letter-spacing: 4px;
  color: #888;
}

.scroll-down .line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, #c5a059, transparent);
}
</style>
