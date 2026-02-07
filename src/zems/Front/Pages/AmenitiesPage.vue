<template>
  <div class="amenities-page">
    <PageHero
      subtitle="THE CLUB"
      title="The Art <br /> of Living"
      :backgroundImage="'https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?q=80&w=2000&auto=format&fit=crop'"
    />

    <AmIntroSection
      text="A private sanctuary in the heart of the city. Velvet & Gold offers 30,000 square feet of curated amenities, designed to cater to every wellness, social, and business need."
    />

    <AmFeatureRow
      subtitle="WELLNESS"
      title="The Sanctuary"
      description="Rejuvenate in the private hammam, sauna, and salt room. Our resident wellness director orchestrates a menu of bespoke treatments available in-spa or in-residence."
      image="https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      :features="[
        'Heated Stone Loungers',
        '75ft Saltwater Pool',
        'Meditation Garden',
      ]"
    />

    <AmFeatureRow
      subtitle="SOCIAL"
      title="The Gold Lounge"
      description="An exclusive residents-only club on the 50th floor. Enjoy a vintage cognac by the fireplace or host a private dinner prepared by Michelin-starred chefs in the Private Dining Room."
      image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop"
      :features="[
        'Temperature Controlled Wine Vault',
        'Billiards & Library',
        'Screening Room',
      ]"
      :reverse="true"
    />

    <AmFeatureRow
      subtitle="SERVICE"
      title="24/7 Concierge"
      description="Our Lifestyle Directors are available around the clock to secure reservations, arrange travel, or manage your residence while you are away. True luxury is effortless living."
      image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop"
      :features="[
        'Valet Parking',
        'Private Shopping Assistance',
        'Pet Spa Services',
      ]"
    />
  </div>
</template>

<script setup>
import PageHero from "../Components/Section/PageHero.vue";
import AmIntroSection from "../Components/Section/AmIntroSection.vue";
import AmFeatureRow from "../Components/Section/AmFeatureRow.vue";
</script>

<style scoped>
.amenities-page {
  background: #050505;
}
</style>
