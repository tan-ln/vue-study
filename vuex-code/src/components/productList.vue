<template>
    <ul>
        <li v-for="(prod, index) in products" :key="index">
            {{prod.title}} - {{prod.price | currency}}
            <!-- <br> -->
            <button :disabled="!prod.inventory" @click="addProductToCart(prod)">Add to cart</button>
        </li>
        
    </ul>
</template>

<script>
//  mapState辅助函数
import { mapState, mapActions, } from 'vuex'

export default {
    computed: mapState({
        // 读取状态 state api 用于获取到的所有数据
        products: states1 => states1.products.all
    }),
    created() {
        // 分发 action  开始发生动作
        this.$store.dispatch('getAllProducts')
    },
    // 全权交给 mapActions 后面的方法处理
    methods: mapActions([
        'addProductToCart',
    ])

}
</script>

<style>
li {
      font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
