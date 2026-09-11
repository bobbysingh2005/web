<template>
  <section class="page-section" aria-labelledby="projects-title">
    <div class="container">
      <h1 id="projects-title">Projects</h1>
      <p class="lead">
        Hobby projects I build with whatever spare time I have. Each one taught
        me something new — and most are still growing.
      </p>
      <p class="projects-note">
        Because these are spare-time projects, they are publicly available but
        often incomplete.
      </p>

      <div class="row g-4 mt-2">
        <div v-for="project in projects" :key="project.slug" class="col-md-6">
          <article class="soft-card p-4" aria-labelledby="project-name">
            <h2 class="h4">{{ project.name }}</h2>
            <p class="text-soft">{{ project.tagline }}</p>

            <!-- Only render the tech chips when the project declares some -->
            <div v-if="project.tech.length" class="chip-list" aria-label="Tech stack">
              <span v-for="item in project.tech" :key="item" class="chip">{{ item }}</span>
            </div>

            <div class="d-flex flex-wrap gap-2 mt-4">
              <router-link class="btn btn-primary btn-sm" :to="project.route">
                View details
              </router-link>
              <a
                class="btn btn-outline-secondary btn-sm"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`View the ${project.name} source code on GitHub`"
              >
                GitHub <i class="fab fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </article>
        </div>
      </div>

      <p class="projects-note mt-5">
        Highlight: the Accessible CRM I built demonstrates accessibility,
        authentication and REST design. I describe it in detail in the
        project overview.
      </p>
    </div>
  </section>
</template>

<script setup>
/*
 * Projects catalog page. Renders every entry from src/data/projects.js so it
 * automatically stays in sync with the Home page and the detail pages.
 */
import { projects } from "@/data/projects";
</script>

<style scoped>
.text-soft {
  color: var(--text-soft);
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  display: inline-block;
  padding: 0.25rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--navy);
  background: #e8eefb;
  border-radius: 999px;
}

.projects-note {
  color: var(--text-soft);
  max-width: 46rem;
}
</style>