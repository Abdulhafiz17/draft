<template>
  <form @submit.prevent="post(todo)">
    <card class="mb-1">
      <div class="row">
        <div class="col-md-12">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="new todo"
              required
              color="teal"
              v-model="todo.title"
            />
            <btn color="teal"><i class="fa fa-plus" /></btn>
          </div>
        </div>
      </div>
    </card>
  </form>
  <ul v-show="todos.length">
    <li v-for="item in todos" :key="item">
      <div v-if="!item.edit">
        <span class="d-flex justify-content-between align-items-center">
          {{ `Id: ${item.id}` }}
          <div class="btn-group">
            <btn color="yellow" @click="item.edit = true">
              <i class="fa fa-edit" />
            </btn>
            <btn color="red" @click="remove(item)">
              <i class="fa fa-trash" />
            </btn>
          </div>
        </span>
        <hr />
        <span>
          {{ item.title }}
        </span>
      </div>
      <form
        class="input-group"
        @submit.prevent="
          item.edit = false;
          put(item);
        "
        v-else-if="item.edit"
      >
        <div class="input-group-text">
          {{ `id: ${item.id}` }}
        </div>
        <input
          type="text"
          class="form-control"
          required
          color="green"
          v-model="item.title"
        />
        <btn color="green">
          <i class="fa fa-check" />
        </btn>
      </form>
    </li>
  </ul>
</template>

<script>
import api from "@/server/api";
export default {
  name: "ToDo",
  data() {
    return {
      todo: { title: null },
      todos: [],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
