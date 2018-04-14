<template>
    <div class="analytic-page">
      <div class="container">
        <div class="row">
          <Tablecompare></Tablecompare>
        </div>
      </div>
    </div>
</template>

<script>
import Tablecompare from '../components/Tablecompare.vue'

export default {
  name: 'analytic',
  components: {
    Tablecompare
  }
}
</script>

<style lang="scss" scoped>
.analytic-page {
  padding: 16px;
}
</style>
