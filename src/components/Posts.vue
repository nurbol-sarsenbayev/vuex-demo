<template>
  <section class="posts">
    <h1>Posts</h1>
    <Post
      v-for="post in allPosts"
      :key="post.id"
      :title="post.title"
      :content="post.body"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Post from './Post'

export default {
  computed: {
    ...mapGetters(['allPosts']),
  },
  methods: {
    ...mapActions(['fetchPosts']),
  },
  mounted() {
    this.fetchPosts(5)
  },
  components: {
    Post,
  }
}
</script>