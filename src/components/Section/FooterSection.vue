<template>
  <footer class="gold-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Branding Column -->
        <div class="f-col">
          <router-link to="/" class="footer-logo">VG</router-link>
          <p class="footer-address">
            111 West 57th Street<br />
            New York, NY 10019
          </p>
        </div>

        <!-- Collection Column -->
        <div class="f-col">
          <h4>Collection</h4>
          <nav class="footer-nav">
            <router-link to="/residences">Residences</router-link>
            <router-link to="/penthouse">Penthouse</router-link>
            <router-link to="/amenities">Lifestyle</router-link>
          </nav>
        </div>

        <!-- Contact Column -->
        <div class="f-col">
          <h4>Contact</h4>
          <nav class="footer-nav">
            <router-link to="/inquire">Inquire</router-link>
            <a href="#">Press</a>
            <a href="#">Team</a>
          </nav>
        </div>

        <!-- Social Column -->
        <div class="f-col">
          <h4>Social</h4>
          <nav class="footer-nav">
            <a href="#" target="_blank">Instagram</a>
            <a href="#" target="_blank">Facebook</a>
          </nav>
        </div>
      </div>

      <div class="f-bottom">
        <p>&copy; 2026 Velvet & Gold. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.gold-footer {
  background: #050505;
  padding: 100px 0 40px;
  border-top: 1px solid rgba(197, 160, 89, 0.2);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;
}

.f-col h4 {
  color: var(--text-gold);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  margin-bottom: 25px;
  font-weight: 500;
}

.footer-logo {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: #fff;
  text-decoration: none;
  letter-spacing: 15px;
  display: inline-block;
}

.footer-address {
  margin-top: 20px;
  color: #666;
  font-size: 0.85rem;
  line-height: 1.8;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-nav a {
  color: #888;
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-nav a:hover {
  color: #fff;
  transform: translateX(5px);
}

.f-bottom {
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  color: #444;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 60px 40px;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-nav a:hover {
    transform: none;
  }

  .footer-logo {
    margin-left: 15px; /* Alignment for the spread out text */
  }
}
</style>
