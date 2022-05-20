<template>
  <div class="customer-info">
    <h3>Покупець</h3>
    <div>
      <div class="input-group">
        <input class="customer-input" type="email" id="customer-email">
        <label for="customer-email">Email</label>
      </div>
      <div class="input-group">
        <input class="customer-input" type="text" id="customer-first-name">
        <label for="customer-first-name">Ім'я</label>
      </div>
      <div class="input-group">
        <input class="customer-input" type="text" id="customer-last-name">
        <label for="customer-last-name">Прізвище</label>
      </div>
      <div class="input-group">
        <input class="customer-input" type="text" id="customer-tel">
        <label for="customer-tel">Телефон</label>
      </div>
      <div class="btn-group">
        <button class="customer-submit">Оформити замовлення</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartForm"
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
</style>