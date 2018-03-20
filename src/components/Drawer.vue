<template>
  <!-- <mdc-drawer persistent toggle-on="toggle-menu">
    <mdc-drawer-list>
      <mdc-drawer-item to="/">Главная</mdc-drawer-item>
      <mdc-drawer-item to="/analytic">Аналитика</mdc-drawer-item>
      <mdc-drawer-item to="/news">Новости</mdc-drawer-item>
      <mdc-drawer-item to="/market">Рынок</mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer> -->
  <sui-menu :widths="3">
    <sui-menu-item>Editorials</sui-menu-item>
    <sui-menu-item>Reviews</sui-menu-item>
    <sui-menu-item active>Upcoming Events</sui-menu-item>
  </sui-menu>
</template>

<script>
export default {
  name: 'drawer-header',
  data () {
    return {
    }
  }
}

</script>

<style lang="scss">
// @import '../theme';

// .mdc-drawer {
//   background: yellow;
// }
</style>
