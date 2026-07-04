<template>
  <v-container class="mt-12 px-6">
    <v-row align="center" justify="center" class="gy-8">
      
      <v-col cols="12" md="5" class="text-center">
        <div class="avatar-wrapper mx-auto">
          <v-img
            src="profile.jpeg"
            alt="Profile Image"
            width="260"
            height="260"
            cover
            class="profile-img mx-auto"
          ></v-img>
        </div>


        <v-row class="mt-6" justify="center" gap="2">

          <v-btn icon variant="tonal" class="social-btn li" href="https://www.linkedin.com/in/muhammad-shakeeb-raza-0990b120a" target="_blank">
            <v-icon size="22">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon variant="tonal" class="social-btn gh" href="https://github.com/shakeebraza9" target="_blank">
            <v-icon size="22">mdi-github</v-icon>
          </v-btn>
          <v-btn icon variant="tonal" class="social-btn pf" href="https://portfolio-one-gamma-khz42992d0.vercel.app/" target="_blank">
            <v-icon size="22">mdi-web</v-icon>
          </v-btn>
        </v-row>
      </v-col>


      <v-col cols="12" md="7">
        <span class="text-overline font-weight-bold tracking-widest intro-badge">Available for Work | Karachi, Pakistan</span>
        <h1 class="text-h3 font-weight-black mt-2 mb-2 main-title">
          M. Shakeeb Raza
        </h1>
        <h2 class="text-subtitle-1 font-weight-bold tech-subtitle mb-4">
          FULL STACK & DEVOPS ENGINEER
        </h2>
        <p class="text-body-1 bio-text mb-6">
          Dynamic and results-driven Full Stack Developer with 3+ years of professional experience designing, building, and deploying robust web applications. Highly proficient in <span class="highlight-text">Laravel</span>, <span class="highlight-text">Vue.js</span>, PHP, and Python, with advanced expertise in modern DevOps practices including <span class="highlight-text">Docker</span>, <span class="highlight-text">Kubernetes</span>, and <span class="highlight-text">AWS (EC2)</span>. Strong foundation in System Design, building scalable microservices, and automating web workflows using Python Selenium.
        </p>

   
        <v-row class="mb-6" dense>
          <v-col cols="12" sm="4" class="pe-sm-2 mb-3 mb-sm-0">
            <v-btn
              size="large"
              variant="flat"
              block
              class="cta-btn cv-btn font-weight-black rounded-xl"
              prepend-icon="mdi-download"
              href="shakeebcv.pdf"
              target="_blank"
            >
              Download CV
            </v-btn>
          </v-col>

          <v-col cols="12" sm="4" class="pe-sm-2 mb-3 mb-sm-0">
            <v-btn
              size="large"
              variant="outlined"
              block
              class="cta-btn contact-btn font-weight-black rounded-xl"
              prepend-icon="mdi-email-outline"
              @click="copyEmail"
            >
              Copy Email
            </v-btn>
          </v-col>

          <v-col cols="12" sm="4">
            <v-btn
              size="large"
              variant="tonal"
              block
              class="cta-btn phone-btn font-weight-black rounded-xl"
              prepend-icon="mdi-phone"
              href="tel:+923406095534"
            >
              Call Me
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>


    <v-divider class="my-12 opacity-10" />
    
    <div class="mb-8">
      <h2 class="text-h4 font-weight-black section-title">Work Experience</h2>
      <p class="text-body-2 subtitle-text">A chronological snapshot of my industrial deployment tracks.</p>
    </div>

    <v-row>
      <v-col cols="12" md="6" v-for="(job, i) in workExperience" :key="i">
        <v-card variant="flat" class="experience-card h-full d-flex flex-column pa-4">
          <v-card-item class="pa-0 mb-2">
            <div class="d-flex justify-space-between align-start flex-wrap gap-1">
              <v-card-title class="text-h6 font-weight-bold card-company-title pa-0">
                {{ job.company }}
              </v-card-title>
              <v-chip size="x-small" variant="flat" class="duration-badge font-weight-bold">
                {{ job.duration }}
              </v-chip>
            </div>
            <v-card-subtitle class="pa-0 mt-1 font-weight-medium card-role-subtitle">
              {{ job.role }}
            </v-card-subtitle>
          </v-card-item>

          <v-card-text class="pa-0 mt-2 flex-grow-1">
            <ul class="custom-details-list">
              <li v-for="(point, idx) in job.details" :key="idx" class="text-body-2 mb-2 list-item-text">
                {{ point }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <v-divider class="my-12 opacity-10" />
    
    <div class="mb-6">
      <h2 class="text-h4 font-weight-black section-title">Skills & Capabilities</h2>
    </div>

    <v-row dense>
      <v-col cols="auto" v-for="(skill, i) in skills" :key="i">
        <v-chip variant="tonal" class="ma-1 skill-chip font-weight-bold" size="medium">
          {{ skill }}
        </v-chip>
      </v-col>
    </v-row>


    <v-divider class="my-12 opacity-10" />
    
    <v-row>

      <v-col cols="12" md="6">
        <h2 class="text-h4 font-weight-black section-title mb-6">Education</h2>
        <v-card variant="flat" class="experience-card pa-4 mb-4">
          <div class="d-flex justify-space-between align-start">
            <h3 class="text-h6 font-weight-bold card-company-title">Virtual University of Pakistan</h3>
          </div>
          <p class="text-subtitle-2 card-role-subtitle mt-1">BSCS (Bachelor of Computer Science)</p>
        </v-card>
        <v-card variant="flat" class="experience-card pa-4">
          <h3 class="text-h6 font-weight-bold card-company-title">Diploma (C.I.T)</h3>
          <p class="text-subtitle-2 card-role-subtitle mt-1">Computer Information Technology</p>
        </v-card>
      </v-col>


      <v-col cols="12" md="6">
        <h2 class="text-h4 font-weight-black section-title mb-6">Certifications & Languages</h2>
        <v-card variant="flat" class="experience-card pa-4 mb-4">
          <h3 class="text-h6 font-weight-bold card-company-title">Cloud Native Computing</h3>
          <p class="text-body-2 list-item-text mt-1">Linux | Docker | Kubernetes | Git</p>
        </v-card>
        <v-card variant="flat" class="experience-card pa-4">
          <h3 class="text-h6 font-weight-bold card-company-title">Languages Spoken</h3>
          <p class="text-body-2 list-item-text mt-1">English / Urdu (Professional Working Proficiency)</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const email = 'shakeebraza90@gmail.com'

function copyEmail() {
  navigator.clipboard.writeText(email)
    .then(() => {
      alert(`Email copied to clipboard: ${email}`)
    })
    .catch(() => {
      alert('Failed to copy email. Please try manually.')
    })
}

const workExperience = [
  {
    company: 'Da Prime Production',
    role: 'Full Stack & DevOps Developer',
    duration: '1.5 Years',
    details: [
      'Developed full-stack web applications using Laravel and Vue.js; built and integrated secure RESTful APIs.',
      'Containerized applications using Docker and orchestrated infrastructure via Kubernetes for dynamic scaling.',
      'Managed cloud deployments on AWS using EC2, S3 buckets, and RDS instances.',
      'Automated browser testing and dynamic data workflow operations using Python Selenium.',
      'Applied System Design practices to optimize MySQL database structures and query latency.'
    ]
  },
  {
    company: 'Fission Fox, Karachi',
    role: 'PHP Laravel Developer',
    duration: '1 Year',
    details: [
      'Developed custom PHP & Laravel web platforms utilizing strict MVC architecture and clean-code practices.',
      'Created modular frontend Vue.js components integrated perfectly with asynchronous backend services.',
      'Maintained database-driven applications using MySQL and enhanced live modules based on client needs.'
    ]
  },
  {
    company: 'Interactive Media, Karachi',
    role: 'Associate PHP Developer',
    duration: '1 Year',
    details: [
      'Assisted in building PHP systems, writing backend SQL queries, and processing dynamic asynchronous requests via AJAX.',
      'Participated in core debugging, continuous testing routines, and feature enhancements.'
    ]
  },
  {
    company: 'Horizon Institute, Karachi',
    role: 'Computer Operator / IT Support',
    duration: '1 Year',
    details: [
      'Managed local network infrastructure, hardware/software deployment, and server troubleshooting.',
      'Installed and maintained production environments, software licenses, and application suites.'
    ]
  }
]

const skills = [
  'PHP', 'LARAVEL', 'VUEJS', 'NODE.JS', 'EXPRESSJS', 'PYTHON', 'REACTJS',
  'JAVASCRIPT (ES6+)', 'HTML5', 'CSS3', 'AJAX', 'TAILWIND CSS', 'BOOTSTRAP',
  'DOCKER', 'KUBERNETES', 'AWS (EC2)', 'LINUX', 'GIT / GITHUB',
  'PYTHON SELENIUM', 'WEB SCRAPING', 'SYSTEM DESIGN (MICROSERVICES)'
]
</script>

<style scoped>

.avatar-wrapper {
  width: 270px;
  height: 270px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  transition: transform 0.4s ease;
}
.profile-img {
  border-radius: 50% !important;
}
.v-theme--dark .avatar-wrapper { background: linear-gradient(135deg, #00f2fe, #4facfe); }
.v-theme--light .avatar-wrapper { background: linear-gradient(135deg, #4f46e5, #7c3aed); }
.avatar-wrapper:hover { transform: scale(1.03) rotate(2deg); }

.social-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.social-btn:hover { transform: translateY(-4px); }
.v-theme--dark .social-btn:hover { color: #00f2fe !important; background: rgba(0, 242, 254, 0.1) !important; }
.v-theme--light .social-btn:hover { color: #4f46e5 !important; background: rgba(79, 70, 229, 0.08) !important; }


.v-theme--dark .main-title, .v-theme--dark .section-title { color: #f8fafc; }
.v-theme--light .main-title, .v-theme--light .section-title { color: #0f172a; }
.v-theme--dark .bio-text, .v-theme--dark .subtitle-text { color: #94a3b8; }
.v-theme--light .bio-text, .v-theme--light .subtitle-text { color: #64748b; }

.v-theme--dark .intro-badge { color: #00f2fe; }
.v-theme--light .intro-badge { color: #4f46e5; }

.v-theme--dark .tech-subtitle { color: #38bdf8; }
.v-theme--light .tech-subtitle { color: #4f46e5; }

.v-theme--dark .highlight-text { color: #00f2fe; font-weight: 700; }
.v-theme--light .highlight-text { color: #4f46e5; font-weight: 700; }


.cta-btn {
  font-size: 0.95rem !important;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}
.v-theme--dark .cv-btn { background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%) !important; color: #09090b !important; }
.v-theme--light .cv-btn { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%) !important; color: #ffffff !important; }

.v-theme--dark .contact-btn { border-color: rgba(0, 242, 254, 0.4) !important; color: #00f2fe !important; }
.v-theme--dark .contact-btn:hover { background: rgba(0, 242, 254, 0.06) !important; }
.v-theme--light .contact-btn { border-color: rgba(79, 70, 229, 0.4) !important; color: #4f46e5 !important; }
.v-theme--light .contact-btn:hover { background: rgba(79, 70, 229, 0.04) !important; }

.v-theme--dark .phone-btn { background: rgba(255, 255, 255, 0.05) !important; color: #f8fafc !important; }
.v-theme--light .phone-btn { background: rgba(15, 23, 42, 0.05) !important; color: #0f172a !important; }


.experience-card {
  border-radius: 16px !important;
  transition: all 0.3s ease;
}
.v-theme--dark .experience-card { background: rgba(255, 255, 255, 0.02) !important; border: 1px solid rgba(255, 255, 255, 0.05) !important; }
.v-theme--dark .experience-card:hover { border-color: rgba(0, 242, 254, 0.2) !important; background: rgba(255, 255, 255, 0.03) !important; }
.v-theme--light .experience-card { background: rgba(15, 23, 42, 0.02) !important; border: 1px solid rgba(15, 23, 42, 0.05) !important; }
.v-theme--light .experience-card:hover { border-color: rgba(79, 70, 229, 0.2) !important; background: rgba(15, 23, 42, 0.03) !important; }

.v-theme--dark .card-company-title { color: #f8fafc; }
.v-theme--light .card-company-title { color: #0f172a; }
.v-theme--dark .card-role-subtitle { color: #38bdf8; }
.v-theme--light .card-role-subtitle { color: #6366f1; }

.v-theme--dark .duration-badge { background: rgba(0, 242, 254, 0.1) !important; color: #00f2fe !important; }
.v-theme--light .duration-badge { background: rgba(79, 70, 229, 0.1) !important; color: #4f46e5 !important; }


.custom-details-list {
  list-style: none;
  padding-left: 0;
}
.custom-details-list li {
  position: relative;
  padding-left: 18px;
}
.custom-details-list li::before {
  content: "•";
  position: absolute;
  left: 4px;
  font-weight: bold;
}
.v-theme--dark .custom-details-list li::before { color: #00f2fe; }
.v-theme--light .custom-details-list li::before { color: #4f46e5; }
.v-theme--dark .list-item-text { color: #94a3b8; }
.v-theme--light .list-item-text { color: #475569; }


.v-theme--dark .skill-chip { color: #00f2fe; }
.v-theme--light .skill-chip { color: #4f46e5; }
</style>