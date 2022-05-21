<template>
  <div class="product-section">
    <div class="container">
      <div class="product">
        <div class="product-img-section">
          <img class="product-img" :src="'http://192.168.1.104:8082/storage/' + product.filename" alt="Drone">
        </div>
        <div class="product-info">
          <h3 class="product-info-title">
            {{ product.title }}
          </h3>
          <p class="product-info-available">Наявність:
            <span v-if="product.available">Є в наявності</span>
            <span v-else>Немає в наявності</span>
          </p>
          <p class="product-info-price">Ціна: {{ product.price }}</p>
          <div class="product-btn">
            <button
                class="product-info-btn"
                @click="addToCart"
                :disabled="!product.available">Купити
            </button>
            <favorite-btn
                v-if="checkFavoriteById(product.product_id)"
                @click="removeFromFavorite(product.product_id)"
            >
              <img class="favorite-icon" src="@/assets/favorite.png" alt="Обране">
            </favorite-btn>
            <favorite-btn
                v-else
                @click="addToFavorite(product.product_id)"
            >
              <img class="favorite-icon" src="@/assets/unfavorite.png" alt="Обране">
            </favorite-btn>
          </div>
        </div>
      </div>
      <div class="product-description">
        <h3>Опис товару</h3>
        <p class="product-description-content">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";
import FavoriteBtn from "@/components/UI/FavoriteBtn";

export default {
  name: "Product",
  components: {FavoriteBtn},
  props: {
    product_id: {
      type: [Number, String],
      require: true
    }
  },
  data() {
    return {
      product: []
    }
  },
  computed: mapGetters(['getProductById', 'checkFavoriteById']),
  mounted() {
    this.product = this.getProductById(Number(this.product_id));
  },
  methods: {
    ...mapActions(['fetchAllFavorites', "fetchProductFromCart"]),

    addToFavorite(id) {
      axios.post(
          'http://localhost:8080/api/favorites/add',
          {'product_id': id}
      ).then(() => this.fetchAllFavorites());
    },

    removeFromFavorite(id) {
      axios.post(
          'http://localhost:8080/api/favorites/remove',
          JSON.stringify({'product_id': id})
      ).then(() => this.fetchAllFavorites());
    },

    addToCart() {
      const product = {
        product_id: Number(this.product_id),
        amount: 1,
        checked: false
      };

      let products = localStorage.getItem('droneCart');

      if (localStorage.getItem('droneCart') === null) {
        localStorage.setItem('droneCart', JSON.stringify([product]));
        alert('Товар додано до корзини')
        this.fetchProductFromCart();
        return this;
      }

      if (products !== null) {
        products = JSON.parse(products);
        if (products.find((p) => p.product_id === this.product.product_id && p.amount < this.product.amount)) {
          products = products.map((p) => {
            if (p.product_id === product.product_id) {
              p.amount = p.amount + 1;
              return p;
            }
            return p;
          });
          localStorage.setItem('droneCart', JSON.stringify(products));
          alert('Товар додано до корзини')
          this.fetchProductFromCart();
          return this;
        }

        if (!products.find((p) => p.product_id === this.product.product_id)) {
          products.push(product)
          localStorage.setItem('droneCart', JSON.stringify(products));
          alert('Товар додано до корзини')
          this.fetchProductFromCart();
          return this;
        }

        alert('Товар закінчився')
      }
    }
  },
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

.product-info-btn:disabled {
  background: #333333;
  color: white;
}

.product-info-btn:disabled:hover {
  background: #333333;
  color: white;
}

.product-info-btn:hover {
  background: #000000;
  color: #ffffff;
}

.product-description-content {
  text-align: justify;
}

.product-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.favorite-icon {
  height: 30px;
  width: 30px;
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