<template>
  <div id="app">
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
              <li><router-link to="/">Главная</router-link></li>
              <li><router-link to="/analytic">Аналитика</router-link></li>
              <li><router-link to="/news">Новости</router-link></li>
              <li><router-link to="/market">Рынок</router-link></li>
              <li>
                <button class="btn btn-signin" type="button">Войти</button>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

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
}
</style>
