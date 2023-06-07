<template>
  <data-dropdown v-model="data" all />
</template>

<script>
import dataDropdown from "@/components/data-dropdown/data-dropdown.vue";
import api from "@/server/api";
export default {
  name: "Home",
  components: { dataDropdown },
  data() {
    return {
      data: null,
    };
  },
  created() {
    // api.get().then((res) => {
    //   console.log(res.data);
    // });
  },
};
</script>

<style lang="scss" scoped></style>
