<template>
  <div :id="id" class="DROPDOWN">
    <slot></slot>
    <transition name="DROPDOWN">
      <div class="DROPDOWN-MENU" @scroll="$emit('scroll')" v-if="open">
        <div class="responsive-y" style="max-height: 25vh">
          <slot name="menu"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: { id: { required: true } },
  emits: { scroll: null },
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
    window.onclick = (event) => {
      if (event.target !== this.toggle) {
        this.open = false;
      }
    };
  },
};
</script>

<style>
.DROPDOWN {
  position: relative;
}

.DROPDOWN-MENU {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 5px;
  padding: 5px;
  max-height: max-content;
  background: var(--background);
  border: thin solid var(--blue);
  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
}

.DROPDOWN-enter-active {
  animation: toggleDropdown 0.15s ease;
}

.DROPDOWN-leave-active {
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
