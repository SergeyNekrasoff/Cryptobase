<template>
    <div class="news-page">
      <div class="container">
        <Header/>
        <section>
          <p>News</p>
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
