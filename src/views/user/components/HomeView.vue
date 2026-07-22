<template>
  <div class="portfolio-wrapper min-h-screen py-12">
    <v-container class="px-6 max-w-7xl">
      <!-- Header / Hero Section -->
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

      <!-- Custom Elegant Divider -->
      <div class="section-divider my-16"></div>

      <!-- Projects Section -->
      <ProjectsSection
        title="Engineering Showcases"
        subtitle="Explore deployed full-stack products, cloud infrastructure layers, and automated tooling architectures."
        :projects="projects"
      />
    </v-container>
  </div>
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
.max-w-7xl {
  max-width: 1280px !important;
}

/* Background ambient glow setup for dark/light modes */
.v-theme--dark .portfolio-wrapper {
  background-color: #09090b;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(0, 242, 254, 0.05) 0%, transparent 40%),
    radial-gradient(circle at 85% 85%, rgba(79, 70, 229, 0.04) 0%, transparent 40%);
}

.v-theme--light .portfolio-wrapper {
  background-color: #f8fafc;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(79, 70, 229, 0.03) 0%, transparent 40%),
    radial-gradient(circle at 85% 85%, rgba(0, 242, 254, 0.03) 0%, transparent 40%);
}

.section-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(128, 128, 128, 0.2), transparent);
}

.v-theme--dark .highlight-text {
  color: #38bdf8;
  font-weight: 650;
  text-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
}
.v-theme--light .highlight-text {
  color: #4f46e5;
  font-weight: 650;
}
</style>