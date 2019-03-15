<template>
  <div class="profilesItem">
    <ul>
      <li>
        <!-- <img :src="profile.cover.url"> -->
        <div class="product-TitleDate">
          <div>
            <h1>{{ title }}</h1>
          </div>
          <div>
            <!-- <p v-if="profile.categories">{{ profile.categories.title }}</p> -->
          </div>
        </div>
        <p>{{ content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/about', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          title: res.data.story.content.title,
          content: res.data.story.content.content
        }
      })
  }
}
</script>
