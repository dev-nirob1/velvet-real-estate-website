<template>
  <div class="front-layout">
    <NavbarSection />
    <MobileMenu />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavbarSection from "@/components/Section/NavbarSection.vue";
import FooterSection from "@/components/Section/FooterSection.vue";
import MobileMenu from "../Components/Section/MobileMenu.vue";
import { onMounted } from "vue";
import Lenis from "lenis";

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
