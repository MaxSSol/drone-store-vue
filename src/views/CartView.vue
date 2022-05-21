<template>
  <div class="cart">
    <div class="container">
      <h3 class="cart-title">Кошик</h3>
      <cart-list></cart-list>
      <cart-form></cart-form>
    </div>
  </div>
</template>

<script>
import CartList from "@/components/Cart/CartList";
import CartForm from "@/components/Cart/CartForm";

export default {
  name: "CartView",
  components: {CartList, CartForm}
}
</script>

<style scoped>

</style>