<template>
  <div class="row">
    <div class="col-4 mb-1" v-for="item in 50">
      <card color="green">
        <h4>{{ item }}</h4>
      </card>
    </div>
  </div>
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
      data: "",
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
