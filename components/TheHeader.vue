<template>
  <transition name="headeritem">
    <div class="headerItem" v-if="this.$route.path !== '/'">
      <router-link tag="a" to="/">
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
        <li v-for="category in categories" v-bind:class="{active: selectedCategory == category.id}">
          <router-link tag="a" :to="'/category/' + category.id">
            <span>&nbsp;/&nbsp;</span>
            <span class="text">{{ category.name }}</span>
          </router-link>
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

.headerItem
  position: fixed
  top: 0
  left: 0
  display: inline-flex
  padding: $spacing-3
  @media all and (max-width: $breakpoint)
    position: relative
    width: 100%
    padding-left: 0
    padding-right: 0
    padding-top: 0
  .menu
    position: relative
    display: inline-block
    width: 500px
    margin-left: $spacing-3
    @media all and (max-width: $breakpoint)
      width: auto
      max-width: 330px
      flex-grow: 1
    li
      display: inline-block
      a
      	text-decoration: none
      a:hover .text
      	text-decoration: underline
    li.active a .text
      text-decoration: underline
    p
      line-height: 1.5
  .menu-arrow
    padding-right: $spacing-3
    padding-bottom: $spacing-3
    cursor: pointer
    &:hover > span
      text-decoration: underline
    img
      transform: translateY(-3px)

.logo
  display: inline-flex
  flex-wrap: wrap
  width: calc((24px * 3) + (2px * 2))
  margin-left: $spacing-3
  margin-right: $spacing-3
  align-content: flex-start
  transition: opacity .2s ease
  cursor: pointer
  flex-shrink: 0
  @media all and (max-width: $breakpoint)
    margin-left: 0
  &:hover
    opacity: .75
  li
    width: 24px
    height: 24px
    background: black
    margin-right: 2px
    margin-bottom: 2px
  li:nth-child(2), li:nth-child(8)
    background: transparent
  li:nth-child(3n)
    margin-right: 0
</style>
