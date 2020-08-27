<template>
  <div id="mission-container">
    <div id="mission-statement">
      <span id="beginning">I’m a creative technologist who </span>
      <transition name="fade" mode="out-in">
        <span v-if="showEndings" ref="ending" class="ending" :key="idx">
          {{ endings[idx] }}
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
      showEndings: false,
      windowActive: true
    };
  },
  methods: {
    scrollPos() {
      const root = document.documentElement;
      if (window.scrollY <= innerHeight) {
        let y = (window.scrollY / innerHeight) * 1.5;
        root.style.setProperty("--scroll", y);
      }
      let arrowTop = $("#juices-arrow-container").offset().top;
      let z = (window.scrollY - arrowTop + innerHeight / 2) / 100;
      root.style.setProperty("--scrollArrow", z);
    }
  },
  mounted() {
    // detect if window is in focus for pausing ending cycling
    const vm = this;
    window.addEventListener("focus", function() {
      vm.windowActive = true;
    });
    window.addEventListener("blur", function() {
      vm.windowActive = false;
    });

    this.showEndings = true;
    this.advanceInt = setInterval(() => {
      // advance ending if the window is in focus
      if (this.windowActive) {
        this.idx = (this.idx + 1) % this.endings.length;
      }
    }, 4500);

    document.addEventListener("scroll", this.scrollPos);
  },
  beforeDestroy() {
    clearInterval(this.advanceInt);
    document.removeEventListener("scroll", this.scrollPos);
  }
};
</script>

<style lang="scss">
#mission-container {
  display: flex;
  flex-flow: row wrap;
  // justify-content: space-between;
  width: 100%;
  height: 50vw;
  // height: calc(min(50vw, 470px));
  max-height: 495px; // half of widest window before left/right margins just grow
  margin-top: 50vh;
  transform: translateY(-50%);
  // font-size: 6em;
  font-size: calc(min(7.4vw, 6em));
  font-weight: 700;
  line-height: 1.3em;
  position: relative;
  padding-left: 1px;

  // color: var(--purple);
  background: white; // masks background gradient

  // color gradient background behind all of mission container
  &::before {
    content: "";
    display: block;
    width: calc(100% - 3px);
    height: 40vw;
    // height: calc(min(40vw, 466px));
    max-height: 490px;
    position: absolute;
    top: 3px;
    right: 0;
    bottom: 0;
    left: 1px;
    mix-blend-mode: screen;
    background: linear-gradient(
      120deg,
      var(--purple) calc(var(--scroll, 0) * 100% - 25%),
      var(--blue) calc(var(--scroll, 0) * 100%),
      var(--green) calc(var(--scroll, 0) * 100% + 50%),
      var(--blue) calc(var(--scroll, 0) * 100% + 100%),
      var(--purple) calc(var(--scroll, 0) * 100% + 150%)
    );
  }
}

#beginning {
  // masking makes it invisible; used for spacing
  color: white !important;

  // duplicate text as black on top
  &::before {
    color: black;
    content: "I'm a creative technologist who";
    position: absolute;
    max-width: 1200px;
  }
}

#mission-statement {
  width: 100%;
  max-width: 1200px;
  // max-width: 678px;
  // max-width: calc(max(768px, 50%));
  // height: 470px;
  // height: calc(min(50vw, 470px));
  // margin-right: 17%;
  // flex-grow: 2;
  // flex-basis: 67%;
  // padding-right: 80px;
}

// ending transitions
.fade-enter-active {
  transition: color 700ms ease-in-out;
}

.fade-leave-active {
  transition: color 700ms ease-in-out;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  color: transparent;
}

.fade-leave,
.fade-enter-to {
  color: black;
}

@media only screen and (max-width: 425px) {
  #mission-container {
    font-size: 9vw;
    height: 60vw;
    margin-top: calc(25px + 13vh);
    transform: translateY(0%);

    &::before {
      height: 58vw;
    }
  }
}

@media only screen and (orientation: landscape) and (max-device-width: 820px) {
  #mission-container {
    height: 42vw;
    margin-top: calc(20px + 5vh);
    transform: translateY(0%);
  }
}

// extra tall screens
@media only screen and (min-height: 1100px) {
  #mission-container {
    margin-top: 40vh;
  }
}

// @media only screen and (max-width: 1024px) and (max-height: 426px) {
//   #mission-container {
//     margin-top: calc(50vh + 75px);
//   }
// }
</style>
