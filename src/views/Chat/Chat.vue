<template>
  <div class="responsive-y">
    <transition-group name="coming" tag="div" id="messages" class="row gap-2">
      <div class="col-md-12" v-for="item in messages" :key="item">
        <!-- :class="
            item.status !== 'message'
              ? 'text-center'
              : item.status == 'message'
              ? item.client_id == client_id
                ? 'text-end'
                : 'text-start'
              : false
          " -->
        <span class="p-1">
          <!-- :class="
              item.status !== 'message'
                ? 'text-secondary'
                : item.status == 'message'
                ? item.client_id == client_id
                  ? 'border rounded border-success'
                  : 'border rounded border-primary'
                : false
            " -->
          <!-- <strong v-if="item.statu == 'message'">
              {{ item.client_id + " : " }}
            </strong> -->
          <span>{{ item }}</span>
        </span>
      </div>
    </transition-group>
  </div>
  <div class="row input-row">
    <div class="col-md-10">
      <form @submit.prevent="post()" id="form-send">
        <input
          type="text"
          class="form-control"
          placeholder="message"
          color="blue"
          v-model="message"
          message-input
        />
      </form>
    </div>
    <div class="col-md-2">
      <btn color="blue" class="w-100" form="form-send"> Send </btn>
    </div>
  </div>
</template>

<script>
import api from "@/server/api";
import swal from "sweetalert";
export default {
  name: "Home",
  emits: ["setloading"],
  data() {
    return {
      users: {},
      socket: api.websocket(`ws://192.168.1.29:3000/chat`),
      status: false,
      client_id: null,
      message: null,
      messages: [],
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   swal({
  //     icon: "info",
  //     title: "Enter password",
  //     closeOnEsc: false,
  //     closeOnClickOutside: false,
  //     content: {
  //       element: "input",
  //       attributes: {
  //         tyep: "password",
  //         placeholder: "password",
  //       },
  //     },
  //   }).then((value) => {
  //     if (value == "abdo") {
  //       next();
  //     } else {
  //       swal({
  //         icon: "error",
  //         title: "Wrong password",
  //         text: " ",
  //         timer: 1500,
  //         buttons: false,
  //       }).then(() => {
  //         next({ path: from.path });
  //       });
  //     }
  //   });
  // },
  created() {
    this.socket.onmessage = (event) => {
      this.recieve(event.data);
    };
  },
  mounted() {
    document.querySelector("[message-input]").focus();
    Notification.requestPermission().then((permission) => {});
  },
  methods: {
    signIn() {
      swal({
        icon: "info",
        title: "Ismingizni kiriting",
        closeOnEsc: false,
        closeOnClickOutside: false,
        content: {
          element: "input",
          attributes: {
            type: "text",
            placeholder: "ism",
            required: "true",
          },
        },
      }).then((value) => {
        if (value) {
          this.$emit("setloading", true);
          this.client_id = value;
          this.connect(value);
        } else {
          swal({
            icon: "error",
            title: "Noto'g'ri ism",
            timer: 2000,
          }).then(() => {
            this.signIn();
          });
        }
      });
    },
    connect(client_id) {
      this.socket = new WebSocket(
        `wss://warehouse.sun-decor.uz/ws/${client_id}`
      );
    },
    recieve(data) {
      let timeout = null;
      let div = document.querySelector(".responsive-y");
      clearTimeout(timeout);
      this.messages.push(data);
      timeout = setTimeout(() => {
        div.scrollTo(0, div.scrollHeight);
      }, 200);
      document.querySelector("[message-input]").focus();
    },
    post() {
      if (this.message) {
        this.socket.send(this.message);
        this.message = null;
      }
    },
    sendFile() {
      let file = document.querySelector("[file]").files[0];
      this.socket.send(`filename: ${file.name}`);
      let reader = new FileReader();
      let data = new ArrayBuffer();
      reader.onload = (event) => {
        data = event.target.result;
        this.socket.send(data);
        this.socket.send("end");
      };
      reader.readAsArrayBuffer(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.responsive-y {
  height: 80vh;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.input-row {
  position: absolute;
  left: 5%;
  right: 5%;
  bottom: 1%;
  width: 90%;
}

.coming-enter-active,
.coming-leave-active {
  transition: all 0.15s ease;
}
.coming-enter-from,
.coming-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
