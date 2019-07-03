<template>
  <li>
    <div class="product-Image" @click="showModal = true">
      <img v-lazy="thumbnail">
    </div>
    <div class="product-TitleDate">
      <div>
        <h1>{{ title }}</h1>
      </div>
      <div>
        <p></p>
      </div>
    </div>
    <MarkdownItem :input="content"/>

    <div class="product-Image" @click="showModal = true">
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

    <!-- <div class="product-Footer">
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
</template>

<script>
import MarkdownItem from '~/components/MarkdownItem.vue'

export default {
  components: {
    MarkdownItem
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>
