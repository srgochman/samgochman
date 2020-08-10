<template>
  <div class="mission-container oversized">
    <div class="mission-statement">
      <span id="beginning">I’m a creative technologist who </span>
      <transition name="fade">
        <span v-if="showEndings" ref="ending" class="ending" :key="idx">
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
      // TODO: if page not visible then dont advance idx; Page Visibility API
      this.idx++;
      this.idx = (this.idx + 1) % this.endings.length;
    }, 4500);

    const root = document.documentElement;
    document.addEventListener("mousemove", evt => {
      let x = (evt.clientX / innerWidth) * 2;
      root.style.setProperty("--mouse-x", x);
    });
    document.addEventListener("scroll", () => {
      let z = (window.scrollY / innerHeight) * 1.5;
      root.style.setProperty("--scroll", z);
    });

    // let btn = document.querySelector("span.ending");
    // const root = document.documentElement;
    // document.addEventListener("mousemove", e => {
    //   let rect = e.target.getBoundingClientRect();
    //   let x = e.clientX - rect.left;
    //   let y = e.clientY - rect.top;
    //   root.style.setProperty("--x", x + "px");
    //   root.style.setProperty("--y", y + "px");
    // });
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
  // font-size: 4em;
  // font-weight: 800;
  // line-height: 1.3em;
  display: flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  flex-flow: row wrap;
  // justify-content: space-between;

  // color: var(--purple);
  background: white;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    mix-blend-mode: screen;

    background: linear-gradient(
      120deg,
      var(--green)
        calc(var(--scroll, 0) * 100% - 100% + var(--mouse-x, 0) * 50%),
      var(--blue) calc(var(--scroll, 0) * 100% - 50% + var(--mouse-x, 0) * 50%),
      var(--purple) calc(var(--scroll, 0) * 100% + var(--mouse-x, 0) * 50%),
      var(--blue) calc(var(--scroll, 0) * 100% + 50% + var(--mouse-x, 0) * 50%),
      var(--green)
        calc(var(--scroll, 0) * 100% + 100% + var(--mouse-x, 0) * 50%)
    );
  }
}

#beginning {
  // masking makes it invisible
  color: white !important;

  // duplicate text as black on top
  &::before {
    color: black;
    content: "I'm a creative technologist who";
    position: absolute;
    max-width: 920px;
  }
}

.mission-statement {
  // font-family: Roboto Condensed;
  height: 350px;
  width: 100%;
  // max-width: 678px;
  // max-width: calc(max(768px, 50%));
  max-width: 920px;
  // margin-right: 17%;
  // flex-grow: 2;
  // flex-basis: 67%;
  // padding-right: 80px;
}

// span.ending {
//   position: relative;
//   width: 200px;
//   // color: var(--purple);
//   color: black;
//   background: linear-gradient(
//     to right,
//     var(--green) calc(var(--scroll, 0) * 100% - 75% + var(--mouse-x, 0) * 50%),
//     var(--blue) calc(var(--scroll, 0) * 100% - 50% + var(--mouse-x, 0) * 50%),
//     var(--purple) calc(var(--scroll, 0) * 100% + var(--mouse-x, 0) * 50%),
//     var(--blue) calc(var(--scroll, 0) * 100% + 50% + var(--mouse-x, 0) * 50%),
//     var(--green) calc(var(--scroll, 0) * 100% + 100% + var(--mouse-x, 0) * 50%)
//   );
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// .mission-statement:first-child {
//   margin-bottom: 260px;
// }

.fade-enter-active {
  transition: color 700ms ease-in-out;
  transition-delay: 1000ms;
}

.fade-leave-active {
  transition: color 700ms ease-in-out;
  color: transparent;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  color: transparent;
}

@media only screen and (max-width: 1024px) {
  // .mission-container {
  //   font-size: 2em;
  //   font-size: calc(min(10vw, 2.3em));
  //   line-height: 1.4em;
  // }
}

@media only screen and (max-width: 1024px) and (max-height: 426px) {
  .mission-container {
    margin-top: calc(50vh + 75px);
  }
}
</style>
