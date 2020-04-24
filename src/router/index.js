import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Friend from '../views/Friend'
import Trends from '../views/Trends'
import Shop from '../views/Shop'
import Mine from '../views/Mine'
import Login from '../components/login/login'
import Register from '../components/login/register'
import TrendsFriends from '../components/Trends/TrendsFriend/TrendsFriend'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Friend',
    name: 'Friend',
    component: Friend
  },
  {
    path: '/Trends',
    name: 'Trends',
    component: Trends
  },
  {
    path: '/Trends/:id',
    name: 'TrendsFriends',
    component: TrendsFriends
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Login/:id',
    name: 'Register',
    component: Register
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
