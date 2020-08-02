<template>
  <div class="text-bg">
    <div class="project-text">
      <div class="project-title-container">
        <router-link v-if="type === 'study'" :to="link">
          <h3 class="project-title">{{ title }}</h3>
          <div class="arrow"></div>
        </router-link>
        <a v-else :href="link" target="_blank" rel="noopener">
          <h3 class="project-title">{{ title }}</h3>
          <div class="arrow"></div>
        </a>
      </div>
      <h2 class="project-desc">{{ description }}</h2>
      <Tags :words="tags"></Tags>
    </div>
  </div>
</template>

<script>
import study from "../assets/study.svg";
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
      study: study
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
    ...mapState(["title", "description", "tags", "link", "type"])
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

    .arrow {
      background-image: url("../assets/drawn/arrow_drawn2.svg");
      background-size: cover;
      width: 32px;
      height: 10px;
      margin-top: 13px;
      // transition: var(--hover);
    }
  }

  a:hover {
    .arrow {
      background-image: url("../assets/drawn/arrow_drawn2_purple.svg");
      // transition: var(--hover);
    }
  }
}

.purple-arrow {
  background-image: url("../assets/drawn/arrow_drawn2_purple.svg") !important;
  // transition: var(--hover);
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

  .arrow {
    margin-top: 8px !important;
  }

  .tags-container {
    display: none;
  }
}

// Tablets (subset of above)
@media only screen and (min-width: 426px) and (max-width: 1024px) {
  .project-text {
    max-height: 40vh;
  }
}
</style>
