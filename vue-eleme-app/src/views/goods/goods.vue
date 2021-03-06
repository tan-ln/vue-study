<template>
<div>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(item, index) in goods" class="menu-item" :class="{'current': currentIndex===index}" @click="selectMenu(index, $event)" :key="index">
                    <span class="text border-1px">
                        <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
                        {{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="food-wrapper" ref="foodWrapper">
            <ul>
                <li v-for="item in goods" class="food-list" ref="foodList" :key="item">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li class="food-item border-1px" v-for="food in item.foods" :key="food" @click="selectFood(food,$event)">
                            <div class="icon">
                                <img :src="food.icon" width="57" height="57" />
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}份</span>
                                    <span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now">￥{{food.price}}</span>
                                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                                </div>
                                <div class="cartcontrol-wrapper">
                                    <cartcontrol @add="addFood" :food="food"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <shopcart ref="shopcart" :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
    </div>
    <food ref="food" @add="addFood" :food="selectedFood"></food>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import shopcart from '@/components/shopcart/shopcart'
import food from '@/components/food/food'
import cartcontrol from '@/components/cartcontrol/cartcontrol'

const response = require('../../common/data/goods.json')
export default {
    components: { shopcart, food, cartcontrol },
    data() {
        return {
            goods: [],
            listHeight: [],
            scrollY: 0,
            selectedFood: {}
        }
    },
    created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        if (response.errno === 0) {
            this.goods = response.data
            this.$nextTick(() => {
                this._initScroll()
                this._calculateHeight()
            })
        }
    },
    computed: {
        currentIndex() {
            for (let i = 0; i < this.listHeight.length; i++) {
                let height1 = this.listHeight[i]                
                let height2 = this.listHeight[i + 1]
                if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                    return i
                }
            }
            return 0
        },
        selectFoods() {
            let foods = []
            this.foods.forEach(good => {
                good.foods.forEach(food => {
                    if (food.count) {
                        foods.push(food)
                    }
                })
            })
            return foods
        }
    },
    methods: {
        selectMenu(index, event) {
            if (!event._constructed) {
                return
            }
            let foodList = this.$refs.foodList
            let el = foodList[index]
            this.foodScroll.scrollToElement(el, 300)
        },
        _initScroll() {
            this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                click: true
            })
            this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                click: true,
                probeType: 3
            })
            this.foodsScroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y))
            })
        },
        _calculateHeight() {
            let foodList = this.$refs.foodList
            let height = 0
            this.listHeight.push(height)
            for (let i = 0; i < foodList.length; i++) {
                let item = foodList[i]
                height += item.clientHeight
                this.listHeight.push(height)
            }
        },
        selectFood(food, event) {
            if (!event._constructed) return
            this.selectedFood = food
            this.$refs.food.show()
        },
        addFood(target) {
            this._drop(target)
        },
        _drop(target) {
            this.$nextTick(() => {
                this.$refs.shopcart.drop(target)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
        flex 0 0 80px
        width 80px
        background #f3f5f7
        ul 
            list-style none
        .menu-item
            display table
            height 54px
            width 56px
            padding 0 12px
            line-height 14px
            &.current
                position relative
                z-index 10
                margin-top -1px
                background #ffffff
                font-weight 700
                .text
                    border-none()
            .icon
                display inline-block
                vertical-align top
                width 12px
                height 12px
                margin-right 2px
                background-size 12px 12px
                background-repeat no-repeat
                &.decrease
                    bg-image('decrease_3')
                &.discount
                    bg-image('discount_3')
                &.guarantee
                    bg-image('guarantee_3')
                &.invoice
                    bg-image('invoice_3')
                &.special
                    bg-image('special_3')
            .text
                display table-cell
                width 56px
                vertical-align middle
                border-1px(rgba(7, 17, 27, 0.1))
                font-size 12px
    
    .foods-wrapper
        flex 1
        .title
            padding-left 14px
            height 26px
            line-height 26
            border-left 2px solid #d9dde1
            font-size 12px
            color rgb(147, 153, 159)
            background #f3f5f7
        .food-item
            display flex
            margin 18px
            padding-bottom 18px
            border-1px(rgba(7, 17, 27, 0.1))
            &.last-child
                border-none()
            .icon
                flex 0 0 57px
                margin-right 10px
            .content
                flex 1
                .name
                    margin 2px 0 8px 0
                    height 14px
                    line-height 14
                    font-size 1px
                    color rgb(7, 17, 27)
</style>
1