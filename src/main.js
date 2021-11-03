import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'animate.css';
import '@/assets/css/global.css';

import Loading from "@/components/Loading.vue"

createApp(App)
.component('Loading', Loading)
.use(store)
.use(router)
.mount("#app");
