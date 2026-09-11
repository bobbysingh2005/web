<template>
  <div>
    <!-- Hero: name, one-line story and primary actions -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="container">
        <h1 id="hero-title" class="hero-name">Bobby Singh</h1>
        <p class="hero-tagline">
          A blind developer who builds accessible, human-centred software —
          proof that passion outruns any obstacle.
        </p>
        <div class="hero-actions">
          <router-link class="btn btn-lg btn-hero-primary" to="/projects">
            View my projects
          </router-link>
          <router-link class="btn btn-lg btn-hero-ghost" to="/NVDA-journey">
            My NVDA journey
          </router-link>
        </div>
      </div>
    </section>

    <!-- About: short introduction (experience-claim free) -->
    <section class="page-section about" aria-labelledby="about-title">
      <div class="container">
        <h2 id="about-title">About Me</h2>
        <p class="about-text">
          I'm a passionate technologist dedicated to continuous learning and
          innovation. As a blind developer, I use the NVDA screen reader every
          day to build software that works for everyone — not just for people
          who see the screen the way I once did. I love turning complex
          problems into simple, accessible interfaces, mentoring teammates in
          HTML, CSS and JavaScript, and collaborating with designers, analysts
          and back-end engineers to ship products people genuinely enjoy using.
        </p>
      </div>
    </section>

    <!-- What I do: skills as cards -->
    <section class="page-section skills" aria-labelledby="skills-title">
      <div class="container">
        <h2 id="skills-title">What I Do</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3" v-for="skill in skills" :key="skill.title">
            <article class="soft-card p-4">
              <i class="skill-icon" :class="skill.icon" aria-hidden="true"></i>
              <h3 class="h5 mt-3">{{ skill.title }}</h3>
              <p class="skill-text">{{ skill.text }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects: quick showcase linking to the detail pages -->
    <section class="page-section projects" aria-labelledby="projects-title">
      <div class="container">
        <h2 id="projects-title">Featured Projects</h2>
        <p class="projects-note">
          Built in my spare time, so some are early-stage — but each one
          reflects how I think, learn and build.
        </p>
        <div class="row g-4">
          <div
            v-for="project in projects"
            :key="project.slug"
            class="col-md-6"
          >
            <article class="soft-card p-4">
              <h3 class="h5">{{ project.name }}</h3>
              <p class="project-text">{{ project.tagline }}</p>
              <router-link class="project-link" :to="project.route">
                Learn more
              </router-link>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact: how to reach me -->
    <section class="page-section contact" aria-labelledby="contact-title">
      <div class="container">
        <h2 id="contact-title">Connect with Me</h2>
        <ul class="contact-list">
          <li>
            <a
              :href="linkedinURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin" aria-hidden="true"></i>
              LinkedIn — bobby-singh-41685022
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bobbysingh2005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github" aria-hidden="true"></i>
              GitHub — bobbysingh2005
            </a>
          </li>
          <li>
            <a href="skype:bobbysingh20051?chat">
              <i class="fab fa-skype" aria-hidden="true"></i>
              Skype — bobbysingh20051
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { projects } from "@/data/projects";

// ---- Hero / about ----
const linkedinURL = "https://www.linkedin.com/in/bobby-singh-41685022/";

// ---- Skills shown as cards ----
const skills = [
  {
    icon: "fas fa-code",
    title: "Front-End Development",
    text: "Clean, responsive interfaces in HTML, CSS and JavaScript — Vue, Bootstrap and beyond.",
  },
  {
    icon: "fas fa-universal-access",
    title: "Accessibility",
    text: "Everyday NVDA user. I build and test with screen readers so nothing gets left behind.",
  },
  {
    icon: "fas fa-chalkboard-user",
    title: "Coaching & Collaboration",
    text: "I mentor teammates in HTML, CSS and JS and partner with designers, analysts and engineers.",
  },
  {
    icon: "fas fa-brain",
    title: "AI & Machine Learning",
    text: "Continuously learning Python, AI and deep learning — applied to accessibility projects.",
  },
];
</script>

<style>
/* Hero banner */
.hero {
  background: linear-gradient(135deg, #0f1b2d 0%, #1c2b45 55%, #24507d 100%);
  color: #fff;
  padding: 6rem 0 5rem;
}

.hero-name {
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.hero-tagline {
  font-size: 1.3rem;
  max-width: 40rem;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.6;
}

.hero-actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.btn-hero-primary {
  background: var(--accent);
  border: 1px solid var(--accent);
  color: #fff;
  font-weight: 600;
}

.btn-hero-primary:hover,
.btn-hero-primary:focus {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
  color: #fff;
}

.btn-hero-ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.55);
  color: #fff;
  font-weight: 600;
}

.btn-hero-ghost:hover,
.btn-hero-ghost:focus {
  background: rgba(255, 255, 255, 0.12);
  border-color: #fff;
  color: #fff;
}

/* About */
.about-text {
  max-width: 52rem;
  font-size: 1.12rem;
  line-height: 1.8;
  color: var(--text-soft);
}

/* Skills */
.skill-icon {
  font-size: 1.7rem;
  color: var(--accent);
}

.skill-text,
.project-text {
  color: var(--text-soft);
  margin-bottom: 0;
}

/* Projects */
.projects-note {
  color: var(--text-soft);
  max-width: 46rem;
}

.project-link {
  display: inline-block;
  margin-top: 0.9rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
}

.project-link:hover,
.project-link:focus {
  color: var(--accent-hover);
  text-decoration: underline;
}

/* Contact */
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  margin-bottom: 0.75rem;
}

.contact-list a {
  color: var(--text);
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.contact-list a:hover,
.contact-list a:focus {
  color: var(--accent);
  text-decoration: underline;
}
</style>