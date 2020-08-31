<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="sam-gochman">
        <!-- <svg id="name-drawn" width="158" height="22" @click="scrollTop">
          <use href="../src/assets/drawn/name_drawn.svg#Layer_2"></use>
        </svg> -->
        <svg
          id="name-drawn"
          @click="scrollTop"
          width="158"
          height="39"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 157.26 22"
        >
          <g id="Layer_2" data-name="Layer 2">
            <path
              class="fade"
              d="M153,19.68a2,2,0,0,1-1.62-.79,28.46,28.46,0,0,1-2.33-6.36,30.4,30.4,0,0,0-1,3.47c-.18.53-.29,1.07-.43,1.6a2.33,2.33,0,0,1-2.08,1.74c-1.07.18-1.49-.17-1.33-1.16s.46-2.17.7-3.24a29.19,29.19,0,0,0,1.14-7.42,11.65,11.65,0,0,0-.4-2.22c-.34-1.58.15-2.46,1.53-2.64A3,3,0,0,1,150.65,5a63.36,63.36,0,0,1,2.22,8,21.13,21.13,0,0,0,.7,2.24,21.29,21.29,0,0,0,.33-5.67c0-1.7-.05-3.41,0-5.11a1.2,1.2,0,0,1,1.76-1.11c.17.06,1.33,0,1.42.22a17.94,17.94,0,0,1,.09,3.43c0,1.18.07,2.36.07,3.55,0,2.73,0,6-.75,8.1C156.05,19.88,154.21,19.67,153,19.68Z"
            />
            <path
              class="fade"
              d="M31.56,13.15a3.15,3.15,0,0,0,.58-1.09c.72-2,1.45-4,2.16-6a7,7,0,0,1,1.45-2.44,3.24,3.24,0,0,1,1.69-.92c1-.23,1.49,0,1.64,1a9.36,9.36,0,0,1,0,2.48c-.19,2.12-.44,4.23-.69,6.33A12.26,12.26,0,0,0,38.58,18a1.71,1.71,0,0,1,.07.59c0,.43.07.91-.46,1.14a1.85,1.85,0,0,1-1.93-.39,3.08,3.08,0,0,1-.75-2.05,20.5,20.5,0,0,1,0-4.36c.21-1.4.43-3.07.71-4.62a3.32,3.32,0,0,0-.5,1.1c-.64,1.69-1.1,3.06-1.76,4.75a4.15,4.15,0,0,1-.79,1.25,3.44,3.44,0,0,1-2.75,1.35,1.36,1.36,0,0,1-1.49-1.1,4.42,4.42,0,0,1-.18-1.57c.08-2-.24-4-.25-6a47.07,47.07,0,0,1-1.25,6.66c-.37,1.42-.89,2.8-1.17,4.24-.15.74-1.58,1.26-2.34.93-.35-.15-.34-.42-.29-.68a12,12,0,0,1,.44-2.44c.19-1.08.75-2.4.93-3.55.42-2.65,1.23-5.11.63-7.8-.26-1.22.79-1.7,1.83-1.8a5.52,5.52,0,0,0,1.58-.37c1.15-.47,1.82-.11,2,1a28,28,0,0,1,.44,5.55C31.3,10.92,31.47,12,31.56,13.15Z"
            />
            <path
              class="fade"
              d="M123.27,10.55a11.7,11.7,0,0,0-1.06,2.85,8.79,8.79,0,0,1-.55,1.69,2.22,2.22,0,0,1-2.31,1.47,2.41,2.41,0,0,1-2.4-1.79,9.14,9.14,0,0,1-.33-1.88,20.81,20.81,0,0,0-.45-3.65c-.5,2.41-.88,4.56-1.17,6.73-.13,1-.14.88-.21,1.89-.1,1.46-1,2.39-2.76,1.69a1,1,0,0,1-.73-1.17c.12-1,.11-.89.27-1.89a25.84,25.84,0,0,0,.16-5.83,5.85,5.85,0,0,0-.63-2.58,1.11,1.11,0,0,1,.5-1.7,1,1,0,0,1,.35-.16,3.54,3.54,0,0,0,2.8-2.11c.41-.84,1.39-1,2.22-1.1.66-.12,1,.44,1.16,1a25.42,25.42,0,0,1,1.38,5.56c0,.32-.05.68.32,1,.35-1,.72-1.92,1-2.88A18.7,18.7,0,0,1,122,4.88a2.77,2.77,0,0,1,1.36-1.3,1.63,1.63,0,0,1,2.6,1A7.32,7.32,0,0,1,126.4,7a58.28,58.28,0,0,0,.56,7,22,22,0,0,0,.55,2.91c.41,1,.2,1.75-.49,2.11a2,2,0,0,1-2.46-.8,16.77,16.77,0,0,1-1.17-5A21.59,21.59,0,0,1,123.27,10.55Z"
            />
            <path
              class="fade"
              d="M20.91,11c.12,1.66.16,3.31.12,5a3.36,3.36,0,0,1-.54,1.88,1.46,1.46,0,0,1-1.21.6c-.63,0-.79-.13-.8-.71l-.06-4.22a4.87,4.87,0,0,0,0-.66c-.08-.58-.19-.65-.81-.45a6,6,0,0,1-1.74.36.81.81,0,0,0-.83.6,20.21,20.21,0,0,0-1.29,5.1c0,.7-.18.89-1,1-.56.08-1.19.3-1.64-.26a.48.48,0,0,1-.15-.49c.75-2.83,1.74-5.6,2.32-8.46.31-1.47.7-2.93,1.05-4.4a1.06,1.06,0,0,1,.16-.44,9.22,9.22,0,0,1,2.79-2.23,1.35,1.35,0,0,1,2,.69,12.35,12.35,0,0,1,1.47,5.05C20.8,9.61,20.87,10.3,20.91,11Zm-3.68-4.5c-.26.49-.55.92-.74,1.38a20.15,20.15,0,0,0-.7,2.16.49.49,0,0,0,.25.65c.62.27,2.08-.39,2.09-1A5.48,5.48,0,0,0,17.23,6.48Z"
            />
            <path
              class="fade"
              d="M130.69,18.4a32,32,0,0,1,1-4.7c.46-2,.95-3.95,1.36-5.94a9.19,9.19,0,0,0,.07-1.82c0-.93.08-1.09,1-1.37a5.66,5.66,0,0,0,2.16-1.09,2.41,2.41,0,0,1,.78-.35c1.19-.38,2-.07,2.31,1,.42,1.36.78,2.73,1.11,4.11.12.52,0,.69.34,1.23s.48.53.25,1.16a3.64,3.64,0,0,0-.12,2.07,24.93,24.93,0,0,1,.12,4.23,2.21,2.21,0,0,1-2.56,2.12c-.77,0-1-.25-.8-.93a14.38,14.38,0,0,0,0-5.11c0-.35-.27-.43-.61-.39a9,9,0,0,0-1.8.48.81.81,0,0,0-.5.62,16.33,16.33,0,0,0-1,4.24c-.1,1.44-.89,1.88-2.35,1.34C130.84,19.11,130.63,18.74,130.69,18.4Zm5-8.31c1.13-.15,1.59-.32,1.51-.66A5.42,5.42,0,0,0,136.51,7C136.32,8,135.64,8.9,135.73,10.09Z"
            />
            <path
              class="fade"
              d="M99.89,6.88c0,.68,0,1.36,0,2,0,.47.28.69.77.67a11.17,11.17,0,0,0,2.52-.43.74.74,0,0,0,.59-.88,11.38,11.38,0,0,0-.2-3.49,1.24,1.24,0,0,1,.62-1.64A2.65,2.65,0,0,1,106.66,3a1.15,1.15,0,0,1,.57,1.32,24,24,0,0,0-.1,3.5,2.45,2.45,0,0,0,.28,1.6,1.29,1.29,0,0,1,.07,1.29,6,6,0,0,0-.26,2c0,1.27.11,2.55.26,3.81a2.12,2.12,0,0,1-1.07,2.17c-1,.67-1.75.45-2-.64-.18-.92-.27-1.85-.37-2.78s-.17-1.78-.22-2.67c0-.55-.25-.8-.85-.6a10.22,10.22,0,0,1-2.13.3c-1.09.13-1.34.35-1.32,1.39,0,1.46-.21,2.88-.29,4.33-.06,1-.41,1.51-1.06,1.52a2,2,0,0,1-2-1.69c0-1.19,0-2.38.11-3.56.12-2.08.3-4.15.41-6.23a11.09,11.09,0,0,0-.48-3.23c-.28-1-.09-1.34.9-1.61a4.91,4.91,0,0,1,1.2-.18c1,0,1.43.38,1.5,1.27,0,.68,0,1.84,0,2.52Z"
            />
            <path
              class="fade"
              d="M70.64,14.11a22.71,22.71,0,0,1,1.28-7.65,5.54,5.54,0,0,1,6.15-3.27,1.37,1.37,0,0,1,.85.6A10.48,10.48,0,0,1,80.64,8a13.62,13.62,0,0,1-.89,8.53,5.37,5.37,0,0,1-6.66,2.44,3.54,3.54,0,0,1-2.45-3.75C70.67,14.83,70.64,14.47,70.64,14.11Zm6.75-4A18.54,18.54,0,0,0,77,6.34c-.16-.77-.5-.85-1.14-.4a2.82,2.82,0,0,0-1,1.27A10.85,10.85,0,0,0,74.29,10a13.48,13.48,0,0,0-.07,5.22,1.12,1.12,0,0,0,2,.57,3.65,3.65,0,0,0,.56-.91A9.5,9.5,0,0,0,77.39,10.06Z"
            />
            <path
              class="fade"
              d="M88.78,19.35a7.25,7.25,0,0,1-4-1.33A4.1,4.1,0,0,1,83,14.76a12.7,12.7,0,0,1,.56-4.45,12.49,12.49,0,0,1,3.18-5.79,4.68,4.68,0,0,1,2.36-1.25,1.32,1.32,0,0,1,1.77,1.54,10.23,10.23,0,0,1-.2,1.08c-.11.53-.36.94-1,.91a1.53,1.53,0,0,0-1.47,1,12.26,12.26,0,0,0-1.49,5.49c0,2.78,1.9,3.43,3.89,2.44.76-.38,1.34-1.05,2.25-1.2.49-.09.88-.15,1.23.23a1.11,1.11,0,0,1,0,1.39,6.11,6.11,0,0,1-4.27,3.07A9.64,9.64,0,0,1,88.78,19.35Z"
            />
            <path
              style="position: relative"
              d="M5.07,12.11c-2,.6-3.87,1.19-4.84-.48s2-4.17,3.23-5.76C5.08,3.75,7.37.21,9.6.7,12.28,1.28,5,7.46,4.61,9c-.12.19-.09.48.19.36,4.09-1.87,7.08-.23,3.42,3.85C6,15.63,3.77,17.13,3.34,20.53c.05.61-1.29,1.55-1.91,1.46A1.83,1.83,0,0,1,0,19.87C.47,16.27,3.65,15.27,5.07,12.11Z"
            />
            <path
              class="move"
              d="M55.08,16.82C53,11.9,63.35-.21,64.34,0c.78.17,2.09,1,1.73,2.09C60.9,6.7,56.8,13.77,58.74,16c.85,1,2.32.13,2.53-.25.36-.63,1.45-2.69,1.14-4s4.3-2.17,5.71-2.28c1.06-.19,1.36,1.69.45,2.08-1.46.9-2.52.33-3.14,2.07s-2.09,5.85-5.07,6.42C58.11,20.53,56,19,55.08,16.82Z"
            />
            <path
              class="circle"
              style="fill: #098a49; position: absolute; top: -20px;"
              d="M44.75,11.16C41.49,6.63,36.46,4,32,1.85,26.67-.69,20.27-.09,15.92.59A37.62,37.62,0,0,0,8.53,2.46,19.53,19.53,0,0,0,6,3.72,12.79,12.79,0,0,0,4.35,4.85l-.48.38c-.28.2-.39.33-.4.45a.27.27,0,0,0,.07.2c.13.17.31.23.77,0s.88-.44,1.34-.69a20.13,20.13,0,0,1,4.81-2A48.83,48.83,0,0,1,23.13,1.58h.6l.67,0,.24,0a19.22,19.22,0,0,1,6.66,1.6c7,3.23,11.07,6.72,13.36,11.3,2.72,5.45,1.7,10.14-3.13,14.34a36.17,36.17,0,0,1-3.83,3A26.16,26.16,0,0,1,26,36.28c-5.24.61-8.79.59-11.87-.09-3.8-.83-6.27-1.95-8-3.63a13.31,13.31,0,0,1-3.89-7.37c-.54-2.87.72-7,1.29-8.65A17.78,17.78,0,0,1,8.74,9c1.61-1.39,4.82-3.77,8.15-4.11,1.76-.19,4.33.41,4.55,2.3,0,.44.16.68.38.81l.1.06L22,8a2.65,2.65,0,0,0,.71-2.57,3.05,3.05,0,0,0-2.3-1.68A11.53,11.53,0,0,0,14.72,4,20.61,20.61,0,0,0,7.07,8.22C2.1,12.63.91,15.88.14,21.52c-.66,4.82,1,10.94,6.21,13.75a28,28,0,0,0,13.49,3.34A39.55,39.55,0,0,0,32.37,36.4a29,29,0,0,0,12.22-8.08,12.06,12.06,0,0,0,3.27-6.26C48.47,18.49,47.45,14.92,44.75,11.16Z"
            />
          </g>
        </svg>
        <!-- <svg id="initials" width="48" height="39" @click="scrollTop">
          <use href="../src/assets/drawn/initials_green.svg#Layer_2"></use>
        </svg> -->
      </router-link>
    </div>
    <transition name="pages" @after-leave="$root.$emit('transitionScroll')">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
