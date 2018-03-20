<template>
  <table class="table table-hover">
   <thead>
     <tr>
       <td>Rank</td>
       <!-- <td>Name</td> -->
       <td>Symbol</td>
       <td>Price (USD)</td>
       <!-- <td>1H</td>
       <td>1D</td>
       <td>1W</td>
       <td>Market Cap (USD)</td> -->
     </tr>
   </thead>
   <tbody>
     <tr v-for="coin in coins" :key="coin.id">
       <td>{{ coin.rank }}</td>
       <!-- <td><img v-bind:src="getCoinImage(coin.symbol)"/> {{ coin.name }}</td> -->
       <td>{{ coin.symbol }}</td>
       <td>{{ coin.price_usd | currency }}</td>
       <!-- <td v-bind:style.="getColor(coin.percent_change_1h)">
         <span v-if="coin.percent_change_1h > 0">+</span>{{ coin.percent_change_1h }}%
       </td>
       <td v-bind:style.="getColor(coin.percent_change_24h)">
         <span v-if="coin.percent_change_24h > 0">+</span>{{ coin.percent_change_24h }}%
       </td>
       <td v-bind:style.="getColor(coin.percent_change_7d)">
         <span v-if="coin.percent_change_7d > 0">+</span>{{ coin.percent_change_7d }}%
       </td>
       <td>{{ coin.market_cap_usd | currency }}</td> -->
     </tr>
   </tbody>
  </table>
</template>

<script>
import axios from 'axios'

// The API we're using for grabbing metadata about each cryptocurrency
// (including logo images). The service can be found at:
// https://www.cryptocompare.com/api/
// let CRYPTOCOMPARE_API_URI = 'https://www.cryptocompare.com'

// The API we're using for grabbing cryptocurrency prices.  The service can be
// found at: https://coinmarketcap.com/api/
// let COINMARKETCAP_API_URI = 'https://api.coinmarketcap.com'

export default {
  name: 'tablecoins',
  data () {
    return {
      coins: [], // array of cryptocurrencies
      coinData: {}, // get crypto logo
      timer: ''
    }
  },
  methods: {
    // Get the top 10 cryptocurrencies by value
    getCoins: function () {
      axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
        .then((resp) => {
          this.coins = resp.data
          console.log(`resp getCoins: ${JSON.stringify(resp.data.name)}`)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    // Load up all cryptocurrency data
    getCoinData: function () {
      axios.get('https://www.cryptocompare.com/api/data/coinlist')
        .then((resp) => {
          this.coinData = resp.data.Data
          this.getCoins()
          console.log(`resp getCoinData: ${JSON.stringify(this.coinData)}`)
        })
        .catch((err) => {
          this.getCoins()
          console.error(err)
        })
    },
    // Given a cryptocurrency ticket symbol
    getCoinImage: function (symbol) {
      return 'https://www.cryptocompare.com' + this.coinData[Symbol].ImgaeUrl
    },
  },
  created: function () {
    // this.getCoinData()
    this.getCoins()
    // this.timer = setInterval(this.getCoins, 60000)
  }
}
</script>

<style lang="scss" scoped>
  td img {
    width: 25px;
  }

  .jumbotron p {
    font-size: 1.2em;
  }

  .jumbotron {
    margin-top: 5em;
    margin-bottom: 5em;
  }
</style>
