<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faTwitter,
  faTelegram,
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faTelegram, faFacebook, faLinkedin, faYoutube, faInstagram);
</script>

<template>
  <div class="footer-gradient">
    <div class="container">
      <footer class="row py-5">
        <div class="col-12 col-md-3 mb-4">
          <h4 class="text-white">Join our weekly digest!</h4>
          <p class="text-white mb-0">Get exclusive promotions & updates straight to your inbox.</p>
        </div>
        <div class="col-md-1"></div>

        <div class="col-6 col-md-2 mb-4">
          <h6 class="text-white text-uppercase mb-3">Features</h6>
          <ul class="nav flex-column gap-2">
            <li><a href="#" class="nav-link p-0 text-white">Build Store</a></li>
            <li><a href="#" class="nav-link p-0 text-white">Sell NFT</a></li>
            <li><a href="#" class="nav-link p-0 text-white">Grow Business</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-4">
          <h6 class="text-white text-uppercase mb-3">Services</h6>
          <ul class="nav flex-column gap-2">
            <li><a href="#" class="nav-link p-0 text-white">Concierge</a></li>
            <li><a href="#" class="nav-link p-0 text-white">Customization</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-4">
          <h6 class="text-white text-uppercase mb-3">Product</h6>
          <ul class="nav flex-column gap-2">
            <li><a href="#" class="nav-link p-0 text-white">About us</a></li>
            <li><a href="#" class="nav-link p-0 text-white">Whitepaper</a></li>
            <li><a href="#" class="nav-link p-0 text-white">$N1 Token</a></li>
            <li><a href="#" class="nav-link p-0 text-white">Directory</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-4">
          <h6 class="text-white text-uppercase mb-3">Support</h6>
          <ul class="nav flex-column gap-2">
            <li><a href="#" class="nav-link p-0 text-white">Help Center</a></li>
            <li><a href="#" class="nav-link p-0 text-white">Contact Us</a></li>
          </ul>
        </div>
      </footer>
      <hr />
      <p class="text-white text-center">The Leading No-code NFT Marketplace Solution</p>
      <div class="social-icons d-flex justify-content-center gap-3">
        <a href="#" target="_blank" aria-label="Twitter">
          <font-awesome-icon :icon="['fab', 'twitter']" class="icon text-white fs-4" />
        </a>
        <a href="#" target="_blank" aria-label="Telegram">
          <font-awesome-icon :icon="['fab', 'telegram']" class="icon text-white fs-4" />
        </a>
        <a href="#" target="_blank" aria-label="Facebook">
          <font-awesome-icon :icon="['fab', 'facebook']" class="icon text-white fs-4" />
        </a>
        <a href="#" target="_blank" aria-label="LinkedIn">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon text-white fs-4" />
        </a>
        <a href="#" target="_blank" aria-label="YouTube">
          <font-awesome-icon :icon="['fab', 'youtube']" class="icon text-white fs-4" />
        </a>
        <a href="#" target="_blank" aria-label="Instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" class="icon text-white fs-4" />
        </a>
      </div>
      <div class="d-flex justify-content-between">
        <p class="text-white">© Copyright NFTify Network. All Rights Reserved.</p>
        <div class="links d-flex justify-content-center gap-3">
          <a href="#" class="text-white text-decoration-none">Terms of Service</a>
          <a href="#" class="text-white text-decoration-none">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-gradient {
  background: linear-gradient(to bottom, #4b0082, #000000);
}

/* Icon container */
.icon {
  border: 1px solid grey;
  border-radius: 15px;
  padding: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Hover effect */
.icon:hover {
  background-color: rebeccapurple !important;
  color: white !important;
}
</style>
