<template>
  <div id="app">
    <toolbar slot="toolbar"/>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar
  },
  methods: {
    setUser: function () {
      this.$store.dispatch('setUser')
    }
  },
  created: function () {
    this.setUser()
  }
}
</script>

<style lang="scss">
@import './styles/theme';
@import './styles/common';

body {
  background: $theme-bg;
  color: $theme-txt;
  -webkit-font-smoothing: antialiased;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
