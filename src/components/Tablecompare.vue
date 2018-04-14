<template>
  <table class="ui selectable inverted basic black table">
   <thead>
     <tr>
       <td>Rank</td>
       <td class="center aligned">Symbol</td>
       <td>Name</td>
       <td>Price (USD)</td>
       <td>1H</td>
       <td>24H</td>
       <td>MKT Cap (USD)</td>
       <td>Total Supply</td>
       <td>Last 7 Days</td>
     </tr>
   </thead>
   <tbody>
     <tr v-cloak v-for="coin in coins">
       <td>{{ coin.rank }}</td>
       <td class="center aligned"><img v-bind:src="getCoinImage(coin.symbol)"></td>
       <td>{{ coin.name }}</td>
       <td>{{ coin.price_usd | currency }}</td>
       <td v-bind:style="getColor(coin.percent_change_1h)">
         <span v-if="coin.percent_change_1h > 0">+</span>{{ coin.percent_change_1h }}%
       </td>
       <td v-bind:style="getColor(coin.percent_change_24h)">
         <span v-if="coin.percent_change_24h > 0">+</span>{{ coin.percent_change_24h }}%
       </td>
       <td>{{ coin.market_cap_usd | currency }}</td>
       <td>{{ coin.total_supply}}</td>
       <td v-bind:style="getColor(coin.percent_change_7d)">
         <span v-if="coin.percent_change_7d > 0">+</span>{{ coin.percent_change_7d }}%
       </td>
     </tr>
   </tbody>
  </table>
</template>

<script>
import axios from 'axios'

let CRYPTOCOMPARE_API_URI = 'https://min-api.cryptocompare.com';
let CRYPTOCOMPARE_URI = 'https://www.cryptocompare.com';

let COINMARKETCAP_API_URI = 'https://api.coinmarketcap.com';

let UPDATE_INTERVAL = 60 * 1000;

export default {
  name: 'tablecoins',
  data () {
    return {
      coins: [], // array of all coins
      coinData: {}, // get crypto logo
      timer: ''
    }
  },
  methods: {
    /**
     * Get the top 10 cryptocurrencies by value
     */
    getCoins: function () {
      axios.get(COINMARKETCAP_API_URI + '/v1/ticker/?limit=10')
        .then((resp) => {
          this.coins = resp.data
        })
        .catch((err) => {
          console.error(err)
        });
    },
    /**
     * Load up all cryptocurrency data
     */
    getCoinData: function () {
      axios.get(CRYPTOCOMPARE_API_URI + '/data/all/coinlist')
        .then((resp) => {
          this.coinData = resp.data.Data
          this.getCoins()
        })
        .catch((err) => {
          this.getCoins()
          console.error(err)
        });
    },
    /**
      * Given a cryptocurrency ticket symbol
      */
    getCoinImage: function (symbol) {
      symbol = (symbol === 'MIOTA' ? 'IOT' : symbol)
      symbol = (symbol === 'VERI' ? 'VRM' : symbol)

      return CRYPTOCOMPARE_URI + this.coinData[symbol].ImageUrl
    },
    /**
     * Return a CSS color (either red or green) depending on whether or
     * not the value passed in is negative or positive.
     */
    getColor: (num) => {
      return num > 0 ? "color:lime;" : "color:tomato;"
    }
  },
  created: function () {
    this.getCoinData()
  },
  mounted: function() {
    setInterval(() => {
      this.getCoins();
    }, UPDATE_INTERVAL);
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
