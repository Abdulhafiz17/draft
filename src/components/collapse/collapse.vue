<template>
  <div class="DETAILS">
    <button @click="collapse = !collapse">
      <slot name="header" />
      <span>
        <i :class="`fa fa-lg fa-${collapse ? `minus` : `plus`}`" />
      </span>
    </button>
    <transition name="COLLAPSE">
      <div class="DETAILS-BODY" v-if="collapse">
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "collapse",
  data() {
    return {
      collapse: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.COLLAPSE-enter-active,
.COLLAPSE-leave-active {
  transform-origin: top;
  transition: all 0.2s;
}

.COLLAPSE-enter-active {
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

.DETAILS {
  margin: 3px 0;
  padding: 0;
}

.DETAILS > button {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid rgb(13, 110, 253);
  border-radius: 10px;
  background: white;
}

.DETAILS > button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.DETAILS .DETAILS-BODY {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid rgb(13, 110, 253);
  border-radius: 10px;
  background: white;
}
</style>
