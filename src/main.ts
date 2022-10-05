import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import { lazy } from "./directives";

// ---- style ----
import "uno.css"
import "./assets/style/style.css"
import "./assets/style/base.css";
import "./assets/style/index.scss"


createApp(App).use(createPinia()).use(lazy()).mount("#app");
