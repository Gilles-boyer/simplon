<template>
  <div class="container-fluid row justify-content-center">
    <Login class="col-md-3 mt-5 bg-info p-4" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "Home",

  mounted() {
    if (localStorage.getItem("token")) {
      this.$router.push({ path: "/dashboard" });
    }
  },
  components: {
    Login,
  },
};
</script>
