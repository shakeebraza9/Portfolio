<template>
  <v-container class="mt-12 px-6 target-view-container" v-if="project">
    <!-- Ambient Glow Orb -->
    <div class="ambient-glow-orb"></div>

    <v-row class="gy-10 position-relative z-index-2 align-center">
      <!-- Left Column: Holographic Hero Image -->
      <v-col cols="12" lg="6" class="d-flex align-center justify-center">
        <div class="cyber-holo-frame w-100">
          <div class="frame-corner tl"></div>
          <div class="frame-corner tr"></div>
          <div class="frame-corner bl"></div>
          <div class="frame-corner br"></div>
          
          <v-img
            :src="project.images?.split(',')[0] || project.image"
            max-height="460"
            min-height="360"
            class="lush-project-hero w-100 rounded-xl"
            cover
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height glass-blur">
                <v-progress-circular indeterminate color="cyan-accent-2"></v-progress-circular>
              </div>
            </template>
          </v-img>
        </div>
      </v-col>

      <!-- Right Column: Project Metadata & Actions -->
      <v-col cols="12" lg="6" class="d-flex flex-column justify-center">
        <div class="d-flex align-center mb-3">
          <span class="cyber-pulse-dot me-2"></span>
          <span class="text-overline font-weight-black tracking-widest neon-text">
            {{ project.category || 'SYSTEM ARCHITECTURE' }}
          </span>
        </div>
        
        <h1 class="text-h3 font-weight-black mb-4 mega-gradient-title">
          {{ project.title }}
        </h1>

        <p class="text-body-1 lush-bio-text mb-6">
          {{ project.longDescription || project.description }}
        </p>

        <!-- Developer & Author Cards -->
        <v-row class="mb-6 dense">
          <v-col cols="6" sm="6" v-if="project.developedBy">
            <div class="intel-stat-card pa-4">
              <div class="text-caption stat-label tracking-wide text-uppercase mb-1">Architect</div>
              <div class="text-body-2 font-weight-bold stat-value d-flex align-center">
                <v-icon size="16" class="me-2 icon-neon">mdi-shield-check-outline</v-icon>
                {{ project.developedBy }}
              </div>
            </div>
          </v-col>
          
          <v-col cols="6" sm="6" v-if="project.author">
            <div class="intel-stat-card pa-4">
              <div class="text-caption stat-label tracking-wide text-uppercase mb-1">Deployment Lead</div>
              <div class="text-body-2 font-weight-bold stat-value d-flex align-center">
                <v-icon size="16" class="me-2 icon-neon">mdi-account-network-outline</v-icon>
                {{ project.author }}
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- Technologies Stack -->
        <div class="mb-8" v-if="project.technologies">
          <div class="text-caption text-uppercase tracking-wider mb-2 font-weight-bold opacity-60">Tech Infrastructure Stack:</div>
          <div class="d-flex flex-wrap gap-2">
            <v-chip
              v-for="tech in project.technologies.split(',')"
              :key="tech"
              size="medium"
              variant="flat"
              class="lush-tech-chip font-weight-black"
            >
              <v-icon start size="14">mdi-circle-medium</v-icon>
              {{ tech.trim() }}
            </v-chip>
          </div>
        </div>


      <div class="d-flex flex-wrap align-center gap-4" v-if="project.viewLink || project.videolink">
        <v-btn
          v-if="project.viewLink"
          size="large"
          variant="flat"
          class="lush-action-btn font-weight-black rounded-xl px-7 py-4 text-button flex-grow-1 sm:flex-grow-0"
          append-icon="mdi-rocket-launch-outline"
          :href="project.viewLink"
          target="_blank"
        >
          Launch Live System
        </v-btn>

        <v-btn
          v-if="project.videolink"
          size="large"
          variant="outlined"
          class="lush-video-btn font-weight-bold rounded-xl px-6 py-4 text-button flex-grow-1 sm:flex-grow-0"
          prepend-icon="mdi-play-circle-outline"
          @click="openVideo(project.videolink)"
        >
          Watch Walkthrough
        </v-btn>
      </div>
      </v-col>
    </v-row>

    <!-- Gallery Section -->
    <div v-if="project.gallery && Object.keys(project.gallery).length" class="mt-16 position-relative z-index-2">
      <v-divider class="my-16 opacity-10" />
      
      <div class="mb-10 text-center text-sm-left">
        <h2 class="text-h4 font-weight-black mega-gradient-title d-inline-block">System Blueprint Gallery</h2>
        <p class="text-body-2 lush-bio-text opacity-70 mt-1">Explore complete micro-architectural interfaces and visual documentation below.</p>
      </div>

      <v-row class="gy-6">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(img, title) in project.gallery"
          :key="title"
        >
          <div class="gallery-glass-wrapper h-100 d-flex flex-column" @click="openImage(img)">
            <div class="gallery-overflow-container flex-grow-1">
              <v-img :src="img" height="260" cover class="gallery-lush-img w-100" />
              <div class="gallery-glass-overlay d-flex align-center justify-center">
                <v-btn icon="mdi-eye-outline" variant="flat" color="white" class="view-ico-btn"></v-btn>
              </div>
            </div>
            <div class="pa-4 text-center font-weight-bold text-body-2 tracking-wide gallery-card-title">
              {{ title }}
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Image Lightbox Modal -->
    <v-dialog v-model="imageDialog" max-width="1100" transition="dialog-bottom-transition">
      <v-card class="premium-lightbox pa-3 rounded-2xl border-glass">
        <v-img :src="selectedImage" max-height="800" contain class="rounded-xl w-100" />
        <v-card-actions class="justify-end pt-3">
          <v-btn color="grey-lighten-1" variant="tonal" class="rounded-lg font-weight-black px-4" @click="imageDialog = false">
            Minimize Matrix
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<v-dialog v-model="videoDialog" :max-width="isShortsVideo ? 480 : 950" transition="dialog-bottom-transition">
  <v-card class="premium-lightbox pa-4 rounded-2xl border-glass">
    <div :class="['video-container rounded-xl overflow-hidden position-relative', { 'shorts-container': isShortsVideo }]">
      <iframe
        v-if="embedVideoUrl"
        :src="embedVideoUrl"
        width="100%"
        :height="isShortsVideo ? '680' : '500'"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="d-block w-100"
      ></iframe>
    </div>
    
    <v-card-actions class="justify-space-between pt-4 px-2">
      <!-- Direct YouTube redirect button agar user wahan dekhna chahe -->
      <v-btn
        color="cyan-accent-2"
        variant="text"
        prepend-icon="mdi-youtube"
        :href="selectedVideoUrl"
        target="_blank"
        class="font-weight-bold text-caption"
      >
        Watch on YouTube
      </v-btn>

      <v-btn color="grey-lighten-1" variant="tonal" class="rounded-lg font-weight-black px-4" @click="videoDialog = false">
        Close Stream
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
  </v-container>

  <!-- Loader State -->
  <v-container v-else class="text-center fill-height d-flex align-center justify-center dynamic-loader-screen">
    <div class="loader-matrix-core">
      <div class="spinner-neon-ring"></div>
      <span class="text-h6 mt-6 font-weight-black tracking-widest neon-text display-block">RESOLVING CORE PIPELINES...</span>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const project = ref(null)

