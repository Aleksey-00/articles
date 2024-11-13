import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '../css/app.css'
import { apiClient } from '@/plugins/api-client'

const app = createApp(App)
app.use(router)
app.use(apiClient)
app.mount('#app')
