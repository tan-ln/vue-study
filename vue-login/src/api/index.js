import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'

const $http = axios.create()

export default {
    UserLogin (data) {
        // api 路由 由后端 express 框架创建
        return $http.post('/api/register', data)
    },
    UserRegister (data) {
        return $http.post('/api/login', data)
    },
    getUser () {
        return $http.get('/api/user')
    },
    delUser (data) {
        return $http.post('/api/delUser', data)
    }
}