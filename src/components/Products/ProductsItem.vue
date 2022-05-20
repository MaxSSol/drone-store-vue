<template>
  <div class="product-item">
    <div class="product-head">
      <img class="product-head-img" :src="'http://192.168.1.104:8082/storage/' + product.filename" alt="Drone">
      <h3 class="product-head-title">
        {{ product.title }}
      </h3>
    </div>
    <div class="product-body">
      <p class="product-body-price">
        {{ product.price }} грн
      </p>
      <div class="product-body-buttons">
        <router-link :to="{name: 'product', params: {'id': product.product_id}}" class="product-body-btn">
          Детальніше
        </router-link>
        <button
            class="product-body-favorite-btn"
            v-if="checkFavoriteById(product.product_id)"
            @click="removeFromFavorite(product.product_id)"
        >
          <img class="favorite-icon" src="@/assets/favorite.png" alt="Обране">
        </button>
        <button
            class="product-body-favorite-btn"
            v-else
            @click="addToFavorite(product.product_id)"
        >
          <img class="favorite-icon" src="@/assets/unfavorite.png" alt="Обране">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import axios from "axios";

export default {
  name: "ProductsItem",
  props: [
    'product'
  ],
  data() {
    return {
      favorites: true
    }
  },
  computed: {
    ...mapGetters(['checkFavoriteById'])
  },
  methods: {
    ...mapActions(['fetchAllFavorites']),

    addToFavorite(id) {
      axios.post(
          'http://localhost:8080/api/favorites/add',
          {'product_id': id}
      ).then(() => this.fetchAllFavorites());
    },

    removeFromFavorite(id) {
      axios.post(
          'http://localhost:8080/api/favorites/remove',
          JSON.stringify({'product_id': id})
      ).then(() => this.fetchAllFavorites());
    },
  }
}
</script>

<style scoped>
.product-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ececec;
  padding: 10px;
}

.product-head-img {
  height: 262px;
  width: 262px;
}

.product-body-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-body-favorite-btn {
  cursor: pointer;
  border: none;
  background: transparent;
  margin-left: 20px;
}

.product-body-btn {
  border: 1px solid #ececec;
  padding: 5px;
  text-decoration: none;
  color: #444444;
  transition: .2s linear;
}


.product-body-btn:hover {
  background-color: #000000;
  color: #ffffff;
}

.favorite-icon {
  height: 20px;
  width: 20px;
}
</style>