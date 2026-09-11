<template>
  <ProjectDetails v-if="project" v-bind="project" />
</template>

<script setup>
/*
 * Shree Eyes project page.
 *
 * All content lives in src/data/projects.js so it stays in sync with the
 * Home and Projects pages.
 */
import ProjectDetails from "@/components/ProjectDetails.vue";
import { projectBySlug } from "@/data/projects";

const project = projectBySlug("shreeEyes");
</script>