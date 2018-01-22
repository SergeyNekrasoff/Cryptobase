<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="header__title col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <a href="#">
            cryptobase
          </a>
        </div>
        <div class="header__menu col-lg-9 col-md-3 col-sm-12 col-xs-12">
          <nav class="header__nav nav">
            <li><router-link to="/analytic">Аналитика</router-link></li>
            <li><router-link to="/news">Новости</router-link></li>
            <li><router-link to="/market">Рынок</router-link></li>
            <li><router-link to="/admin">Админ</router-link></li>
            <li>
              <button class="btn btn-signin" type="button">Войти</button>
            </li>
          </nav>
          <router-view></router-view>
        </div>
        <div class="header__intro col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p class="header__text">This website indexes the top 10 cryptocurrencies by market cap (how
          much the sum of all coins is collectively worth), and gives you an easy
          way to compare cryptocurrency performance and rank over the last week.</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
.header {
  &__title {}
  &__menu {
    text-align: right;
  }
  &__nav {
    li {
      display: inline-block;
    }
  }
  &__text {
    padding: 24px 0;
  }
}
</style>
