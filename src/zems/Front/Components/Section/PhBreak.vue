<template>
  <section
    class="ph-break parallax"
    style="
      background-image: url(&quot;https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop&quot;);
    "
  >
    <div class="break-overlay">
      <h2 class="fade-in-scroll">
        Where the sky is <br />
        your ceiling.
      </h2>
    </div>
  </section>
</template>

<style scoped>
.ph-break {
  height: 60vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.break-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.ph-break h2 {
  font-family: var(--font-heading);
  font-size: 4rem;
  line-height: 1.1;
  color: #fff;
  text-align: center;
}

@media (max-width: 768px) {
  .ph-break h2 {
    font-size: 2.5rem;
  }
}
</style>
