<script setup>
import "./assets/navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);
</script>

<template>
  <nav class="navbar navbar-expand-lg py-4">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand text-white" href="#">VMETA 3</a>

      <button
        class="navbar-toggler shadow-none outline-none border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon icon="bars" class="text-white fs-4" />
      </button>

      <div class="collapse navbar-collapse justify-content-end gap-4" id="navbarNavDropdown">
        <ul class="navbar-nav gap-5">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Cart</a>
          </li>
        </ul>
        <div class="d-flex gap-2">
          <router-link to="/login" class="btn btn-purple-outline rounded-pill">Login</router-link>
          <router-link to="/signup" class="btn btn-purple rounded-pill">Sign Up</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
