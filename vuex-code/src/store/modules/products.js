import shop from '../../api/shop'

// store 里的一间库房 modules
// 搬运 actions 动作 异步
// 物品 state 状态 数据
// getters 获取数据的 get 方法 例如对列表进行过滤并计数 可以认为是 store 的计算属性
// mutations 改变状态的方法 state.count++ 记账 

const state = {
    all: []
}

const getters = {}

const actions = {
    // commit 提交 mutation
    // getAllProducts ({ commit }) {}
    getAllProducts () {
        console.log('取货')
        shop.getProducts(res => {
            console.log('拿到货回来了，mutation 可以改变 state 状态，数据数组、数量count++')
            this.commit('setProducts', res)
        })
    },

}

const mutations = {
    setProducts (state, products) {
        console.log('入库验收')
        state.all = products
    },
    // 将传入的product解构出 id
    decrementProductInventory(state, { id }) {
        const product = state.all.find(prod => prod.id === id)
        // console.log(product)
        product.inventory--
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}