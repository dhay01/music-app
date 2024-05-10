import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/base.css'
import './assets/main.css'
import VeeValidatePlugin from "./includes/Validation.js"
import {auth} from "./includes/firebase.js"
import Icon from "./directives/icon"
import i18n from "@/includes/i18n.js";
import {registerSW} from "virtual:pwa-register";
import GlobalComponents from "./includes/_globals"

registerSW({immediate: true});
let app;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
// pinia is resgistering a plugin with the vue developer tool, it helps adding a new tool to interact with state

        app.use(router);
        app.use(VeeValidatePlugin);
        app.use(createPinia());
        app.use(i18n);
        app.directive('icon', Icon);
        app.use(GlobalComponents);
        app.mount('#app');
    }
});
