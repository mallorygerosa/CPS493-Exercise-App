import { createRouter, createWebHistory } from 'vue-router'
import Session from'../services/session';
import Home from '../views/Home.vue';
import Feed from '../views/Feed.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed,
    meta: { requiresLogin: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
},
  // {
  //   path: '/exercise',
  //   name: 'Exercise',
  //   component: Exercise
  // meta: { requiresLogin: true }
  // },
  // {
  //   path: '/addexercise',
  //   name: 'AddExercise',
  //   component: AddExercise,
  // meta: { requiresLogin: true }

  // },
  // {
  //   path: '/friends',
  //   name: 'Friends',
  //   component: Friends,
  //   meta: { requiresLogin: true }

  // },
  // {
  //   path: '/addfriend',
  //   name: 'AddFriend',
  //   component: AddFriend,
  //   meta: { requiresLogin: true }
    
  // },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresLogin: true}
  },
  {
    path:'/login',
    name: 'Login',
    component: ()=> import('../views/Login.vue')
  },
  {
    path:'/register',
    name: 'Register',
    component: ()=> import('../views/Register.vue')
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
