<template>
  <!-- <div id="page"> -->
  <div id="container">
    <label for="password">
      <!-- <h2>Enter password to see project.</h2> -->
      <h2>Password</h2>
      <input
        id="password"
        type="text"
        name="password"
        v-model="submittedPassword"
      />
      <img class="underline" src="../assets/drawn/line3_purple.svg" />
    </label>
    <span id="message">{{ message }}</span>
    <button id="button" type="button" @click="login">Next</button>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Authentication",
  data() {
    return {
      requiredPassword: ["testing", "localprojects"],
      submittedPassword: "",
      message: " "
    };
  },
  computed: {},
  methods: {
    login() {
      // localStorage.submittedPassword = this.submittedPassword;
      if (this.submittedPassword != "") {
        // if (this.submittedPassword == this.requiredPassword) {
        if (this.requiredPassword.indexOf(this.submittedPassword) > -1) {
          localStorage.setItem("passCorrect", true);

          // go to targetRoute stored in localStorage
          this.$router.replace({
            name: localStorage.getItem("targetRoute")
          });
        } else {
          localStorage.setItem("passCorrect", false);
          this.message = "Wrong password, try again.";
        }
      } else {
        this.message = "Password is blank!";
      }
    }
  },
  mounted() {
    $("#password").on("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        $("#button").click();
      }
    });
    $("#password").focus();
  },
  components: {}
};
</script>

<style lang="scss" scoped>
// #page {
//   width: 100%;
//   // flex-direction: row;
//   // justify-content: center;
// }

#container {
  width: 350px;
  // width: 300px;
  display: flex;
  flex-direction: column;
  font-family: "Avenir";
  margin-top: 50vh;
  transform: translateY(-50%);
}

h2 {
  margin-bottom: 30px;
}

label {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  position: relative;
}

input,
.underline,
#message,
button {
  width: 250px;
}

input {
  // width: 100%;
  background: none;
  color: inherit;
  // border: solid 1px gray;
  // border-radius: 2px;
  border: none;
  // border-bottom: solid 1px gray;
  // padding: 0;
  font: inherit;
  outline: inherit;
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.8em;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  // border: 1px solid green;
  // -webkit-text-fill-color: green;
  box-shadow: 0 0 0px 1000px var(--purple-transparent) inset;
  -webkit-box-shadow: 0 0 0px 1000px var(--purple-transparent) inset;
  // transition: background-color 5000s ease-in-out 0s;
}

.underline {
  content: "";
  position: absolute;
  // width: 100%;
  // transform: scaleY(1.5);
  // height: 5px;
  bottom: 0;
  left: 0px;
}

#message {
  font-size: 1em;
  font-weight: 300;
  height: 1.8em;
  margin-bottom: 10px;
  color: gray;
}

button {
  // width: 100%;
  background-color: var(--purple);
  color: white;
  border: none;
  border-radius: 2px;
  // padding: 6px 11px 6px 9px;
  height: 3em;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  outline: none;
}

button:active {
  background-color: var(--purple-semi-transparent);
}
</style>
