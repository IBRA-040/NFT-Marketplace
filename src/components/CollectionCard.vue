<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
});

function goToDetails() {
  const query = new URLSearchParams({
    title: props.title,
    description: props.description,
    image: props.image,
  }).toString();

  window.open(`/details?${query}`, "_blank");
}
</script>

<template>
  <div
    class="card h-100 shadow-sm rounded-4 overflow-hidden"
    style="border: 2px solid #800080"
    @click="goToDetails"
    role="button"
    tabindex="0"
  >
    <div class="position-relative" style="height: 350px; background-color: #1a1a1a">
      <img
        :src="image"
        class="card-img-top"
        alt="Card image"
        style="height: 100%; width: 100%; object-fit: cover"
      />
      <div
        class="card-body text-center position-absolute bottom-0 start-0 w-100 p-3"
        style="background: rgba(0, 0, 0, 0.6)"
      >
        <h5 class="card-title fw-bold text-white mb-1">{{ title }}</h5>
        <p class="card-text text-white mb-0" style="font-size: 0.9rem">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.02);
}
.card-body {
  padding: 10px;
}
</style>
