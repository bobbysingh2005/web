<template>
  <div id="app">
    <!--
      Skip link: the first focusable element on the page so keyboard and
      screen reader users can jump straight to the content.
    -->
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <!-- Primary navigation landmark (consistent on every page) -->
    <header class="site-header">
      <nav class="navbar navbar-expand-md navbar-dark" aria-label="Main navigation">
        <div class="container">
          <router-link class="navbar-brand" to="/">Bobby Singh</router-link>

          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" aria-hidden="true"></span>
          </button>

          <div id="main-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/projects">Projects</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/NVDA-journey">My NVDA Journey</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!--
      Main content landmark. It has tabindex="-1" so we can move focus here
      on every route change (announces the new page to screen readers).
    -->
    <main id="main-content" tabindex="-1">
      <router-view />
    </main>

    <!-- Footer landmark: quick links + attribution -->
    <footer class="site-footer">
      <div class="container">
        <div class="row gy-3">
          <div class="col-md-6">
            <p class="footer-brand">Bobby Singh — Portfolio</p>
            <p class="footer-note">
              Built by a blind developer. Tested with the NVDA screen reader.
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <ul class="footer-links">
              <li>
                <a href="https://github.com/bobbysingh2005" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github" aria-hidden="true"></i> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bobby-singh-41685022/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn
                </a>
              </li>
            </ul>
            <p class="footer-note">© {{ currentYear }} Bobby Singh</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { watch, nextTick } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentYear = new Date().getFullYear();

/*
 * Move keyboard focus to the main region after every route change so screen
 * reader users are immediately told they are on the new page, instead of
 * being left at the top of an unchanging document.
 */
watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    const main = document.getElementById("main-content");
    if (main) main.focus();
  }
);
</script>

<style>
/* Global theme shared by every page */
:root {
  --navy: #0f1b2d;
  --navy-light: #1c2b45;
  --accent: #3b82f6;
  --accent-hover: #2f6fe0;
  --bg-soft: #f4f6fb;
  --text: #1f2430;
  --text-soft: #57617a;
}

body {
  margin: 0;
  font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--bg-soft);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
}

/* Skip link is visually hidden until focused (keyboard / screen reader use) */
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 2000;
  padding: 0.75rem 1.25rem;
  background: var(--accent);
  color: #fff;
  border-radius: 0 0 0.5rem 0;
  text-decoration: none;
}

.skip-link:focus {
  left: 0;
}

/* Header + navigation */
.site-header {
  background: var(--navy);
  box-shadow: 0 2px 12px rgba(15, 27, 45, 0.25);
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.02em;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
}

/* Active link highlight uses the accent colour */
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link.active:focus,
.navbar-dark .navbar-nav .nav-link.active:hover {
  color: #fff;
  background: var(--accent);
}

/* Explicit focus indication for keyboard users */
.navbar-dark .navbar-nav .nav-link:focus-visible {
  outline: 2px solid #fff;
  outline-offset: -2px;
}

/* The focused main region should not show a browser outline */
#main-content:focus {
  outline: none;
}

/* Section rhythm shared across pages */
.page-section {
  padding: 3.5rem 0;
}

/* Generic page container + heading styles */
.page-main h2 {
  color: var(--navy);
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.page-main .lead {
  font-size: 1.15rem;
  color: var(--text-soft);
}

/* Card styling used by skills + project cards */
.soft-card {
  border: 1px solid rgba(15, 27, 45, 0.08);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(15, 27, 45, 0.07);
  height: 100%;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.soft-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(15, 27, 45, 0.12);
}

/* Footer */
.site-footer {
  background: var(--navy);
  color: #cdd6e4;
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-brand {
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.35rem;
}

.footer-note {
  margin: 0;
  font-size: 0.95rem;
  color: #9fadc4;
}

.footer-links {
  list-style: none;
  margin: 0 0 0.5rem 0;
  padding: 0;
}

.footer-links a {
  color: #cdd6e4;
  text-decoration: none;
  margin-left: 1.25rem;
}

.footer-links a:hover,
.footer-links a:focus {
  color: #fff;
  text-decoration: underline;
}
</style>