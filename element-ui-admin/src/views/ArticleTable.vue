<template>
    <div class="app-container">
      <div class="filter-container">
        <el-select v-model="listQuery.importance" placeholder="重要性" class="filter-item">
          <el-option v-for="item in importanceOptions" :key="item" :value="item" :label="item"></el-option>
        </el-select>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      </div>
      <el-table :data="list" style="width: 100%" highlight-current-row v-loading="listLoading">
        <el-table-column label="序号" type="index" width="65" align="center">
          <!-- 模板作用域添加更多的内容 -->
          <template slot-scope="scope">
            <span>{{scope.row.id}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="日期" width="150" align="center"></el-table-column>
        <el-table-column prop="title" label="标题" min-width="150"></el-table-column>
        <el-table-column prop="importance" label="重要性" width="150" align="center"></el-table-column>
        <el-table-column prop="author" label="作者" width="110" align="center"></el-table-column>
        <el-table-column prop="pageviews" label="阅读数" width="95" align="center"></el-table-column>
        <el-table-column label="操作" width="230" align="center" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <!-- 传入当前作用域的一行 -->
            <el-button type="primary" size="mini" @click="handleUpdate(scope.row);dialogFormVisible=true">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container">
         <el-pagination :current-page="listQuery.page" :page-size="listQuery.limit" :total="total" layout="total, sizes, prev, pager, next, jumper" @current-change='handleCurrentChange' background></el-pagination>
      </div>

      <el-dialog :visible.sync="dialogFormVisible" title="Edit">
        <el-form :model="temp" ref="tempForm" label-position="left" label-width="70" style="width: 400px; margin-left: 50px">
          <el-form-item label="标题" prop="title" required>
            <el-input v-model="temp.title" ></el-input>
          </el-form-item>
          <el-form-item label="时间" prop="date" required>
            <el-input v-model="temp.date"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-input v-model="temp.status"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible=false" size="small">取消</el-button>
          <el-button @click="updateData('tempForm');dialogFormVisible=false" size="small" type="primary">保存</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
import { fetchList } from '@/api/article.js'

export default {
  name: "ArticleTable",
  data() {
    return {
      list: [],
      listQuery: {
        title: undefined,
        importance: undefined,
        type: undefined,
        sort: "+id",
        page: 1,
        limit: 20,
      },
      total: 0,
      dialogFormVisible: false,
      // 弹窗里的表单 的 model
      temp: {
        id: null,
        importance: 1,
        remark: "",
        timestamp: new Date(),
        title: "",
        type: "",
        status: "published"
      },
      listLoading: false,
      importanceOptions: [1, 2, 3]
    }
  },
  methods: {
    getList() {
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.items
        this.total = response.data.total
        setTimeout(() => {
        this.listLoading = false
      }, 2000)
      })
    },
    handleUpdate(row) {
      console.log(row)
      Object.assign(this.temp, row)
    },
    updateData(fn) {
    },
    handleCurrentChange(page) {
      this.listQuery.page = page
      this.getList()
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    }
  },
  created() {
    this.listLoading = true
    this.getList()
  },
};
</script>