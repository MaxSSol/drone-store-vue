<template>
  <div class="cart" v-if="getProductsFromCart.length > 0">
    <div class="container">
      <h3 class="cart-title">Кошик</h3>
      <cart-list></cart-list>
      <cart-form></cart-form>
    </div>
  </div>
  <div v-else>
    <h1>Додайте товарів у корзину</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartList from "@/components/Cart/CartList";
import CartForm from "@/components/Cart/CartForm";

export default {
  name: "CartView",
  components: {CartList, CartForm},
  computed: mapGetters(['getProductsFromCart'])
}
</script>

<style scoped>

</style>