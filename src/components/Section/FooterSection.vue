<template>
  <footer class="gold-footer">
    <div class="footer-grid">
      <div class="f-col">
        <router-link to="/" class="logo">VG</router-link>
        <p class="address">111 West 57th Street<br />New York, NY 10019</p>
      </div>
      <div class="f-col">
        <h4>Collection</h4>
        <router-link to="/residences">Residences</router-link>
        <router-link to="/penthouse">Penthouse</router-link>
        <router-link to="/amenities">Lifestyle</router-link>
      </div>
      <div class="f-col">
        <h4>Contact</h4>
        <router-link to="/inquire">Inquire</router-link>
        <a href="#">Press</a>
        <a href="#">Team</a>
      </div>
      <div class="f-col">
        <h4>Social</h4>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
      </div>
    </div>
    <div class="f-bottom">
      <p>&copy; 2026 Velvet & Gold. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.gold-footer {
  background: #050505;
  padding: 100px 40px 40px;
  border-top: 1px solid rgba(197, 160, 89, 0.2);
}

.footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;
}

.logo {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
}

.address {
  margin-top: 20px;
  color: #666;
  font-size: 0.8rem;
}

.f-col h4 {
  color: var(--text-gold);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  margin-bottom: 25px;
}

.f-col a {
  display: block;
  color: #888;
  text-decoration: none;
  margin-bottom: 15px;
  font-size: 0.9rem;
  transition: 0.3s;
}

.f-col a:hover {
  color: #fff;
}

.f-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  color: #444;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
