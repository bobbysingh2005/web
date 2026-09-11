<template>
  <section class="project-details" aria-labelledby="project-title">
    <!-- Main project heading; there is exactly one h1 per page for a clean outline -->
    <h1 id="project-title">{{ name }}</h1>

    <!-- One-line summary shown right under the title -->
    <p class="tagline">{{ tagline }}</p>

    <!-- Link to the real source on GitHub (opens in a new tab) -->
    <p>
      <a
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`View the ${name} source code on GitHub`"
      >
        View on GitHub <i class="fab fa-github" aria-hidden="true"></i>
      </a>
    </p>

    <!-- Tech stack is only rendered when the parent supplies data -->
    <h2 v-if="tech.length">Tech Stack</h2>
    <ul v-if="tech.length">
      <li v-for="item in tech" :key="item">{{ item }}</li>
    </ul>

    <!-- Known features; empty lists are skipped entirely -->
    <h2 v-if="features.length">Key Features</h2>
    <ul v-if="features.length">
      <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>

    <!-- Project status with a plain-language explanation -->
    <h2>Status</h2>
    <p>
      <strong>{{ status }}</strong> — {{ statusNote }}
    </p>

<!-- Optional caveat, e.g. README not yet written or repo is a placeholder -->
    <p v-if="note" class="note-text">{{ note }}</p>

    <p class="back-link">
      <router-link to="/">&larr; Back to Home</router-link>
    </p>
  </section>
</template>

<script setup>
/*
 * Reusable project-details page.
 *
 * Each project page (EduApp, ShreeChatApp, ...) only supplies its own data
 * through these props, keeping the layout consistent and accessible.
 */
defineProps({
  name: { type: String, required: true },       // Project display name
  tagline: { type: String, required: true },    // One-line description
  githubUrl: { type: String, required: true },  // Link to the GitHub source
  tech: { type: Array, default: () => [] },     // Tech stack items
  features: { type: Array, default: () => [] }, // Known features
  status: { type: String, required: true },     // e.g. "Active" / "Inactive"
  statusNote: { type: String, default: "" },    // Explanation of the status
  note: { type: String, default: "" },          // Optional caveat text
});
</script>

<style scoped>
.project-details {
  max-width: 46rem;
  margin: 3rem auto;
  padding: 1.75rem 2rem;
  color: var(--text);
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(15, 27, 45, 0.07);
}

h1 {
  font-size: 1.9rem;
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.12rem;
  color: var(--text-soft);
}

h2 {
  font-size: 1.25rem;
  color: var(--navy);
  margin-top: 1.5rem;
}

ul {
  margin-bottom: 1rem;
  color: var(--text-soft);
}

a {
  color: var(--accent);
  font-weight: 600;
}

.note-text {
  font-size: 0.95rem;
  color: var(--text-soft);
  font-style: italic;
}

.back-link {
  margin-top: 2rem;
}

.back-link a {
  color: var(--text-soft);
  font-weight: 600;
  text-decoration: none;
}

.back-link a:hover,
.back-link a:focus {
  color: var(--accent);
  text-decoration: underline;
}
</style>