  <template>
  <div class="view-General view-Post">
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
          <div v-if="location">
            <p>&nbsp;— {{ location }}</p>
          </div>
        </div>
        <MarkdownItem v-if="content" :input="content" class="post-Content" />
        <a
          v-if="image_0"
          class="post-Images"
          @click="sliderIndex = 1"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="image_0 | resize('760x0')" width="760" height="auto" />
        </a>
        <a
          v-if="image_1"
          class="post-Images"
          @click="sliderIndex = 2"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="image_1 | resize('760x0')" width="760" height="auto" />
        </a>
        <a
          v-if="image_2"
          class="post-Images"
          @click="sliderIndex = 3"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="image_2 | resize('760x0')" width="760" height="auto" />
        </a>
        <a
          v-if="image_3"
          class="post-Images"
          @click="sliderIndex = 4"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="image_3 | resize('760x0')" width="760" height="auto" />
        </a>
        <a
          v-if="image_4"
          class="post-Images"
          @click="sliderIndex = 5"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="image_4 | resize('760x0')" width="760" height="auto" />
        </a>
        <a
          v-if="image_5"
          class="post-Images"
          @click="sliderIndex = 6"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="image_5 | resize('760x0')" width="760" height="auto" />
        </a>
        <a
          v-if="image_6"
          class="post-Images"
          @click="sliderIndex = 7"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="image_6 | resize('760x0')" width="760" height="auto" />
        </a>
        <a
          v-if="image_7"
          class="post-Images"
          @click="sliderIndex = 8"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="image_7 | resize('760x0')" width="760" height="auto" />
        </a>
        <a
          v-if="image_8"
          class="post-Images"
          @click="sliderIndex = 9"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="image_8 | resize('760x0')" width="760" height="auto" />
        </a>
        <a
          v-if="image_9"
          class="post-Images"
          @click="sliderIndex = 10"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="image_9 | resize('760x0')" width="760" height="auto" />
        </a>
      </li>
    </ul>
    <div
      class="post-Footer"
      v-bind:class="{ 'post-Footer--spaced': previous_url && next_url, 'post-Footer--end': next_url && ! previous_url }"
    >
      <router-link v-if="previous_url" class="post-Footer_Prev icon" tag="a" :to="previous_url">
        <img src="@/assets/images/arrow-left.svg" />
      </router-link>
      <router-link v-if="next_url" class="post-Footer_Next icon" tag="a" :to="next_url">
        <img src="@/assets/images/arrow-right.svg" />
      </router-link>
    </div>
    <modalItem v-if="sliderIndex > -1" @close="sliderIndex = -1">
      <sliderItem
        @close="sliderIndex = -1"
        :index="sliderIndex"
        :images="[thumbnail, image_0, image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9]"
      ></sliderItem>
    </modalItem>
  </div>
</template>

<script>
import MarkdownItem from '~/components/MarkdownItem.vue'
import SliderItem from '~/components/SliderItem.vue'
import ModalItem from '~/components/ModalItem.vue'

function getProjectIndex(projects, id) {
  let index = projects.findIndex(element => element.id === id)
  return index === -1 ? 0 : index
}

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
  asyncData({ app, store, params }) {
    return app.$storyapi
      .get('cdn/stories/blog/' + params.postId, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        let previous =
            store.state.projects.list[
              getProjectIndex(store.state.projects.list, params.postId) - 1
            ],
          next =
            store.state.projects.list[
              getProjectIndex(store.state.projects.list, params.postId) + 1
            ]
        return {
          title: res.data.story.content.title,
          location: res.data.story.content.location,
          content: res.data.story.content.content,
          thumbnail: res.data.story.content.thumbnail,
          image_0: res.data.story.content.image_0,
          image_1: res.data.story.content.image_1,
          image_2: res.data.story.content.image_2,
          image_3: res.data.story.content.image_3,
          image_4: res.data.story.content.image_4,
          image_5: res.data.story.content.image_5,
          image_6: res.data.story.content.image_6,
          image_7: res.data.story.content.image_7,
          image_8: res.data.story.content.image_8,
          image_9: res.data.story.content.image_9,
          previous_url: previous ? '/blog/' + previous.id : null,
          next_url: next ? '/blog/' + next.id : null
        }
      })
  },
  methods: {
    navigateToProject(id) {
      this.$router.push({ path: `/blog/${id}` })
    }
  }
}
</script>

<style lang="sass" scoped>
.view-Post
  display: flex
  flex-direction: column
  justify-content: space-between
  min-height: 100vh
  .post-List
    li img
      cursor: pointer
      transition: opacity .2s ease
    li img:hover
      opacity: .55

.post-Footer
	display: flex
  align-items: center
.post-Footer  a
  flex-grow: 1
.post-Footer_Next
  text-align: right
</style>
