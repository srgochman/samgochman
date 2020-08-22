<template>
  <div id="container">
    <label for="password">
      <!-- <h2>Enter password to see project.</h2> -->
      <h2>This project needs a password to view.</h2>
      <input
        id="password"
        type="text"
        name="password"
        placeholder="Password"
        v-model="submittedPassword"
      />
    </label>
    <span id="message">{{ message }}</span>
    <button id="button" type="button" @click="login">Next</button>
  </div>
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
  methods: {
    login() {
      if (this.submittedPassword != "") {
        // if the submitted password is one of the required passwords
        if (this.requiredPassword.indexOf(this.submittedPassword) > -1) {
          // remember that they've logged in
          localStorage.setItem("passCorrect", true);

          // and then go to targetRoute stored in localStorage
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
    // can submit with enter key
    $("#password").on("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        $("#button").click();
      }
    });
    $("#password").focus();
  }
};
</script>

<style lang="scss" scoped>
#container {
  // width: 350px;
  // width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 40vh;
  transform: translateY(-50%);
  font-family: "Avenir";
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

label,
input,
.underline,
#message,
button {
  width: 350px;
}

input {
  // width: 100%;
  background: none;
  outline: inherit;
  // border: solid 1px gray;
  border-radius: 0px;
  border: none;
  border-bottom: solid 1px gray;
  color: inherit;
  padding-bottom: 5px;
  font: inherit;
  font-size: 1.2em;
  font-weight: 200;
  line-height: 1.2em;
  margin-bottom: 5px;
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
  box-shadow: 0 0 0px 1000px var(--green-transparent) inset;
  -webkit-box-shadow: 0 0 0px 1000px var(--green-transparent) inset;
}

#message {
  height: 1.8em;
  color: gray;
  font-size: 1em;
  font-weight: 200;
  margin-bottom: 10px;
}

button {
  height: 3em;
  // width: 100%;
  // padding: 6px 11px 6px 9px;
  background-color: var(--green);
  color: white;
  border: none;
  border-radius: 2px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: var(--hover);

  &:hover {
    background-color: var(--green-semi-transparent);
    transition: var(--hover);
  }
}

@media only screen and (max-width: 425px) {
  label,
  input,
  .underline,
  #message,
  button {
    width: 250px;
  }
}

@media (hover: none) and (pointer: coarse) {
  #container {
    margin-top: 14vh;
    transform: translateY(0%);
    font-family: "Avenir";
  }
}
</style>
