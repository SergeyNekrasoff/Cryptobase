// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// let CRYPTOCOMPARE_API_URI = 'https://www.cryptocompare.com'
// let COINMARKETCAP_API_URI = 'https://api.coinmarketcap.com'

// let UPDATE_INTERVAL = 60 * 1000

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // data: {
  //   coins: [],
  //   coinData: {}
  // },
  // methods: {
  //   getCoinData: function () {
  //     // let self = this
  //
  //     axios.get(CRYPTOCOMPARE_API_URI + '/api/data/coinlist')
  //       .then((resp) => {
  //         this.coinData = resp.data.Data
  //         this.getCoins()
  //       })
  //       .catch((err) => {
  //         this.getCoins()
  //         console.error(err)
  //       })
  //   },
  //   getCoins: function () {
  //     // let self = this
  //
  //     axios.get(COINMARKETCAP_API_URI + '/v1/ticker/?limit=10')
  //       .then((resp) => {
  //         this.coins = resp.data
  //       })
  //       .catch((err) => {
  //         console.error(err)
  //       })
  //   },
  //   getCoinImage: function (symbol) {
  //     return CRYPTOCOMPARE_API_URI + this.coinData[symbol].ImageUrl
  //   },
  //   created: function () {
  //     this.getCoinData()
  //   }
  // },
  router,
  components: { App },
  template: '<App/>'
})
