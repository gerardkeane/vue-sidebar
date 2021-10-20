import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, OiGraph, PrEuro, PrApple } from "oh-vue-icons/icons"
import './index.css'

addIcons(FaFlag, OiGraph, PrEuro, PrApple)

const app = createApp(App)
app.component("v-icon", OhVueIcon)
app.mount('#app')
