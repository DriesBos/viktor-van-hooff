<template>
  <div>
    <TheHeader/>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader: TheHeader
  }
}
</script>

<style lang="sass">
@import '~/assets/styling/main.sass'

#__layout
  padding: $spacing-3
</style>
