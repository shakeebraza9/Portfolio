<template>
  <v-container class="mt-12 px-6">
    

    <v-row align="center" justify="center" class="gy-8 mb-16">

      <v-col cols="12" md="4" class="text-center">
        <div class="avatar-wrapper mx-auto">
          <v-img
            src="profile.jpeg"
            alt="Profile Image"
            width="220"
            height="220"
            cover
            class="profile-img mx-auto"
          ></v-img>
        </div>


        <v-row class="mt-6" justify="center" dense>

          <v-btn icon variant="tonal" size="small" class="social-btn mx-1" href="https://www.linkedin.com/in/muhammad-shakeeb-raza-0990b120a" target="_blank">
            <v-icon size="18">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon variant="tonal" size="small" class="social-btn mx-1" href="https://github.com/shakeebraza9" target="_blank">
            <v-icon size="18">mdi-github</v-icon>
          </v-btn>
          <v-btn icon variant="tonal" size="small" class="social-btn mx-1" href="tel:+923406095534">
            <v-icon size="18">mdi-phone</v-icon>
          </v-btn>
        </v-row>
      </v-col>


      <v-col cols="12" md="8">
        <span class="text-overline font-weight-bold tracking-widest intro-badge">Full Stack & DevOps Engineer</span>
        <h1 class="text-h3 font-weight-black mt-1 mb-4 page-main-title">
          M. Shakeeb Raza
        </h1>
        <p class="text-body-1 bio-text mb-6">
          Dynamic developer with 3+ years of professional experience building architecture-driven web applications. 
          Expertise spans across <span class="highlight-text">Laravel</span>, <span class="highlight-text">Vue.js</span>, and modern DevOps loops involving 
          <span class="highlight-text">Docker</span>, <span class="highlight-text">Kubernetes</span>, and AWS infrastructure management. 
          Focused on system optimization, web automation via Python Selenium, and clean-code delivery paradigms.
        </p>
        
        <v-row dense>
          <v-col cols="6" sm="4">
            <v-btn variant="flat" block class="cta-btn cv-btn font-weight-bold rounded-lg" prepend-icon="mdi-download" href="shakeebcv.pdf" target="_blank">
              Resume
            </v-btn>
          </v-col>
          <v-col cols="6" sm="4">
            <v-btn variant="outlined" block class="cta-btn contact-btn font-weight-bold rounded-lg" prepend-icon="mdi-email-outline" @click="copyEmail">
              Copy Email
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider class="my-12 opacity-10" />


    <div class="text-center mb-10">
      <h2 class="text-h4 font-weight-black mb-2 project-section-title">
        Engineering Showcases
      </h2>
      <p class="text-body-2 subtitle-text max-w-xl mx-auto">
        Explore deployed full-stack products, cloud infrastructure layers, and automated tooling architectures.
      </p>
    </div>


    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="project in projects" :key="project.id">
        <v-card variant="flat" class="cyber-card h-full d-flex flex-column">

          <div class="img-container">
            <v-img
              :src="project.images?.split(',')[0] || project.image"
              height="220"
              cover
              class="project-img"
            ></v-img>
          </div>

          <v-card-item class="pt-4">
            <v-card-title class="text-h6 font-weight-bold card-title">
              {{ project.title }}
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-body-2 card-desc flex-grow-1">
            {{ project.description }}
          </v-card-text>


          <v-card-text class="pt-0 pb-2">
            <v-chip
              v-for="tech in project.technologies?.split(',')"
              :key="tech"
              size="small"
              variant="tonal"
              class="ma-1 tech-chip font-weight-medium"
            >
              {{ tech.trim() }}
            </v-chip>
          </v-card-text>

          <v-card-actions class="pa-4 pt-0">
            <v-btn
              variant="text"
              class="action-btn font-weight-bold w-full justify-space-between"
              append-icon="mdi-arrow-right"
              :to="`/project/${project.slug}`"
            >
              View Details
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
const email = 'shakeebraza90@gmail.com'

function copyEmail() {
  navigator.clipboard.writeText(email)
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
.max-w-xl {
  max-width: 600px;
}


.avatar-wrapper {
  width: 230px;
  height: 230px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  transition: transform 0.4s ease;
}
.profile-img {
  border-radius: 50% !important;
}
.v-theme--dark .avatar-wrapper { background: linear-gradient(135deg, #00f2fe, #4facfe); }
.v-theme--light .avatar-wrapper { background: linear-gradient(135deg, #4f46e5, #7c3aed); }
.avatar-wrapper:hover { transform: scale(1.03) rotate(2deg); }


.social-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.social-btn:hover { transform: translateY(-3px); }
.v-theme--dark .social-btn:hover { color: #00f2fe !important; background: rgba(0, 242, 254, 0.1) !important; }
.v-theme--light .social-btn:hover { color: #4f46e5 !important; background: rgba(79, 70, 229, 0.08) !important; }


.v-theme--dark .page-main-title {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.v-theme--light .page-main-title {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.v-theme--dark .project-section-title { color: #f8fafc; }
.v-theme--light .project-section-title { color: #0f172a; }

.v-theme--dark .bio-text, .v-theme--dark .subtitle-text { color: #94a3b8; }
.v-theme--light .bio-text, .v-theme--light .subtitle-text { color: #64748b; }

.v-theme--dark .intro-badge { color: #00f2fe; }
.v-theme--light .intro-badge { color: #4f46e5; }

.v-theme--dark .highlight-text { color: #00f2fe; font-weight: 600; }
.v-theme--light .highlight-text { color: #4f46e5; font-weight: 600; }


.cta-btn {
  transition: all 0.3s ease;
}
.v-theme--dark .cv-btn { background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%) !important; color: #09090b !important; }
.v-theme--light .cv-btn { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%) !important; color: #ffffff !important; }

.v-theme--dark .contact-btn { border-color: rgba(0, 242, 254, 0.4) !important; color: #00f2fe !important; }
.v-theme--light .contact-btn { border-color: rgba(79, 70, 229, 0.4) !important; color: #4f46e5 !important; }


.cyber-card {
  border-radius: 16px !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.img-container {
  overflow: hidden;
  position: relative;
}
.project-img {
  transition: transform 0.5s ease;
}
.cyber-card:hover .project-img {
  transform: scale(1.04);
}

.v-theme--dark .cyber-card {
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
}
.v-theme--dark .cyber-card:hover {
  border-color: rgba(0, 242, 254, 0.25) !important;
  box-shadow: 0 12px 30px rgba(0, 242, 254, 0.04) !important;
  transform: translateY(-6px);
}
.v-theme--light .cyber-card {
  background: rgba(15, 23, 42, 0.02) !important;
  border: 1px solid rgba(15, 23, 42, 0.06) !important;
}
.v-theme--light .cyber-card:hover {
  border-color: rgba(79, 70, 229, 0.2) !important;
  box-shadow: 0 12px 30px rgba(79, 70, 229, 0.05) !important;
  transform: translateY(-6px);
}

.v-theme--dark .tech-chip, .v-theme--dark .action-btn { color: #00f2fe !important; }
.v-theme--light .tech-chip, .v-theme--light .action-btn { color: #4f46e5 !important; }

.v-theme--dark .card-title { color: #f8fafc; }
.v-theme--light .card-title { color: #0f172a; }
.v-theme--dark .card-desc { color: #94a3b8; }
.v-theme--light .card-desc { color: #475569; }
</style>