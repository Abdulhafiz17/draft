<template>
  <i :class="icon"></i>
</template>

<script>
export default {
  name: "icon",
  props: { icon: "" },
};
</script>

<style scoped>
i {
  color: rgb(50, 50, 50);
}
</style>
