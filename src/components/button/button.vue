<template>
  <button :class="buttonColor" v-wave="{ color: buttonColor }">
    <slot />
  </button>
</template>

<script>
export default {
  name: "btn",
  props: ["color"],
  computed: {
    buttonColor() {
      return this.$props.color ? this.$props.color : "gray";
    },
  },
};
</script>

<style scoped>
:root {
  --blue: rgb(13, 110, 253);
  --indigo: rgb(102, 16, 242);
  --purple: rgb(111, 66, 193);
  --pink: rgb(214, 51, 132);
  --red: rgb(220, 53, 69);
  --orange: rgb(253, 126, 20);
  --yellow: rgb(255, 193, 7);
  --green: rgb(25, 135, 84);
  --teal: rgb(32, 201, 151);
  --cyan: rgb(13, 202, 240);
}

button {
  padding: 5px 10px;
  /* border: none; */
  border: 1px solid gray;
  border-radius: 10px;
  background: white;
  box-shadow: inset 0 0 5px -1px gray, 0 5px 10px -5px gray;
  transition: all 0.2s;
}

button.blue {
  border-color: var(--blue);
  box-shadow: inset 0 0 5px -1px var(--blue), 0 5px 10px -5px var(--blue);
}

button.indigo {
  border-color: var(--indigo);
  box-shadow: inset 0 0 5px -1px var(--indigo), 0 5px 10px -5px var(--indigo);
}

button.purple {
  border-color: var(--purple);
  box-shadow: inset 0 0 5px -1px var(--purple), 0 5px 10px -5px var(--purple);
}

button.pink {
  border-color: var(--pink);
  box-shadow: inset 0 0 5px -1px var(--pink), 0 5px 10px -5px var(--pink);
}

button.red {
  border-color: var(--red);
  box-shadow: inset 0 0 5px -1px var(--red), 0 5px 10px -5px var(--red);
}

button.orange {
  border-color: var(--orange);
  box-shadow: inset 0 0 5px -1px var(--orange), 0 5px 10px -5px var(--orange);
}

button.yellow {
  border-color: var(--yellow);
  box-shadow: inset 0 0 5px -1px var(--yellow), 0 5px 10px -5px var(--yellow);
}

button.green {
  border-color: var(--green);
  box-shadow: inset 0 0 5px -1px var(--green), 0 5px 10px -5px var(--green);
}

button.teal {
  border-color: var(--teal);
  box-shadow: inset 0 0 5px -1px var(--teal), 0 5px 10px -5px var(--teal);
}

button.cyan {
  border-color: var(--cyan);
  box-shadow: inset 0 0 5px -1px var(--cyan), 0 5px 10px -5px var(--cyan);
}
</style>
