  <template>
  <div>
    <div class="productItem">
      <li>
        <div class="product-Image" @click="showModal = true">
          <img :src="thumbnail">
        </div>
        <div class="product-TitleDate">
          <div>
            <h1>{{ title }}</h1>
          </div>
          <div>
            <p>category</p>
          </div>
        </div>
        <p class="productItem-Text">{{ content }}</p>
        <!-- <div
          v-for="( image,index ) in project.images"
          class="product-Image"
          @click="showModal = true"
          :key="index"
        >
          <img :src="`${apiUrl}/${image.url}`">
        </div>
        <div class="product-Footer">
          <div
            v-if="previousProjectId()"
            @click="navigateToProject(previousProjectId())"
            class="product-Footer_Prev"
          >
            <img class="arrow" src="@/assets/images/arrow.png">
            <p>Previous Project</p>
          </div>
          <div
            v-if="nextProjectId()"
            @click="navigateToProject(nextProjectId())"
            class="product-Footer_Next"
          >
            <p>Next</p>
            <img class="arrow" src="@/assets/images/arrow.png">
          </div>
        </div>-->
      </li>
      <modalItem v-if="showModal" @close="showModal = false">
        <sliderItem @close="showModal = false" :images="[thumbnail, thumbnail]"></sliderItem>
      </modalItem>
    </div>
  </div>
</template>

<script>
import SliderItem from '~/components/SliderItem.vue'
import ModalItem from '~/components/ModalItem.vue'

export default {
  components: {
    SliderItem,
    ModalItem
  },
  data() {
    return {
      showModal: false
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.postId, {
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
