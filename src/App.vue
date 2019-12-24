<template>
  <div id="app">
    <div class="app__sidebar">
      <PostForm />
    </div>
    <div class="app__content">
      <Posts />
      <p><strong>Post count: </strong><span>{{postCount}}</span></p>
    </div>
  </div>
</template>

<script>
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters(['postCount'])
  },
  components: {
    Posts,
    PostForm,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  max-width: 820px;
  margin: 20px auto;
  display: flex;
}

.app__sidebar {
  width: 400px;
  margin-right: 20px;
}

.app__content {
  width: 400px;
}
</style>
