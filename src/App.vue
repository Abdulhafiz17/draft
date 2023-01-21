<template>
  <Login v-if="$route.name == 'login'" />
  <div id="main" class="container-fluid p-3" v-if="$route.name !== 'login'">
    <Router-view v-slot="{ Component, route }">
      <transition name="router" mode="out-in">
        <div :key="route.path">
          <component :is="Component"></component>
        </div>
      </transition>
    </Router-view>
  </div>
  <Isloading v-if="loading" />
  <span id="mouse" />
</template>

<script>
import Login from "./views/Login/Login.vue";
import Isloading from "./components/animation/loading.vue";
export default {
  name: "App",
  components: { Login, Isloading },
  data() {
    return {};
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
  created() {
    // window.onkeyup = (event) => {
    //   if (event.key == "F12") {
    //     window.onkeyup(event);
    //   }
    //   console.log(event);
    // };
  },
  mounted() {
    window.onmousemove = (event) => {
      let mouse = document.getElementById("mouse");
      mouse.style.top = event.x;
      mouse.style.left = event.y;
    };
  },
};
</script>

<style lang="scss">
@import url(./components/style/main.css);
.router-enter-active {
  // transform-origin: top;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  // 0% {
  //   transform: translate(-150%, -100%);
  // }
  // 50% {
  //   transform: translate(-150%, 0);
  // }
  // 100% {
  //   transform: translate(0, 0);
  // }
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
  // from {
  //   transform: translate(0, 0);
  // }
  // to {
  //   transform: translate(-150%, 0) rotate(-90deg);
  // }

  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}

#mouse {
  position: fixed;
  width: 10px;
  height: 10px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 50%;
  box-shadow: 0 0 10px -5px gray;
  z-index: 9999999999;
}
</style>
