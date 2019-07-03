  <template>
  <div class="view-General view-Post">
    <ul class="post-List">
      <li class="post-Item">
        <div v-if="thumbnail" class="post-Thumbnail" @click="showModal = true">
          <img v-lazy="thumbnail">
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
        <div v-if="image_0" class="post-Images" @click="showModal = true">
          <img v-if="image_0" v-lazy="image_0">
          <img v-if="image_1" v-lazy="image_1">
          <img v-if="image_2" v-lazy="image_2">
          <img v-if="image_3" v-lazy="image_3">
          <img v-if="image_4" v-lazy="image_4">
          <img v-if="image_5" v-lazy="image_5">
          <img v-if="image_6" v-lazy="image_6">
          <img v-if="image_7" v-lazy="image_7">
          <img v-if="image_8" v-lazy="image_8">
          <img v-if="image_9" v-lazy="image_9">
        </div>
      </li>
    </ul>
    <div class="post-Footer">
      <a
        v-if="previous_id"
        @click="navigateToProject(previous_id)"
        class="post-Footer_Prev"
      >
        <img class="arrow" src="@/assets/images/arrow.png">
        <p>Previous Post</p>
      </a>
      <a
        v-if="next_id"
        @click="navigateToProject(next_id)"
        class="post-Footer_Next"
      >
        <p>Next</p>
        <img class="arrow" src="@/assets/images/arrow.png">
      </a>
    </div>
    <modalItem v-if="showModal" @close="showModal = false">
      <sliderItem
        @close="showModal = false"
        :images="[thumbnail, image_0, image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9]"
      ></sliderItem>
    </modalItem>
  </div>
</template>

<script>
import MarkdownItem from '~/components/MarkdownItem.vue'
import SliderItem from '~/components/SliderItem.vue'
import ModalItem from '~/components/ModalItem.vue';

function getProjectIndex(projects, id) {
	let index = projects.findIndex(
		element => element.id === id
	)
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
      showModal: false
    }
  },
  asyncData({app, store, params}) {
    return app.$storyapi
      .get('cdn/stories/blog/' + params.postId, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
	    let previous = store.state.projects.list[getProjectIndex(store.state.projects.list, params.postId) - 1],
	    	next = store.state.projects.list[getProjectIndex(store.state.projects.list, params.postId) + 1],
	    	previous_id = previous ? previous.id : null,
	    	next_id = next ? next.id : null;
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
          previous_id,
          next_id
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
.view-Project
  margin-top: 100px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
.project-List
  display: flex
  flex-direction: column
  width: 500px
  li
    background: lightblue
    margin-bottom: 100px
  img
    width: 100%
    height: auto
</style>
