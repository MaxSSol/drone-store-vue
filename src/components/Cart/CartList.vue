<template>
  <div class="cart-list">
    <table class="table">
      <thead>
      <tr>
        <td>Фото</td>
        <td>Найменування товару</td>
        <td>Кількість</td>
        <td>Ціна</td>
        <td>Разом</td>
      </tr>
      </thead>
      <tbody>
        <cart-item v-for="product in getProductsFromCart"
          :key="product.product_id"
          :cart-product="product"
          :product="getProductById(product.product_id)"
        >
        </cart-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import CartItem from "@/components/Cart/CartItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {CartItem},
  computed: mapGetters(['getProductsFromCart', 'getProductById']),
  methods: mapActions(['fetchProductFromCart', 'fetchAllProducts']),
  mounted() {
    this.fetchProductFromCart();
    this.fetchAllProducts();
  }
}
</script>

<style scoped>
.cart-list {
  display: block;
  width: 100%;
  overflow-x: auto;
}

.table {
  width: 100%;
  padding: 10px;
}

.table thead{
  background: #ececec;
}
</style>