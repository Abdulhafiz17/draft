import { createStore } from "vuex";

const store = createStore({
  state() {
    return { loading: false };
  },
  actions: {
    setloading(ctx, loading) {
      ctx.commit("setloading", loading);
    },
  },
  mutations: {
    setloading(state, loading) {
      state.loading = loading;
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
  },
});

export default store;
