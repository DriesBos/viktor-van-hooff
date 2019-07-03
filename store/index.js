String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

export default {
	actions: {
	  async nuxtServerInit ({ commit, dispatch }, { app }) { 
		
		let getPosts = await app.$storyapi.get('cdn/stories', {
			version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
			starts_with: 'blog/'
		})
		
		let posts = getPosts.data.stories.map(bp => {
	        return {
	          id: bp.slug,
	          title: bp.content.title,
	          location: bp.content.location,
	          excerpt: bp.content.excerpt,
	          thumbnail: bp.content.thumbnail,
	          tag_list: bp.tag_list
	        }
		})
		
		commit('projects/update', posts)
		
		let getTags = await app.$storyapi.get('cdn/tags', {
			version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
		})
		
		let tags = getTags.data.tags.map(tag => {
			tag.id = tag.name.replaceAll(' ', '-').toLowerCase()
			return tag
		})
		
		commit('categories/update', tags)
		
		dispatch('core/load')
		
	  }
	}
}