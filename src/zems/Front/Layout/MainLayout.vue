<template>
  <div class="main-layout">
    <NavbarSection />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavbarSection from "@/components/Section/NavbarSection.vue";
</script>

<style scoped></style>
