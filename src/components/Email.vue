<template>
  <!-- <form id="email-form" action="email.php" method="post"> -->
  <form
    ref="form"
    id="email-form"
    class="pageclip-form"
    action="https://send.pageclip.co/fR9AkC90OJpqOqh99xEotvwg4ikbAJNF"
    method="post"
  >
    <label for="email"><p>Email</p></label>
    <input
      type="email"
      name="email"
      ref="email"
      placeholder="you@email.com"
      size="40"
      required
    />

    <label for="subject"><p>Subject</p></label>
    <input type="text" name="subject" placeholder="Intro" size="40" />

    <label for="message"><p>Message</p></label>
    <textarea
      name="message"
      ref="message"
      placeholder="Note to srgochman@gmail.com"
      cols="50"
      rows="10"
      required
    ></textarea>

    <!-- <input type="submit" name="submit" value="Send" /> -->
    <button type="submit" class="pageclip-form__submit">
      <span>Send</span>
    </button>
  </form>
</template>

<script>
export default {
  name: "Email",
  props: {},
  data() {
    return {
      customMessages: {
        valueMissing: "Make sure this isn't blank!", // `required` attr
        emailMissing: "Make sure your email address isn't blank!", // `required` attr
        textareaMissing: "Make sure your message isn't blank!", // `required` attr
        emailMismatch: "Make sure you typed your email address correctly!", // Invalid email
        patternMismatch: "Custom pattern mismatch" // `pattern` attr
      }
    };
  },
  mounted() {
    var inputs = document.querySelectorAll("input, textarea");
    // console.log(inputs);
    const vm = this;
    inputs.forEach(function(input) {
      function checkValidity() {
        const message = input.validity.valid
          ? null
          : vm.getCustomMessage(input.type, input.validity, vm.customMessages);
        input.setCustomValidity(message || "");
      }

      // Add a css class on submit when the input is invalid.
      input.addEventListener("invalid", function() {
        input.classList.add("invalid");
        checkValidity();
      });

      // Remove the class when the input becomes valid.
      // 'input' will fire each time the user types
      input.addEventListener("input", function() {
        checkValidity();
        if (input.validity.valid) {
          input.classList.remove("invalid");
        }
      });
    });
  },
  methods: {
    getCustomMessage(type, validity) {
      if (validity.valueMissing) {
        return this.customMessages[`${type}Missing`];
      } else if (validity.typeMismatch) {
        return this.customMessages[`${type}Mismatch`];
      } else {
        for (const invalidKey in this.customMessages) {
          if (validity[invalidKey]) {
            return this.customMessages[invalidKey];
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#email-form {
  display: flex;
  flex-direction: column;
  width: calc(min(500px, 100%));

  input,
  textarea {
    margin-bottom: 1.5rem;
    padding: 4px;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    font-size: 100%; // not actually 100% of 19.2px
    font-weight: 200;

    &:focus {
      outline: none;
    }
  }

  input[type="submit"] {
    width: min-content;
    padding: 1rem 2.5rem;
    background-color: var(--green);
    color: white;
    border: none;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    transition: var(--hover);

    &:hover {
      background-color: var(--green-semi-transparent);
      color: white !important;
      transition: var(--hover);
    }
  }

  input.invalid,
  textarea.invalid {
    border: 2px solid red;
    border-radius: 3px;
  }
}

.pageclip-form {
  position: relative;
}
.pageclip-form__success {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  text-align: center;
  background: hsla(0, 0%, 100%, 0.8);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pageclip-form__success__message {
  font-size: 2rem;
  text-align: center;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-animation: 0.3s linear none a;
  animation: 0.3s linear none a;
}
.pageclip-form__submit {
  position: relative;
}
.pageclip-form__submit:after {
  display: inline-block;
  position: relative;
  text-indent: -9999em;
  border: 3px solid hsla(0, 0%, 100%, 0.3);
  border-left: 3px solid #fff;
  -webkit-transform: scale(0.01) translateZ(0);
  transform: scale(0.01) translateZ(0);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -10px;
  margin-top: -10px;
  z-index: 2;
}
.pageclip-form__submit.pageclip-form__submit--dark-loader:after {
  border-color: rgba(0, 0, 0, 0.3);
  border-left-color: #000;
}
.pageclip-form__submit.pageclip-form__submit--start-loading:after {
  -webkit-animation: 0.1s linear none a;
  animation: 0.1s linear none a;
}
.pageclip-form__submit.pageclip-form__submit--start-loading > span {
  -webkit-animation: 0.1s linear none c;
  animation: 0.1s linear none c;
}
.pageclip-form__submit.pageclip-form__submit--loading:after {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: 1.2s linear infinite d;
  animation: 1.2s linear infinite d;
}
.pageclip-form__submit.pageclip-form__submit--loading > span {
  opacity: 0;
}
.pageclip-form__submit.pageclip-form__submit--end-loading:after {
  -webkit-animation: 0.1s linear none b;
  animation: 0.1s linear none b;
}
.pageclip-form__submit.pageclip-form__submit--end-loading > span {
  -webkit-animation: 0.1s linear reverse c;
  animation: 0.1s linear reverse c;
}

@-webkit-keyframes a {
  0% {
    -webkit-transform: scale(0.01) translateZ(0);
    transform: scale(0.01) translateZ(0);
  }
  50% {
    -webkit-transform: scale(1.2) translateZ(0);
    transform: scale(1.2) translateZ(0);
  }
  to {
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0);
  }
}
@keyframes a {
  0% {
    -webkit-transform: scale(0.01) translateZ(0);
    transform: scale(0.01) translateZ(0);
  }
  50% {
    -webkit-transform: scale(1.2) translateZ(0);
    transform: scale(1.2) translateZ(0);
  }
  to {
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0);
  }
}
@-webkit-keyframes b {
  0% {
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0);
  }
  to {
    -webkit-transform: scale(0.01) translateZ(0);
    transform: scale(0.01) translateZ(0);
  }
}
@keyframes b {
  0% {
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0);
  }
  to {
    -webkit-transform: scale(0.01) translateZ(0);
    transform: scale(0.01) translateZ(0);
  }
}
@-webkit-keyframes c {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes c {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes d {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes d {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
</style>
