<template>
  <transition name="headeritem">
    <div class="headerItem" v-if="this.$route.path !== '/'">
      <router-link class="logo" tag="ul" to="/">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </router-link>

      <ul class="menu menu-Filter" v-if="this.$route.path === '/blog'">
        <!-- <li v-on:click="deselectCategory()" v-bind:class="{active: isAllCategoriesSelected()}"> -->
        <li>
          <p>
            <span>All Projects</span>
            <span>/</span>
          </p>
        </li>
        <!-- <li
          v-for="category in categories"
          :key="category.id"
          v-on:click="selectCategory(category)"
          v-bind:class="{active: isSelected(category)}"
        >
          <p>
            <span>{{ category.title }}</span>
            <span>&nbsp;/&nbsp;</span>
          </p>
        </li>-->
        <div class="desktop">
          <br>
          <br>
        </div>
        <router-link tag="li" to="/about">
          <p>
            <span>About</span>
          </p>
        </router-link>
      </ul>

      <ul
        class="menu menu-Filter"
        v-if="this.$route.name === 'about' || this.$route.name === 'blog-postId'"
      >
        <router-link tag="li" to="/blog" class="menu-arrow">
          <img class="arrow" src="@/assets/images/arrow.png">
          <p>
            <span>Index</span>
          </p>
        </router-link>
      </ul>
    </div>
  </transition>
</template>

<script>
// export default {
//   data() {
//     return {
//       query: ''
//     }
//   },
//   computed: {
//     categories() {
//       return this.$store.getters['categories/list']
//     }
//   },
//   methods: {
//     isAllCategoriesSelected: function() {
//       const selected = this.$store.getters['categories/selected']
//       if (selected === null) {
//         return true
//       } else {
//         return false
//       }
//     },
//     isSelected: function(category) {
//       const selected = this.$store.getters['categories/selected']
//       if (selected) {
//         return category.id === this.$store.getters['categories/selected'].id
//       } else {
//         return false
//       }
//     },
//     selectCategory: function(category) {
//       this.$store.commit('categories/selectCategory', category)
//     },
//     deselectCategory: function() {
//       this.$store.commit('categories/deselectCategory')
//     }
//   }
// }
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
    width: 230px
    margin-left: $spacing-3
    @media all and (max-width: $breakpoint)
      width: auto
      max-width: 330px
      flex-grow: 1
    li
      display: inline-block
      span:first-child
        display: inline
        cursor: pointer
      span:first-child:hover
        text-decoration: underline
    li.active span:first-child
      text-decoration: underline
    p
      line-height: 1.4
  .menu-arrow
    padding-top: 28px
    padding-right: $spacing-3
    padding-bottom: 28px
    cursor: pointer
    &:hover > p
      text-decoration: underline
    p
      display: inline
      margin-left: 6px
    img
      width: 24px
      height: 13px
      display: inline

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
