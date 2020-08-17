<template>
  <div id="text-bg">
    <transition name="text" mode="out-in">
      <div
        class="project-text"
        ref="project"
        :key="title"
        @mouseover="hoverOn"
        @mouseout="hoverOff"
      >
        <!-- router-link keeps user on same window for case studies -->
        <router-link v-if="type === 'study'" :to="link">
          <div class="project-title-container">
            <h3 class="project-title">{{ title }}</h3>
            <svg class="lock-svg" v-if="locked" width="7px" height="10px">
              <use class="lock" href="../assets/unlocked.svg#Layer_1"></use>
            </svg>
            <svg class="arrow-svg" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn2.svg#Layer_2"
              ></use>
            </svg>
          </div>
          <h2 class="project-desc">{{ description }}</h2>
          <Tags :words="tags"></Tags>
        </router-link>
        <!-- opens new window for external links -->
        <a v-if="type !== 'study'" :href="link" target="_blank" rel="noopener">
          <div class="project-title-container">
            <h3 class="project-title">{{ title }}</h3>
            <svg class="lock-svg" v-if="locked" width="7px" height="10px">
              <use class="lock" href="../assets/unlocked.svg#Layer_1"></use>
            </svg>
            <svg class="arrow-svg" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn2.svg#Layer_2"
              ></use>
            </svg>
          </div>
          <h2 class="project-desc">{{ description }}</h2>
          <Tags :words="tags"></Tags>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import Tags from "./Tags.vue";
import { mapState } from "vuex";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ProjectDescription",
  data() {
    return {
      trig: null
    };
  },
  mounted() {
    this.$router.app.$root.$once("transitionScroll", () => {
      this.$router.app.$nextTick(() => {
        if (this.$router.history.current.name === "Sam Gochman") {
          this.trig = ScrollTrigger.create({
            trigger: "#text-bg",
            start: "top 25%", // [trigger] [scroller] positions,
            end: "bottom bottom-=7%", // [trigger] [scroller] positions
            // markers: true,
            pin: true
          });
        }
      });
    });
  },
  computed: {
    // retrieve store values
    ...mapState(["title", "description", "tags", "link", "type", "locked"])
  },
  methods: {
    hoverOn() {
      $(".project-text a").css("color", "var(--purple)");
      $(".project-text .arrow").addClass("purple-arrow");
      $(".project-text .lock").addClass("purple-lock");
    },
    hoverOff() {
      $(".project-text a").css("color", "black");
      $(".project-text .arrow").removeClass("purple-arrow");
      $(".project-text .lock").removeClass("purple-lock");
    }
  },
  beforeDestroy() {
    if (this.$router.history.current.name === "Sam Gochman") {
      this.trig.kill();
    }
  },
  components: {
    Tags
  }
};
</script>

<style lang="scss">
#text-bg {
  width: 33%;
  position: unset;
}

.project-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;

  a {
    .project-title-container {
      margin-bottom: 30px;
    }

    .project-desc {
      margin-bottom: 36px;
    }

    .tags-container {
      margin-bottom: 0;
    }
  }
}

.project-title-container {
  display: flex;
  flex-direction: row;
  // justify-content: flex-start;
  align-items: center;

  & > * {
    margin-right: 15px;
  }

  .arrow {
    background-size: cover;
    transform-origin: top left;
    transform: scale(0.2);
    fill: var(--purple);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .lock {
    background-size: cover;
    transform-origin: top left;
    transform: scale(0.1);
    fill: black;
    transition: fill 0.2s ease-in-out;
  }
}

.purple-arrow {
  fill: var(--purple);
  opacity: 1 !important;
  transition: opacity 0.2s ease-in-out;
}

.purple-lock {
  fill: var(--purple) !important;
  transition: fill 0.2s ease-in-out;
}

.project-desc {
  color: black !important;
}

// project-text vue transition
.text-enter-active {
  transition: opacity 200ms ease-out;
}

.text-leave-active {
  transition: opacity 200ms ease-in;
}

.text-enter,
.text-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.text-leave,
.text-enter-to {
  opacity: 1;
}

@media only screen and (max-width: 1024px) {
  #text-bg {
    display: none;
  }

  .project-text {
    width: 100%;
  }

  .project-text > * {
    margin-bottom: 20px;
  }

  .project-title-container {
    margin-top: 10px;
  }

  .project-desc {
    margin-top: 10px;
    margin-bottom: 60px;
  }

  // .arrow-svg {
  //   margin-top: 8px !important;
  // }

  // .lock-svg {
  //   margin-top: 7px !important;
  // }
}

@media only screen and (min-width: 426px) and (max-width: 1024px) {
  .project-text {
    max-height: 40vh;
  }
}
</style>
