<template>
  <div>
    <button @click="logout()" class="btn btn-dark font-weight-bold">
      Logout
    </button>
  </div>
</template>

<script>
import api from "../../service/user";
export default {
  methods: {
    logout: async function () {
      //api
      var res = await api.logout();
      //remove token
      localStorage.removeItem("token");
      //redirect
      this.$router.push({ path: "/" });
    },
  },
};
</script>