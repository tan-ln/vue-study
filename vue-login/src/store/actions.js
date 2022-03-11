// actions => commit to mutations
// mutation 对应同等的 actions
// api 设计的路口 请求数据
import * as types from './mutation-types'
import api from '@/api'

export default {
    userLogin({ commit }, data) {
        commit(types.LOGIN, data)
    },
    userLogout({ commit }, data) {
        commit(types.LOGOUT, data)
    },
    userName({ commit }, data) {
        commit(types.USERNAME, data)
    }
}