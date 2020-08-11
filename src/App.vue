<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="sam-gochman">
        <div id="name-drawn"></div>
      </router-link>
    </div>
    <transition name="pages" @after-leave="$root.$emit('transitionScroll')">
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
@import "./scss/fonts.scss";
// @import "./scss/reset.scss";

:root {
  --main-width: 1440px;
}

html {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1rem; // 16px
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // scroll-behavior: smooth;
  width: 100vw;
  margin: 0;
  background-color: white;
  overflow-x: hidden;
}

body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0 7vw;
  overflow-x: hidden;
  overflow-y: hidden;
}

#app,
.study-page {
  width: 100%;
  max-width: var(--main-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
}

.hidden {
  display: none;
}

#nav {
  width: 100%;
  // max-width: 1024px;
  padding: 20px 0px;
  // background-color: rgb(255, 255, 255);
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
    // text-transform: uppercase;
    // font-size: 24px;
    // font-weight: 800;
    // color: black;
    margin-top: 15px;
    padding-left: calc(min(7vw, 50px));
  }

  #name-drawn {
    // padding-left: 100px;
    width: 140px;
    height: 20px;
    background-image: url("./assets/drawn/name_drawn.svg");
    background-repeat: no-repeat;
    transform: scaleY(0.9);
  }
}

.body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  // width: 1024px;
  width: 100%;
  max-width: var(--main-width);
}

.section {
  width: 100%;
  margin-bottom: 400px;
  // margin-bottom: 30vh;
}

.section:last-child {
  margin-bottom: 7vh !important;
}

.appear {
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}

.visible {
  opacity: 1;
  transition: opacity 200ms ease-in-out;
}

.pages-enter-active {
  transition: opacity 200ms ease-in-out;
  transition-delay: 200ms;
}

.pages-leave-active {
  transition: opacity 200ms ease-in-out;
}

.pages-enter,
.pages-leave-to /* .pages-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 1850px) {
  // html {
  //   font-size: 0.8em;
  // }

  #nav {
    position: absolute;
    overflow: hidden;
  }

  // .section {
  //   margin-bottom: 40vh;
  // }
}
</style>
