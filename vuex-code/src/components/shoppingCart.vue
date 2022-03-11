<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length">
            <i>空空如也</i>
        </p>
        <ul>
            <li v-for="item in products" :key="item.id">
                {{item.title}} - {{item.price | currency}} X {{item.quantity}}
            </li>
        </ul>
        <p>{{totalPrice | currency}}</p>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    // computed: mapState({
    //     cartItems: state => state.cart.items
    // })
    computed: {
        ...mapState({
            cartItems: state => state.cart.items,
            checkoutStatus: state => state.cart.checkoutStatus
        }),
        //   使用对象展开运算符将 getter 混入 computed 对象中
        // 需要更多数据，使用getters获取更多
        ...mapGetters({
            products: 'cartProducts',
            totalPrice: 'cartTotalPrice'
        })
    }
}
</script>

<style>

</style>
