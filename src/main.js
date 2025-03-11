import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NovaUI from '@rigelsystems/novaui'

const app = createApp(App)
app.use(NovaUI, { theme: '#000', borderRadius: '5px' });
app.mount('#app')
