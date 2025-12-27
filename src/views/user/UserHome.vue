<template>
  <v-container class="mt-5">
    <h1 class="text-center mb-2">Welcome to My Portfolio</h1>
    <p class="text-center mb-6">
      This is the home page of Shakeeb's portfolio. Check out some of my projects below:
    </p>

    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="project in projects" :key="project.id">
        <v-card outlined class="hoverable">
          <!-- Single Image -->
          <v-img
            :src="project.images?.split(',')[0] || project.image"
            height="220px"
            class="project-img"
            contain
          ></v-img>

          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>
            {{ project.description }}
          </v-card-text>

          <v-card-text class="mb-2">
            <v-chip
              v-for="tech in project.technologies.split(',')"
              :key="tech"
              small
              class="ma-1"
              outlined
              color="primary"
            >
              {{ tech }}
            </v-chip>
          </v-card-text>

          <v-card-actions>
            <v-btn
            color="primary"
            outlined
            :to="`/project/${project.slug}`"
            >
            View Details
            <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projects = ref([])

onMounted(async () => {
  try {
    const res = await fetch('/projects.json')
    projects.value = await res.json()
  } catch (err) {
    console.error('Failed to load projects:', err)
  }
})
</script>

<style scoped>
h1 {
  color: var(--v-primary-base);
  font-weight: bold;
}
p {
  color: gray;
}

.v-card.hoverable {
  transition: transform 0.3s, box-shadow 0.3s;
}
.v-card.hoverable:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}


.project-img {
  border-radius: 8px;
  object-fit: contain;
  background-color: #f5f5f5; 
}
</style>
