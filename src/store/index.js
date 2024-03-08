import { createStore } from 'vuex';
import productModule from './modules/productsModule/index.js';
const store = createStore({
  modules: {
    products: productModule,
    //   cart: cartModule,
  },
});

export default store;
