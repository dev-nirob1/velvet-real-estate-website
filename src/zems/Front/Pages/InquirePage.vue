<template>
  <div class="inquire-main">
    <!-- Left Side: Cinematic Hero -->
    <aside class="inquire-split-hero">
      <div
        class="split-img-bg"
        style="
          background-image: url(&quot;https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1200&auto=format&fit=crop&quot;);
        "
      ></div>
      <div class="split-overlay"></div>
      <div class="split-content text-center">
        <span class="fade-in tracking-widest">PRIVATE APPOINTMENT</span>
        <h1 class="gold-text-hero fade-in-up">
          Begin Your <br />
          Legacy
        </h1>
      </div>
    </aside>

    <!-- Right Side: Scrollable Form -->
    <div class="inquire-form-container">
      <div class="form-scroll-wrapper fade-in-scroll">
        <InquireForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import InquireForm from "../Components/Widget/InquireForm.vue";

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

  document
    .querySelectorAll(".fade-in-scroll")
    .forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.inquire-main {
  display: flex;
  min-height: 100vh;
  background: #0a0a0a;
  position: relative;
}

/* Left Hero Section */
.inquire-split-hero {
  position: sticky;
  top: 0;
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
  z-index: 5;
}

.split-img-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
  animation: zoomSlow 20s infinite alternate linear;
}

@keyframes zoomSlow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.split-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.split-content {
  position: relative;
  z-index: 10;
  padding: 0 40px;
}

.split-content span {
  display: block;
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 6px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.gold-text-hero {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  line-height: 1.2;
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--text-gold);
}

/* Right Form Section */
.inquire-form-container {
  width: 60%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 120px 80px;
  background: #050505;
}

.form-scroll-wrapper {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-scroll-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Animations */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards 0.5s;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards 0.7s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .inquire-main {
    flex-direction: column;
  }
  .inquire-split-hero {
    position: relative;
    width: 100%;
    height: 50vh;
    z-index: 1;
  }
  .inquire-form-container {
    width: 100%;
    margin-left: 0;
    padding: 60px 40px;
  }
}

@media (max-width: 768px) {
  .inquire-form-container {
    padding: 40px 20px;
  }
  .gold-text-hero {
    font-size: 2.5rem;
  }
}
</style>
