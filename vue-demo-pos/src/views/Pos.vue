<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width: 100%;">
              <el-table-column align="center" prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column align="center" prop="count" width="50" label="数量"></el-table-column>
              <el-table-column align="center" prop="price" width="70" label="价格"></el-table-column>
              <el-table-column align="center" width="100" label="操作" fixed="right" >
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delSingleGood(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">添加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量</small>: {{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp;
              <small>金额</small>: {{totalMoney}} 
              <small>元</small>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">

          </el-tab-pane>
          <el-tab-pane label="外卖">

          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="good in oftenGoods" :key="good.goodsId" @click="addOrderList(good)">
                <span>{{good.goodsName}}</span>
                <span class="o-price">￥{{good.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li v-for="good in type0Goods" :key="good.goodsId" @click="addOrderList(good)">
                    <span class="foodImg"><img :src="good.goodsImg" style="width: 100%;" /></span>
                    <span class="foodName">{{good.goodsName}}</span>
                    <span class="foodPrice">￥{{good.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div>
                <ul class="cookList">
                  <li v-for="good in type1Goods" :key="good.goodsId" @click="addOrderList(good)">
                    <span class="foodImg"><img :src="good.goodsImg" style="width: 100%;" /></span>
                    <span class="foodName">{{good.goodsName}}</span>
                    <span class="foodPrice">￥{{good.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cookList">
                  <li v-for="good in type2Goods" :key="good.goodsId" @click="addOrderList(good)">
                    <span class="foodImg"><img :src="good.goodsImg" style="width: 100%;" /></span>
                    <span class="foodName">{{good.goodsName}}</span>
                    <span class="foodPrice">￥{{good.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList">
                  <li v-for="good in type3Goods" :key="good.goodsId" @click="addOrderList(good)">
                    <span class="foodImg"><img :src="good.goodsImg" style="width: 100%;" /></span>
                    <span class="foodName">{{good.goodsName}}</span>
                    <span class="foodPrice">￥{{good.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Pos",
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalMoney: 0,
      totalCount: 0
    }
  },
  created() {
    // 拉取常用商品数据
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      .then(res => {
        this.oftenGoods = res.data
      })
      .catch(err => {
        console.log(err)
      })
    // 分类商品数据
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(res => {
        this.type0Goods = res.data[0]
        this.type1Goods = res.data[1]
        this.type2Goods = res.data[2]
        this.type3Goods = res.data[3]
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted() {
    const orderHeight = document.body.clientHeight
    document.getElementById("order-list").style.height = orderHeight + "px"
  },
  methods: {
    addOrderList(good) {
      this.totalMoney = 0
      this.totalCount = 0
      // 商品是否存在于列表中
      let exist = false
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == good.goodsId) exist = true
      }
      
      if (exist) {
        let arr = this.tableData.filter(item => item.goodsId == good.goodsId)
        arr[0].count++
      } else {
        let newGood = {
          goodsId: good.goodsId,
          goodsName: good.goodsName,
          price: good.price,
          count: 1
        }
        this.tableData.push(newGood)
      }

      this.getAllMoney()
    },

    delSingleGood(good) {
      this.tableData = this.tableData.filter(item => item.goodsId != good.goodsId)
      this.getAllMoney()
    },

    delAllGoods() {
      this.tableData = []
      this.totalMoney = 0
      this.totalCount = 0
    },

    // 计算汇总金额和数量
    getAllMoney() {
      this.totalMoney = 0
      this.totalCount = 0

      if (this.tableData) {
        this.tableData.forEach(ele => {
          this.totalCount += ele.count
          this.totalMoney = this.totalMoney + (ele.price*ele.count)
        })
      }
    },

    // 结账
    checkout() {
      if (this.totalCount != 0) {
        this.delAllGoods()

        this.$message({
          message: '结账成功！',
          type: 'success'
        })
      } else {
        this.$message.error('么有订单')
      }
    }
  }
}
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
  overflow: hidden;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg{
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.totalDiv {
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #d3dce6;
}
</style>
