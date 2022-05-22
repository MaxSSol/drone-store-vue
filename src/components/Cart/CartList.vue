<template>
  <div class="cart-list" v-if="!getConfirmStatus">
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
    <button class="confirm-btn" @click="confirmStatus">Підтвердити замовлення</button>
  </div>
  <div v-show="getConfirmStatus">
    <button class="confirm-btn" @click="confirmStatus">Змінити замовлення</button>
    <h3>Надайте наступну інформацію</h3>
  </div>
</template>

<script>
import CartItem from "@/components/Cart/CartItem";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "CartList",
  components: {CartItem},
  computed: mapGetters(['getProductsFromCart', 'getProductById', 'getConfirmStatus']),
  methods: {
    ...mapActions(['fetchProductFromCart', 'fetchAllProducts']),
    ...mapMutations(['setConfirmProductStatus']),

    confirmStatus() {
      this.setConfirmProductStatus();
    }
  },
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

.confirm-btn {
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 15px;
  border: 1px solid #444444;
  padding: 5px 15px;
  border-radius: 5px;
}

.confirm-btn:hover {
  background: #333333;
  color: white;
}
</style>