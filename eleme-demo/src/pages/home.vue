<template>
    <div>
        <head-top signUp="home">
            <span slot="logo" class="head_logo">ele.me</span>
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <router-link :to="'/city/' + guessCityId" class="guess_city">
                <span>{{guessCity}}</span>
            </router-link>
        </nav>
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <ul class="cityListUl clear">
                <router-link :to="'/city/' + item.id" v-for="item in hotCity" :key="item.id" tag="li">
                    {{item.name}}
                </router-link>
            </ul>
        </section> 
    </div>
</template>

<script>
import HeadTop from '@/components/HeadTop'

import { cityGuess, hotCity } from '@/api/getData'

export default {
    components: { HeadTop },
    data() {
        return {
            guessCityId: '123',
            guessCity: '宜春',
            hotCity: []
        }
    },
    // 获取城市 不准确 又耗时的 api
    // 阻塞组件渲染
    // 在挂载之后
    async mounted() {

        const cityData = await cityGuess()
        this.guessCityId = cityData.id
        this.guessCity = cityData.name

        this.hotCity = await hotCity()
        
        // cityGuess()
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         this.guessCityId = data.id
        //         this.guessCity = data.name
        //     })
        // hotCity()
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         this.hotCity = data
        //     })
    }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixin.styl'
    .city_nav
        padding-top 2.35rem
        border-top 1px solid $bc
        background-color #fff
        margin-bottom 0.4rem

        .city_tip
            fj()
            line-height 1.45rem
            padding 0 0.45rem
            span:nth-of-type(1)
                sc(0.55rem, #666)
            span:nth-of-type(2)
                font-weight 900
                sc(0.475rem, #9f9f9f)

</style>

