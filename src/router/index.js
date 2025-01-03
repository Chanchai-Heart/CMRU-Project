import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../views/user/HomeView.vue';
import TravelDetailView from '../views/user/main/TravelDetailView.vue';
import CampDetailView from '../views/user/main/CampDetailView.vue';

import AdminLogin from '../views/admin/LoginView.vue';
import AdminDashboard from '../views/admin/DashboardView.vue';

import TravelList from '../views/admin/travel/ListView.vue';
import TravelUpdate from '../views/admin/travel/UpdateView.vue'

import AdminUserList from '../views/admin/user/ListView.vue'
import AdminUserUpdate from '../views/admin/user/UpdateView.vue'

import AdminReviewList from '../views/admin/review/ListView.vue'
import AdminReviewDetail from '../views/admin/review/DetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/travel/detail',
      name: 'travel-detail',
      component: TravelDetailView,
    },
    {
      path: '/camp/detail',
      name: 'camp-detail',
      component: CampDetailView,
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
    {
      path: '/admin/travel',
      name: 'admin-travel-list',
      component: TravelList,
    },
    {
      path: '/admin/travel/create',
      name: 'admin-travel-create',
      component: TravelUpdate,
    },
    {
      path: '/admin/travel/update/:id',
      name: 'admin-travel-update',
      component: TravelUpdate,
    },
    {
      path: '/admin/users',
      name: 'admin-users-list',
      component: AdminUserList,
    },
    {
      path: '/admin/users/update/:id',
      name: 'admin-users-update',
      component: AdminUserUpdate,
    },
    {
      path: '/admin/review',
      name: 'admin-review-list',
      component: AdminReviewList,
    },
    {
      path: '/admin/review/detail/:id',
      name: 'admin-review-detail',
      component: AdminReviewDetail,
    },
  ],
});

export default router;