<template>
  <v-footer class="cyber-footer py-6" app elevation="0">
    <v-container fluid class="px-8">
      <v-row align="center" justify="space-between" no-gutters>

        <v-col cols="12" sm="6" class="text-center text-sm-left text-caption font-weight-medium footer-brand">
          SHAKEEB RAZA <span class="mx-2 opacity-50">//</span> <span class="opacity-70">© {{ currentYear }} Core Studio.</span>
        </v-col>


        <v-col cols="12" sm="6" class="text-center text-sm-right mt-4 mt-sm-0">
          <a href="https://github.com/shakeebraza9"  target="_blank" class="social-link mx-3">Github</a>
          <a href="https://www.linkedin.com/in/muhammad-shakeeb-raza-0990b120a" target="_blank" class="social-link mx-3">Linkedin</a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { computed } from 'vue'
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.cyber-footer {
  border-t: 1px solid rgba(255, 255, 255, 0.05) !important;
  transition: all 0.3s ease;
}


.v-theme--dark .cyber-footer {
  background-color: #09090b !important; 
  border-color: rgba(255, 255, 255, 0.05) !important;
}
.v-theme--dark .footer-brand {
  color: #64748b;
}
.v-theme--dark .social-link {
  color: #94a3b8;
}
.v-theme--dark .social-link:hover {
  color: #00f2fe;
  text-shadow: 0 0 10px rgba(0, 242, 254, 0.4);
}


.v-theme--light .cyber-footer {
  background-color: #f8fafc !important; 
  border-color: rgba(15, 23, 42, 0.05) !important;
}
.v-theme--light .footer-brand {
  color: #94a3b8;
}
.v-theme--light .social-link {
  color: #64748b;
}
.v-theme--light .social-link:hover {
  color: #4f46e5;
}


.social-link {
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;
}
</style>  