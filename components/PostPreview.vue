<template>
  <nuxt-link :to="'/blog/' + id" tag="li">
    <img :src="thumbnail">
    <div class="product-TitleDate">
      <div>
        <h1>{{ title }}</h1>
      </div>
      <div>
        <p></p>
      </div>
    </div>
    <p>{{ excerpt }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>
