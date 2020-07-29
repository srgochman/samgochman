<template>
  <div class="project-container">
    <img class="project-img" :src="image" />
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
// img, arrow, description, tags hidden for projects that aren't active

export default {
  name: "Project",
  data() {
    return {
      study: study
    };
  },
  props: {
    title: String,
    description: String,
    img: String,
    tags: Array,
    link: String,
    type: String
  },
  computed: {
    image() {
      // To browser, starting root is public. Only works if serving website from base URL
      return "/photos/" + this.img;
    }
  },
  mounted() {},
  components: {
    Tags
  }
};
</script>

<style lang="scss">
.project-container {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  // justify-content: flex-end;
}

.project-img {
  // flex-grow: 1;
  // margin-right: calc(min(10vw, 50px));
  margin-right: 4%;
  width: 63%;
  height: 60vh;
  // height: 800px;
  object-fit: cover;
  border-radius: 2px;
}

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
  .project-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .project-img {
    margin: 0 0 20px 0;
    width: 100%;
    height: 40vh;
  }

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
  .project-img {
    height: 60vh;
  }

  .project-text {
    max-height: 40vh;
  }
}
</style>
