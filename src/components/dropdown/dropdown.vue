<template>
  <div :id="id" class="DROPDOWN">
    <slot />
    <transition name="DROPDOWN">
      <div
        class="DROPDOWN-MENU"
        @click="open = false"
        @scroll="$emit('scroll')"
        v-if="open"
      >
        <slot name="menu" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: { id: { required: true } },
  emits: ["scroll"],
  data() {
    return {
      open: false,
    };
  },
  computed: {
    toggle() {
      return document
        .querySelector(`#${this.$props.id}`, `.DROPDOWN`)
        .querySelector("[toggle-dropdown]");
    },
  },
  mounted() {
    this.toggle.onclick = () => {
      this.open = !this.open;
    };
  },
};
</script>

<style scoped>
.DROPDOWN {
  position: relative;
  border: thin solid red;
}

.DROPDOWN-MENU {
  position: absolute;
  left: 0;
  right: 0;
  max-height: 20vh;
  margin-top: 5px;
  overflow: auto;
  background: rgb(0, 0, 0);
  border: thin solid red;
  z-index: 1;
}

.DROPDOWN-enter-active {
  transform-origin: top;
  animation: toggleDropdown 0.2s ease;
}

.DROPDOWN-leave-active {
  transform-origin: top;
  animation: toggleDropdown 0.2s ease reverse;
}

@keyframes toggleDropdown {
  from {
    opacity: 0;
    scale: 0;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
</style>
