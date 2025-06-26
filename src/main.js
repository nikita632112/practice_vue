
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppLayout from '@/components/layout/AppLayout.vue'

const app = createApp(App)
app.component('AppLayout', AppLayout)

app.use(createPinia())
app.use(router)

app.mount('#app')
