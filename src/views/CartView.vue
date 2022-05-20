<template>
  <div class="cart">
    <div class="container">
      <h3 class="cart-title">Кошик</h3>
      <cart-list></cart-list>
    </div>
  </div>
</template>

<script>
import CartList from "@/components/Cart/CartList";
export default {
  name: "CartView",
  components: {CartList}
}
</script>

<style scoped>

</style>