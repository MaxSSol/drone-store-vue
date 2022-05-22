<template>
  <tr>
    <td>
      <img class="cart-item-img" :src="'http://192.168.1.104:8082/storage/' + product.filename" alt="{{product.title}}">
    </td>
    <td>{{ product.title }}</td>
    <td>
      <div class="cart-actions">
        <input type="number" v-model="cartProduct.amount" min="1" :max="product.amount">
        <button class="btn" @click="removeProductFromCart">
          <img class="remove-icon" src="@/assets/remove-cart.png" alt="Видалити">
        </button>
      </div>
    </td>
    <td>{{ product.price }}</td>
    <td>{{ cartProduct.amount * product.price }}</td>
  </tr>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      require: true
    },
    cartProduct: {
      type: Object,
      require: true
    }
  },
  methods: {
    ...mapActions(['fetchProductFromCart']),

    removeProductFromCart() {
      let storage = localStorage.getItem('droneCart');
      let products = JSON.parse(storage);
      products = products.filter(p => p.product_id !== this.cartProduct.product_id);
      localStorage.removeItem('droneCart');
      localStorage.setItem('droneCart', JSON.stringify(products));
      this.fetchProductFromCart();
    }
  },
  watch: {
    'cartProduct.amount'(newVal) {
      let storage = localStorage.getItem('droneCart');
      let products = JSON.parse(storage);
      products.find(p => {
        if (p.product_id === this.cartProduct.product_id) {
          p.amount = newVal;
          return p;
        }
        return p;
      })
      localStorage.removeItem('droneCart');
      localStorage.setItem('droneCart', JSON.stringify(products));
      this.fetchProductFromCart();
    }
  }
}
</script>

<style scoped>
.cart-item-img {
  height: 50px;
  width: 50px;
}

.cart-actions {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  cursor: pointer;
  background: transparent;
  border: transparent;
  margin-left: 15px;
}

.remove-icon {
  height: 25px;
  width: 25px;
}

</style>