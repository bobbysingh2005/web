import { createRouter, createWebHashHistory } from "vue-router";
import {
  HomeView,
  NvdaJourney,
  PageNotFound,
  Projects,
  EduApp,
  ShreeChatApp,
  ShreeEyes,
  ShreeEyesWeb,
} from "../pages";

// Default app title
const defaultTitle = "Welcome Bobby Singh - Profile";

// Vue Router setup
export const router = createRouter({
  // Hash routing is required by GitHub Pages
  history: createWebHashHistory(),

  // Only exact matches get the "active" class so the Home link does not
  // highlight on every page; prefix matches keep the default class (unstyled).
  linkActiveClass: "router-link-active",
  linkExactActiveClass: "active",

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
      path: "/NVDA-journey",
      name: "NvdaJourney",
      component: NvdaJourney,
      meta: {
        title: "NVDA Screen Reader - Journey",
        description:
          "Read Bobby Singh’s inspiring journey of resilience and growth using the NVDA screen reader after losing his vision.",
        keywords:
          "NVDA, screen reader, accessibility, blind developer, Bobby Singh, success story",
      },
    },
    {
      path: "/eduApp",
      name: "EduApp",
      component: EduApp,
      meta: {
        title: "EduApp",
        description:
          "Management software for educational institutions - timetables, attendance, fees and more.",
      },
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
      meta: {
        title: "Projects",
        description:
          "Hobby projects by Bobby Singh - EduApp, Shree Chat App, Shree Eyes and more.",
      },
    },
    {
      path: "/shreeChat",
      name: "ShreeChatApp",
      component: ShreeChatApp,
      meta: {
        title: "Shree Chat App",
        description:
          "Simple text, video and audio chat application for local networks.",
      },
    },
    {
      path: "/shreeEyes",
      name: "ShreeEyes",
      component: ShreeEyes,
      meta: {
        title: "Shree Eyes",
        description:
          "Artificial intelligence app that helps blind and visually impaired people.",
      },
    },
    {
      path: "/shreeEyesWeb",
      name: "ShreeEyesWeb",
      component: ShreeEyesWeb,
      meta: {
        title: "Shree Eyes Web",
        description:
          "Web-based companion and activity tracker for the Shree Eyes app.",
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
