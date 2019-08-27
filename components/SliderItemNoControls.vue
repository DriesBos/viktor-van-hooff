<template>
  <div class="imageContainer" v-lazy-container="{ selector: 'img' }">
    <img :data-src="currentImage | resize('0x0')" />
  </div>
</template>

<script>
export default {
  props: {
    images: {}
  },
  computed: {
    currentImage: function() {
      const filtered = this.images.filter(v => v != '')
      return filtered[Math.floor(Math.random() * filtered.length)]
    }
  }
}
</script>