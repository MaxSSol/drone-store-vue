<template>
  <tr>
    <td>
      <img class="cart-item-img" :src="'http://192.168.1.104:8082/storage/' + product.filename" alt="{{product.title}}">
    </td>
    <td>{{ product.title }}</td>
    <td>{{product.amount}}</td>
    <td>{{product.price}}</td>
    <td>{{product.amount * product.price}}</td>
  </tr>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.cart-item-img {
  height: 50px;
  width: 50px;
}
</style>