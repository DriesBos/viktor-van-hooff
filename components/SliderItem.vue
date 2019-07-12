<template>
  <div class="slider-Container">
    <transition-group name="slider" tag="div">
      <div
        class="image-Slider"
        v-for="number in [index]"
        :key="number"
        v-lazy-container="{ selector: '.image' }"
      >
        <a @click="close" class="image-Slider_Close icon">
          <img src="@/assets/images/close.svg" />
        </a>
        <img :data-src="currentImage | resize('1680x0')" @click="next" class="image" />
        <a v-if="imageCount > 1" @click="previous" class="image-Slider_Nav image-Slider_Prev icon">
          <img src="@/assets/images/arrow-left.svg" />
        </a>
        <a v-if="imageCount > 1" @click="next" class="image-Slider_Nav image-Slider_Next icon">
          <img src="@/assets/images/arrow-right.svg" />
        </a>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'SliderItem',
  props: {
    images: {},
    index: 0
  },
  methods: {
    increment: function() {
      if (this.index >= this.images.length - 1) {
        this.index = 0
      } else {
        this.index += 1
      }
    },
    decrement: function() {
      if (this.index > 0) {
        this.index -= 1
      } else {
        this.index = this.images.length - 1
      }
    },
    getCurrentImage: function() {
      return this.images[this.index]
    },
    next: function() {
      this.increment()
      while (!this.getCurrentImage()) {
        this.increment()
      }
    },
    close: function() {
      this.index = -1
    },
    previous: function() {
      this.decrement()
      while (!this.getCurrentImage()) {
        this.decrement()
      }
    }
  },
  computed: {
    currentImage: function() {
      return this.getCurrentImage()
    },
    imageCount: function() {
      return this.images.filter(image => image).length
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styling/variables.sass'

.slider-Container
  position: relative
  z-index: 995
  height: 100%
.image-Slider
  display: flex
  justify-content: center
  align-items: center
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 100%
  .image
    width: 100%
    height: 100%
    object-fit: contain
    object-position: center center
    img
      max-width: 100%
      max-height: 100%
.image-Slider_Close
  position: absolute
  top: 0
  left: 0
.image-Slider_Nav
  display: block
  position: fixed
  z-index: 999
  top: 50%
  transform: translateY(-50%)
  cursor: pointer
  padding: $spacing-3
.image-Slider_Nav, .image-Slider_Close
  img
    background: rgba(255,255,255,0.5)
    -webkit-backdrop-filter: saturate(180%) blur(2px)
    backdrop-filter: saturate(180%) blur(2px)
.image-Slider_Prev
  left: 0
.image-Slider_Next
  right: 0

.slider-enter-active, .slider-leave-active
  transition: all .2s ease
.slider-enter, .slider-leave-to
  opacity: 0
</style>
