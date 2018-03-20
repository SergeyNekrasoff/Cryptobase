<template>
  <div class="home default-page">
    <sui-container fluid>
  		<sui-divider fitted/>
      <div class="home__present">
        <em class="default-page__small">Cryptobase индексирует 10 лучших криптовалют по рыночной капитализации и дает вам простой способ сравнить производительность и рейтинг криптовалют за последнюю неделю.</em>
      </div>
      <sui-divider fitted/>
    </sui-container>
  </div>
</template>

<script>
// import Table from '../components/Tablecompare.vue'
export default {
  name: 'home'
  // coponents: [
  //   Table
  // ]
  // data () {
  //   return {
  //     coins: []
  //   }
  // },
  // methods: {
  //   getColor: (num) => {
  //     return num > 0 ? 'color:green;' : 'color:red'
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.home {

  &__present {
    padding: 16px;
    text-align: center;
  }

  &__intro {
    padding: 24px 0;
  }

  &__text {
    font-size: 12px;
  }
}
</style>
