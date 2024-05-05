import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/base.css'
import './assets/main.css'
import VeeValidatePlugin from "./includes/Validation.js"
import "./includes/firebase.js"

const app = createApp(App)
// pinia is resgistering a plugin with the vue developer tool, it helps adding a new tool to interact with state
app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)
app.mount('#app')
