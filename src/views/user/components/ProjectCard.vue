<template>
  <v-card variant="flat" class="cyber-card h-full d-flex flex-column">
    <div class="img-container">
      <v-img
        :src="project.images?.split(',')[0] || project.image"
        height="210"
        cover
        class="project-img"
      ></v-img>
      <div class="img-overlay"></div>
    </div>

    <v-card-item class="pt-5 px-5">
      <v-card-title class="text-h6 font-weight-bold card-title pa-0">
        {{ project.title }}
      </v-card-title>
    </v-card-item>

    <v-card-text class="text-body-2 card-desc flex-grow-1 px-5 pt-2">
      {{ project.description }}
    </v-card-text>

    <v-card-text class="px-5 pt-0 pb-2">
      <v-chip
        v-for="tech in project.technologies?.split(',')"
        :key="tech"
        size="small"
        variant="flat"
        class="me-1 mb-1 tech-chip font-weight-medium"
      >
        {{ tech.trim() }}
      </v-chip>
    </v-card-text>

    <v-divider class="mx-5 opacity-10" />

    <!-- Actions -->
    <v-card-actions class="px-5 py-4 d-flex justify-space-between align-center">
      <!-- Internal View Details Route -->
      <v-btn
        variant="text"
        class="action-btn font-weight-bold px-0 text-none"
        append-icon="mdi-arrow-right"
        :to="`/project/${project.slug}`"
      >
        <span>Details</span>
      </v-btn>

      <!-- External Live Website Button (Agar viewLink maujood ho) -->
      <v-btn
        v-if="project.viewLink"
        variant="tonal"
        size="small"
        class="live-btn font-weight-bold text-none rounded-lg"
        append-icon="mdi-open-in-new"
        :href="project.viewLink"
        target="_blank"
      >
        Live Demo
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<style scoped>
.cyber-card {
  border-radius: 20px !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.img-container {
  overflow: hidden;
  position: relative;
}

.project-img {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.cyber-card:hover .project-img {
  transform: scale(1.06);
}

.v-theme--dark .cyber-card {
  background: rgba(255, 255, 255, 0.015) !important;
  border: 1px solid rgba(255, 255, 255, 0.06) !important;
}
.v-theme--dark .cyber-card:hover {
  border-color: rgba(0, 242, 254, 0.3) !important;
  box-shadow: 0 16px 40px rgba(0, 242, 254, 0.06) !important;
  transform: translateY(-8px);
}

.v-theme--light .cyber-card {
  background: rgba(15, 23, 42, 0.015) !important;
  border: 1px solid rgba(15, 23, 42, 0.06) !important;
}
.v-theme--light .cyber-card:hover {
  border-color: rgba(79, 70, 229, 0.25) !important;
  box-shadow: 0 16px 40px rgba(79, 70, 229, 0.08) !important;
  transform: translateY(-8px);
}

.v-theme--dark .tech-chip {
  background: rgba(0, 242, 254, 0.08) !important;
  color: #38bdf8 !important;
  border: 1px solid rgba(0, 242, 254, 0.12);
}
.v-theme--light .tech-chip {
  background: rgba(79, 70, 229, 0.06) !important;
  color: #4f46e5 !important;
  border: 1px solid rgba(79, 70, 229, 0.1);
}

.v-theme--dark .action-btn {
  color: #00f2fe !important;
}
.v-theme--light .action-btn {
  color: #4f46e5 !important;
}

/* Live Demo Button Styling */
.v-theme--dark .live-btn {
  background: rgba(0, 242, 254, 0.1) !important;
  color: #00f2fe !important;
  border: 1px solid rgba(0, 242, 254, 0.2);
}
.v-theme--light .live-btn {
  background: rgba(79, 70, 229, 0.08) !important;
  color: #4f46e5 !important;
  border: 1px solid rgba(79, 70, 229, 0.2);
}

.v-theme--dark .card-title {
  color: #f8fafc;
}
.v-theme--light .card-title {
  color: #0f172a;
}
.v-theme--dark .card-desc {
  color: #94a3b8;
  line-height: 1.6;
}
.v-theme--light .card-desc {
  color: #475569;
  line-height: 1.6;
}
</style>