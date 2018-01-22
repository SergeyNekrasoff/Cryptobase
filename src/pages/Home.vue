<template>
  <div class="home home-page">
    <div class="container">
      <div class="row">
        <div class="home__intro col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p class="home__text">This website indexes the top 10 cryptocurrencies by market cap (how
            much the sum of all coins is collectively worth), and gives you an easy
            way to compare cryptocurrency performance and rank over the last week.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.home {
  &__intro {
    padding: 24px 0;
  }

  &__text {
    font-size: 12px;
  }
}
</style>
