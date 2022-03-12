<template>
    <div class="loginContainer">
        <head-top head-title="登录" goBack="true"></head-top>
        <img :src="captchCodeImg" v-if="captchCodeImg" style="padding-top: 2rem;">
    </div>
</template>

<script>
import HeadTop from '@/components/HeadTop'
import { getCaptchas } from '@/api/getData'

export default {
    components: { 
        'head-top': HeadTop
    },
    data() {
        return {
            captchCodeImg: '',
            codeNumber: null,
        }
    },
    methods: {
        async getCaptchaCode() {
            const res = await getCaptchas()
            this.captchCodeImg = res.code
            // console.log(res)
        }
    },
    mounted() {
        this.getCaptchaCode()
    }
}
</script>

