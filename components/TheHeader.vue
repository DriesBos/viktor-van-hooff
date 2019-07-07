<template>
  <transition name="headeritem">
    <div class="headerItem" v-if="this.$route.path !== '/'">
      <router-link class="logo" tag="a" to="/">
        <img src="@/assets/images/logo.svg" />
      </router-link>

      <ul
        class="menu menu-Filter"
        v-if="this.$route.path === '/blog' || this.$route.path.indexOf('/category/') === 0"
      >
        <li v-bind:class="{active: !selectedCategory}">
          <router-link tag="a" to="/blog">
            <span class="text">All Projects</span>
          </router-link>
        </li>
        <li
          v-for="category in categories"
          v-bind:class="{active: selectedCategory == category.id}"
          :key="category"
        >
          <router-link tag="a" :to="'/category/' + category.id">{{ category.name }}</router-link>
        </li>
        <div class="desktop">
          <br />
        </div>
        <li>
          <router-link tag="a" to="/about">
            <span>About</span>
          </router-link>
        </li>
      </ul>

      <ul
        class="menu menu-Filter"
        v-if="this.$route.name === 'about' || this.$route.name === 'blog-postId'"
      >
        <li>
          <router-link tag="a" to="/blog" class="menu-arrow icon">
            <img class="arrow" src="@/assets/images/arrow-left.svg" />
            <span>Index</span>
          </router-link>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    categories: state => state.categories.list,
    selectedCategory(state) {
      return this.$route.params.categoryId
    }
  })
}
</script>

<style lang="sass">
@import '~/assets/styling/variables.sass'
</style>
