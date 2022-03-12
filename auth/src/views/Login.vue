<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login" ref="login">
            <label for="email">
                <input type="text" name="email" v-model="email" placeholder="email" />
            </label>
            <label for="pass">
                <input name="pass" v-model="pass" placeholder="password" type="password" />
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import auth from '@/util/auth.js'

export default {
    data() {
        return {
            email: 'tang@123.com',
            pass: ''
        }
    },
    mounted() {
        console.log(this.$route.query)
    },
    methods: {
        login() {
            // 验证
            auth.login(this.email, this.pass, (loggedIn) => {
                console.log(loggedIn)
                if (loggedIn) {
                    console.log(this.$router)
                    this.$router.replace(this.$route.query.redirect || '/')
                }
            })
        }
    }
}
</script>

<style>

</style>
