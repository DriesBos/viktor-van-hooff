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

<style lang="sass" scoped>
@import '~/assets/styling/variables.sass'

.headerItem
  position: sticky
  align-self: flex-start
  top: 0
  display: flex
  justify-content: flex-start
  flex-wrap: nowrap
  padding: $spacing-4
  @media all and (max-width: $breakpoint)
    padding: $spacing-3
    padding-right: 0
    width: 100%
    background: rgba(255,255,255,0.5)
    -webkit-backdrop-filter: saturate(180%) blur(2px)
    backdrop-filter: saturate(180%) blur(2px)
  .logo
    position: relative
    width: calc((24px * 3) + (2px * 2))
    height: calc((24px * 3) + (2px * 2))
  .menu
    max-width: 500px
    margin-left: $spacing-4
    @media all and (max-width: $breakpoint)
      margin-left: $spacing-3
    li
      display: inline-block
      text-transform: capitalize
      margin-right: 1em
      a
        text-decoration: none
      a:hover
        text-decoration: underline
      @media (hover: none)
        a:hover
          text-decoration: none
    li.active a
      text-decoration: underline
    a
      line-height: 1.5
  .menu-arrow
    padding-right: $spacing-3
    padding-bottom: $spacing-3
    cursor: pointer
    &:hover > span
      text-decoration: underline
    img
      transform: translateY(-3px)
  @media (hover: none)
    .menu-arrow:hover > span
      text-decoration: none
</style>
