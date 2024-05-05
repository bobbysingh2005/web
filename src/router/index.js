import { createRouter, createWebHistory } from "vue-router";
import { HomeView, PageNotFound } from "../pages";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    { path: "/", name: "Home", component: HomeView },
    {
      path: "/edu-app",
      name: "eduApp",
      component: () => import("../pages/ComingSoon.vue"),
    },
    {
      path: "/shree-eyes",
      name: "ShreeEyes",
      component: () => import("../pages/ComingSoon.vue"),
    },
    {
      path: "/shree-eyes-web",
      name: "ShreeEyesWeb",
      component: () => import("../pages/ComingSoon.vue"),
    },
    {
      path: "/shree-chat-app",
      name: "ShreeChatApp",
      component: () => import("../pages/ComingSoon.vue"),
    },
    // { path: "*", name: "PageNotFound", component: PageNotFound },
  ],
}); //end
