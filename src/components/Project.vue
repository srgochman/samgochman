<template>
  <div class="project-container">
    <!-- <img class="project-img" src={photo}> -->
    <div class="project-text">
      <div class="project-title-container">
        <a :href="link" target="_blank" rel="noopener">
          <h3 class="project-title">{{ title }}</h3>
          <img :src="type === 'study' ? study : arrow" :alt="type" />
        </a>
      </div>
      <h2 class="project-desc">{{ description }}</h2>
      <Tags :words="tags"></Tags>
    </div>
  </div>
</template>

<script>
// import { Controller, Scene } from 'react-scrollmagic';
import arrow from "../assets/arrow.svg";
import study from "../assets/study.svg";
import Tags from "./Tags.vue";
// img, arrow, description, tags hidden for projects that aren't active

export default {
  name: "Project",
  data() {
    return {
      arrow: arrow,
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
  justify-content: flex-end;
}

.project-img {
  width: 63%;
  height: 500px;
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

/* .project-title-container {
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
} */

.project-title-container {
  a {
    width: fit-content;
    color: black;
    display: flex;
    align-items: flex-start;
  }
  img {
    height: 20px;
    margin-top: 7px;
    // stroke: var(--purple);
  }
}

.project-title-container {
  img:hover {
    stroke: blue;
  }
}

.project-title {
  margin: 0 20px 0 0;
}

/* .project-title-container:hover, */
.project-title.inactive {
  /* color: var(--gray); */
  opacity: 0.3;
}
</style>
