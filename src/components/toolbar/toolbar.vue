<template>
  <div class="TOOLBAR" :class="{ CHANGE: scroll }">
    <h4>{{ $util.captalize($route.name) }}</h4>
    <div class="BUTTONS">
      <div class="OPTION-BUTTONS">
        <button>button</button>
      </div>
      <div class="DEFAULT-BUTTONS">
        <button v-if="small">
          <i class="fa fa-bars"></i>
        </button>
        <button @click="toggleSidebar()">
          <i class="fa fa-bars"></i>
        </button>
        <button>
          <i class="fa fa-sign-out"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toolbar",
  data() {
    return {
      scroll: false,
    };
  },
  computed: {
    main() {
      return document.getElementById("main");
    },
    small() {
      if (window.innerWidth <= 768) return true;
      else return false;
    },
  },
  mounted() {
    this.main.onscroll = () => {
      if (this.main.scrollTop > 20) this.scroll = true;
      else this.scroll = false;
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch("toggleSidebar", !this.$store.getters.sidebar);
    },
  },
};
</script>

<style scoped>
.TOOLBAR {
  position: absolute;
  top: 1%;
  left: 1%;
  right: 1%;
  padding: 5px;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  backdrop-filter: blur(3px);
  border: 1px solid transparent;
  border-radius: 5px;
  transition: 0.3s all;
  z-index: 1;
}

.CHANGE {
  background-color: rgb(250, 250, 250, 0.7);
  border-color: var(--teal);
}

button {
  padding: 5px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  border-radius: 5px;
  outline: none;
  flex: 0 1 auto;
  transition: 0.3s all;
}

button:hover {
  background-color: white;
  box-shadow: 0 0 10px -1px gray;
}

.BUTTONS {
  display: flex;
}

.OPTION-BUTTONS,
.DEFAULT-BUTTONS {
  display: flex;
}

.DEFAULT-BUTTONS button {
  width: 25px;
  height: 25px;
}
</style>
