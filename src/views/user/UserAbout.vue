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

        <!-- Social Links -->
        <v-row class="mt-4" justify="center" dense>
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
      </v-col>

      <!-- About Text + Buttons -->
      <v-col cols="12" md="6">
        <h1 class="text-h4 font-weight-bold mb-3">Muhammad Shakeeb Raza</h1>
        <p class="text-subtitle-1 mb-4">
          Full Stack Developer with 3+ years of real-world experience building fast, secure, and user-friendly web applications.
          Strong grip on Laravel, Vue.js, JavaScript, PHP, Node.js, Express, and Python.
          Passionate about clean code, problem-solving, and delivering practical solutions.
        </p>

        <v-row class="mb-6">
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

    <!-- Work Experience -->
    <h2 class="text-h5 font-weight-bold mt-10 mb-4">Work Experience</h2>
    <v-row>
      <v-col cols="12" md="6" v-for="(job, i) in workExperience" :key="i">
        <v-card outlined class="mb-4">
          <v-card-title class="text-subtitle-1 font-weight-bold">{{ job.company }}</v-card-title>
          <v-card-subtitle>{{ job.role }} – {{ job.duration }}</v-card-subtitle>
          <v-card-text>
            <ul>
              <li v-for="(point, idx) in job.details" :key="idx">{{ point }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Skills -->
    <h2 class="text-h5 font-weight-bold mt-10 mb-4">Skill Highlights</h2>
    <v-row dense>
      <v-col cols="auto" v-for="(skill, i) in skills" :key="i">
        <v-chip color="primary" class="ma-1" outlined>{{ skill }}</v-chip>
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

// Work experience array
const workExperience = [
  {
    company: 'Fission Fox',
    role: 'Full Stack Developer Laravel & Vue js & Python',
    duration: '1 year',
    details: [
      'Designed and developed full-stack web applications using Laravel (backend) and Vue.js (frontend).',
      'Built and integrated RESTful APIs for dynamic data handling and third-party services.',
      'Implemented authentication, authorization, and role-based access control.',
      'Worked with MySQL databases, optimized queries, and improved application performance.',
      'Collaborated with designers and backend teams to deliver scalable and secure solutions.'
    ]
  },
  {
    company: 'Azam solutions, Karachi',
    role: 'PHP Laravel Developer Remote',
    duration: '1 Year',
    details: [
      'Developed custom PHP & Laravel-based web applications.',
      'Created reusable components and followed MVC architecture.',
      'Integrated database-driven features using MySQL.',
      'Maintained and enhanced existing systems based on client requirements.'
    ]
  },
  {
    company: 'Interactive Media, Karachi',
    role: 'Associated Developer PHP',
    duration: '8 Months',
    details: [
      'Assisted in developing and maintaining PHP-based web applications.',
      'Worked with REST APIs, SQL queries, and AJAX-based requests.',
      'Participated in debugging, testing, and feature enhancements.',
      'Supported senior developers in delivering client projects on time.'
    ]
  },
  {
    company: 'Horizon Institute and Nursing, Karachi',
    role: 'Computer Operator',
    duration: '1 Year',
    details: [
      'Managed computer systems, networking, and hardware/software troubleshooting.',
      'Installed and maintained operating systems and applications.',
      'Provided technical support and resolved day-to-day IT issues.'
    ]
  }
]

// Skills array
const skills = [
  'HTML5', 'CSS', 'PHP', 'LARAVEL', 'VueJS', 'MySQL', 
  'Tailwind CSS', 'Bootstrap', 'JavaScript', 'ExpressJS', 
  'Node', 'Python', 'ReactJS'
]
</script>

<style scoped>
h1, h2 {
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
  border-radius: 8px; 
  border: 2px solid #ccc;
}
</style>
