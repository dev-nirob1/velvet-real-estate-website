<template>
  <div class="main-layout">
    <NavbarSection />
    <main>
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavbarSection from "@/components/Section/NavbarSection.vue";
import FooterSection from "@/components/Section/FooterSection.vue";
</script>

<style scoped></style>
