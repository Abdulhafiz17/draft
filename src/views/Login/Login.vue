<template>
  <div class="container-fluid">
    <card color="red" class="w-25">
      <Logo />
      <form @submit.prevent="login()">
        <div class="row my-2 gap-2">
          <div class="col-12">
            <input
              type="text"
              class="form-control text-center"
              placeholder="username"
              required
              color="red"
              v-model="username"
            />
          </div>
          <div class="col-12">
            <input
              type="password"
              class="form-control text-center"
              placeholder="password"
              required
              color="red"
              v-model="password"
            />
          </div>
          <div class="col-12">
            <btn color="red" class="w-100">Kirish</btn>
          </div>
        </div>
      </form>
    </card>
  </div>
</template>

<script>
import Logo from "../../components/logo/crudlogo.vue";
import * as api from "../../utils/api/api";
import * as utils from "../../utils/utils";
export default {
  name: "Login",
  components: { Logo },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {
    localStorage.removeItem("token");
  },
  methods: {
    login() {
      api
        .login({ username: this.username, password: this.password })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          this.$router.push("/home");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    get() {},
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 30px);
}
</style>
