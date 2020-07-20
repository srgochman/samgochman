<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="sam-gochman">
        <!-- Sam Gochman -->
        <div id="name-handwritten"></div>
      </router-link>
      <router-link to="/juices" class="creative-container">
        <div class="creative-img"></div>
        <div class="creative-text">
          <span style="color: var(--purple)">Latest</span>
          <span style="color: var(--blue)">Creative</span>
          <span style="color: var(--green)">Juices</span>
        </div>
      </router-link>
    </div>
    <transition name="pages">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    // window.onload = window.onresize = function() {
    //   document.getElementById("app").style.height = window.innerHeight + "px";
    // };
  },
  components: {}
};
</script>

<style lang="scss">
@import "./scss/colors.scss";
@import "./scss/type.scss";
// @import "./scss/reset.scss";

#app,
body,
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  width: 100vw;
  margin: 0;
}

body {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#app {
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  font-size: 24px;
  padding: 0 10vw;
  /* font-weight: 200; */
}

.hidden {
  display: none;
}

#nav {
  width: 100%;
  max-width: 1024px;
  padding: 20px 0px;
  background-color: rgba(255, 255, 255, 0.952);
  backdrop-filter: blur(5px);
  /* border-bottom: lightgray 1px solid; */
  /* box-shadow: rgba(0, 0, 0, 0.15) 0 2px 5px; */
  /* box-shadow: 0 30px 20px white; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: fixed;
  top: 0;
  z-index: 100;

  .sam-gochman {
    height: min-content;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 800;
    color: black;
    // padding-left: 100px;
    padding-left: 10vw;
  }

  #name-handwritten {
    // padding-left: 10vw;
    width: 170px;
    height: 30px;
    background-image: url("./assets/Asset 9.svg");
    background-repeat: no-repeat;
  }

  .creative-container {
    display: flex;
    flex-direction: row;
    transition: var(--hover);
    // padding-right: 100px;
    padding-right: 10vw;
  }

  .creative-img {
    width: 55px;
    height: 55px;
    background-image: url("./assets/test2.png");
    background-size: 250%;
    background-position: 15%;
  }

  .creative-text {
    margin: 0 0 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 800;
  }
}

.body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  // width: 1024px;
}

.section {
  width: 100%;
  margin-bottom: 500px;
}

.pages-enter-active {
  transition: opacity 250ms ease-in-out;
  transition-delay: 250ms;
}

.pages-leave-active {
  transition: opacity 250ms ease-in-out;
}

.pages-enter,
.pages-leave-to /* .pages-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 425px) {
  #nav {
    position: unset;
  }
}

@media only screen and (min-width: 1025px) {
  #nav {
    .sam-gochman,
    .creative-container {
      // padding: 0 50px;
      padding: 0;
    }
  }
}
</style>
