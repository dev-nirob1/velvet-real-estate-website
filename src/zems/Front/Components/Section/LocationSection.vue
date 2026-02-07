<template>
  <section class="location-section">
    <div class="location-grid">
      <!-- Left Column: Content -->
      <div class="loc-text-col">
        <div class="container-content">
          <div ref="locText" class="loc-text fade-in-scroll">
            <span class="subtitle">THE NEIGHBORHOOD</span>
            <h2>
              Central Park <br />
              South
            </h2>
            <p>Steps from culture, dining, and the world's most iconic park.</p>
            <ul class="loc-list">
              <li><span>01.</span> Bergdorf Goodman</li>
              <li><span>02.</span> The Modern</li>
              <li><span>03.</span> Lincoln Center</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Right Column: Image -->
      <div ref="locImage" class="loc-image fade-in-scroll">
        <img
          src="https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?q=80&w=1200&auto=format&fit=crop"
          alt="New York City Street"
        />
        <div class="img-overlay"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const locText = ref(null);
const locImage = ref(null);

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

  if (locText.value) observer.observe(locText.value);
  if (locImage.value) observer.observe(locImage.value);
});
</script>

<style scoped>
.location-section {
  background: #0a0a0a;
  overflow: hidden;
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 80vh;
}

.loc-text-col {
  padding: 100px 0;
  display: flex;
  align-items: center;
  /* Centering logic to keep text aligned to main container */
  justify-content: flex-end;
}

.container-content {
  /* Using max-width/2 logic to approximate container alignment logic */
  width: 100%;
  max-width: 600px; /* Half of 1200px container */
  padding: 0 40px;
}

.loc-text h2 {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 25px;
  font-weight: 400;
}

.loc-text p {
  color: #888;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 40px;
}

.loc-list {
  list-style: none;
  padding: 0;
  margin-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.loc-list li {
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 20px;
  color: #ccc;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.loc-list li span {
  color: var(--text-gold);
  font-family: var(--font-heading);
  font-size: 1.2rem;
}

.loc-image {
  position: relative;
  height: 100%;
}

.loc-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
  .location-grid {
    grid-template-columns: 1fr;
  }

  .loc-text-col {
    padding: 80px 0;
    justify-content: center;
  }

  .container-content {
    max-width: 100%;
  }

  .loc-image {
    height: 450px;
    order: -1;
  }
}

@media (max-width: 768px) {
  .loc-text h2 {
    font-size: 2.8rem;
  }
}
</style>
