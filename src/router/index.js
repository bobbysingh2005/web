import { createRouter, createWebHashHistory } from "vue-router";
import { HomeView, NVDAJurny, PageNotFound } from "../pages";

// Default app title
const defaultTitle = "Welcome Bobby Singh - Profile";

// Vue Router setup
export const router = createRouter({
  history: createWebHashHistory(), //  Hash routing for GitHub Pages
  linkActiveClass: "active",
  scrollBehavior: () => ({ top: 0 }),

  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        title: "Home",
        description: "Welcome to the homepage.",
        keywords: "home, vue, accessibility",
      },
    },
    {
      path: "/nvda-jurny",
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
      path: "/:catchAll(.*)",
      name: "PageNotFound",
      component: PageNotFound,
      meta: {
        title: "Page Not Found",
        description: "The page you are looking for does not exist.",
      },
    },
  ],
});

// Set dynamic page title and meta tags for SEO and accessibility
router.beforeEach((to, from, next) => {
  const meta = to.meta || {};
  document.documentElement.lang = "en";

  // Set document title
  if (meta.title) {
    document.title =
      meta.title === "Home"
        ? defaultTitle
        : `${meta.title} - ${defaultTitle}`;
  } else {
    document.title = defaultTitle;
  }

  // Set/update meta tags
  updateMetaTag("description", meta.description || "");
  updateMetaTag("keywords", meta.keywords || "");

  next();
});

// Helper to update or add meta tags
function updateMetaTag(name, content) {
  if (!content) return;
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
