import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/HomeView.vue';


const router = createRouter({
  history: createMemoryHistory(),
  routes:[
    {
    path: '/',
    name: 'home',
    component: HomeView},
  ],
})

export default router;