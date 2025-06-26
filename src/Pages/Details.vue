<script setup>
import { useRoute } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);

const route = useRoute();

const title = route.query.title || "No Title";
const description = route.query.description || "No Description";
const image = route.query.image || "";
</script>

<template>
  <div class="container min-vh-100 d-flex align-items-center">
    <div class="row w-100">
      <div
        class="col-md-6 d-flex flex-column justify-content-center align-items-center text-center mb-4 mb-md-0"
      >
        <h1 class="display-5 fw-bold text-purple">"{{ title }}"</h1>
        <p class="lead text-secondary px-3 px-md-5">
          The image is a high-quality digital painting with a resolution of 3000x2000 pixels and is
          optimized for the web.
        </p>
        <b>{{ description }}</b>
        <router-link to="/" class="btn btn-outline-secondary rounded-pill mt-3">
          <font-awesome-icon :icon="faArrowLeft" class="fs-4" />
        </router-link>
      </div>

      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="square-box d-flex justify-content-center align-items-center">
          <img v-if="image" :src="image" class="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-purple {
  color: rebeccapurple;
}
.square-box {
  width: fit-content;
  height: 500px;
  border: 2px solid rebeccapurple;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
}
</style>
