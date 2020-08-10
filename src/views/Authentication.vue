<template>
  <div id="page">
    <!-- Password: -->
    <input
      type="text"
      name="username"
      v-model="submittedPassword"
      placeholder="Password"
    />
    <button type="button" @click="login">Next</button>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
// import router from "../router/index.js";

export default {
  name: "Authentication",
  data() {
    return { requiredPassword: "the", submittedPassword: "", message: "" };
  },
  // mounted() {
  //   if (localStorage.password) {
  //     this.submittedPassword = localStorage.submittedPassword;
  //   }
  // },
  computed: {
    targetRoute() {
      return this.$store.state.targetRoute;
    }
  },
  methods: {
    login() {
      // localStorage.submittedPassword = this.submittedPassword;
      if (this.submittedPassword != "") {
        if (this.submittedPassword == this.requiredPassword) {
          // this.$emit("authenticated", true);
          // this.$router.replace({ name: "secure" });
          localStorage.setItem("passCorrect", true);
          this.message = "Password is correct.";

          // go to stored targetRoute
          // this.$router.replace({ name: `"${this.targetRoute}"` });
          this.$router.replace({
            name: localStorage.getItem("targetRoute")
          });
        } else {
          localStorage.setItem("passCorrect", false);
          this.message = "Password is incorrect.";
        }
      } else {
        this.message = "A password must be present.";
      }
    }
  },
  components: {}
};
</script>

<style lang="scss">
#page {
  width: 100%;
  align-items: flex-start;
  margin-top: 10vh;
}
</style>
