<template>
  <div id="text-bg">
    <div class="project-text">
      <div class="project-title-container">
        <!-- router-link keeps user on same window -->
        <router-link v-if="type === 'study'" :to="link">
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
        </router-link>
        <!-- <a> opens new window -->
        <a v-else :href="link" target="_blank" rel="noopener">
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
        </a>
      </div>
      <h2 class="project-desc">{{ description }}</h2>
      <Tags :words="tags"></Tags>
    </div>
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
    setTimeout(() => {
      this.trig = ScrollTrigger.create({
        trigger: "#text-bg",
        start: "top 25%", // [trigger] [scroller] positions,
        end: "bottom bottom-=7%", // [trigger] [scroller] positions
        // markers: true,
        pin: true
      });
    }, 500);
  },
  computed: {
    // retrieve store values
    ...mapState(["title", "description", "tags", "link", "type", "locked"])
  },
  beforeDestroy() {
    this.trig.kill();
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
}

.project-text > * {
  margin-bottom: 36px;
}

.project-title-container {
  a {
    display: flex;
    align-items: flex-start;
    width: fit-content;
    color: black;

    .arrow-svg {
      margin-top: 12px;
    }

    .arrow {
      background-size: cover;
      transform-origin: top left;
      transform: scale(0.2);
      fill: var(--purple);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    .lock-svg {
      margin: 11px 13px 0 0;
    }

    .lock {
      background-size: cover;
      transform-origin: top left;
      transform: scale(0.1);
      fill: black;
      transition: fill 0.2s ease-in-out;
    }

    &:hover {
      .arrow {
        fill: var(--purple);
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
      }
      .lock {
        fill: var(--purple);
        transition: fill 0.2s ease-in-out;
      }
    }
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

.project-title {
  margin: 0 15px 0 0;
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

  .arrow-svg {
    margin-top: 8px !important;
  }

  .lock-svg {
    margin-top: 7px !important;
  }
}

@media only screen and (min-width: 426px) and (max-width: 1024px) {
  .project-text {
    max-height: 40vh;
  }
}
</style>
