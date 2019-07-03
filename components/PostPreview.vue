<template>
  <nuxt-link :to="'/blog/' + id" tag="li" class="post-Item">
    <div v-if="thumbnail" class="post-Thumbnail">
      <img v-lazy="thumbnail | resize('380x250')">
    </div>
    <div class="post-Info">
      <div v-if="title">
        <h1>{{ title }}</h1>
      </div>
      <div v-if="location">
        <p>&nbsp;— {{ location }}</p>
      </div>
    </div>
    <MarkdownItem v-if="excerpt" :input="excerpt" class="post-Content"/>
  </nuxt-link>
</template>

<script>
import MarkdownItem from '~/components/MarkdownItem.vue'

export default {
  components: {
    MarkdownItem
  },
  props: {
    id: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false
    },
    excerpt: {
      type: String,
      required: false
    },
    thumbnail: {
      type: String,
      required: false
    }
  }
}
</script>
