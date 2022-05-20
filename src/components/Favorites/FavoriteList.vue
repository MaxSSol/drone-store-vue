<template>
  <div class="product-items">
    <favorite-item
      v-for="product in getFavoriteProducts"
      :key="product.product_id"
      :product="product"
    ></favorite-item>
  </div>
</template>

<script>
import FavoriteItem from "@/components/Favorites/FavoriteItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FavoriteList",
  components: {FavoriteItem},
  computed: mapGetters(['getFavoriteProducts']),
  methods: mapActions(['fetchAllFavorites']),
  mounted() {
    this.fetchAllFavorites()
  }
}
</script>

<style scoped>
.product-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

@media screen and (max-width: 872px) {
  .product-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 590px) {
  .product-items {
    grid-template-columns: 1fr;
  }
}
</style>