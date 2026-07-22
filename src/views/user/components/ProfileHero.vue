<template>
  <v-row align="center" justify="center" class="profile-hero-row gy-10 mb-16">
    <ProfileAvatar
      :image="image"
      :linkedin="linkedin"
      :github="github"
      :phone="phone"
    />

    <ProfileIntro
      :badge="badge"
      :title="title"
      :cv-link="cvLink"
      @copy-email="$emit('copy-email')"
    >
      <template #bio>
        <slot name="bio" />
      </template>
    </ProfileIntro>
  </v-row>
</template>

<script setup>
import ProfileAvatar from './ProfileAvatar.vue'
import ProfileIntro from './ProfileIntro.vue'

defineProps({
  image: { type: String, required: true },
  linkedin: { type: String, default: '' },
  github: { type: String, default: '' },
  phone: { type: String, default: '' },
  badge: { type: String, default: '' },
  title: { type: String, default: '' },
  cvLink: { type: String, default: '' },
})
defineEmits(['copy-email'])
</script>

<style scoped>
.profile-hero-row {
  /* Desktop par columns ke darmiyan behtar visual flow aur spacing ke liye */
  position: relative;
}

@media (min-width: 960px) {
  .profile-hero-row {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>