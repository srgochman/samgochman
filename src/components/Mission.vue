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
    <h3>
      As a developer
      <!-- <a
        class="underline"
        href="https://github.com/srgochman"
        target="_blank"
        rel="noopener"
        >developer</a
      > -->
      with roots in biology and architecture, I can appreciate the complexity of
      people’s relationships with the world — and that opens up huge creative
      opportunities.
    </h3>
    <h3 id="connect">
      * I'm looking for new
      <a
        class="underline"
        href="https://www.linkedin.com/in/samuelrgochman/"
        target="_blank"
        rel="noopener"
        >work</a
      >
      and would love to
      <a
        class="underline"
        href="mailto:srgochman@gmail.com"
        target="_blank"
        rel="noopener"
        >connect</a
      >!
      <!-- <div id="arrow"></div> -->
    </h3>
  </div>
</template>

<script>
// import { Controller, Scene } from 'react-scrollmagic';
import contents from "../list-contents.json";

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
  font-size: 55px;
  font-weight: 800;
  line-height: 1.3em;

  h3 {
    width: 67%;
  }
}

.mission-statement {
  height: 60px;
  // max-width: 678px;
  max-width: 768px;

  span.ending {
    width: 100%;
  }
}

.mission-statement:first-child {
  margin-bottom: 220px;
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

// #connect {
//   margin: 0;
//   display: inline;
// }

// #arrow {
//   background-image: url("../assets/Asset 10.svg");
//   background-size: cover;
//   width: 48px;
//   height: 15px;
// }

@media only screen and (min-width: 1025px) {
  .mission-statement {
    // max-width: 67%;
  }
}
</style>
