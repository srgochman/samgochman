<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="sam-gochman">
        <!-- <div id="name-drawn"></div> -->
        <svg width="158" height="22">
          <use
            id="name-drawn"
            href="../src/assets/drawn/name_drawn.svg#Layer_2"
          ></use>
        </svg>
        <!-- <div>Sam Gochman</div> -->
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
  created() {
    // window.onload = window.onresize = function() {
    //   document.getElementById("app").style.height = window.innerHeight + "px";
    // };
  },
  mounted() {
    this.$router.app.$emit("transitionScroll");
  }
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

::selection {
  background: var(--green-semi-transparent);
}
::-moz-selection {
  background: var(--green-semi-transparent);
}

html {
  width: 100vw;
  margin: 0;
  background-color: white;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1rem; // 16px
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0 7vw; // left/right padding for narrow window
  overflow-x: hidden;
  overflow-y: hidden;
}

#app,
.study-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // centers content container on page
  width: 100%;
  // keeps content width constrained for wide windows
  max-width: var(--main-width);
  color: black;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0px;
  position: fixed;
  top: 0;
  z-index: 100;

  .sam-gochman {
    // height: min-content;
    // text-transform: uppercase;
    // font-size: 24px;
    // font-weight: 700;
    // color: black;
    margin-top: 10px;
    padding-left: calc(min(7vw, 40px));

    // &:hover {
    //   fill: var(--green);
    // }
  }

  #name-drawn {
    // width: 154px;
    // height: 22px;
    // background-image: url("./assets/drawn/name_drawn.svg");
    background-repeat: no-repeat;
    // transform: scaleY(0.9);
  }
}

// page content
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // left-aligns content
  width: 100%;
  // max-width: var(--main-width);
}

.section {
  width: 100%;
  margin-bottom: 200px;
  // margin-bottom: 30vh;

  &:last-child {
    margin-bottom: 7vh !important;
  }
}

.hidden {
  display: none;
}

// designates scrollmagic fade in
.appear {
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}

.visible {
  opacity: 1;
  transition: opacity 200ms ease-in-out;
}

// page Vue transition
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

@media only screen and (max-width: 1900px) {
  #nav {
    position: absolute;
    overflow: hidden;
  }
}

@media only screen and (max-width: 1024px) {
  .section {
    margin-bottom: 150px;
  }
}
</style>
