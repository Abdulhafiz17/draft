<template>
  <div :id="id" class="DROPDOWN">
    <slot />
    <transition name="DROPDOWN">
      <div class="DROPDOWN-MENU" @scroll="$emit('scroll')" v-if="open">
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
      return;
    };
    window.onclick = (event) => {
      if (event.target !== this.toggle) {
        this.open = false;
      }
      return;
    };
  },
};
</script>

<style scoped>
.DROPDOWN {
  position: relative;
}

.DROPDOWN-MENU {
  position: absolute;
  left: 0;
  right: 0;
  max-height: 20vh;
  margin-top: 5px;
  padding: 5px;
  background: var(--background);
  border: thin solid var(--blue);
  border-radius: 5px;
  overflow: auto;
  z-index: 1;
}

.DROPDOWN-enter-active {
  transform-origin: top;
  animation: toggleDropdown 0.15s ease;
}

.DROPDOWN-leave-active {
  transform-origin: top;
  animation: toggleDropdown 0.15s ease reverse;
}

@keyframes toggleDropdown {
  from {
    opacity: 0;
    translate: 0 -10px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
</style>
