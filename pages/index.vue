<template>
  <router-link class="view-Home" tag="a" to="/blog">
    <sliderItemNoControls
      :images="[image_00, image_01, image_02, image_03, image_04, image_05, image_06, image_07, image_08, image_09]"
    ></sliderItemNoControls>
    <div class="logo">
      <img src="@/assets/images/logo.svg" />
    </div>
  </router-link>
</template>

<script>
import SliderItemNoControls from '~/components/SliderItemNoControls.vue'

export default {
  components: {
    SliderItemNoControls
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/landing', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          image_00: res.data.story.content.image_00,
          image_01: res.data.story.content.image_01,
          image_02: res.data.story.content.image_02,
          image_03: res.data.story.content.image_03,
          image_04: res.data.story.content.image_04,
          image_05: res.data.story.content.image_05,
          image_06: res.data.story.content.image_06,
          image_07: res.data.story.content.image_07,
          image_08: res.data.story.content.image_08,
          image_09: res.data.story.content.image_09
        }
      })
  }
}
</script>

<style lang="sass">
@import '~/assets/styling/variables.sass'

.view-Home
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
  padding: $spacing-3
  // width: 100vw
  // height: 100vh
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
