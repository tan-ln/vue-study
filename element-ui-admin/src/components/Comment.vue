<template>
    <div class="comment">
        <comment-form @addComment="addComment"></comment-form>
        <comment-list :list="list"></comment-list>
        <pagination :totalCount="totalCount" :currentPage="currentPage" @turnPage="turnPage" :pagesize="pagesize" />
    </div>
</template>
<script>
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import Pagination from "@/components/Pagination";

export default {
  name: "Comment",
  components: {
    CommentForm,
    CommentList,
    Pagination
  },
  data() {
    return {
      list: [], // 当前显示的数据列表
      pagesize: 3,
      totalData: [], //  总数据
      totalCount: 0,
      currentPage: 1
    };
  },
  methods: {
    addComment(msg) {
      // this.totalData.unshift() 从数组前插入，看需要
      this.totalData.push({ text: msg });
      this.totalCount = this.totalData.length;
      if (this.totalCount <= this.pagesize) {
        this.list = this.totalData;
      } else {
        this.list = this.totalData.slice(this.totalCount - this.pagesize, this.totalCount);
        this.list.reverse();
      }
      this.currentPage = 1
    },
    turnPage(curpage) {
      if (curpage == 1) {
        this.list = this.totalData.slice(this.totalCount - this.pagesize, this.totalCount).reverse();
      } else {
        const startSize = this.pagesize * curpage;
        const endSize = this.pagesize * (curpage - 1);
        this.list = this.totalData.slice(-startSize, -endSize).reverse();
      }
    }
  }
};
</script>

