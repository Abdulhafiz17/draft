<template>
  <div :id="modal_id" class="MODAL">
    <div class="CONTENT">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: ["id", "width"],
  data() {
    return {
      sizes: ["SM", "MD", "LG"],
    };
  },
  computed: {
    modal_id() {
      return this.$props.id;
    },
    modal_width() {
      return this.$props.width.toUpperCase();
    },
  },
  // 480
  // 768
  // 1024
  mounted() {
    if (this.modal_id) {
      let modal = document.getElementById(`${this.modal_id}`);
      let validate_class = this.sizes.find((size) => size == this.modal_width);
      if (this.modal_width && validate_class) {
        modal.classList.add(`MODAL-${this.modal_width}`);
      } else {
        modal.classList.add(`MODAL-SM`);
      }
    } else {
      console.error("id of modal is required props !");
    }
  },
};
</script>

<style scoped>
.MODAL {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
  z-index: 1000;
}

.MODAL:active .CONTENT {
  transform: scale(1.05);
}

.MODAL > .CONTENT {
  position: absolute;
  top: 5%;
  border: 1px solid cyan;
  border-radius: 15px;
  background: var(--background);
  transition: 0.15s all;
  z-index: inherit;
}

.MODAL-SM > .CONTENT {
  width: 480px;
}

.MODAL-MD > .CONTENT {
  width: 768px;
}

.MODAL-LG > .CONTENT {
  width: 1024px;
}
</style>
