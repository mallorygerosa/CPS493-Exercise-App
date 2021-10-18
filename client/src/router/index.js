import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Exercise from '../views/Exercise.vue';
import Friends from '../views/Friends.vue';
import Profile from '../views/Profile.vue';
import Session from'../services/session';


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
    component: Profile,
    meta: { requiresLogin: true}
  },
  {
    path:'/login',
    name: 'Login',
    component: ()=> import('../views/Login.vue')
  },
  {
    path:'/signup',
    name: 'Signup',
    component: ()=> import('../views/Signup.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresLogin && !Session.user){
      next('/login');
  }else{
      next();
  }
} )

export default router
