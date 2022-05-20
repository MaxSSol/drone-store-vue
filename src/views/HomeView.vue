<template>
  <div class="hits-sale">
    <div class="container">
      <h1 class="hits-sale-title">Хіти продажу</h1>
      <product-list :products="getAllProducts"></product-list>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/Products/ProductList";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'HomeView',
  components: {ProductList},
  methods: mapActions(['fetchAllProducts']),
  computed: mapGetters(['getAllProducts']),
  mounted() {
    this.fetchAllProducts()
  }

}
</script>

<style scoped>
.container {
  max-width: 1170px;
  margin: 0 auto;
}

.hits-sale-title {
  text-align: center;
  color: #f60e0e;
}
</style>
