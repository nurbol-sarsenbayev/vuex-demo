export default {
  state: {
    posts: [],
  },
  getters: {
    allPosts: (state) => state.posts,
    postCount: (state, getters) => getters.allPosts.length,
  },
  actions: {
    async fetchPosts ({ commit }, limit = 3) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      const posts = await res.json()
      commit('updatePosts', posts)
    }
  },
  mutations: {
    addPost(state, newPost) {
      state.posts.unshift({
        title: newPost.title,
        body: newPost.content,
        id: Date.now(),
      })
    },
    updatePosts(state, posts) {
      state.posts = posts
    }
  }
}