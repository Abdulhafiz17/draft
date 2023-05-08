<template>
  <toolbar v-if="$route.name !== 'login'" />
  <sidebar v-if="$route.name !== 'login'" />
  <div id="main" :style="[{ marginLeft: margin, paddingTop: padding }]">
    <Router-view v-slot="{ Component, route }">
      <transition name="router" mode="out-in">
        <div :key="route.path">
          <component :is="Component"></component>
        </div>
      </transition>
    </Router-view>
  </div>
  <Isloading v-if="loading" />
</template>

<script>
import toolbar from "./components/toolbar/toolbar.vue";
import sidebar from "./components/sidebar/sidebar.vue";
import Isloading from "./components/animation/loading.vue";
export default {
  name: "App",
  components: { toolbar, sidebar, Isloading },
  data() {
    return {
      mode: localStorage["mode"],
    };
  },
  computed: {
    sidebar() {
      return this.$store.getters.sidebar;
    },
    loading() {
      return this.$store.getters.loading;
    },
    margin() {
      if (this.sidebar && this.$route.name !== "login") return "60px";
      else return "";
    },
    padding() {
      if (this.$route.name !== "login") return "7vh";
      else return "";
    },
  },
  created() {
    document.body.className = this.mode || "";
  },
  mounted() {},
};
</script>

<style lang="scss">
@import url(./components/style/main.css);

.router-enter-from,
.router-leave-to {
  opacity: 0;
}
</style>
