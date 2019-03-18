<template>
  <div class="slider-Container">
    <transition-group name="slider" tag="div">
      <div class="image-Slider" v-for="number in [currentNumber]" :key="number">
        <img :src="currentImage">
        <div @click="previous" class="image-Slider_Nav image-Slider_Prev">
          <img src="@/assets/images/arrow.png">
        </div>
        <div @click="next" class="image-Slider_Nav image-Slider_Next">
          <img src="@/assets/images/arrow.png">
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'SliderItem',
  props: {
    images: {}
  },
  data() {
    return {
      currentNumber: 0
    }
  },
  methods: {
    next: function() {
      this.currentNumber += 1
    },
    previous: function() {
      this.currentNumber -= 1
    }
  },
  computed: {
    currentImage: function() {
      return `${this.apiUrl}/${
        this.images[Math.abs(this.currentNumber) % this.images.length].url
      }`
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
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 100%
  img
    width: 100%
    height: 100%
    object-fit: contain
    object-position: center center
.image-Slider_Nav
  position: fixed
  z-index: 999
  top: 50%
  transform: translateY(-50%)
  cursor: pointer
  padding: $spacing-3
  img
    width: 24px
    height: 18px
.image-Slider_Prev
  left: 0
.image-Slider_Next
  right: 0
  img
    transform: rotate(180deg)

.slider-enter-active, .slider-leave-active
  transition: all .2s ease
.slider-enter, .slider-leave-to
  opacity: 0
</style>
