<template>
  <router-link class="home" tag="a" to="/blog">
    <div class="imageContainer" v-lazy-container="{ selector: 'img' }">
      <img :data-src="cover | resize('0x0')" />
    </div>
    <div class="landing">
      <ul class="logo">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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

.home
  width: 100%
  height: calc(100vh - (2 * #{$spacing-3}))
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
  .landing
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: inline-flex
    padding: $spacing-3
    .logo
      width: calc((6vmin * 3) + (.5vmin * 2))
      transition: opacity .2s ease
      cursor: pointer
      &:hover
        opacity: .75
      li
        width: 6vmin
        height: 6vmin
        margin-right: .5vmin
        margin-bottom: .5vmin
      li:nth-child(3n)
        margin-right: 0
      @media all and (max-width: $breakpoint)
        width: calc((48px * 3) + (4px * 2))
        li
          width: 48px
          height: 48px
          background: black
          margin-right: 4px
          margin-bottom: 4px
        li:nth-child(2), li:nth-child(8)
          background: transparent
        li:nth-child(3n)
          margin-right: 0
</style>
