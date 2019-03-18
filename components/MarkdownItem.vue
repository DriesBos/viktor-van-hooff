<template>
  <div v-html="compiledMarkdown" class="markdown"></div>
</template>

<script>
// https://vuejs.org/v2/examples/index.html
// install 'Marked' as dependency: npm install marked
const marked = require('marked')

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
