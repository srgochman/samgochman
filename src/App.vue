<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="sam-gochman">
        <!-- Sam Gochman -->
        <div id="name-drawn"></div>
      </router-link>
      <router-link to="/juices" class="creative-container">
        <div class="creative-img"></div>
        <div class="creative-text">
          <span id="text-latest" style="color: var(--purple)">Latest</span>
          <span id="text-creative" style="color: var(--blue)">Creative</span>
          <span id="text-juices" style="color: var(--green)">Juices</span>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  font-size: 24px;
  padding: 0 calc(max(20vw, 50px));
  /* font-weight: 200; */
}

.hidden {
  display: none;
}

#nav {
  width: 100%;
  // max-width: 1024px;
  padding: 20px 0px;
  background-color: rgb(255, 255, 255);
  // backdrop-filter: blur(5px);
  /* border-bottom: lightgray 1px solid; */
  // box-shadow: rgba(0, 0, 0, 0.15) 0 2px 5px;
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
    margin-top: 15px;
    padding-left: calc(min(10vw, 50px));
    // padding-left: 13vw;
  }

  #name-drawn {
    // padding-left: 100px;
    width: 130px;
    height: 20px;
    background-image: url("./assets/drawn/name_drawn.svg");
    background-repeat: no-repeat;
  }

  .creative-container {
    // visibility: hidden;
    display: flex;
    flex-direction: row;
    transition: var(--hover);
    padding-right: calc(min(3vw, 50px));
    // padding-right: 15vw;
  }

  .creative-img {
    width: 55px;
    height: 55px;
    background-image: url("./assets/test2.png");
    background-size: 250%;
    background-position: 15%;
  }

  .creative-text {
    margin: 0 0 0 12px;
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
  width: 100%;
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
    position: absolute;
  }

  .creative-text {
    width: 10px;
  }

  #text-latest {
    visibility: hidden;
  }
  #text-latest:before {
    visibility: visible;
    content: "L";
  }
  #text-creative {
    visibility: hidden;
  }
  #text-creative:before {
    visibility: visible;
    content: "C";
  }
  #text-juices {
    visibility: hidden;
  }
  #text-juices:before {
    visibility: visible;
    content: "J";
  }
}

@media only screen and (min-width: 426px) and (max-width: 768px) {
  #nav {
    position: absolute;
  }
}

@media only screen and (min-width: 1025px) {
  // #nav {
  //   .sam-gochman,
  //   .creative-container {
  //     // padding: 0 50px;
  //     padding: 0;
  //   }
  // }
}
</style>
