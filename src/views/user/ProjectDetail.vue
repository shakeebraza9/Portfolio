<template>
  <v-container class="mt-6" v-if="project">
    <v-row>
      <!-- Image -->
      <v-col cols="12" md="6">
        <v-img
          :src="project.images"
          height="350"
          class="detail-img"
          contain
        />
      </v-col>

      <!-- Content -->
      <v-col cols="12" md="6">
        <h1 class="text-h4 font-weight-bold mb-2">
          {{ project.title }}
        </h1>

        <v-chip class="mb-3" color="primary" outlined>
          {{ project.category }}
        </v-chip>

        <p class="mb-4">
          {{ project.longDescription }}
        </p>

        <p><strong>Developed By:</strong> {{ project.developedBy }}</p>
        <p><strong>Author:</strong> {{ project.author }}</p>

        <div class="mt-3">
          <v-chip
            v-for="tech in project.technologies.split(',')"
            :key="tech"
            class="ma-1"
            color="primary"
            outlined
            small
          >
            {{ tech }}
          </v-chip>
        </div>

        <v-btn
          v-if="project.viewLink"
          class="mt-4"
          color="primary"
          :href="project.viewLink"
          target="_blank"
        >
          Visit Live Website
        </v-btn>
      </v-col>
    </v-row>

    <!-- Gallery -->
<!-- Gallery -->
<v-divider class="my-8" />

<h2 class="text-h5 font-weight-bold mb-4">Project Gallery</h2>

<v-row>
  <v-col
    cols="12"
    sm="6"
    md="4"
    v-for="(img, title) in project.gallery"
    :key="title"
  >
    <v-card class="gallery-card" @click="openImage(img)">
      <v-img :src="img" height="200" cover />
      <v-card-text class="text-center">
        {{ title }}
      </v-card-text>
    </v-card>
  </v-col>
</v-row>

<!-- Image Popup -->
<v-dialog v-model="imageDialog" max-width="900">
  <v-card>
    <v-img :src="selectedImage" max-height="600" contain />
    <v-card-actions class="justify-end">
      <v-btn color="primary" variant="text" @click="imageDialog = false">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>

  </v-container>

  <v-container v-else class="text-center">
    <v-progress-circular indeterminate color="primary" />
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const project = ref(null)

const imageDialog = ref(false)
const selectedImage = ref('')

function openImage(img) {
  selectedImage.value = img
  imageDialog.value = true
}

onMounted(async () => {
  const res = await fetch('/projects.json')
  const projects = await res.json()

  project.value = projects.find(
    p => p.slug === route.params.slug
  )
})
</script>

<style scoped>
.gallery-card {
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.gallery-card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.detail-img {
  border-radius: 10px;
  background: #f5f5f5;
}

p {
  line-height: 1.7;
  color: #555;
}

</style>
