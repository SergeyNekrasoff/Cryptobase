<template>
    <div class="home-page">
      <div class="container">
        <Header/>
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
