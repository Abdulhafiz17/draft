<template>
  <h3>Chat</h3>
</template>

<script>
import api from "@/server/api";
export default {
  name: "Home",
  emits: ["setloading"],
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.responsive-y {
  height: 80vh;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.input-row {
  position: absolute;
  left: 5%;
  right: 5%;
  bottom: 1%;
  width: 90%;
}

.coming-enter-active,
.coming-leave-active {
  transition: all 0.15s ease;
}
.coming-enter-from,
.coming-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
