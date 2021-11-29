import { createRouter, createWebHistory } from 'vue-router'
import Session from'../services/session';
import Home from '../views/Home.vue';
import Feed from '../views/Feed.vue';
import CommunityFeed from '../views/CommunityFeed.vue';
// import PersonalFeed from '../views/PersonalFeed.vue';

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
    path: '/communityfeed',
    name: 'CommunityFeed',
    component: CommunityFeed,
  },
  // {
  //   path: '/personalfeed',
  //   name: 'PersonalFeed',
  //   component: PeresonalFeed,
  //   meta: { requiresLogin: true }
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
},
  {
    path: '/friends',
    name: 'Friends',
    component: () => import(/* webpackChunkName: "users" */ '../views/Friends.vue'),
    meta: { requiresLogin: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "users" */ '../views/Profile.vue'),
    meta: { requiresLogin: true}
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "adminonly" */ '../views/Users.vue'),
    meta: { requiresLogin: true}
  },
  {
    path:'/login',
    name: 'Login',
    component: ()=> import(/* webpackChunkName: "users" */ '../views/Login.vue')
  },
  {
    path:'/register',
    name: 'Register',
    component: ()=> import(/* webpackChunkName: "users" */ '../views/Register.vue')
  },
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
