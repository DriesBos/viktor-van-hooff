import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.filter('resize', (image, option) => {
  let imageService = '//img2.storyblok.com/'
  let path = image.replace('//a.storyblok.com', '')
  return imageService + option + path
})

Vue.use(VueLazyload)
