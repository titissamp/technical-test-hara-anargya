import { createRouter, createWebHistory } from 'vue-router';

// Impor komponen-komponen yang akan digunakan untuk setiap rute
import Home from './views/Home.vue';

// Buat router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: Contact,
    // },
  ],
});

export default router;