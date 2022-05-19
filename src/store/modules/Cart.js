export default {
    actions: {
        fetchProductFromCart({ commit }) {
            const products = localStorage.getItem('droneCart');
            if (JSON.parse(products) !== null) {
                commit('setProductsToCart', JSON.parse(products));
            }
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
            return state.cart.length === 0 ? 0 : state.cart.length;
        }
    },
    state: {
        cart: [],
    }
}