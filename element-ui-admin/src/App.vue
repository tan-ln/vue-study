<template>
  <div id="app">
    <!-- <el-alert title="el-alert" type="success" show-icon></el-alert> -->
    <ele-alert title="ele-alert" type="success" center v-if="hasErr" @close="doAlertClose"></ele-alert>
    <!-- <markdown></markdown> -->

    <!-- <login/> -->

    <!-- <p v-html="content"></p> -->

    <!-- <ele-radio-group v-model="sex">
      <ele-radio label="0">女</ele-radio>
      <ele-radio label="男"></ele-radio>
    </ele-radio-group> -->
    <!-- <comment></comment> -->
    <!-- <article-table></article-table> -->
  </div>
</template>

<script>
// @ 表示 地址短链接 alias ，始终指向 src，让地址引入更轻松
import Login from "@/views/Login";
import Markdown from "@/views/Markdown";

import EleRadioGroup from '@/components/EleRadioGroup'
import EleRadio from '@/components/EleRadio'

import Comment from '@/components/Comment'

import ArticleTable from '@/views/ArticleTable'

import EleAlert from '@/components/EleAlert'


export default {
  name: "App",
  components: {
    Login,
    Markdown,
    EleRadioGroup,
    EleRadio,
    Comment,
    ArticleTable,
    EleAlert
  },
  data() {
    return {
      sex: 0,
      content: "<span>美团挂了，还有 UC</span>",
      hasErr: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.hasErr = true
    }, 2000)
  },
  methods: {
    doAlertClose() {
      console.log('close')
    }
  }
};
</script>

<style lang="scss">
// 变量声明
$bg: #2d3a4b;
$light_gray: #eee;

.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
