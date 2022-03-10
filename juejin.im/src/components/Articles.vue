<template>
  <div class="app">
    <t-article class="articles" :articleList="articles" />
  </div>
</template>

<script>
import Article from "@/components/Article";

export default {
  name: "Articles",
  props: ['articles'],
  components: {
    "t-article": Article
  },
};
</script>
<style lang="stylus" scoped>
  .articles
    width 70%
    background-color #fff
    margin 0 auto
</style>