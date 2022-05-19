<template>
  <div class="header">
    <div class="container">
      <div class="top-nav">
        <div>
          <router-link :to="{name: 'home'}">
            <img src="@/assets/logo.png" alt="Drone Store">
          </router-link>
        </div>
        <input id="menu-toggle" type="checkbox"/>
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <div class="nav">
          <router-link :to="{name: 'home'}" class="nav-item">Головна</router-link>
          <router-link :to="{name: 'products'}" class="nav-item">Дрони</router-link>
          <router-link :to="{name: 'categories'}" class="nav-item">Категорії</router-link>
          <router-link :to="{name: 'cart'}" class="nav-item notification">
                    <span>
                        <img class="menu-icon" src="@/assets/cart.png" alt="Cart">
                    </span>
            <span class="badge">{{ getCountCartProducts }}</span>
          </router-link>
          <router-link :to="{name: 'favorites'}" class="nav-item notification">
                    <span>
                        <img class="menu-icon" src="@/assets/favorite.png" alt="Favorites">
                    </span>
            <span class="badge">{{ getCountFavorites }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "HeaderBar",
  methods: {
    ...mapActions(['fetchProductFromCart', 'fetchAllFavorites'])
  },
  mounted() {
    this.fetchProductFromCart();
    this.fetchAllFavorites()
  },
  computed: {
    ...mapGetters(['getCountFavorites', 'getCountCartProducts'])
  }
}
</script>

<style scoped>
.container {
  max-width: 1170px;
  margin: 0 auto;
}

.header {
  padding: 10px 25px;
  border-bottom: 2px solid rgba(204, 196, 196, 0.76);
}

.top-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  text-decoration: none;
  color: #000000;
  margin-left: 40px;
  overflow: hidden;
  font-size: 18px;
}

.nav-item:first-child {
  margin-left: 0;
}

.nav-item:last-child {
  margin-left: 26px;
}

.nav-item:hover {
  color: #575454;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #000000;
  position: absolute;
  height: 5px;
  width: 30px;

  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(19, 19, 19, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0;
  transform: rotate(-405deg);
}

.menu-icon {
  width: 35px;
  height: 35px;
}

.notification {
  padding: 14px;
  position: relative;
  display: inline-block;
}

.notification .badge {
  position: absolute;
  font-size: 16px;
  color: #ffffff;
  background: #090808;
  border-radius: 50%;
  padding: 3px 10px;
  top: 3px;
  right: 3px;
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 0;
    margin-top: 92px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle ~ .nav .nav-item {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  #menu-toggle:checked ~ .nav .nav-item {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .nav > .nav-item {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #595656;
  }

  .nav > .nav-item:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}
</style>