<template>
    <div class="market-page">
      <div class="container">
        <Header/>
        <section>
          <p>Market</p>
        </section>
      </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'home',
  components: {
    'Header': Header
  }
}
</script>

<style lang="css">
</style>
