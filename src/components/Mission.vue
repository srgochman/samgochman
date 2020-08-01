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
  </div>
</template>

<script>
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
      this.idx = (this.idx + 1) % this.endings.length;
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
  margin-top: 50vh;
  transform: translateY(-50%);
  font-size: 4em;
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
  height: 350px;
  width: 100%;
  // max-width: 678px;
  // max-width: calc(max(768px, 50%));
  max-width: 900px;
  // margin-right: 17%;
  // flex-grow: 2;
  // flex-basis: 67%;
  // padding-right: 80px;
}

span.ending {
  width: 200px;
}

// .mission-statement:first-child {
//   margin-bottom: 260px;
// }

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

@media only screen and (max-width: 1024px) {
  .mission-container {
    // font-size: 2em;
    font-size: calc(min(11vw, 3.75em));
    line-height: 1.4em;
  }
}

@media only screen and (max-width: 1024px) and (max-height: 426px) {
  .mission-container {
    margin-top: calc(50vh + 75px);
  }
}
</style>
