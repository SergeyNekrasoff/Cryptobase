import Vue from 'vue'
import App from './App'
import Firebase from 'firebase';
import VueRouter from 'vue-router'
import { store } from './store/store'
import { routes } from './router/index'
import Vue2Filters from 'vue2-filters'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

// Firebase config - this is provided when you create your app
// Swap out these settings for your project settings
const config = {
  apiKey: "AIzaSyBOSXaRsFkSuPa37MzF2fcQ8gQjyWgLwag",
  authDomain: "cryptobase-v1.firebaseapp.com",
  databaseURL: "https://cryptobase-v1.firebaseio.com",
  projectId: "cryptobase-v1",
  storageBucket: "cryptobase-v1.appspot.com",
  messagingSenderId: "257527982904"
};

Firebase.initializeApp(config);

Vue.use(SuiVue)
Vue.use(Vue2Filters)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

// Check before each page load whether the page requires authentication/
// if it does check whether the user is signed into the web app or
// redirect to the sign-in page to enable them to sign-in
router.beforeEach((to, from, next) => {

  const currentUser = Firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('/analytic')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }

})

Firebase.auth().onAuthStateChanged(function (user) {

  new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App)
  })
})
