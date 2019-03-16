<template>
  <router-link class="home" tag="div" to="/blog">
    <div class="landing">
      <ul class="logo">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="imageContainer">
      <img :src="cover">
    </div>
  </router-link>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/landing', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          cover: res.data.story.content.cover
        }
      })
  }
}
</script>
