<script setup>
import { onMounted } from "vue";
import { useAuth } from "../composables/useAuth.js";
import { useCollections } from "../composables/useCollection.js";
import CollectionCard from "./CollectionCard.vue";

const { login } = useAuth();
const { collections, fetchCollections } = useCollections();

onMounted(async () => {
  await login();
  await fetchCollections();
});

const getImage = (id) => {
  const images = {
    1: "/images/xo.jpg",
    2: "/images/game.png",
    3: "/images/monkey.jpg",
  };
  return images[id] || "https://via.placeholder.com/300x200?text=No+Image";
};
</script>

<template>
  <section class="py-5 home-section">
    <div class="container">
      <h2 class="mb-4 text-white">Collections</h2>
      <div class="d-flex justify-content-between align-items-center">
        <button class="btn btn-outline-secondary">&lt;</button>
        <div class="row g-4">
          <div class="col-md-4" v-for="item in collections" :key="item.id">
            <CollectionCard
              :title="item.title"
              :description="item.description"
              :image="getImage(item.id)"
            />
          </div>
        </div>

        <button class="btn btn-outline-secondary">&gt;</button>
      </div>
    </div>
  </section>
</template>
<style scoped>
button {
  width: 60px;
  height: 60px;
  font-size: 20px;
  background-color: rebeccapurple;
  color: white;
  border: none;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
