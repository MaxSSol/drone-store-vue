export default {
    actions: {
        fetchProductFromCart({ commit }) {
            const products = localStorage.getItem('droneCart');
            if (JSON.parse(products) !== null) {
                commit('setProductsToCart', JSON.parse(products));
                return this;
            }
            commit('setProductsToCart', []);
        }
    },
    mutations: {
        setProductsToCart(state, products) {
            state.cart = products;
        },

        setConfirmProductStatus(state) {
            state.confirmProductStatus = state.confirmProductStatus !== true;
        }
    },
    getters: {
        getProductsFromCart(state) {
            return state.cart;
        },

        getCountCartProducts(state) {
            let count = state.cart.map(p => p.amount);
            return count.reduce((a, b) => a + b, 0);
        },

        getConfirmStatus(state) {
            return state.confirmProductStatus;
        }
    },
    state: {
        cart: [],
        confirmProductStatus: false
    }
}