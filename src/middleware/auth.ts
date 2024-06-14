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
  console.log("token", token);

  if (token) {
    next();
  } else {
    next("/login");
  }
}
