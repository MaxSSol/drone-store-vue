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
        <router-link :to="{name: 'product', params: {id: product.product_id}}" class="product-body-btn">
          Детальніше
        </router-link>
        <favorite-btn
            class="product-body-favorite-btn"
            v-if="checkFavoriteById(product.product_id)"
            @click="removeFromFavorite(product.product_id)"
        >
          <img class="favorite-icon" src="@/assets/favorite.png" alt="Обране">
        </favorite-btn>
        <favorite-btn
            class="product-body-favorite-btn"
            v-else
            @click="addToFavorite(product.product_id)"
        >
          <img class="favorite-icon" src="@/assets/unfavorite.png" alt="Обране">
        </favorite-btn>
      </div>
    </div>
  </div>
</template>

<script>
import favoriteBtn from "@/components/UI/FavoriteBtn";
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "FavoriteItem",
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  components: { favoriteBtn },
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

@media screen and (max-width: 590px) {
  .product-head {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>