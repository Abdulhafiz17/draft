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
    <tabs
      :buttons="[`Home`, `Profile`, `Setting`]"
      :slots="[`home`, `profile`, `setting`]"
    >
      <template #home> <h1>home</h1> </template>
      <template #profile> <h1>profile</h1> </template>
      <template #setting> <h1>setting</h1> </template>
    </tabs>
  </div>
</template>

<script>
import * as api from "../../utils/api/api.js";
import * as utils from "../../utils/utils.js";
import * as schema from "../../utils/schema.js";
export default {
  name: "Home",
  emits: ["setloading"],
  data() {
    return {
      utils,
      data: null,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
