// import Vue from "vue";
import "./style.css";
import "../src/assets/css/index.css";
// import App from "./App.vue";
import { Icon } from "@iconify/vue";
// import router from './router';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Impor router

const app = createApp(App);

// Gunakan router dalam aplikasi
app.use(router);

app.mount('#app');