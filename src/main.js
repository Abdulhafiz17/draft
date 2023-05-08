import { createApp } from "vue";
import App from "./App.vue";
import util from "./server/util";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store";
import VWave from "v-wave";
import tabs from "./components/tabs/tabs.vue";
import collapse from "./components/collapse/collapse.vue";
import dropdown from "./components/dropdown/dropdown.vue";
import card from "./components/card/card.vue";
import modal from "./components/modal/modal.vue";
import btn from "./components/button/button.vue";
import icon from "./components/icon/icon.vue";

const app = createApp(App);

app.config.globalProperties.$util = util;

app
  .use(router)
  .use(VWave)
  .use(store)
  .component("tabs", tabs)
  .component("collapse", collapse)
  .component("dropdown", dropdown)
  .component("card", card)
  .component("modal", modal)
  .component("btn", btn)
  .component("icon", icon)
  .mount("#app");
