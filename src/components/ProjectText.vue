<template>
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
</template>

<script>
import study from "../assets/study.svg";
import Tags from "./Tags.vue";
import { mapState } from "vuex";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ProjectDescription",
  data() {
    return {
      study: study
      // title: null,
      // description: null,
      // tags: null,
      // link: null,
      // type: null
    };
  },
  mounted() {},
  methods: {},
  // retrieve store values
  computed: {
    ...mapState(["title", "description", "tags", "link", "type"])
    // title() {
    //   console.log("ProjectText: computed", this.$store.state.title);
    //   return this.$store.state.title;
    // },
    // description() {
    //   console.log("ProjectText: computed", this.$store.state.description);
    //   return this.$store.state.description;
    // }
  },
  //updates project's description data
  watch: {
    // title() {
    //   console.log("ProjectText: watch", this.title);
    // }
    //   activeProject() {
    //     // this.title = this.activeProject.title;
    //     // this.description = this.activeProject.description;
    //     // this.tags = this.activeProject.tags;
    //     // this.link = this.activeProject.link;
    //     // this.type = this.activeProject.type;
    //     console.log("ProjectText: updated project text with", this.activeProject);
    //   }
  },
  components: {
    Tags
  }
  // props: {
  //   title: String,
  //   description: String,
  //   tags: Array,
  //   link: String,
  //   type: String
  // }
};
</script>

<style lang="scss">
.project-text {
  width: 33%;
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
    // img {
    //   height: 10px;
    //   margin-top: 13px;
    //   // stroke: var(--purple);
    // }
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

.project-title {
  margin: 0 15px 0 0;
}

/* .project-title-container:hover, */
.project-title.inactive {
  /* color: var(--gray); */
  opacity: 0.3;
}

@media only screen and (max-width: 1024px) {
  .project-text {
    width: 100%;
    max-height: 60vh;
  }

  .project-text > * {
    margin-bottom: 20px;
  }
}

// Tablets (subset of above)
@media only screen and (min-width: 426px) and (max-width: 1024px) {
  .project-text {
    max-height: 40vh;
  }
}
</style>
