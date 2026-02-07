<template>
  <nav :class="['gold-nav', { scrolled: isScrolled }]">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" active-class="active">Home</router-link>
        <router-link to="/residences" active-class="active"
          >Residences</router-link
        >
      </div>

      <router-link to="/" class="logo">VG</router-link>

      <div class="nav-right">
        <router-link to="/amenities" active-class="active"
          >Lifestyle</router-link
        >
        <router-link to="/inquire" class="inquire-btn">Inquire</router-link>
      </div>

      <!-- Mobile Hamburger -->
      <div :class="['hamburger', { active: isMenuOpen }]" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div :class="['mobile-menu', { active: isMenuOpen }]">
      <div class="mobile-links">
        <router-link
          v-for="link in navigationLinks"
          :key="link.path"
          :to="link.path"
          @click="closeMenu"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Residences", path: "/residences" },
  { name: "Lifestyle", path: "/amenities" },
  { name: "Inquire", path: "/inquire" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.gold-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  z-index: 6000;
  background: rgba(5, 5, 5, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gold-nav.scrolled {
  padding: 15px 0;
  background: rgba(5, 5, 5, 0.85);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;
}

.nav-right {
  justify-content: flex-end;
}

.gold-nav a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  transition: 0.3s;
}

.gold-nav a:hover,
.gold-nav a.active {
  color: var(--text-gold);
}

.logo {
  font-family: var(--font-heading);
  font-size: 2rem !important;
  color: #fff !important;
  text-decoration: none;
  letter-spacing: 15px;
  text-align: center;
  margin-left: 15px;
}

.inquire-btn {
  border: 1px solid #fff;
  padding: 10px 25px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.inquire-btn:hover {
  background: var(--text-gold);
  border-color: var(--text-gold);
  color: #000 !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 7px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 1px;
  background: #fff;
  transition: 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
  background: var(--text-gold);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
  background: var(--text-gold);
}

@media (max-width: 1024px) {
  .nav-left,
  .nav-right {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #050505;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transform 0.6s cubic-bezier(0.7, 0, 0.3, 1);
  z-index: -1;
}

.mobile-menu.active {
  transform: translateY(0);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
}

.mobile-links a {
  color: #fff;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  opacity: 0;
  transform: translateY(20px);
  transition: 0.4s;
}

.mobile-menu.active .mobile-links a {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.3s;
}
</style>
