<template>
  <div v-html="compiledMarkdown" class="markdown"></div>
</template>

<script>
// https://vuejs.org/v2/examples/index.html
// install 'Marked' as dependency: npm install marked
const marked = require('marked')
marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true
})

export default {
  props: {
    input: {
      type: String,
      required: true
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true })
    }
  }
}
</script>

<style lang="sass">
.markdown
  img
    opacity: 1 !important
    padding-bottom: 0
    cursor: default
  img:hover
    opacity: 1 !important
    cursor: default !important
</style>
