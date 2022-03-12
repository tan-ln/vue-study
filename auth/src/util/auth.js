export default {
    loggedIn() {
        // localStorage.token
        return localStorage.getItem('token')
    },
    login(email, pass, callback) {
        setTimeout(() => {
            if (email == 'tang@123.com' && pass=='123456') {
                const token = Math.random().toString(36).substring(7)
                localStorage.setItem('token', token)
                callback(true)
                console.log('success')
            } else {
                callback(false)
                console.log('error')
            }
        }, 500)
    }
}