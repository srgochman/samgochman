<template>
  <div id="text-bg">
    <transition name="text" mode="out-in">
      <div
        class="project__text"
        ref="project"
        :key="title"
        @mouseover="hoverOn"
        @mouseout="hoverOff"
      >
        <!-- router-link keeps user on same window for case studies -->
        <router-link v-if="type === 'study'" :to="link">
          <div class="project__title-container">
            <p class="project__title">{{ title }}</p>
            <svg v-if="locked" width="7px" height="10px">
              <use class="lock" href="../assets/unlocked.svg#Layer_1"></use>
            </svg>
            <svg v-if="arrowType == 2" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn2.svg#Layer_2"
              ></use>
            </svg>
            <svg v-if="arrowType == 3" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn3.svg#Layer_2"
              ></use>
            </svg>
            <svg v-if="arrowType == 4" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn4.svg#Layer_2"
              ></use>
            </svg>
          </div>
          <h2 class="project__description">{{ description }}</h2>
          <p class="info-caps">My Role</p>
          <Tags :words="tags"></Tags>
        </router-link>
        <!-- opens new window for external links -->
        <a
          v-else-if="type === 'product'"
          :href="link"
          target="_blank"
          rel="noopener"
        >
          <div class="project__title-container">
            <p class="project__title">{{ title }}</p>
            <svg v-if="locked" width="7px" height="10px">
              <use class="lock" href="../assets/unlocked.svg#Layer_1"></use>
            </svg>
            <svg v-if="arrowType == 2" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn2.svg#Layer_2"
              ></use>
            </svg>
            <svg v-if="arrowType == 3" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn3.svg#Layer_2"
              ></use>
            </svg>
            <svg v-if="arrowType == 4" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn4.svg#Layer_2"
              ></use>
            </svg>
          </div>
          <h2 class="project__description">{{ description }}</h2>
          <p class="info-caps">My Role</p>
          <Tags :words="tags"></Tags>
        </a>
        <!-- no link for other projects -->
        <div v-else>
          <div class="project__title-container">
            <p class="project__title">{{ title }}</p>
          </div>
          <h2 class="project__description">{{ description }}</h2>
          <p class="info-caps">My Role</p>
          <Tags :words="tags"></Tags>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// Text component in scrolling project section based on current data in Store
// Also controls dynamic text styling in ProjectImage.vue

import { EventBus } from "../event-bus.js";
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
          EventBus.$on("destroy_triggers", this.killTriggers);
        }
      });
    });
  },
  computed: {
    // retrieve store values
    ...mapState([
      "title",
      "description",
      "tags",
      "link",
      "type",
      "locked",
      "arrowType"
    ])
  },
  methods: {
    // highlight project text on hover
    hoverOn() {
      $(".project__text a").css("color", "var(--green)");
      $(".project__text .arrow").addClass("arrow--green");
      $(".project__text .lock").addClass("lock--green");
    },
    // remove highlight on project text off of hover
    hoverOff() {
      $(".project__text a").css("color", "black");
      $(".project__text .arrow").removeClass("arrow--green");
      $(".project__text .lock").removeClass("lock--green");
    },
    killTriggers() {
      // this.trig.kill();
      EventBus.$off("destroy_triggers", this.killTriggers);
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

.project__text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;

  // a {
  .project__title-container {
    margin-bottom: 30px;
  }

  .project__description {
    margin-bottom: 36px;
  }

  .tags__container {
    margin-bottom: 0;
  }
  // }
}

.project__title-container {
  display: flex;
  flex-direction: row;
  // justify-content: flex-start;
  align-items: center;

  & > * {
    margin-right: 10px;
  }
}

// .project__title {
//   transition: var(--hover);
// }

.project__description {
  color: black !important;
}

// project__text vue transition
.text-enter-active {
  transition: opacity 200ms ease;
}

.text-leave-active {
  transition: opacity 200ms ease;
}

.text-enter,
.text-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.text-leave,
.text-enter-to {
  opacity: 1;
}

@media only screen and (min-width: 769px) and (max-width: 1250px) {
  // .project__text a {
  .project__title-container {
    margin-bottom: 2.4vw;
  }

  .project__description {
    margin-bottom: 2.9vw;
  }
  // }
}

@media only screen and (max-width: 768px),
  only screen and (orientation: landscape) and (max-width: 820px) {
  #text-bg {
    display: none;
  }

  // .project__text {
  //   width: 100%;
  // }

  // .project__text > * {
  //   margin-bottom: 20px;
  // }

  .project__title-container {
    margin-top: 10px;
  }

  .project__description {
    margin-top: 10px;
    margin-bottom: 60px;
  }
}

@media only screen and (min-width: 426px) and (max-width: 1024px) {
  // .project__text {
  //   max-height: 40vh;
  // }
}
</style>