import contents from "./list-contents.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "App",
  created() {
    // window.onload = window.onresize = function() {
    //   document.getElementById("app").style.height = window.innerHeight + "px";
    // };
  },
  mounted() {
    this.$router.app.$emit("transitionScroll");

    var nameTL = gsap.timeline();
    nameTL.to(".fade", { opacity: 0, duration: 2 });
    nameTL.to(".move", { x: -40, duration: 1 });
    nameTL.from(".circle", { opacity: 0, duration: 1 });
  },
  methods: {
    scrollTop() {
      if (this.$router.history.current.name === "Sam Gochman") {
        window.scrollTo(0, 0);
      }
      this.$store.commit("set_project_params", {
        title: contents.projects[0].title,
        description: contents.projects[0].description,
        tags: contents.projects[0].tags,
        link: contents.projects[0].link,
        type: contents.projects[0].type,
        locked: contents.projects[0].locked
      });
      document.documentElement.style.setProperty("--scroll", 0);
    }
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

// /* width */
// ::-webkit-scrollbar {
//   width: 15px;
//   // padding: 3px;
// }
// /* Track */
// ::-webkit-scrollbar-track {
//   // box-shadow: inset 0 0 5px grey;
//   // border-radius: 10px;
//   // background: blue;
//   // box-shadow: transparent;
// }
// /* Handle */
// ::-webkit-scrollbar-thumb {
//   background: rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   border: solid 4px white;
//   &:hover {
//     background: gray;
//   }
// }

html {
  width: 100vw;
  margin: 0;
  background-color: white;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 100%; // 16px
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
  padding: 0 8vw; // left/right padding for narrow window
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
  left: 0;
  z-index: 100;

  .sam-gochman {
    // height: min-content;
    // text-transform: uppercase;
    // font-size: 24px;
    // font-weight: 700;
    // color: black;
    margin-top: 10px;
    margin-left: calc(min(7vw, 30px));
    // padding-left: calc(min(7vw, 30px));

    // &:hover {
    //   fill: var(--green);
    // }
  }

  // #name-drawn {
  //   // width: 154px;
  //   // height: 22px;
  //   // background-image: url("./assets/drawn/name_drawn.svg");
  //   background-repeat: no-repeat;
  //   // transform: scaleY(0.9);
  // }
}

#initials {
  display: none;
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

// @media only screen and (min-width: 1024px) and (max-width: 1900px) {
//   #nav {
//     position: absolute;
//     overflow: hidden;
//   }
// }

@media only screen and (max-width: 1024px) {
  .section {
    margin-bottom: 150px;
  }

  #name-drawn {
    display: none;
  }

  #initials {
    display: block;
  }
}
</style>
