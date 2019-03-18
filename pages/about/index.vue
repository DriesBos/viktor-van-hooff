<template>
  <div class="view-General view-About">
    <ul class="post-List">
      <li class="post-Item">
        <div v-if="thumbnail" class="post-Thumbnail" @click="showModal = true">
          <img :src="thumbnail">
        </div>
        <div class="post-Info">
          <div v-if="title">
            <h1>{{ title }}</h1>
          </div>
          <div v-if="location">
            <p>&nbsp;— {{ location }}</p>
          </div>
        </div>
        <MarkdownItem v-if="content" :input="content" class="post-Content"/>
      </li>
    </ul>
  </div>
</template>

<script>
import MarkdownItem from '~/components/MarkdownItem.vue'

export default {
  components: {
    MarkdownItem
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/about', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          thumbnail: res.data.story.content.thumbnail
        }
      })
  }
}
</script>
