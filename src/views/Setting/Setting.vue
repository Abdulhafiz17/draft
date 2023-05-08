<template>
  <h3>Setting</h3>
  <hr />
  <card text-align="start">
    <div class="row">
      <div class="col-10">
        <h4>Mode</h4>
      </div>
      <div class="col-2">
        <span v-show="mode == ''">light</span>
        <span v-show="mode == 'dark'">dark</span>
        <input
          type="checkbox"
          class="form-check-input"
          :checked="mode == 'dark'"
          @change="toggleMode($event.target.checked)"
        />
      </div>
    </div>
  </card>
  <card text-align="start">
    <h4>Profile</h4>
    <form @submit.prevent="putProfile(profile)">
      <div class="row">
        <div class="col-md-6">
          <label>
            Name
            <input
              type="text"
              class="form-control"
              required
              color="blue"
              v-model="profile.name"
            />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            Phone
            <div class="input-group">
              <div class="input-group-text">+998</div>
              <input
                type="tel"
                class="form-control"
                required
                color="blue"
                v-model="profile.phone"
              />
            </div>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label>
            Username
            <input
              type="text"
              class="form-control"
              required
              color="blue"
              v-model="profile.username"
            />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            Password
            <input
              type="password"
              class="form-control"
              required
              color="blue"
              v-model="profile.password"
            />
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <btn text-color="true" type="button" class="float-end">
            <span class="material-symbols-rounded"> done_outline </span>
          </btn>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
import api from "@/server/api";
export default {
  name: "Setting",
  data() {
    return {
      mode: localStorage["mode"],
      profile: { name: "", phone: 0, username: "", password: "" },
    };
  },
  created() {
    this.getProfile();
  },
  methods: {
    toggleMode(checked) {
      if (checked) this.mode = "dark";
      else this.mode = "";
      document.body.className = this.mode;
      localStorage.setItem("mode", this.mode);
    },
    getProfile() {
      api
        .profile()
        .then((res) => {
          console.log(res.data);
          this.profile = res.data;
        })
        .catch((err) => {
          api.catchError(err);
        });
    },
    putProfile(profile) {
      console.log(profile);
      api
        .updateProfile(profile)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          api.catchError(err);
        });
    },
  },
};
</script>
