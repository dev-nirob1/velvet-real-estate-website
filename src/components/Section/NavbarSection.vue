<template>
  <nav :class="['gold-nav', { scrolled: isScrolled }]">
    <div class="nav-left">
      <router-link to="/">Home</router-link>
      <router-link to="/residences">Residences</router-link>
    </div>
    <router-link to="/" class="logo">VG</router-link>
    <div class="nav-right">
      <router-link to="/amenities">Lifestyle</router-link>
      <router-link to="/inquire" class="inquire-btn">Inquire</router-link>
    </div>

    <!-- Hamburger Icon -->
    <div
      :class="['hamburger', { active: uiState.isMenuOpen }]"
      @click="uiState.toggleMenu()"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { uiState } from "../../store/ui";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.gold-nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 6000;
  mix-blend-mode: difference;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gold-nav.scrolled {
  padding: 15px 60px;
  mix-blend-mode: normal;
  background: rgba(5, 5, 5, 0.85);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-left a,
.nav-right a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  margin: 0 15px;
  transition: 0.3s;
}

.nav-left a:hover,
.nav-right a:hover,
.router-link-active {
  color: var(--text-gold);
}

.logo {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
}

.inquire-btn {
  border: 1px solid var(--text-gold);
  padding: 8px 20px;
  border-radius: 2px;
}

.inquire-btn:hover {
  background: var(--text-gold);
  color: #000 !important;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 7px;
  cursor: pointer;
  z-index: 5100;
}

@media (max-width: 1024px) {
  .gold-nav {
    padding: 20px 25px !important;
    mix-blend-mode: normal !important;
  }
  .nav-left,
  .nav-right {
    display: none !important;
  }
  .hamburger {
    display: flex;
  }
}

.hamburger span {
  display: block;
  width: 30px;
  height: 2px;
  background: #fff;
  transition: 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
  background: var(--text-gold);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
  background: var(--text-gold);
}
</style>
