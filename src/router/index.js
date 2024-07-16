import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/q01',
      name: 'hello',
      component: () => import('../views/Q01.vue')
    },
    {
      path: '/q02',
      name: 'q02',
      component: () => import('../views/Q02.vue')
    },
    {
      path: '/q03',
      name: 'q03',
      component: () => import('../views/Q03.vue')
    },
    {
      path: '/q04',
      name: 'q04',
      component: () => import('../views/Q04.vue')
    },
    {
      path: '/q05',
      name: 'q05',
      component: () => import('../views/Q05.vue')
    },
    {
      path: '/q06',
      name: 'q06',
      component: () => import('../views/Q06.vue')
    }
  ]
});

export default router;
