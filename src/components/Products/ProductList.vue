<template>
  <div class="product-items">
    <products-item
        v-for="product in products"
        :key="product.product_id"
        :product="product"
    >
    </products-item>
  </div>
</template>

<script>
import ProductsItem from "@/components/Products/ProductsItem";
export default {
  name: "ProductList",
  components: {ProductsItem},
  props: {
    products: {
      type: [Array],
      require: true
    }
  }
}
</script>

<style>
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