<template>
  <div class="CARD" :class="cardColor">
    <div class="BODY">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["color"],
  computed: {
    cardColor() {
      return this.$props.color;
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
  --color: rgb(245, 245, 245);
  --background: rgb(40, 40, 40);
}

.CARD {
  display: block;
  border: 1px solid gray;
  border-radius: 10px;
  background: white;
  box-shadow: 0 5px 10px -5px gray;
}

.CARD > .BODY {
  padding: 10px;
}

.CARD.blue {
  border-color: var(--blue);
  box-shadow: 0 5px 10px -5px var(--blue);
}

.CARD.indigo {
  border-color: var(--indigo);
  box-shadow: 0 5px 10px -5px var(--indigo);
}

.CARD.purple {
  border-color: var(--purple);
  box-shadow: 0 5px 10px -5px var(--purple);
}

.CARD.pink {
  border-color: var(--pink);
  box-shadow: 0 5px 10px -5px var(--pink);
}

.CARD.red {
  border-color: var(--red);
  box-shadow: 0 5px 10px -5px var(--red);
}

.CARD.orange {
  border-color: var(--orange);
  box-shadow: 0 5px 10px -5px var(--orange);
}

.CARD.yellow {
  border-color: var(--yellow);
  box-shadow: 0 5px 10px -5px var(--yellow);
}

.CARD.green {
  border-color: var(--green);
  box-shadow: 0 5px 10px -5px var(--green);
}

.CARD.teal {
  border-color: var(--teal);
  box-shadow: 0 5px 10px -5px var(--teal);
}

.CARD.cyan {
  border-color: var(--cyan);
  box-shadow: 0 5px 10px -5px var(--cyan);
}
</style>
