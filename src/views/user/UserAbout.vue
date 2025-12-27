<template>
  <v-container class="mt-10">
    <v-row align="center" justify="center">
      <!-- Profile Picture -->
      <v-col cols="12" md="4" class="text-center">
  <v-img
    src="profile.jpeg"
    alt="Profile Image"
    width="300"
    height="300"
    class="mx-auto"
    contain
  ></v-img>
</v-col>


      <!-- About Text + Buttons + Social Links -->
      <v-col cols="12" md="6">
        <h1 class="text-h4 font-weight-bold mb-3">Muhammad Shakeeb Raza</h1>
        <p class="text-subtitle-1 mb-4">
           Full Stack Developer with 3+ years of real-world experience building fast,
            secure, and user-friendly web applications. Strong grip on Laravel, Vue.js,
            JavaScript, PHP, Node.js, Express, and Python, with solid experience in API
            integration and database-driven systems. Worked on multiple live
            projects including business, e-commerce, and security platforms.
            Passionate about clean code, problem-solving, and delivering practical
            solutions that actually work
        </p>
        <v-row class="mb-6" justify="start" align="center" dense>
          <v-btn icon large href="https://www.facebook.com/muhammad.shakeeb.raza/" target="_blank">
            <v-icon size="28">mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon large href="https://www.linkedin.com/in/muhammad-shakeeb-raza-0990b120a" target="_blank">
            <v-icon size="28">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon large href="https://github.com/shakeebraza9" target="_blank">
            <v-icon size="28">mdi-github</v-icon>
          </v-btn>
        </v-row>

        <!-- Buttons -->
        <v-row>
          <v-col cols="12" sm="6" class="mb-2">
            <v-btn
              color="primary"
              large
              rounded
              href="shakeebcv.pdf"
              target="_blank"
            >
              Download CV
            </v-btn>
          </v-col>

          <v-col cols="12" sm="6">
            <v-btn
              color="secondary"
              large
              rounded
              @click="copyEmail"
            >
              Contact Me
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const email = 'shakeeb@example.com'

function copyEmail() {
  navigator.clipboard.writeText(email)
    .then(() => {
      alert(`Email copied to clipboard: ${email}`)
    })
    .catch(() => {
      alert('Failed to copy email. Please try manually.')
    })
}
</script>

<style scoped>
h1 {
  color: var(--v-primary-base);
}

p {
  color: gray;
  line-height: 1.6;
}

.v-btn > .v-icon {
  transition: transform 0.2s;
}

.v-btn:hover > .v-icon {
  transform: scale(1.2);
}
.v-img {
  border-radius: 8px; /* thoda round corner chahiye to */
  border: 2px solid #ccc;
}
</style>
