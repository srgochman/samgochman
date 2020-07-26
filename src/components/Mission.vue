<template>
  <div class="mission-container">
    <div class="mission-statement">
      <span>I’m a creative technologist who </span>
      <transition name="fade">
        <span
          v-if="showEndings"
          ref="ending"
          class="ending"
          :style="{ color: 'var(--purple)' }"
          :key="idx"
        >
          {{ endings[idx] }}
          <!-- <span :style="{ color: 'black' }">.</span> -->
        </span>
      </transition>
    </div>
    <div class="mission-description">
      <h3>
        As a developer
        <!-- <a
          class="underline"
          href="https://github.com/srgochman"
          target="_blank"
          rel="noopener"
          >developer</a
        > -->
        with roots in biology and architecture, I appreciate the complexity of
        people’s relationships with the world — and that opens up huge creative
        opportunities.
      </h3>
      <h3 id="contact">
        * I'm looking for new
        <a
          id="work"
          href="https://www.linkedin.com/in/samuelrgochman/"
          target="_blank"
          rel="noopener"
          >work
          <img
            class="work-underline"
            src="../assets/drawn/line1_purple.svg"
            height="5"
          />
        </a>
        and would love to
        <a
          id="connect"
          href="mailto:srgochman@gmail.com"
          target="_blank"
          rel="noopener"
          >connect
          <img
            class="connect-underline"
            src="../assets/drawn/line2_purple.svg"
            height="5"/></a
        >!
        <!-- <div id="arrow"></div> -->
      </h3>
    </div>
  </div>
</template>

<script>
import contents from "../list-contents.json";
import $ from "jquery";

export default {
  name: "Mission",
  data() {
    return {
      endings: contents["missions"],
      idx: 0,
      advanceInt: null,
      showEndings: false
    };
  },
  methods: {},
  props: {},
  components: {},
  mounted() {
    $("#work").hover(function() {
      $(".work-underline").toggleClass("work-underline-hover");
    });
    $("#connect").hover(function() {
      $(".connect-underline").toggleClass("connect-underline-hover");
    });

    this.showEndings = true;
    this.advanceInt = setInterval(() => {
      // if page not visible then dont advance idx; Page Visibility API
      this.idx++;
      if (this.idx >= this.endings.length) {
        this.idx = 0;
      }
    }, 4500);
  },
  beforeDestroy() {
    clearInterval(this.advanceInt);
  }
};
</script>

<style lang="scss">
.mission-container {
  width: 100%;
  margin-top: 230px;
  font-size: 65px;
  font-weight: 800;
  line-height: 1.3em;
  display: flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  flex-flow: row wrap;
  // justify-content: space-between;
}

.mission-statement {
  // font-family: Roboto Condensed;
  height: 300px;
  // max-width: 678px;
  // max-width: calc(max(768px, 50%));
  max-width: 900px;
  margin-right: 17%;
  // flex-grow: 2;
  // flex-basis: 67%;
  // padding-right: 80px;

  span.ending {
    width: 100%;
  }
}

// .mission-statement:first-child {
//   margin-bottom: 260px;
// }

.mission-description {
  // max-width: calc(max(500px, 30%));
  width: 600px;
  // position: absolute;
  // left: 67%;
  // flex-grow: 1;
  // flex-basis: 33%;
}

.fade-enter-active {
  transition: opacity 750ms ease-in-out;
  transition-delay: 1000ms;
}

.fade-leave-active {
  transition: opacity 750ms ease-in-out;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// #contact {
//   margin: 0;
//   display: inline;
// }

// #arrow {
//   background-image: url("../assets/Asset 10.svg");
//   background-size: cover;
//   width: 48px;
//   height: 15px;
// }

// .underline {
//   text-decoration: solid underline var(--purple);
//   text-underline-position: under;
//   text-decoration-thickness: 5px;
//   border-bottom: solid var(--purple) 2px;
//   color: var(--purple);
//   font-weight: 800;
// }

.work-underline,
.connect-underline {
  content: "";
  position: absolute;
  width: calc(100% - 5px);
  // width: 20px;
  transform-origin: left;
  transform: scaleX(1);
  transform: scaleY(1.5);
  // height: 5px;
  bottom: 0;
  left: 0px;
  // background-color: var(--purple);
  visibility: visible;
  transition: all 0.2s ease-in 0s;
}

.work-underline-hover,
.connect-underline-hover {
  visibility: hidden;
  // width: 0;
  // width: calc(100% - 1px);
  transform: scaleX(0);
  left: 0px;
}

@media only screen and (min-width: 1025px) {
  // .mission-statement {
  //   max-width: 67%;
  // }
}
</style>
