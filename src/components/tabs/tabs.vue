<template>
  <div class="BUTTONS">
    <button
      v-for="(item, index) in tab_buttons"
      :key="item"
      :class="item == active_tab ? 'active' : ''"
      @click="
        active_tab = null;
        active_slot = null;
      "
      @click.passive="setTab(index)"
      :text="item"
    >
      <span>{{ item }}</span>
    </button>
  </div>
  <transition name="change-tab" mode="out-in">
    <div class="CONTENT" v-if="active_slot">
      <slot :name="active_slot" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "tabs",
  props: ["buttons", "slots"],
  data() {
    return {
      active_tab: this.$props.buttons[0],
      active_slot: this.$props.slots[0],
    };
  },
  computed: {
    tab_buttons() {
      return this.$props.buttons;
    },
    tab_slots() {
      return this.$props.slots;
    },
  },
  methods: {
    setTab(index) {
      this.active_tab = this.tab_buttons[index];
      this.active_slot = this.tab_slots[index];
    },
  },
};
</script>

<style scoped>
:root {
  --blue: rgb(13, 110, 253);
  --indigo: rgb(102, 16, 242);
  --purple: rgb(111, 66, 193);
  --pink: rgb(214, 51, 132);
  --red: rgb(220, 53, 69);
  --orange: rgb(253, 126, 20);
  --yellow: rgb(255, 193, 7);
  --green: rgb(25, 135, 84);
  --teal: rgb(32, 201, 151);
  --cyan: rgb(13, 202, 240);
  --color: rgb(245, 245, 245);
  --background: rgb(40, 40, 40);
}

.BUTTONS {
  display: flex;
  margin: 0 0 5px 0;
  padding: 5px;
  border: 1px solid var(--blue);
  border-radius: 10px;
  background: white;
  box-shadow: 0 5px 10px -5px var(--blue);
}

button {
  position: relative;
  flex: 1 1 0;
  padding: 3px 5px;
  border: none;
  color: black;
  background: initial;
}

button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  height: 100%;
  border-radius: 10px;
  background: var(--blue);
  transition: all 0.3s;
}

button.active::before {
  left: 0;
  right: 0;
}

button::after {
  content: attr(text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

button.active::after {
  color: white;
}

.CONTENT {
  padding: 10px;
  border: 1px solid var(--blue);
  border-radius: 10px;
  background: white;
  box-shadow: 0 5px 10px -5px var(--blue);
}

.change-tab-enter-active {
  transform-origin: top;
  animation: changeTab 0.2s ease;
}
.change-tab-leave-active {
  animation: changeTab 0.2s ease reverse;
}

@keyframes changeTab {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
  }
}
</style>
