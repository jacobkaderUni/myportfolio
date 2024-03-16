import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoHome, BiBriefcase, BiPerson, BiShopWindow, BiPencil, BiEnvelope } from "oh-vue-icons/icons";

addIcons(CoHome, BiBriefcase, BiPerson, BiShopWindow, BiPencil, BiEnvelope);
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.component("v-icon", OhVueIcon);
app.mount('#app')
