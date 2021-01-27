import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = () => import('views/Home')
const Category = () => import('views/Category')
const Cart = () => import('views/Cart')
const Profile = () => import('views/Profile')
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
   {
     path: '/home',
     component: Home
   },
   {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
  ]
})
