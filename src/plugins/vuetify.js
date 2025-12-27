import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
    icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'light', 
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#000000ff', 
          background: '#FFFFFF',
          surface: '#FFFFFF',
          secondary: '#0703ffff',
          info: '#0089f9ff',
          success: '#4CAF50',
          warning: '#FFC107',
          error: '#F44336',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#800000', 
          background: '#000000',
          surface: '#121212',
          secondary: '#B22222',
          info: '#64B5F6',
          success: '#81C784',
          warning: '#FFB74D',
          error: '#E57373',
        },
      },
    },
  },
})
