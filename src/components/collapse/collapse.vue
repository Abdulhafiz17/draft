<template>
  <transition name="COLLAPSE">
    <div class="COLLAPSE-BODY" v-if="active">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "collapse",
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    buttons() {
      return document.querySelectorAll(`[toggle-collapse="${this.$props.id}"]`);
    },
  },
  mounted() {
    this.buttons.forEach((button) => {
      button.onclick = () => {
        this.active = !this.active;
      };
    });
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
}

.COLLAPSE-enter-active,
.COLLAPSE-leave-active {
  transition: all 0.2s;
}

.COLLAPSE-enter-active {
  transform-origin: top;
  animation: toggleCollapse 0.2s ease;
}

.COLLAPSE-leave-active {
  animation: toggleCollapse 0.2s ease reverse;
}

@keyframes toggleCollapse {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.COLLAPSE-BODY {
  margin-top: 5px;
  padding: 10px;
  border: thin solid var(--blue);
  border-radius: 10px;
  background: white;
}
</style>
