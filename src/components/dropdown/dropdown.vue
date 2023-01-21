<template>
  <button type="button">
    <span class="title">
      {{ title }}
    </span>
    <span>
      <i class="fa fa-sm fa-angle-down" />
    </span>
  </button>
  <ul class="menu">
    <li class="menu-item" v-for="item in data" :key="item">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "dropdown",
  props: ["button_title", "data_list"],
  computed: {
    title() {
      return this.$props.button_title;
    },
    data() {
      return this.$props.data_list;
    },
  },
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 8px;
  background: rgb(13, 110, 253);
}

button .title {
  margin-right: 3px;
}

.menu {
  display: none;
}

.menu-item {
  list-style: none;
}
</style>
