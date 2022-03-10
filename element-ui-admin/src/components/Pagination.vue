<template>
    <div>
        <el-col :span="24" class="pagination">
            <el-pagination background layout="prev, pager, next" :total="totalCount" :current-page="currentPage" :page-size="pagesize" @current-change="handleCurrentPage" v-if="totalCount>0"></el-pagination>
        </el-col>
    </div>
</template>
<script>
export default {
    props: ['totalCount', 'currentPage', 'pagesize'],
    methods: {
        handleCurrentPage(val) {
            this.$emit('turnPage', val)
        },
    }
}
</script>

