<template>
  <transition name="modal">
    <div class="modal-Container">
      <div class="modal-CloseBackground" @click="$emit('close')">
        <div class="modal-Close icon" @click="$emit('close')">
          <img src="@/assets/images/close.svg" />
        </div>

        <div class="modal-Content" @click.stop>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close: function() {
      this.$emit('close')
    }
  },
  mounted: function() {
    document.addEventListener('keydown', e => {
      if (this.show && e.keyCode === 27) {
        this.close()
      }
    })
  }
}
</script>

<style lang="sass">
@import '~/assets/styling/variables.sass'

.modal
  &-Container
    position: fixed
    z-index: 990
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: hsla(0, 50%, 100%, 1)
  &-CloseBackground
    position: absolute
    width: 100%
    height: 100%
    padding: $spacing-3
  &-Close
    position: fixed
    z-index: 999
    top: 0
    left: 0
    padding: $spacing-3
    cursor: pointer
  &-Content
    height: 100%
    width: 100%

.modal-enter-active, .modal-leave-active
  transition: opacity .2s ease
.modal-enter, .modal-leave-to
  opacity: 0
</style>
