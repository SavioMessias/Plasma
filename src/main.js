import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/global.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas)
library.add(fab)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
