import { createStore } from "vuex";

const store = createStore({
  state() {
    return { loading: false, sidebar: true };
  },
  actions: {
    setloading(ctx, loading) {
      ctx.commit("setloading", loading);
    },
    toggleSidebar(ctx, sidebar) {
      ctx.commit("toggleSidebar", sidebar);
    },
  },
  mutations: {
    setloading(state, loading) {
      state.loading = loading;
    },
    toggleSidebar(state, sidebar) {
      state.sidebar = sidebar;
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    sidebar(state) {
      return state.sidebar;
    },
  },
});

export default store;
