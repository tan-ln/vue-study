const state = {
    items: [],
    checkoutStatus: null
}

const actions = {
    addProductToCart({ state, commit }, product) {
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            commit('decrementProductInventory', { id: product.id })
        } 
    }
}

// getter 对state 的计算或处理
// rootState 代表全局
// Getter 也可以接受其他 getter 作为第二个参数：
const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                id: product.id,
                title: product.title,
                quantity,
                price: product.price
            }
        })
    },
    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.quantity*product.price
        }, 0)
    }
}

const mutations = {
    pushProductToCart(state, { id }) {
        state.items.push({
            id: id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, { id }) {
        // console.log(id)
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    }

}


export default {
    state,
    actions,
    getters,
    mutations,
}