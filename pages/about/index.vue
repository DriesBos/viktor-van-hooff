<template>
  <div class="view-General view-About">
    <ul class="post-List">
      <li class="post-Item">
        <div v-if="thumbnail" class="post-Thumbnail" v-lazy-container="{ selector: 'img' }">
          <img :data-src="thumbnail | resize('380x250')" width="380" height="250">
        </div>
        <div class="post-Info">
          <div v-if="title">
            <h1>{{ title }}</h1>
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
