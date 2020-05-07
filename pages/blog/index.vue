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
    projects: state => state.projects.list
  })
}
</script>

<style lang="sass">
.view-Blog
  .post-List
    li
      cursor: pointer
    li:hover
      img
        opacity: .55
    @media (hover: none)
      li:hover
        img
          opacity: 1
</style>

