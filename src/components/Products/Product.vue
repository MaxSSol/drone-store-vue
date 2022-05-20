<template>
  <div class="product-section">
    <div class="container">
      <div class="product">
        <div class="product-img-section">
          <img class="product-img" :src="'http://192.168.1.104:8082/storage/' + product.filename" alt="Drone">
        </div>
        <div class="product-info">
          <h3 class="product-info-title">
            {{product.title}}
          </h3>
          <p class="product-info-available">Наявність:
            <span v-if="product.available">Є в наявності</span>
            <span v-else>Немає в наявності</span>
          </p>

          <p class="product-info-price">Ціна: {{ product.price }}</p>
          <a href="#" class="product-info-btn" @click="addToCart">Купити</a>
        </div>
      </div>
      <div class="product-description">
        <h3>Опис товару</h3>
        <p class="product-description-content">
          {{product.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Product",
  props: {
    product_id: {
      type: Number,
      require: true
    }
  },
  data() {
    return {
      product: []
    }
  },
  computed: mapGetters(['getProductById']),
  mounted() {
     this.product = this.getProductById(Number(this.product_id));
  }
}
</script>

<style scoped>
.product {
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
}

.product-info-title {
  font-size: 25px;
  font-weight: normal;
}

.product-info-available {
  font-size: 18px;
}

.product-info-available span {
  color: #1a7905;
}

.product-info-price {
  font-size: 18px;
  font-weight: bold;
}

.product-info-btn {
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  border: 1px solid #444444;
  padding: 5px 15px;
  border-radius: 5px;
}

.product-info-btn:hover {
  background: #000000;
  color: #ffffff;
}

.product-description-content {
  text-align: justify;
}

@media screen and (max-width: 900px) {
  .product-img {
    width: 700px;
  }
  .product {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 773px) {
  .product-img {
    width: 500px;
  }
}

@media screen and (max-width: 555px) {
  .product-img {
    width: 300px;
  }
}
</style>