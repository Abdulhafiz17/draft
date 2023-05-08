<template>
  <button :name="title" @click="router()">
    <icon :icon="icon" />
  </button>
</template>

<script>
export default {
  name: "sidebarItem",
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    link: { type: String, required: true },
  },
  emits: {
    click: null,
  },
  methods: {
    router() {
      this.$emit("click");
      this.$router.push(this.$props.link);
    },
  },
};
</script>

<style scoped>
button {
  padding: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  border-radius: 5px;
  outline: none;
  flex: 0 1 auto;
  transition: inherit;
}

button:hover {
  background-color: white;
  box-shadow: 0 0 10px -1px gray;
}

button::before {
  content: attr(name);
  position: absolute;
  left: 110%;
  padding: 5px;
  width: max-content;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  z-index: 2;
}

button::after {
  content: "";
  position: absolute;
  left: 100%;
  padding: 5px;
  background-color: white;
  border: 1px solid gray;
  rotate: 45deg;
  z-index: 1;
}

button::before,
button::after {
  scale: 0;
  transition: inherit;
}

button:hover::before,
button:hover::after {
  scale: 1;
}
</style>
