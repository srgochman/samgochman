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
          width="167"
          height="39"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 167.01 38.61"
        >
          <g id="Layer_2" data-name="Layer 2">
            <path
              class="fade-out"
              d="M162.79,29.3a2,2,0,0,1-1.62-.8,28.56,28.56,0,0,1-2.33-6.35,30.2,30.2,0,0,0-1,3.47c-.18.52-.3,1.06-.43,1.6A2.33,2.33,0,0,1,155.32,29c-1.06.18-1.48-.17-1.32-1.16s.45-2.16.7-3.24a29.64,29.64,0,0,0,1.14-7.42,11.56,11.56,0,0,0-.4-2.21c-.35-1.59.15-2.46,1.52-2.65a3,3,0,0,1,3.45,2.3,65.1,65.1,0,0,1,2.22,8,20.85,20.85,0,0,0,.69,2.24,20.86,20.86,0,0,0,.33-5.67c0-1.7,0-3.4,0-5.1a1.2,1.2,0,0,1,1.76-1.11c.17.06,1.34,0,1.42.21a18,18,0,0,1,.09,3.43c0,1.18.07,2.36.08,3.56,0,2.73,0,6-.75,8.1C165.8,29.5,164,29.29,162.79,29.3Z"
            />
            <path
              class="fade-out"
              d="M43.31,22.76a3,3,0,0,0,.59-1.09l2.16-6a7,7,0,0,1,1.45-2.45,3.24,3.24,0,0,1,1.68-.92c1-.23,1.49.05,1.65.95a9.88,9.88,0,0,1,0,2.49c-.19,2.11-.45,4.22-.69,6.33a12.12,12.12,0,0,0,.19,5.52,1.91,1.91,0,0,1,.07.59c0,.42.06.9-.46,1.13A1.87,1.87,0,0,1,48,29a3.16,3.16,0,0,1-.75-2.05,21.08,21.08,0,0,1,0-4.35c.21-1.4.43-3.07.71-4.62A3.55,3.55,0,0,0,47.46,19c-.65,1.69-1.11,3.06-1.76,4.76A4.74,4.74,0,0,1,44.91,25a3.51,3.51,0,0,1-2.76,1.35,1.35,1.35,0,0,1-1.48-1.1,4.47,4.47,0,0,1-.18-1.58c.08-2-.25-4-.25-6A47.37,47.37,0,0,1,39,24.37c-.36,1.41-.88,2.8-1.17,4.24-.15.73-1.57,1.25-2.33.92-.35-.15-.34-.41-.3-.68a13.39,13.39,0,0,1,.44-2.43c.19-1.08.76-2.4.94-3.56.41-2.65,1.22-5.11.63-7.8-.27-1.21.78-1.69,1.82-1.8a5.2,5.2,0,0,0,1.58-.36c1.16-.48,1.82-.11,2,1a27.18,27.18,0,0,1,.44,5.55C43.06,20.53,43.22,21.57,43.31,22.76Z"
            />
            <path
              class="fade-out"
              d="M133,20.17A11.55,11.55,0,0,0,132,23a8.56,8.56,0,0,1-.55,1.69,2.19,2.19,0,0,1-2.31,1.46,2.39,2.39,0,0,1-2.39-1.78,8.72,8.72,0,0,1-.33-1.88,21.65,21.65,0,0,0-.46-3.65c-.49,2.4-.87,4.56-1.16,6.73a17.09,17.09,0,0,0-.22,1.89c-.1,1.45-1,2.38-2.75,1.69a1,1,0,0,1-.73-1.18c.11-1,.11-.88.27-1.88a25.93,25.93,0,0,0,.15-5.84,5.88,5.88,0,0,0-.63-2.58,1.36,1.36,0,0,1,.86-1.86,3.53,3.53,0,0,0,2.8-2.1c.4-.84,1.39-1,2.21-1.11.66-.12,1,.44,1.17,1a25.48,25.48,0,0,1,1.37,5.57c0,.31,0,.67.32,1,.35-1,.73-1.92,1-2.88a17.83,17.83,0,0,1,1.17-2.82,2.84,2.84,0,0,1,1.35-1.3,1.64,1.64,0,0,1,2.61,1.05,7.41,7.41,0,0,1,.43,2.38,60.62,60.62,0,0,0,.57,7,20.32,20.32,0,0,0,.55,2.9c.41,1,.19,1.75-.5,2.11a2,2,0,0,1-2.46-.79,16.83,16.83,0,0,1-1.16-5A21.67,21.67,0,0,1,133,20.17Z"
            />
            <path
              class="fade-out"
              d="M32.67,20.6c.11,1.65.16,3.31.11,5a3.23,3.23,0,0,1-.54,1.88,1.43,1.43,0,0,1-1.21.6c-.63,0-.78-.14-.79-.72,0-1.4,0-2.81-.06-4.22,0-.22,0-.44-.05-.65-.08-.58-.19-.66-.8-.45a6.42,6.42,0,0,1-1.74.36.82.82,0,0,0-.84.6,20.65,20.65,0,0,0-1.29,5.1c0,.7-.18.88-1,1-.56.09-1.19.31-1.65-.25a.51.51,0,0,1-.14-.5c.75-2.82,1.73-5.59,2.32-8.45.3-1.48.69-2.94,1-4.4a.84.84,0,0,1,.16-.45A9.1,9.1,0,0,1,29,12.79a1.36,1.36,0,0,1,2,.7,12.26,12.26,0,0,1,1.47,5C32.56,19.23,32.62,19.91,32.67,20.6ZM29,16.1c-.26.49-.55.92-.74,1.38a20.73,20.73,0,0,0-.7,2.15.48.48,0,0,0,.25.65c.62.27,2.07-.38,2.09-1A5.52,5.52,0,0,0,29,16.1Z"
            />
            <path
              class="fade-out"
              d="M140.44,28a31.71,31.71,0,0,1,1-4.7c.46-2,.94-3.95,1.36-5.94a10.12,10.12,0,0,0,.06-1.83c0-.92.08-1.08,1-1.37A5.74,5.74,0,0,0,146,13.1a2.22,2.22,0,0,1,.78-.35c1.2-.39,2-.08,2.31,1,.43,1.35.79,2.73,1.11,4.11.12.51,0,.69.34,1.22s.49.53.26,1.16a3.55,3.55,0,0,0-.12,2.07,26,26,0,0,1,.11,4.23,2.2,2.2,0,0,1-2.55,2.12c-.77,0-1-.24-.81-.92a14.38,14.38,0,0,0,0-5.11c0-.35-.28-.43-.62-.39a8.54,8.54,0,0,0-1.8.48c-.31.1-.4.35-.5.61a16.52,16.52,0,0,0-1,4.24c-.1,1.45-.89,1.88-2.34,1.34C140.59,28.72,140.39,28.35,140.44,28Zm5.05-8.32c1.12-.14,1.58-.32,1.5-.65a5.37,5.37,0,0,0-.73-2.49C146.08,17.61,145.39,18.51,145.49,19.7Z"
            />
            <path
              class="fade-out"
              d="M109.65,16.49c0,.68,0,1.36,0,2,0,.48.29.7.78.68a12,12,0,0,0,2.52-.43.76.76,0,0,0,.59-.88,12,12,0,0,0-.2-3.49,1.24,1.24,0,0,1,.62-1.65,2.66,2.66,0,0,1,2.45-.13A1.16,1.16,0,0,1,117,14a22.84,22.84,0,0,0-.1,3.51,2.4,2.4,0,0,0,.28,1.6,1.35,1.35,0,0,1,.07,1.29,5.49,5.49,0,0,0-.26,2c0,1.27.1,2.54.25,3.8a2.13,2.13,0,0,1-1.06,2.18c-1,.66-1.75.44-2-.65-.17-.91-.27-1.84-.37-2.77s-.16-1.78-.21-2.67c0-.55-.25-.8-.85-.6a10.93,10.93,0,0,1-2.14.3c-1.08.12-1.33.35-1.31,1.39,0,1.45-.22,2.88-.3,4.32-.06,1-.41,1.51-1,1.53a2,2,0,0,1-2-1.69c0-1.19,0-2.38.11-3.57.12-2.07.3-4.15.41-6.22A11.42,11.42,0,0,0,106,14.5c-.29-1-.09-1.35.9-1.62a4.77,4.77,0,0,1,1.2-.18c.95,0,1.43.39,1.49,1.28,0,.68,0,1.83,0,2.51Z"
            />
            <path
              class="fade-out"
              d="M80.4,23.73a22.42,22.42,0,0,1,1.27-7.65,5.54,5.54,0,0,1,6.15-3.27,1.27,1.27,0,0,1,.85.59,10.56,10.56,0,0,1,1.73,4.18,13.72,13.72,0,0,1-.89,8.54,5.37,5.37,0,0,1-6.66,2.43A3.52,3.52,0,0,1,80.4,24.8C80.42,24.45,80.4,24.09,80.4,23.73Zm6.75-4.06A19.3,19.3,0,0,0,86.77,16c-.17-.76-.51-.85-1.14-.39a2.81,2.81,0,0,0-1,1.26,11,11,0,0,0-.61,2.76A13.44,13.44,0,0,0,84,24.79a1.12,1.12,0,0,0,2,.57,3.26,3.26,0,0,0,.57-.91A9.71,9.71,0,0,0,87.15,19.67Z"
            />
            <path
              class="fade-out"
              d="M98.54,29a7.44,7.44,0,0,1-4.06-1.33,4.06,4.06,0,0,1-1.73-3.26,12.87,12.87,0,0,1,.55-4.45,12.53,12.53,0,0,1,3.18-5.79,4.78,4.78,0,0,1,2.36-1.26c1.17-.24,1.88.38,1.77,1.54a9.75,9.75,0,0,1-.19,1.08c-.12.54-.36.95-1,.92a1.51,1.51,0,0,0-1.47,1,12.4,12.4,0,0,0-1.5,5.49c0,2.77,1.91,3.43,3.89,2.43a8.3,8.3,0,0,1,2.26-1.2c.49-.08.88-.15,1.22.23a1.13,1.13,0,0,1,0,1.4,6,6,0,0,1-4.27,3.06A9.47,9.47,0,0,1,98.54,29Z"
            />
            <path
              d="M16.82,21.73c-2,.59-3.87,1.19-4.84-.48s2-4.17,3.24-5.77c1.62-2.12,3.91-5.65,6.14-5.17,2.68.59-4.63,6.77-5,8.29-.11.19-.08.49.2.36,4.08-1.86,7.07-.22,3.41,3.86-2.17,2.43-4.44,3.92-4.87,7.33.05.61-1.29,1.55-1.91,1.46a1.83,1.83,0,0,1-1.41-2.13C12.23,25.89,15.4,24.89,16.82,21.73Z"
            />
            <path
              class="move"
              d="M64.83,26.43c-2.12-4.91,8.28-17,9.26-16.81.78.17,2.09.94,1.74,2.08-5.17,4.61-9.28,11.69-7.34,14,.85,1,2.33.12,2.54-.26.35-.63,1.44-2.69,1.13-4s4.3-2.16,5.72-2.28c1.05-.18,1.35,1.69.44,2.09-1.45.9-2.51.33-3.14,2.06s-2.08,5.86-5.06,6.43C67.87,30.15,65.78,28.63,64.83,26.43Z"
            />
            <path
              class="fade-in"
              style="fill: #098a49; opacity: 0;"
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
  data() {
    return {
      nameTL: null
    };
  },
  created() {
    // window.onload = window.onresize = function() {
    //   document.getElementById("app").style.height = window.innerHeight + "px";
    // };
  },
  mounted() {
    this.$router.app.$emit("transitionScroll");

    this.nameTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#app",
        start: "top top-=20%",
        end: "top top-=20%",
        // markers: true,
        onEnter: () => {
          this.nameTL.to(".fade-out", { opacity: 0, duration: 0.3 });
          // this.nameTL.to(".fade-out", { display: "none", duration: 0 });
          this.nameTL.to(".move", {
            x: -40,
            duration: 0.3,
            ease: "power2.inOut"
          });
          this.nameTL.to(".fade-in", { opacity: 1, duration: 0.3 });
        },
        onEnterBack: () => {
          this.nameTL.to(".fade-in", { opacity: 0, duration: 0.3 });
          this.nameTL.to(".move", {
            x: 0,
            duration: 0.3,
            ease: "power2.inOut"
          });
          this.nameTL.to(".fade-out", { opacity: 1, duration: 0.3 });
        }
        // toggleActions: "play none reverse none"
      }
    });
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
    margin-top: 10px;
    margin-left: calc(min(7vw, 50px));
    // padding-left: calc(min(7vw, 30px));
    position: relative;
  }

  #name-drawn {
    transform-origin: top left;
    transform: scale(1.5);
    position: absolute;
    left: -8px;
  }
}

// #initials {
//   display: none;
// }

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

  #nav #name-drawn {
    transform: scale(1);
  }

  // #initials {
  //   display: block;
  // }
}

@media only screen and (max-width: 425px) {
  #nav #name-drawn {
    transform: scale(1.1);
  }
}
</style>
