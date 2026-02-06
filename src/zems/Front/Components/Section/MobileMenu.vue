<template>
  <div :class="['mobile-menu', { active: uiState.isMenuOpen }]">
    <div class="mobile-links">
      <router-link to="/" @click="uiState.closeMenu()">Home</router-link>
      <router-link to="/residences" @click="uiState.closeMenu()"
        >Residences</router-link
      >
      <router-link to="/penthouse" @click="uiState.closeMenu()"
        >Penthouse</router-link
      >
      <router-link to="/amenities" @click="uiState.closeMenu()"
        >Lifestyle</router-link
      >
      <router-link to="/inquire" @click="uiState.closeMenu()"
        >Inquire</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { uiState } from "../../../store/ui";
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #050505;
  z-index: 5050;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transform 0.6s cubic-bezier(0.7, 0, 0.3, 1);
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
}
</style>
