import axios from "axios";

export default {
    actions: {
        fetchCategories({ commit }) {
            axios.get('http://localhost:8080//api/categories')
                .then(res => commit('setCategories', res.data))
        },

        fetchCategoryProducts({ commit }, id) {
            axios.get('http://localhost:8080//api/categories/products/' + id)
                .then(res => commit('setCategoryProducts', res.data))
        }
    },
    mutations: {
        setCategories(state, categories) {
            state.categories = categories
        },
        setCategoryProducts(state, products) {
            state.categoryProducts = products
        }
    },
    getters: {
        getAllCategories(state) {
            return state.categories;
        },

        getCategoryProducts(state) {
            return state.categoryProducts;
        },

        getCategoryById: state => id => {
            return state.categories.find(c => c.category_id === id)
        }
    },
    state: {
        categories: [],
        categoryProducts: []
    }

}