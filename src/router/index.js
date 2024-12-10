import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/user/HomeView.vue'
import TravelView from '../views/user/TravelView.vue';


const router = createRouter({
  history: createMemoryHistory(),
  routes:[
    {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/travel',
    name: 'travel',
    component: TravelView
  }
  ],
})

export default router;