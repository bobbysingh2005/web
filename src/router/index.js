import { createRouter, createWebHistory } from "vue-router";
import { HomeView, NVDAJurny, PageNotFound } from "../pages";

// Create and export the Vue Router instance
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Uses HTML5 history API (no hash in URLs)
  linkActiveClass: "active", // Adds this class to the active nav link

  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        title: "Home", // Page title
        description: "Welcome to the homepage.", // SEO meta description
        keywords: "home, vue, accessibility", // Optional SEO keywords
      },
    },
    {
      path: "/NVDAJurny",
      name: "NvdaJurny",
      component: NVDAJurny,
      meta: {
        title: "NVDA Screen Reader - Journey",
        description:
          "Read Bobby Singh’s inspiring journey of resilience and growth using the NVDA screen reader after losing his vision.",
        keywords:
          "NVDA, screen reader, accessibility, blind developer, Bobby Singh, success story",
      },
    },
    {
      path: "/edu-app",
      name: "eduApp",
      component: () => import("../pages/ComingSoon.vue"),
      meta: {
        title: "Edu App (Coming Soon)",
      },
    },
    {
      path: "/shree-eyes",
      name: "ShreeEyes",
      component: () => import("../pages/ComingSoon.vue"),
      meta: {
        title: "Shree Eyes (Coming Soon)",
      },
    },
    {
      path: "/shree-eyes-web",
      name: "ShreeEyesWeb",
      component: () => import("../pages/ComingSoon.vue"),
      meta: {
        title: "Shree Eyes Web (Coming Soon)",
      },
    },
    {
      path: "/shree-chat-app",
      name: "ShreeChatApp",
      component: () => import("../pages/ComingSoon.vue"),
      meta: {
        title: "Shree Chat App (Coming Soon)",
      },
    },
    // Optional 404 Page – Uncomment if needed
    // {
    //   path: "/:catchAll(.*)",
    //   name: "PageNotFound",
    //   component: PageNotFound,
    //   meta: {
    //     title: "Page Not Found"
    //   }
    // },
  ],
});

//
// Global Navigation Guard
// This runs before every route change
// Used here to set the <title> and <meta> tags dynamically for SEO & accessibility
//
router.beforeEach((to, from, next) => {
  const defaultTitle = "Welcome Bobby singh - Profile"; // Set your app's default/fallback title
  const meta = to.meta || {}; // Get metadata from route

  // Set document <title>
  if (meta.title) {
    document.title = `${defaultTitle} - ${meta.title}`;
  }

  // Set or update <meta name="description">
  updateMetaTag("description", meta.description || "");

  // Set or update <meta name="keywords">
  updateMetaTag("keywords", meta.keywords || "");

  next(); // Proceed to the route
});

//
// Helper function to create or update a meta tag by name
// If tag exists, updates content
// If tag doesn't exist, creates and appends it to <head>
//
function updateMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (tag) {
    tag.setAttribute("content", content);
  } else {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    tag.setAttribute("content", content);
    document.head.appendChild(tag);
  }
}
