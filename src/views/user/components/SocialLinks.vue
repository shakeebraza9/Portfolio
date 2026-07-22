<template>
  <v-row class="mt-6" justify="center" dense>
    <v-btn
      v-if="linkedin"
      icon
      variant="tonal"
      size="default"
      class="social-btn mx-2 rounded-xl"
      :href="linkedin"
      target="_blank"
    >
      <v-icon size="20">mdi-linkedin</v-icon>
    </v-btn>

    <v-btn
      v-if="github"
      icon
      variant="tonal"
      size="default"
      class="social-btn mx-2 rounded-xl"
      :href="github"
      target="_blank"
    >
      <v-icon size="20">mdi-github</v-icon>
    </v-btn>

    <v-btn
      v-if="phone"
      icon
      variant="tonal"
      size="default"
      class="social-btn mx-2 rounded-xl"
      :href="`tel:${phone}`"
    >
      <v-icon size="20">mdi-phone</v-icon>
    </v-btn>
  </v-row>
</template>

<script setup>
defineProps({
  linkedin: { type: String, default: '' },
  github: { type: String, default: '' },
  phone: { type: String, default: '' },
})
</script>

<style scoped>
.social-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: none !important;
}

.social-btn:hover {
  transform: translateY(-4px);
}

.v-theme--dark .social-btn {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #94a3b8;
}

.v-theme--dark .social-btn:hover {
  color: #00f2fe !important;
  background: rgba(0, 242, 254, 0.1) !important;
  border-color: rgba(0, 242, 254, 0.3);
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.15);
}

.v-theme--light .social-btn {
  background: rgba(15, 23, 42, 0.02) !important;
  border: 1px solid rgba(15, 23, 42, 0.06);
  color: #64748b;
}

.v-theme--light .social-btn:hover {
  color: #4f46e5 !important;
  background: rgba(79, 70, 229, 0.08) !important;
  border-color: rgba(79, 70, 229, 0.25);
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.15);
}
</style>