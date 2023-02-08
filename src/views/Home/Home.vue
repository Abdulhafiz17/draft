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
  <tabs
    :buttons="[`Home`, `Profile`, `Setting`]"
    :slots="[`home`, `profile`, `setting`]"
  >
    <template #home>
      <h1>Home</h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nostrum
      ipsum nemo accusamus, debitis dignissimos sequi fugiat veritatis alias
      facere dolorem neque culpa iusto ipsa quae dolores aspernatur eum
      repellat. Sit cupiditate ullam fuga porro eaque consequuntur tempora,
      repellendus impedit! Magnam laudantium non sed omnis quaerat tempora
      repellat blanditiis autem.
    </template>
    <template #profile>
      <h1>Profile</h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nostrum
      ipsum nemo accusamus, debitis dignissimos sequi fugiat veritatis alias
      facere dolorem neque culpa iusto ipsa quae dolores aspernatur eum
      repellat. Sit cupiditate ullam fuga porro eaque consequuntur tempora,
      repellendus impedit! Magnam laudantium non sed omnis quaerat tempora
      repellat blanditiis autem.
      <tabs :buttons="[`View`, `Setting`]" :slots="[`view`, `setting`]">
        <template #view>
          <h2>View</h2>
        </template>
        <template #setting>
          <h2>Setting</h2>
        </template>
      </tabs>
    </template>
    <template #setting>
      <h1>Home</h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nostrum
      ipsum nemo accusamus, debitis dignissimos sequi fugiat veritatis alias
      facere dolorem neque culpa iusto ipsa quae dolores aspernatur eum
      repellat. Sit cupiditate ullam fuga porro eaque consequuntur tempora,
      repellendus impedit! Magnam laudantium non sed omnis quaerat tempora
      repellat blanditiis autem.
    </template>
  </tabs>
  <collapse>
    <template #header>
      <h1>Header</h1>
    </template>
    <template #body>
      <h1>Body</h1>
    </template>
  </collapse>
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
    };
  },
  created() {},
  mounted() {},
  methods: {
    sendFile() {
      let file = document.querySelector("[file]").files[0];
      let data = new FormData();
      data.append("file", file);
      api
        .createFile(data)
        .then((res) => {
          console.log(res.data);
          file = null;
        })
        .catch((err) => {
          api.catchError(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
