import axios from "axios";

export default {
    actions: {
        fetchAllProducts({ commit }) {
            axios.get('http://192.168.1.104:8082/api/products').
            then(res => commit('setProducts', res.data))
        }
    },
    mutations: {
        setProducts(state, products) {
            state.products = products
        }
    },
    getters: {
        getAllProducts(state) {
            return state.products;
        }
    },
    state: {
        products: []
    }
}