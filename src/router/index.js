import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogDetailsView from '../views/DogDetailsView.vue'
import AboutView from '../views/AboutView.vue'
import WhyUsView from '../views/WhyUsView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/why-us',
    name: 'why',
    component: WhyUsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  { 
    path: '/breed/:breed',
   name: 'DogDetailsview', 
   component:  DogDetailsView,
   props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
