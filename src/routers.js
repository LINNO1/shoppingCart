import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Address from './components/Address'
import Cart from './components/Cart'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    }
  ]
})