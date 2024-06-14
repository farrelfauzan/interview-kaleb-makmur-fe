import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import HomePage from "../components/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    meta: { requiresAuth: true },
  },
  { path: "/", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
