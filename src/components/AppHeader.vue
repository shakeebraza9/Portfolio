<script setup>
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'

const isDark = ref(true) 
const theme = useTheme()

watch(isDark, (val) => {
  theme.global.name.value = val ? 'dark' : 'light'
}, { immediate: true })
</script>

<template>
  <v-app-bar
    app
    height="70"
    elevation="0"
    class="cyber-navbar px-8"
  >

    <v-toolbar-title class="text-h6 font-weight-black tracking-tight logo-text">
      M. SHAKEEB RAZA
    </v-toolbar-title>

    <v-spacer></v-spacer>


    <div class="nav-links-wrapper d-flex align-center">
      <v-btn
        variant="text"
        class="mx-1 font-weight-bold nav-btn"
        rounded="xl"
        to="/"
      >
        Home
      </v-btn>
      
      <v-btn
        variant="text"
        class="mx-1 font-weight-bold nav-btn"
        rounded="xl"
        to="/about"
      >
        About
      </v-btn>
    </div>

    <v-divider vertical inset class="mx-6 border-opacity-25" style="height: 20px;"></v-divider>


    <div class="theme-toggle-container" @click="isDark = !isDark">
      <v-icon 
        :icon="isDark ? 'mdi-lightning-bolt' : 'mdi-lightning-bolt-outline'" 
        :color="isDark ? 'emerald' : 'indigo'"
        class="toggle-icon"
      />
    </div>
  </v-app-bar>
</template>

<style scoped>

.cyber-navbar {
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}


.v-theme--dark .cyber-navbar {
  background: rgba(10, 10, 12, 0.7) !important;
}
.v-theme--dark .logo-text {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.v-theme--dark .nav-btn {
  color: #94a3b8 !important;
}
.v-theme--dark .nav-btn:hover {
  color: #00f2fe !important;
  background: rgba(0, 242, 254, 0.08) !important;
}


.v-theme--light .cyber-navbar {
  background: rgba(248, 250, 252, 0.7) !important;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08) !important;
}
.v-theme--light .logo-text {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.v-theme--light .nav-btn {
  color: #475569 !important;
}
.v-theme--light .nav-btn:hover {
  color: #4f46e5 !important;
  background: rgba(79, 70, 229, 0.06) !important;
}


.nav-btn {
  font-size: 0.9rem !important;
  letter-spacing: 0.3px !important;
  text-transform: capitalize !important;
  transition: all 0.3s ease;
}

.theme-toggle-container {
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}
.theme-toggle-container:hover {
  transform: scale(1.15) rotate(15deg);
}
.toggle-icon {
  font-size: 1.5rem;
}
</style>