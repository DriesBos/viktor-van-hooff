export default {
	actions: {
	  nuxtServerInit ({ commit }, { app }) { 
		app.$storyapi.get('cdn/stories', {
			version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
			starts_with: 'blog/'
		}).then(res => {
			let posts = res.data.stories.map(bp => {
		        return {
		          id: bp.slug,
		          title: bp.content.title,
		          location: bp.content.location,
		          excerpt: bp.content.excerpt,
		          thumbnail: bp.content.thumbnail
		        }
			})
			commit('projects/update', posts)
		})
	  }
	}
}