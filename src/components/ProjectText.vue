<template>
  <div class="text-bg">
    <div class="project-text">
      <div class="project-title-container">
        <router-link v-if="type === 'study'" :to="link">
          <h1 class="project-title">{{ title }}</h1>
          <!-- <div v-if="locked" class="lock"></div> -->
          <svg class="lock-svg" v-if="locked" width="7px" height="10px">
            <use class="lock" href="../assets/unlocked.svg#Layer_1"></use>
          </svg>
          <!-- <div class="arrow"></div> -->
          <svg class="arrow-svg" width="28px" height="8px">
            <use
              class="arrow"
              href="../assets/drawn/arrow_drawn2.svg#Layer_2"
            ></use>
          </svg>
        </router-link>
        <a v-else :href="link" target="_blank" rel="noopener">
          <h1 class="project-title">{{ title }}</h1>
          <div v-if="locked" class="lock"></div>
          <!-- <div class="arrow"></div> -->
          <svg class="arrow-svg" width="28px" height="8px">
            <use
              class="arrow"
              href="../assets/drawn/arrow_drawn2.svg#Layer_2"
            ></use>
          </svg>
          <!-- <svg
            class="arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128.83 41.09"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  d="M112.22,15.87c-3.78-4-10.31-7.48-13.54-10.51-1.43-1.11-2.43-1.85-1.42-3.52A3.6,3.6,0,0,1,102.47.63c8,4.73,16.1,9.34,23.69,14.66,4.22,3,3.33,6.47-1.86,8.88-6.92,3.22-14,6.1-21,9.09C98.4,35.33,93.16,36.54,88.88,40c-1.62,1.3-3.75,1.78-5.33-.14-1.45-1.76-.29-3.1.87-4.89a27.21,27.21,0,0,1,7.49-4.52c3.7-1.38,11.81-5.16,15.91-6.71-6.33-1-25.65-1.38-33.09-1.39C61.2,22.36,19.49,21,7,23.14a15.9,15.9,0,0,1-4.95-.23,2.17,2.17,0,0,1-2-1.86,2.58,2.58,0,0,1,1.17-2.48,11.21,11.21,0,0,1,5.55-2c23.41-1.88,74.93-2.38,95.47-.33C104.13,16.52,109.5,17.17,112.22,15.87Z"
                />
              </g>
            </g>
          </svg> -->
        </a>
      </div>
      <h2 class="project-desc">{{ description }}</h2>
      <Tags :words="tags"></Tags>
    </div>
  </div>
</template>

<script>
import lock from "../assets/unlocked.svg";
import Tags from "./Tags.vue";
// import contents from "../list-contents.json";
import { mapState } from "vuex";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ProjectDescription",
  data() {
    return {
      lock: lock
    };
  },
  mounted() {
    ScrollTrigger.create({
      trigger: ".text-bg",
      start: "top 25%", // [trigger] [scroller] positions,
      end: "bottom bottom-=7%", // [trigger] [scroller] positions
      // markers: true,
      pin: true
    });
  },
  methods: {},
  // retrieve store values
  computed: {
    ...mapState(["title", "description", "tags", "link", "type", "locked"])
  },
  watch: {},
  components: {
    Tags
  }
};
</script>

<style lang="scss">
.text-bg {
  width: 33%;
  position: unset;
}

.project-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.project-text > * {
  margin-bottom: 36px;
}

.project-title-container {
  a {
    width: fit-content;
    color: black;
    display: flex;
    align-items: flex-start;

    .arrow-svg {
      margin-top: 9px;
    }

    .arrow {
      // background-image: url("../assets/drawn/arrow_drawn2.svg");
      background-size: cover;
      // width: 28px;
      // height: 8px;
      transform-origin: top left;
      transform: scale(0.2);
      // margin-top: 9px;
      // fill: black;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    .lock-svg {
      margin: 8px 13px 0 0;
    }

    .lock {
      // background-image: url("../assets/unlocked.svg");
      background-size: cover;
      transform-origin: top left;
      transform: scale(0.1);
      fill: black;
      transition: fill 0.2s ease-in-out;
      // width: 7px;
      // height: 10px;
      // margin: 8px 13px 0 0;
    }
  }

  a:hover {
    .arrow {
      // background-image: url("../assets/drawn/arrow_drawn2_purple.svg");
      fill: var(--purple);
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
    .lock {
      // background-image: url("../assets/unlocked_purple.svg");
      fill: var(--purple);
      transition: fill 0.2s ease-in-out;
    }
  }
}

.purple-arrow {
  // background-image: url("../assets/drawn/arrow_drawn2_purple.svg") !important;
  fill: var(--purple);
  opacity: 1 !important;
  transition: opacity 0.2s ease-in-out;
}

.purple-lock {
  // background-image: url("../assets/unlocked_purple.svg") !important;
  fill: var(--purple) !important;
  transition: fill 0.2s ease-in-out;
}

.project-title {
  margin: 0 15px 0 0;
  // transition: var(--hover);
}

// .project-title:hover {
//   color: var(--purple) !important;
//   transition: var(--hover);
// }

@media only screen and (max-width: 1024px) {
  .text-bg {
    display: none;
  }

  .project-text {
    // padding: 0 7vw;
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
    // max-width: 60%;
  }

  .arrow-svg {
    margin-top: 6px !important;
  }

  .lock-svg {
    margin-top: 5px !important;
  }

  // .tags-container {
  //   display: none;
  // }
}

// Tablets (subset of above)
@media only screen and (min-width: 426px) and (max-width: 1024px) {
  .project-text {
    max-height: 40vh;
  }
}
</style>
