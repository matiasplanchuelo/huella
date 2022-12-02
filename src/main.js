import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//import Vuelidate from 'vuelidate'
import { useFavicon } from '@vueuse/core'

const icon = useFavicon()

icon.value = '../public/favicon.ico'

const app = createApp(App)
app.use(router)
app.mount('#app')