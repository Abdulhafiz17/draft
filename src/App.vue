<template>
  <div id="main">
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
import Login from "./views/Login/Login.vue";
import Isloading from "./components/animation/loading.vue";
export default {
  name: "App",
  components: { Login, Isloading },
  data() {
    return {
      mode: localStorage["mode"],
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
  created() {
    document.body.className = this.mode;
  },
  mounted() {},
};
</script>

<style lang="scss">
@import url(./components/style/main.css);
.router-enter-active {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.router-leave-active {
  animation: fadeOut 0.3s ease;
}

@keyframes fadeOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
