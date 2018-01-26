<template>
    <div class="analytic-page">
      <div class="container">
        <div class="row">
          <section>
            <p>Analytic</p>
          </section>
          <Tablecoins></Tablecoins>
        </div>
      </div>
    </div>
</template>

<script>
import Tablecoins from '../components/Tablecompare.vue'

export default {
  name: 'analytic',
  components: {
    Tablecoins
  }
}
</script>

<style lang="scss" scoped>
</style>
