<template>
  <div class="Login font-weight-bold">
    <div class="form-group font-weight-bold">
      <label for="exampleInputEmail1">Email address</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1 ">Password</label>
      <input
        @keyup="active()"
        v-model="password"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <button
      class="btn btn-success font-weight-bold"
      v-bind:disabled="checked"
      @click="login()"
    >
      LOGIN
    </button>
  </div>
</template>

<script>
import api from "../service/user";

export default {
  name: "Login",

  data() {
    return {
      email: null,
      password: null,
      checked: true,
    };
  },

  methods: {
    login: async function () {
      var data = {
        email: this.email,
        password: this.password,
      };

      var res = await api.login(data);

      console.log(res);
      if (res.data.login) {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard";
      }
    },
    active: function () {
      console.log(this.password.length);

      if (this.password.length > 3) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    },
  },
};
</script>
