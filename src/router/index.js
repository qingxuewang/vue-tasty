import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/Home.vue'
import Login  from '../components/page/Login.vue'
import Register from '../components/page/Register.vue'
import Introduce from '../components/page/Introduce.vue'
import Messages from '../components/page/Messages.vue'
import Foods from '../components/page/Foods.vue'
import Cart from '../components/page/Cart.vue'
import Order from '../components/page/Order.vue'
import Pay from '../components/page/pay.vue'
import Notice from '../components/page/Notice.vue'
import Personal from '../components/page/Personal.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',component:Home
    },
    {
      path:'/introduce',component:Introduce
    },
    {
      path:'/notice',component:Notice
    },
    {
      path:'/foods',component:Foods
    },
    {
      path:'/messages',component:Messages
    },
    {
      path:'/cart',component:Cart
    },
    {
      path:'/order',component:Order
    },
    {
      path:'/pay/:order_number',component:Pay
    },
    {
      path: '/login', component: Login
    },
    {
      path: '/personal', component: Personal
    },
    {
      path: '/register', component: Register
    }
  ]
})
