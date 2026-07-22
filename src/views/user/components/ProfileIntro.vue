<template>
  <v-col cols="12" md="8" class="px-md-6">
    <div class="badge-pill mb-3">
      <span class="text-overline font-weight-bold tracking-widest">
        {{ badge }}
      </span>
    </div>

    <h1 class="text-h3 md:text-h2 font-weight-black mb-4 page-main-title">
      {{ title }}
    </h1>

    <p class="text-body-1 bio-text mb-8 leading-relaxed">
      <slot name="bio" />
    </p>

    <v-row dense class="gap-4">
      <v-col cols="12" sm="5">
        <v-btn
          variant="flat"
          block
          size="large"
          class="cta-btn cv-btn font-weight-bold rounded-xl"
          prepend-icon="mdi-download"
          :href="cvLink"
          target="_blank"
        >
          Download Resume
        </v-btn>
      </v-col>
      <v-col cols="12" sm="5">
        <v-btn
          variant="outlined"
          block
          size="large"
          class="cta-btn contact-btn font-weight-bold rounded-xl"
          prepend-icon="mdi-email-outline"
          @click="$emit('copy-email')"
        >
          Copy Email
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>
defineProps({
  badge: { type: String, default: '' },
  title: { type: String, default: '' },
  cvLink: { type: String, default: '' },
})
defineEmits(['copy-email'])
</script>

<style scoped>
.badge-pill {
  display: inline-flex;
  padding: 4px 14px;
  border-radius: 50px;
  backdrop-filter: blur(8px);
}
.v-theme--dark .badge-pill {
  background: rgba(0, 242, 254, 0.08);
  border: 1px solid rgba(0, 242, 254, 0.2);
  color: #00f2fe;
}
.v-theme--light .badge-pill {
  background: rgba(79, 70, 229, 0.06);
  border: 1px solid rgba(79, 70, 229, 0.15);
  color: #4f46e5;
}

.page-main-title {
  letter-spacing: -0.025em;
  line-height: 1.2;
}

.v-theme--dark .page-main-title {
  background: linear-gradient(135deg, #ffffff 30%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.v-theme--light .page-main-title {
  background: linear-gradient(135deg, #0f172a 30%, #475569 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.v-theme--dark .bio-text {
  color: #94a3b8;
  font-size: 1.05rem;
}
.v-theme--light .bio-text {
  color: #475569;
  font-size: 1.05rem;
}

.leading-relaxed {
  line-height: 1.8 !important;
}

.cta-btn {
  letter-spacing: 0.3px;
  text-transform: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: none !important;
}

.cta-btn:hover {
  transform: translateY(-2px);
}

.v-theme--dark .cv-btn {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%) !important;
  color: #09090b !important;
  box-shadow: 0 8px 20px rgba(0, 242, 254, 0.25) !important;
}
.v-theme--light .cv-btn {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%) !important;
  color: #ffffff !important;
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.25) !important;
}

.v-theme--dark .contact-btn {
  border: 1px solid rgba(0, 242, 254, 0.3) !important;
  color: #00f2fe !important;
  background: rgba(0, 242, 254, 0.02);
}
.v-theme--light .contact-btn {
  border: 1px solid rgba(79, 70, 229, 0.3) !important;
  color: #4f46e5 !important;
  background: rgba(79, 70, 229, 0.01);
}
</style>