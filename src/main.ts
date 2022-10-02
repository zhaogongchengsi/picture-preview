import { createApp } from 'vue'
import App from './App.vue'
import "uno.css"
import "./style.css"
import { createPinia } from "pinia";
import { lazy } from './directives'

createApp(App).use(createPinia()).use(lazy()).mount("#app");
