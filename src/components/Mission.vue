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
        </span>
      </transition>
    </div>
    <h3>
      I come from this perspective and enjoy combining I come from this
      perspective and enjoy combining I come from this perspective and enjoy
      combining
    </h3>
    <h3>I'm looking for new work and would love to connect!</h3>
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
      this.idx++;
      if (this.idx >= this.endings.length) {
        this.idx = 0;
      }
    }, 5000);
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
  font-size: 50px;
  font-weight: 800;
  line-height: 1.3em;

  h3 {
    width: 67%;
  }
}

.mission-statement {
  height: 60px;
}

.mission-statement:first-child {
  margin-bottom: 120px;
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
</style>
