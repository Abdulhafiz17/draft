<template>
  <dropdown id="test">
    <button toggle-dropdown class="btn btn-outline-primary w-100">
      {{ modelValue?.first_name || "select user" }}
    </button>
    <template #menu>
      <ul>
        <li v-if="all" @click="$emit('update:modelValue', null)">all</li>
        <li
          v-for="item in array"
          :key="item"
          @click="$emit('update:modelValue', item)"
        >
          {{ item.first_name }}
        </li>
      </ul>
    </template>
  </dropdown>
</template>

<script>
import api from "@/server/api";
import dropdown from "../dropdown/dropdown.vue";
export default {
  name: "data-dropdown",
  props: {
    modelValue: null,
    data: Array,
    all: Boolean,
  },
  emits: ["update:modelValue"],
  components: { dropdown },
  data() {
    return {
      array: [],
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      const params = { page: 1, per_page: 10 };
      api.users(params).then((res) => {
        this.array = res.data.data;
      });
    },
  },
};
</script>
