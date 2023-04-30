<template>
  <dropdown id="test">
    <button toggle-dropdown class="btn btn-outline-primary w-100">
      {{ modelValue || "toggle" }}
    </button>
    <template #menu>
      <ul>
        <li v-if="all" @click="$emit('update:modelValue', null)">all</li>
        <li
          v-for="item in array"
          :key="item"
          @click="$emit('update:modelValue', item)"
        >
          {{ item }}
        </li>
      </ul>
    </template>
  </dropdown>
</template>

<script>
import dropdown from "../dropdown/dropdown.vue";
export default {
  name: "data-dropdown",
  props: { modelValue: null, all: Boolean },
  emits: ["update:modelValue"],
  components: { dropdown },
  data() {
    return {
      array: ["one", "two", "three"],
    };
  },
};
</script>
