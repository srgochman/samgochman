<template>
  <div class="project-container" ref="projectContainer">
    <router-link v-if="type === 'study'" :to="link">
      <img class="project-img dull" :src="image" ref="projectImage" />
    </router-link>
    <a v-else :href="link" target="_blank" rel="noopener">
      <img class="project-img dull" :src="image" ref="projectImage" />
    </a>
    <div class="project-text-below">
      <div>
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
      </div>
      <Tags :words="tags"></Tags>
    </div>
  </div>
</template>

<script>
import Tags from "./Tags.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ProjectImage",
  data() {
    return {
      isActive: false
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
    var instance = this;
    const projectImage = this.$refs.projectImage;
    const projectContainer = this.$refs.projectContainer;

    projectImage.addEventListener("mouseover", function() {
      if (instance.isActive) {
        $(".project-title-container>a").css("color", "var(--purple)");
        $(".project-title-container>a>.arrow").addClass("purple-arrow");
        // projectImage.style.opacity = 0.1;
        // document.getElementsByClassName("arrow")[0].style.backgroundImage =
        //   "url('../assets/drawn/arrow_drawn2_purple.svg')";
      }
    });
    projectImage.addEventListener("mouseout", function() {
      if (instance.isActive) {
        $(".project-title-container>a").css("color", "black");
        $(".project-title-container>a>.arrow").removeClass("purple-arrow");
      }
    });

    if (projectContainer == projectContainer.parentNode.firstChild)
      projectImage.classList.remove("dull");

    ScrollTrigger.create({
      trigger: projectImage,
      start: "top+=5% 50%", // [trigger] [scroller] positions,
      end: "bottom-=5% 50%", // [trigger] [scroller] positions
      // markers: true,
      onEnter: () => {
        $(".project-text").removeClass("fade-out");
        $(".project-text").addClass("fade-in");
        projectImage.classList.remove("dull");
        this.updateParams();
        instance.isActive = true;
      },
      onEnterBack: () => {
        $(".project-text").removeClass("fade-out");
        $(".project-text").addClass("fade-in");
        projectImage.classList.remove("dull");
        this.updateParams();
        instance.isActive = true;
      },
      onLeave: () => {
        // Don't fade out last project when scrolling past it
        if (projectContainer !== projectContainer.parentNode.lastChild) {
          $(".project-text").removeClass("fade-in");
          $(".project-text").addClass("fade-out");
          projectImage.classList.add("dull");
          instance.isActive = false;
        }
      },
      onLeaveBack: () => {
        // Don't fade out first project when scrolling back past it
        if (projectContainer !== projectContainer.parentNode.firstChild) {
          $(".project-text").removeClass("fade-in");
          $(".project-text").addClass("fade-out");
          projectImage.classList.add("dull");
          instance.isActive = false;
        }
      }
    });
  },
  methods: {
    test() {
      console.log(this.isActive);
    },
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
  },
  components: { Tags }
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
  opacity: 0.3;
  transition: opacity 200ms ease-out;
}

@media only screen and (max-width: 1024px) {
  // .project-container {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: flex-start;
  // }

  .project-img {
    margin: 0;
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

<style lang="scss" scoped>
.project-text-below {
  display: none;
}

.project-desc {
  margin-right: 0;
}

@media only screen and (max-width: 1024px) {
  .project-text-below {
    display: flex;
    flex-direction: row;
  }

  .tags-container {
    display: unset;
    width: 40%;
    margin-top: 10px;
    margin-left: 20px;
  }
}
</style>
