<template>
  <li class="post-Item">
    <nuxt-link :to="'/blog/' + id" tag="a" class="post-Item">
      <div v-if="thumbnail" class="post-Thumbnail" v-lazy-container="{ selector: 'img' }">
        <img :data-src="thumbnail | resize('760x0')" width="760" height="auto" />
      </div>
      <div class="post-Info">
        <div v-if="title" class>
          <h1>{{ title }}</h1>
        </div>
        <div v-if="location">
          <p>&nbsp;— {{ location }}</p>
        </div>
      </div>
      <MarkdownItem v-if="excerpt" :input="excerpt" class="post-Content" />
    </nuxt-link>
  </li>
</template>

<style>
.post-Item {
  text-decoration: none;
}
</style>

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
