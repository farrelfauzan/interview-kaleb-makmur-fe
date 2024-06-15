import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import HomePage from "../components/HomePage.vue";
import RegisterPage from "../components/RegisterPage.vue";
import { isAuthenticated } from "@/middleware/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/home/:email",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  { path: "/", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(isAuthenticated);

export default router;
