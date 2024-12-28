import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../views/user/HomeView.vue';

import AdminLogin from '../views/admin/LoginView.vue';
import AdminDashboard from '../views/admin/DashboardView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    /* Admin Routes */
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin,
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboard,
    },
  ],
});

export default router;