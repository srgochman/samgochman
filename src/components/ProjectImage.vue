<template>
  <div class="project-container" ref="projectContainer">
    <router-link v-if="type === 'study'" :to="link">
      <img class="project-img dull" :src="image" ref="projectImage" />
    </router-link>
    <a v-else :href="link" target="_blank" rel="noopener">
      <img class="project-img dull" :src="image" ref="projectImage" />
    </a>
  </div>
</template>

<script>
// import study from "../assets/study.svg";
// import Tags from "./Tags.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ProjectImage",
  data() {
    return {
      // study: study
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
  mounted() {
    const projectImage = this.$refs.projectImage;
    const projectContainer = this.$refs.projectContainer;

    if (projectContainer == projectContainer.parentNode.firstChild)
      projectImage.classList.remove("dull");

    ScrollTrigger.create({
      trigger: projectImage,
      start: "top+=50px 50%", // [trigger] [scroller] positions,
      end: "bottom-=50px 50%", // [trigger] [scroller] positions
      // markers: true,
      onEnter: () => {
        $(".project-text").removeClass("fade-out");
        $(".project-text").addClass("fade-in");
        projectImage.classList.remove("dull");
        this.updateParams();
      },
      onEnterBack: () => {
        $(".project-text").removeClass("fade-out");
        $(".project-text").addClass("fade-in");
        projectImage.classList.remove("dull");
        this.updateParams();
      },
      onLeave: () => {
        // Don't fade out last project when scrolling past it
        if (projectContainer !== projectContainer.parentNode.lastChild) {
          $(".project-text").removeClass("fade-in");
          $(".project-text").addClass("fade-out");
          projectImage.classList.add("dull");
        }
      },
      onLeaveBack: () => {
        // if ($(this).not(":first-child")) {
        //  if ($(this).slice(1)) {
        // Don't fade out first project when scrolling back past it
        if (projectContainer !== projectContainer.parentNode.firstChild) {
          $(".project-text").removeClass("fade-in");
          $(".project-text").addClass("fade-out");
          projectImage.classList.add("dull");
        }
      }
    });
  },
  methods: {
    // updates store values with this project's props
    updateParams() {
      this.$store.commit("set_project_params", {
        title: this.title,
        description: this.description,
        tags: this.tags,
        link: this.link,
        type: this.type
      });
      // console.log("ProjectImage: sent parameters to store");
    }
  }
};
</script>

<style lang="scss">
.fade-out {
  opacity: 0;
  transition: opacity 200ms ease-out;
}

.fade-in {
  opacity: 1;
  transition: opacity 200ms ease-in;
}

.project-container {
  margin-bottom: 30px;
  width: 100%;
}

.project-img {
  // flex-grow: 1;
  // margin-right: calc(min(10vw, 50px));
  margin-right: 4%;
  width: 100%;
  height: 65vh;
  // height: 800px;
  object-fit: cover;
  border-radius: 2px;
  transition: opacity 200ms ease-out;
}

.dull {
  opacity: 0.5;
  transition: opacity 200ms ease-out;
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
}

// Tablets (subset of above)
@media only screen and (min-width: 426px) and (max-width: 1024px) {
  .project-img {
    height: 60vh;
  }
}
</style>
