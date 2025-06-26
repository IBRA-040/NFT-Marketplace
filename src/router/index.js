import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../Pages/MainPage.vue";
import Details from "../Pages/Details.vue";
import LoginPage from "../Pages/Login.vue";

const routes = [
  { path: "/", component: MainPage },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
