<template>
  <v-col cols="12" md="4" class="text-center d-flex flex-column align-center">
    <!-- Naya container jo glow effect handle karega -->
    <div class="avatar-glow-container mb-2">
      <div class="avatar-wrapper mx-auto">
        <v-img
          :src="image"
          alt="Profile Image"
          width="210"  
          height="210"
          cover
          class="profile-img mx-auto"
        ></v-img>
      </div>
    </div>

    <!-- SocialLinks component wahan hi hai, bs thori spacing adjust ki hai -->
    <div class="mt-4 w-full">
      <SocialLinks :linkedin="linkedin" :github="github" :phone="phone" />
    </div>
  </v-col>
</template>

<script setup>
import SocialLinks from './SocialLinks.vue'

defineProps({
  image: { type: String, required: true },
  linkedin: { type: String, default: '' },
  github: { type: String, default: '' },
  phone: { type: String, default: '' },
})
</script>

<style scoped>
/* Naya container jo soft glow aur depth dega */
.avatar-glow-container {
  position: relative;
  padding: 5px; /* border aur image k darmiyan fasla */
  border-radius: 50%;
  display: inline-flex;
  transition: all 0.4s ease;
}

/* Dark mode k liye glow aur shadow */
.v-theme--dark .avatar-glow-container {
  background: linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(79, 70, 229, 0.2));
  box-shadow: 0 0 20px rgba(0, 242, 254, 0.15);
}

/* Light mode k liye glow aur shadow */
.v-theme--light .avatar-glow-container {
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1));
  box-shadow: 0 0 20px rgba(79, 70, 229, 0.1);
}

/* Hover krne pe glow barh jaye ga */
.avatar-glow-container:hover {
  transform: translateY(-5px);
}
.v-theme--dark .avatar-glow-container:hover {
  box-shadow: 0 0 30px rgba(0, 242, 254, 0.3);
}
.v-theme--light .avatar-glow-container:hover {
  box-shadow: 0 0 30px rgba(79, 70, 229, 0.2);
}

/* Avatar wrapper - ab ye actual gradient border hai */
.avatar-wrapper {
  width: 210px; /* Size slightly kam kia ta k container ka glow nazar aye */
  height: 210px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px; /* Gradient border ki mottai */
  position: relative;
  transition: transform 0.4s ease;
}

.profile-img {
  border-radius: 50% !important;
  /* Image k andar halki si shadow */
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.1);
}

/* Dark mode gradient border */
.v-theme--dark .avatar-wrapper {
  background: linear-gradient(135deg, #00f2fe, #4facfe);
}

/* Light mode gradient border */
.v-theme--light .avatar-wrapper {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
}

/* Hover effect - rotate hata dia ta k image professional lagay, zoom aur depth rakhi hai */
.avatar-glow-container:hover .avatar-wrapper {
  transform: scale(1.03);
}
</style>