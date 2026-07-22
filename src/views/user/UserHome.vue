<template>
  <v-container class="mt-12 px-6">
    <ProfileHero
      image="profile.jpeg"
      linkedin="https://www.linkedin.com/in/muhammad-shakeeb-raza-0990b120a"
      github="https://github.com/shakeebraza9"
      phone="+923406095534"
      badge="Full Stack & DevOps Engineer"
      title="M. Shakeeb Raza"
      cv-link="shakeebcv.pdf"
      @copy-email="copyEmail"
    >
      <template #bio>
        Dynamic developer with 3+ years of professional experience building
        architecture-driven web applications. Expertise spans across
        <span class="highlight-text">Laravel</span>,
        <span class="highlight-text">Vue.js</span>, and modern DevOps loops
        involving <span class="highlight-text">Docker</span>,
        <span class="highlight-text">Kubernetes</span>, and AWS
        infrastructure management. Focused on system optimization, web
        automation via Python Selenium, and clean-code delivery paradigms.
      </template>
    </ProfileHero>

    <v-divider class="my-12 opacity-10" />

    <ProjectsSection
      title="Engineering Showcases"
      subtitle="Explore deployed full-stack products, cloud infrastructure layers, and automated tooling architectures."
      :projects="projects"
    />
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProfileHero from './components/ProfileHero.vue'
import ProjectsSection from './components/ProjectsSection.vue'

const projects = ref([])
const email = 'shakeebraza90@gmail.com'

function copyEmail() {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert(`Email copied to clipboard: ${email}`)
    })
    .catch(() => {
      alert('Failed to copy email. Please try manually.')
    })
}

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
.v-theme--dark .highlight-text {
  color: #00f2fe;
  font-weight: 600;
}
.v-theme--light .highlight-text {
  color: #4f46e5;
  font-weight: 600;
}
</style>
