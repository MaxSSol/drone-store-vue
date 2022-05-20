import axios from "axios";

export default {
    actions: {
        fetchAllFavorites({ commit }) {
            axios.get('http://192.168.1.104:8082/api/favorites')
                .then(res => commit('setFavorites', res.data))
        },
    },
    mutations: {
        setFavorites(state, favorites) {
            state.favorites = favorites
        }
    },
    getters: {
        getCountFavorites(state) {
            return state.favorites.length;
        },

        checkFavoriteById: state => id => {
            return !!state.favorites.find(f => f.product_id === id);
        },

        getFavoriteProducts(state) {
            return state.favorites;
        }
    },
    state: {
        favorites: [],
    }
}