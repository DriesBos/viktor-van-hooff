<template>
  <div class="view-General view-About">
    <ul class="post-List">
      <li class="post-Item">
        <a
          v-if="thumbnail"
          class="post-Thumbnail"
          @click="sliderIndex = 0"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="thumbnail | resize('760x0')" width="760" height="auto" />
        </a>
        <div class="post-Info">
          <div v-if="title">
            <h1>{{ title }}</h1>
          </div>
        </div>
        <MarkdownItem v-if="content" :input="content" class="post-Content" />
      </li>
    </ul>
    <modalItem v-if="sliderIndex > -1" @close="sliderIndex = -1">
      <sliderItem @close="sliderIndex = -1" :index="sliderIndex" :images="[thumbnail]"></sliderItem>
    </modalItem>
  </div>
</template>

<script>
import MarkdownItem from '~/components/MarkdownItem.vue'
import SliderItem from '~/components/SliderItem.vue'
import ModalItem from '~/components/ModalItem.vue'

export default {
  components: {
    MarkdownItem,
    SliderItem,
    ModalItem
  },
  data() {
    return {
      sliderIndex: -1
    }
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
