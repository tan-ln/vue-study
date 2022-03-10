<template>
  <div id="app">
    <t-articles :articles="articles"></t-articles>
  </div>
</template>

<script>
import Articles from "@/components/Articles";
import axios from "axios";


export default {
  name: "App",

  components: {
    't-articles': Articles,
  },
  data() {
    return {
      articles: [],
    };
  },

  mounted() {
    axios
      .get("https://www.easy-mock.com/mock/5b30bfae2959342ac627f2a4/vue/")
      .then(data => {
        // console.log(data.data.articles);
        this.articles = data.data.articles;
      });
  }
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #F4F5F5;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  padding-top: 60px;
}
</style>
