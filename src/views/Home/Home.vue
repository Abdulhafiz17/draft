<template>
  <div class="row">
    <div class="col-md-3 my-1">
      <router-link to="/todo">
        <card color="green">
          <h4>ToDo</h4>
        </card>
      </router-link>
    </div>
    <div class="col-md-3 my-1">
      <router-link to="/supply">
        <card color="green">
          <h4>Count supply</h4>
        </card>
      </router-link>
    </div>
    <div class="col-md-3 my-1">
      <router-link to="/chat">
        <card color="green">
          <h4>Chat</h4>
        </card>
      </router-link>
    </div>
    <div class="col-md-3 my-1">
      <router-link to="/setting">
        <card color="green">
          <h4>Setting</h4>
        </card>
      </router-link>
    </div>
  </div>
  <div class="w-25">
    <data-dropdown v-model="data" all />
  </div>
</template>

<script>
import dataDropdown from "@/components/data-dropdown/data-dropdown.vue";
export default {
  name: "Home",
  components: { dataDropdown },
  data() {
    return {
      data: "",
    };
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
