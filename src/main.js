import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'


import App from './App.vue'
import router from './router'
import TheDetailLink from './components/links/TheDetailLink.vue'
import { MotionPlugin } from '@vueuse/motion'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

const app = createApp(App)

app.component('TheDetailLink', TheDetailLink)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(MotionPlugin)

app.mount('#app')
