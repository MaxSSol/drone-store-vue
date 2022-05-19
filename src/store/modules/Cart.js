export default {
    actions: {
        fetchProductFromCart({ commit }) {
            const products = localStorage.getItem('droneCart');
            commit('setProductsToCart', JSON.parse(products))
        }
    },
    mutations: {
        setProductsToCart(state, products) {
            state.cart = products;
        }
    },
    getters: {
        getProductsFromCart(state) {
            return state.cart;
        },

        getCountCartProducts(state) {
            return state.cart.length;
        }
    },
    state: {
        cart: [],
    }
}