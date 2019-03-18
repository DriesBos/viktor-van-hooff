<template>
  <div class="view-General view-Blog">
    <transition-group class="post-List" tag="ul">
      <PostPreview
        v-for="post in posts"
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

export default {
  components: {
    PostPreview: PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'blog/'
      })
      .then(res => {
        return {
          posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              location: bp.content.location,
              excerpt: bp.content.excerpt,
              thumbnail: bp.content.thumbnail
            }
          })
        }
      })
  }
}
</script>
