<template>
  <article class="post">
    <h2 class="post__title">{{title}}</h2>
    <div class="post__content">{{content}}</div>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  }
}
</script>

<style>
  .post {
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 10px 15px;
    margin-bottom: 1rem;
  }

  .post__title {
    margin: 0 0 10px;
  }
</style>