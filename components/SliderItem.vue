<template>
  <div class="slider-Container">
    <transition-group name="slider" tag="div">
      <div class="image-Slider" v-for="number in [index]" :key="number" v-lazy-container="{ selector: '.image' }">
	    <a @click="close" class="image-Slider_Close">
          <img src="@/assets/images/close.png">
        </a>
        <img :data-src="currentImage | resize('1920x1280')" class="image">
        <a @click="previous" class="image-Slider_Nav image-Slider_Prev">
          <img src="@/assets/images/arrow.png">
        </a>
        <a @click="next" class="image-Slider_Nav image-Slider_Next">
          <img src="@/assets/images/arrow.png">
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
		if(this.index >= (this.images.length-1)) {
			this.index = 0
		  } else {
	      	this.index += 1
	      }	
	},
	decrement: function() {
		if(this.index > 0) {
	      	this.index -= 1
	      } else {
		    this.index = this.images.length-1
	      }
	},
	getCurrentImage: function() {
      return this.images[this.index]
    },
    next: function() {
	  this.increment();
	  while(!this.getCurrentImage()) {
		  this.increment();
	  }
    },
    close: function() {
		this.index = -1;  
    },
    previous: function() {
	  this.decrement();
	  while(!this.getCurrentImage()) {
		  this.decrement();
	  }
    }
  },
  computed: {
    currentImage: function() {
      return this.getCurrentImage()
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
  justify-content: center
  align-items: center
  display: flex
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 100%
  .image
    width: 95%
    height: 95%
    object-fit: cover
    object-position: center center
.image-Slider_Close
  position: absolute
  top: 0
  left: 0
  img
  	opacity: 1
  	width: 24px
    height: 24px
.image-Slider_Nav
  display: block
  position: fixed
  z-index: 999
  top: 50%
  transform: translateY(-50%)
  cursor: pointer
  padding: $spacing-3
  img
    width: 30px
    height: 17px
    opacity: 1
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
