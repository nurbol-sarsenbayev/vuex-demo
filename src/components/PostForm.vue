<template>
  <div class="post-form">
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Please, enter title" v-model="title">
      <textarea rows="5" placeholder="Please, enter content" v-model="content"></textarea>
      <button type="submit">Create post</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['addPost']),
    onSubmit() {
      if (this.title && this.content) {
        this.addPost({
          title: this.title,
          content: this.content,
        })
        this.reset()
      }
    },
    reset() {
      this.title = this.content = ''
    }
  },
  data() {
    return {
      title: '',
      content: '',
    }
  }
}
</script>

<style>
  .post-form input, .post-form textarea {
    display: block;
    margin-bottom: 1rem;
    padding: 5px 10px;
    width: 100%;
  }
</style>