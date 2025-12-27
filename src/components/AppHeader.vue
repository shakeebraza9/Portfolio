<script setup>
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'

const isDark = ref(false)
const theme = useTheme()
watch(isDark, (val) => {
  theme.global.name.value = val ? 'dark' : 'light'
})
</script>

<template>
  <v-app-bar
    app
    height="70"
    color="primary"
    elevation="5"
    class="d-flex align-center px-6"
  >
    <v-toolbar-title class="text-h6 font-weight-bold">
      Muhammad Shakeeb Raza
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      text
      class="mx-2"
      rounded
      to="/"
      color="white"
    >
      Home
    </v-btn>
    <v-btn
      text
      class="mx-2"
      rounded
      to="/about"
      color="white"
    >
      About
    </v-btn>
    

    <v-divider vertical class="mx-4"></v-divider>

    <v-switch
      v-model="isDark"
      inset
      hide-details
      label="Dark Mode"
      color="yellow"
      class="ml-2"
    />
  </v-app-bar>
</template>

<style scoped>
.v-application .v-app-bar {
  background: linear-gradient(90deg, #87CEEB, #00BFFF); /* light blue gradient */
}
.v-theme--dark .v-app-bar {
  background: linear-gradient(90deg, #800000, #B22222); /* dark maroon gradient */
}
</style>
