<template>
  <router-link class="view-Home" tag="a" to="/blog">
    <div class="imageContainer" v-lazy-container="{ selector: 'img' }">
      <img :data-src="cover | resize('0x0')" />
    </div>
    <div class="logo">
      <img src="@/assets/images/logo.svg" />
    </div>
  </router-link>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/landing', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          cover: res.data.story.content.cover
        }
      })
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styling/variables.sass'

.view-Home
  padding: $spacing-3
  width: 100vw
  height: 100vh
  cursor: pointer
  display: block
  img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: 50% 50%
  .imageContainer
    width: 100%
    height: 100%
  .logo
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 100%
    height: 100%
    // max-width: calc((6vmin * 3) + (.5vmin * 2))
    // max-height: calc((6vmin * 3) + (.5vmin * 2))
    padding: $spacing-3
    max-width: 50vmin
    max-height: 50vmin
</style>
