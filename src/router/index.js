// import Vue from 'vue'
import Home from '@/pages/Home'
import Analytic from '@/pages/Analytic'
import News from '@/pages/News'
import Market from '@/pages/Market'


// Vue.use(Router, { mode: history })

export const routes = [
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
    }
]
