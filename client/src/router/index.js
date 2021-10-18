import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Exercise from '../views/Exercise.vue';
import AddExercise from '../views/AddExercise.vue';
import Friends from '../views/Friends.vue';
import AddFriend from '../views/AddFriend.vue';
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
    path: '/addexercise',
    name: 'AddExercise',
    component: AddExercise
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/addfriend',
    name: 'AddFriend',
    component: AddFriend,
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
