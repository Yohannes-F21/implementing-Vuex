import { createStore } from 'vuex';
import productModule from './modules/productsModule/index.js';
import cartModule from './modules/cartModule/index.js';
const store = createStore({
  modules: {
    productsState: productModule,
    cartState: cartModule,
  },
});

export default store;
