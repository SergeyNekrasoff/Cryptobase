<template>
    <div class="home-page">
      <div class="container">
        <Header/>
        <ul>
          <router-link to="/link1">link-1</router-link>
          <router-link to="/link1">link-2</router-link>
          <router-link to="/link1">link-3</router-link>
        </ul>
        <router-view></router-view>
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
