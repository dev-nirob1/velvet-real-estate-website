<template>
  <section class="res-grid-section">
    <!-- Filter Bar -->
    <div class="filter-section">
      <div class="container">
        <div class="filter-bar">
          <button
            v-for="category in categories"
            :key="category.id"
            :class="['filter-btn', { active: activeFilter === category.id }]"
            @click="activeFilter = category.id"
          >
            {{ category.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Residences Grid -->
    <div class="residences-content">
      <div class="container">
        <TransitionGroup tag="div" name="grid-fade" class="res-grid">
          <ResidenceCard
            v-for="unit in filteredUnits"
            :key="unit.id"
            :unit="unit"
          />
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import ResidenceCard from "../Widget/ResidenceCard.vue";

const activeFilter = ref("all");

const categories = [
  { id: "all", label: "All Residences" },
  { id: "1br", label: "1 Bedroom" },
  { id: "2br", label: "2 Bedroom" },
  { id: "penthouse", label: "Penthouses" },
];

const units = [
  {
    id: 1,
    name: "Residence 10A",
    type: "1 Bedroom / 1.5 Bath",
    category: "1br",
    sqft: "1,200",
    price: "$2,500,000",
    image:
      "https://images.unsplash.com/photo-1502005229766-939760a7cb0d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Residence 15B",
    type: "2 Bedroom / 2.5 Bath",
    category: "2br",
    sqft: "1,850",
    price: "$4,200,000",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Penthouse Alpha",
    type: "Duplex Sky Mansion",
    category: "penthouse",
    sqft: "5,500",
    price: "Price Upon Request",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Residence 12C",
    type: "1 Bedroom / 1 Bath",
    category: "1br",
    sqft: "980",
    price: "$1,950,000",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Residence 22A",
    type: "2 Bedroom / 2 Bath",
    category: "2br",
    sqft: "1,600",
    price: "$3,800,000",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Penthouse Royal",
    type: "Full Floor Estate",
    category: "penthouse",
    sqft: "8,200",
    price: "$55,000,000",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
  },
];

const filteredUnits = computed(() => {
  if (activeFilter.value === "all") return units;
  return units.filter((unit) => unit.category === activeFilter.value);
});
</script>

<style scoped>
.res-grid-section {
  background: #050505;
  padding-bottom: 100px;
}

/* Filter Bar */
.filter-section {
  padding: 40px 0;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: sticky;
  top: 65px;
  z-index: 50;
}

.filter-bar {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 12px 30px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--text-gold);
  border-color: var(--text-gold);
  color: #000;
}

/* Residences Grid */
.residences-content {
  padding-top: 80px;
}

.res-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

/* Transitions */
.grid-fade-enter-active,
.grid-fade-leave-active {
  transition: all 0.5s ease;
}

.grid-fade-enter-from,
.grid-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 1024px) {
  .res-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .res-grid {
    grid-template-columns: 1fr;
  }
  .res-img {
    height: 350px;
  }
  .filter-bar {
    gap: 10px;
  }
  .filter-btn {
    padding: 10px 20px;
    font-size: 0.7rem;
  }
}
</style>
