export default {
  //   namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      //   console.log(payload.productData);// it's working
      const productInCartIndex = state.cart.items.findIndex(
        (ci) => ci.productId === payload.productData.id
      );
      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.productData.id,
          title: payload.productData.title,
          image: payload.productData.image,
          price: payload.productData.price,
          qty: 1,
        };
        // console.log(newItem);// also works
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += payload.productData.price;
    },
  },
  actions: {},
  getters: {
    counter(state) {
      return state.cart.qty;
    },
  },
};
