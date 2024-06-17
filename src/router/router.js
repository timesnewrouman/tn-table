import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import("@/pages/MainPage.vue"),
  },
  {
    path: '/hoursTable',
    name: 'HoursTable',
    component: () => import("@/pages/HoursTablePage.vue"),
  },
  {
    path: '/daysTable',
    name: 'DaysTable',
    component: () => import("@/pages/DaysTablePage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router