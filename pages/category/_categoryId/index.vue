<template>
  <div class="view-General view-Blog">
    <transition-group class="post-List" tag="ul">
    
      <PostPreview
        v-for="post in projects"
        :id="post.id"
        :key="post.id"
        :title="post.title"
        :location="post.location"
        :excerpt="post.excerpt"
        :thumbnail="post.thumbnail"
      />
    </transition-group>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview.vue'
import { mapState } from 'vuex'

export default {
  components: {
    PostPreview: PostPreview
  },
  computed: mapState({
  	projects(state) {
	  	let category = state.categories.list.find(category => category.id == this.$route.params.categoryId)
	  	return state.projects.list.filter(project => project.tag_list.indexOf(category.name) > -1)
	}
  })
}
</script>
