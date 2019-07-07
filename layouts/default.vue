<template>
  <div class="app-Container">
    <TheHeader />
    <nuxt />
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
