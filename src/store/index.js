import { createStore } from 'vuex'
import Product from '@/store/modules/Product';
import Favorite from '@/store/modules/Favorite';
import Cart from '@/store/modules/Cart';

export default createStore({
  modules: {
    Product,
    Favorite,
    Cart
  }
})
