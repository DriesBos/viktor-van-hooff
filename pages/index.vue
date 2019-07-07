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

</style>
