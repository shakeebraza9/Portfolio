<template>
  <div class="projects-section-wrapper">
    <div class="text-center mb-12">
      <h2 class="text-h4 md:text-h3 font-weight-black mb-3 project-section-title">
        {{ title }}
      </h2>
      <p class="text-body-1 subtitle-text max-w-xl mx-auto leading-relaxed">
        {{ subtitle }}
      </p>
    </div>

    <v-row class="gy-8">
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="project in projects"
        :key="project.id"
      >
        <ProjectCard :project="project" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

defineProps({
  title: { type: String, default: 'Engineering Showcases' },
  subtitle: { type: String, default: '' },
  projects: { type: Array, default: () => [] },
})
</script>

<style scoped>
.max-w-xl {
  max-width: 650px;
}

.leading-relaxed {
  line-height: 1.7 !important;
}

.project-section-title {
  letter-spacing: -0.02em;
}

.v-theme--dark .project-section-title {
  color: #f8fafc;
}
.v-theme--light .project-section-title {
  color: #0f172a;
}

.v-theme--dark .subtitle-text {
  color: #94a3b8;
  font-size: 1.05rem !important;
}
.v-theme--light .subtitle-text {
  color: #475569;
  font-size: 1.05rem !important;
}
</style>