const imageDialog = ref(false)
const selectedImage = ref('')

const videoDialog = ref(false)
const selectedVideoUrl = ref('')

function openImage(img) {
  selectedImage.value = img
  imageDialog.value = true
}

function openVideo(url) {
  selectedVideoUrl.value = url
  videoDialog.value = true
}

const embedVideoUrl = computed(() => {
  if (!selectedVideoUrl.value) return ''
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = selectedVideoUrl.value.match(regExp)
  return (match && match[2].length === 11)
    ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
    : selectedVideoUrl.value
})

onMounted(async () => {
  try {
    const res = await fetch('/projects.json')
    const projects = await res.json()
    project.value = projects.find(p => p.slug === route.params.slug)
  } catch (err) {
    console.error('Critical Pipeline Failure:', err)
  }
})
</script>

<style scoped>
.target-view-container {
  position: relative;
  min-height: 90vh;
}
.position-relative { position: relative; }
.z-index-2 { z-index: 2; }
.gap-2 { gap: 8px; }
.gap-4 { gap: 16px; }

.ambient-glow-orb {
  position: absolute;
  top: -10%;
  left: 30%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.15;
  pointer-events: none;
  z-index: 1;
}
.v-theme--dark .ambient-glow-orb { background: radial-gradient(circle, #00f2fe 0%, #4facfe 100%); }
.v-theme--light .ambient-glow-orb { background: radial-gradient(circle, #4f46e5 0%, #7c3aed 100%); }

.cyber-holo-frame {
  position: relative;
  padding: 16px;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 24px;
  max-width: 560px;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.v-theme--dark .cyber-holo-frame { border: 1px solid rgba(255, 255, 255, 0.04); box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
.v-theme--light .cyber-holo-frame { border: 1px solid rgba(15, 23, 42, 0.04); box-shadow: 0 30px 60px rgba(79, 70, 229, 0.05); }

.lush-project-hero {
  border-radius: 16px !important;
  transform: translateZ(0);
}
.cyber-holo-frame:hover {
  transform: translateY(-4px) scale(1.005);
}

.frame-corner {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
}
.v-theme--dark .frame-corner { border-color: #00f2fe; }
.v-theme--light .frame-corner { border-color: #4f46e5; }
.frame-corner.tl { top: 0; left: 0; border-right: 0; border-bottom: 0; border-top-left-radius: 12px; }
.frame-corner.tr { top: 0; right: 0; border-left: 0; border-bottom: 0; border-top-right-radius: 12px; }
.frame-corner.bl { bottom: 0; left: 0; border-right: 0; border-top: 0; border-bottom-left-radius: 12px; }
.frame-corner.br { bottom: 0; right: 0; border-left: 0; border-top: 0; border-bottom-right-radius: 12px; }

.mega-gradient-title {
  font-weight: 900 !important;
  letter-spacing: -1px !important;
  line-height: 1.15 !important;
}
.v-theme--dark .mega-gradient-title {
  background: linear-gradient(135deg, #ffffff 0%, #a5f3fc 50%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.v-theme--light .mega-gradient-title {
  background: linear-gradient(135deg, #0f172a 0%, #312e81 60%, #4f46e5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cyber-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
.v-theme--dark .cyber-pulse-dot { background: #00f2fe; box-shadow: 0 0 10px #00f2fe; }
.v-theme--light .cyber-pulse-dot { background: #4f46e5; box-shadow: 0 0 10px #4f46e5; }

.v-theme--dark .neon-text { color: #00f2fe !important; }
.v-theme--light .neon-text { color: #4f46e5 !important; }

.v-theme--dark .lush-bio-text { color: #94a3b8; line-height: 1.8; }
.v-theme--light .lush-bio-text { color: #475569; line-height: 1.8; }

.intel-stat-card {
  border-radius: 16px !important;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}
.v-theme--dark .intel-stat-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); }
.v-theme--dark .intel-stat-card:hover { background: rgba(255, 255, 255, 0.04); border-color: rgba(0, 242, 254, 0.2); }
.v-theme--light .intel-stat-card { background: rgba(15, 23, 42, 0.02); border: 1px solid rgba(15, 23, 42, 0.05); }
.v-theme--light .intel-stat-card:hover { background: rgba(15, 23, 42, 0.04); border-color: rgba(79, 70, 229, 0.2); }

.v-theme--dark .stat-label { color: #64748b; font-weight: 700; }
.v-theme--light .stat-label { color: #94a3b8; font-weight: 700; }
.v-theme--dark .stat-value { color: #f1f5f9; }
.v-theme--light .stat-value { color: #0f172a; }
.v-theme--dark .icon-neon { color: #00f2fe; }
.v-theme--light .icon-neon { color: #4f46e5; }

.lush-tech-chip {
  border-radius: 10px !important;
  letter-spacing: 0.5px;
}
.v-theme--dark .lush-tech-chip { background: rgba(255, 255, 255, 0.04) !important; color: #e2e8f0 !important; border: 1px solid rgba(255, 255, 255, 0.05); }
.v-theme--dark .lush-tech-chip:hover { border-color: #00f2fe; color: #00f2fe !important; }
.v-theme--light .lush-tech-chip { background: rgba(15, 23, 42, 0.03) !important; color: #334155 !important; border: 1px solid rgba(15, 23, 42, 0.05); }
.v-theme--light .lush-tech-chip:hover { border-color: #4f46e5; color: #4f46e5 !important; }

.lush-action-btn {
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.v-theme--dark .lush-action-btn { background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%) !important; color: #09090b !important; }
.v-theme--dark .lush-action-btn:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0, 242, 254, 0.2) !important; }
.v-theme--light .lush-action-btn { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%) !important; color: #ffffff !important; }
.v-theme--light .lush-action-btn:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(79, 70, 229, 0.2) !important; }

.lush-video-btn {
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.v-theme--dark .lush-video-btn {
  border: 1px solid rgba(0, 242, 254, 0.4) !important;
  color: #00f2fe !important;
  background: rgba(0, 242, 254, 0.04) !important;
}
.v-theme--dark .lush-video-btn:hover {
  background: rgba(0, 242, 254, 0.12) !important;
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 242, 254, 0.15);
}
.v-theme--light .lush-video-btn {
  border: 1px solid rgba(79, 70, 229, 0.4) !important;
  color: #4f46e5 !important;
  background: rgba(79, 70, 229, 0.03) !important;
}
.v-theme--light .lush-video-btn:hover {
  background: rgba(79, 70, 229, 0.08) !important;
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.15);
}

.gallery-glass-wrapper {
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.v-theme--dark .gallery-glass-wrapper { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); }
.v-theme--light .gallery-glass-wrapper { background: rgba(255, 255, 255, 0.6); border: 1px solid rgba(0, 0, 0, 0.04); }

.gallery-overflow-container {
  position: relative;
  overflow: hidden;
}
.gallery-lush-img {
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.gallery-glass-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.view-ico-btn {
  transform: scale(0.6);
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.gallery-glass-wrapper:hover {
  transform: translateY(-6px);
}
.v-theme--dark .gallery-glass-wrapper:hover { border-color: rgba(0, 242, 254, 0.4); box-shadow: 0 20px 45px rgba(0, 242, 254, 0.08); }
.v-theme--light .gallery-glass-wrapper:hover { border-color: rgba(79, 70, 229, 0.3); box-shadow: 0 20px 45px rgba(79, 70, 229, 0.08); }

.gallery-glass-wrapper:hover .gallery-lush-img { transform: scale(1.06); }
.gallery-glass-wrapper:hover .gallery-glass-overlay { opacity: 1; }
.gallery-glass-wrapper:hover .view-ico-btn { transform: scale(1); }

.v-theme--dark .gallery-card-title { color: #cbd5e1; }
.v-theme--light .gallery-card-title { color: #1e293b; }

.premium-lightbox { background: rgba(10, 10, 12, 0.9) !important; backdrop-filter: blur(20px); }
.border-glass { border: 1px solid rgba(255, 255, 255, 0.08) !important; }

.dynamic-loader-screen { min-height: 80vh; }
.loader-matrix-core { display: inline-block; position: relative; }
.spinner-neon-ring {
  width: 60px;
  height: 60px;
  border: 4px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}
.v-theme--dark .spinner-neon-ring { border-top-color: #00f2fe; border-bottom-color: #00f2fe; }
.v-theme--light .spinner-neon-ring { border-top-color: #4f46e5; border-bottom-color: #7c3aed; }

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>