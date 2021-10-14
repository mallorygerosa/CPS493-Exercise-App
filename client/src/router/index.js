import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Exercise from '../views/Exercise.vue';
import Friends from '../views/Friends.vue';
import Profile from '../views/Profile.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: Exercise
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
