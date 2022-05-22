<template>
  <h1>Категорія: {{ category.title }}</h1>
  <product-list class="container"
    :products="getCategoryProducts"
  ></product-list>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductList from "@/components/Products/ProductList";

export default {
  name: "CategoryProductsVies",
  components: {ProductList},
  props: {
    id: {
      require: true
    }
  },
  data() {
    return {
      category: []
    }
  },
  computed: mapGetters(['getCategoryProducts', 'getCategoryById']),
  methods: mapActions(['fetchCategoryProducts']),
  mounted() {
    this.fetchCategoryProducts(this.id)
    this.category = this.getCategoryById(Number(this.id))
  }
}
</script>

<style scoped>
.container {
  max-width: 1170px;
  margin: 50px auto 0 auto;
}
</style>