<template>
  <h1>Дрони</h1>
  <product-list class="products" :products="getAllProducts"></product-list>
</template>

<script>
import HeaderBar from "@/components/Headers/HeaderBar";
import ProductList from "@/components/Products/ProductList";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductsView",
  components: {ProductList, HeaderBar},
  computed: mapGetters(['getAllProducts']),
  methods: mapActions(['fetchAllProducts']),
  mounted() {
    this.fetchAllProducts()
  }
}
</script>

<style scoped>
.products {
  margin-top: 50px;
}
</style>