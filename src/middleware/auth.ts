// middleware/isAuthenticated.ts

import {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from "vue-router";

export function isAuthenticated(
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext
): void {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  console.log("token", token);

  if (token && to.path === "/login") {
    next({ name: "Home", params: { email: email } });
  }

  if (token && to.path === "/register") {
    next({ name: "Home", params: { email: email } });
  }
  //register
  if (!token && to.path === "/register") {
    next();
  }

  if (!token && to.path !== "/login") {
    next({ name: "Login" });
  }

  next();
}
