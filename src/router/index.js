import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Analytic from '@/pages/Analytic'
import News from '@/pages/News'
import Market from '@/pages/Market'
import Admin from '@/pages/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/analytic',
      component: Analytic
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/market',
      component: Market
    },
    {
      path: '/admin/:id',
      component: Admin

    }
  ]
})
