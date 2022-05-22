<template>
  <div class="customer-info" v-show="getConfirmStatus">
    <h3>Покупець</h3>
    <Form v-slot="{ errors }" @submit="addOrder">
      <div class="input-group">
        <Field
            :rules="isRequired"
            class="customer-input"
            type="email"
            id="customer-email"
            name="email"
            v-model="customer.email"
        />
        <span>{{ errors.email }}</span>
        <label for="customer-email">Email</label>
      </div>
      <div class="input-group">
        <Field
            class="customer-input"
            type="text"
            id="customer-first-name"
            name="first_name"
            v-model="customer.first_name"
            :rules="isRequired"
        />
        <span>{{ errors.first_name }}</span>
        <label for="customer-first-name">Ім'я</label>
      </div>
      <div class="input-group">
        <Field
            class="customer-input"
            type="text"
            id="customer-last-name"
            name="last_name"
            v-model="customer.last_name"
            :rules="isRequired"
        />
        <span>{{ errors.last_name }}</span>
        <label for="customer-last-name">Прізвище</label>
      </div>
      <div class="input-group">
        <Field
            class="customer-input"
            type="text"
            id="customer-tel"
            name="tel"
            v-model="customer.tel"
            :rules="checkTel"
        />
        <span>{{ errors.tel }}</span>
        <label for="customer-tel">Телефон</label>
      </div>
      <div class="btn-group">
        <button class="customer-submit">Оформити замовлення</button>
      </div>
    </Form>
  </div>
</template>

<script>
import {Field, Form} from 'vee-validate';
import {mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "CartForm",
  components: {
    Field,
    Form,
  },
  data() {
    return {
      customer: {
        first_name: '',
        last_name: '',
        tel: '',
        email: '',
      }
    }
  },
  computed: mapGetters([
      'getProductsFromCart',
    'getCountCartProducts',
    'getConfirmStatus'
  ]),
  methods: {
    ...mapActions(['fetchProductFromCart']),
    isRequired(value) {
      return value ? true : 'Дане поле є обов\'язковим';
    },

    checkTel(value) {
      if (!value) {
        return 'Дане поле є обов\'язковим';
      }
      const regex = /^([+]{0,1}380)\d{9}$/;

      if (!regex.test(value)) {
        return 'Номер телефону повинен починатися з +380'
      }
      return true;
    },

    addOrder() {
      let productsFromCart = JSON.parse(JSON.stringify(this.getProductsFromCart));
      productsFromCart = productsFromCart.map(p => {
        return {product_id: p.product_id, amount: p.amount}
      })
      axios.post('http://localhost:8080/api/orders/add', productsFromCart)
          .then(() => {
            localStorage.removeItem('droneCart');
            alert('Замовлення прийнято');
            this.fetchProductFromCart();
            this.$router.push('/');
          })
    }
  }
}
</script>

<style scoped>
.input-group {
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  max-width: 600px;
}

.input-group input {
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid rgba(61, 59, 59, 0.84);
}

.btn-group {
  margin: 10px auto 0 auto;
  max-width: 600px;
}

.customer-submit {
  cursor: pointer;
  background: #ffffff;
  border: 1px solid rgba(61, 59, 59, 0.84);
  padding: 5px 15px;
  border-radius: 10px;
  outline: none;
  transition: .2s linear;

  font-size: 15px;
}

.customer-submit:hover {
  background: #000000;
  color: #ffffff;
}

span {
  color: red;
}
</style>