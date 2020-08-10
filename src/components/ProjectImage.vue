<template>
  <div class="project-container" ref="projectContainer">
    <router-link v-if="type === 'study'" :to="link">
      <img class="project-img dull" :src="image" ref="projectImage" />
    </router-link>
    <a v-else :href="link" target="_blank" rel="noopener">
      <img class="project-img dull" :src="image" ref="projectImage" />
    </a>
    <div class="project-text-below" ref="projectTextBelow">
      <div class="project-title-container" ref="projectTitle">
        <router-link v-if="type === 'study'" :to="link">
          <h1 class="project-title">{{ title }}</h1>
          <!-- <div v-if="locked" class="lock" ref="lock"></div> -->
          <svg class="lock-svg" v-if="locked" width="7px" height="10px">
            <use
              ref="lock"
              class="lock"
              href="../assets/unlocked.svg#Layer_1"
            ></use>
          </svg>
          <!-- <div class="arrow" ref="arrow"></div> -->
          <svg class="arrow-svg" width="28px" height="8px">
            <use
              class="arrow"
              ref="arrow"
              href="../assets/drawn/arrow_drawn2.svg#Layer_2"
            ></use>
          </svg>
        </router-link>
        <a v-else :href="link" target="_blank" rel="noopener">
          <h1 class="project-title">{{ title }}</h1>
          <!-- <div v-if="locked" class="lock" ref="lock"></div> -->
          <svg class="lock-svg" v-if="locked" width="7px" height="10px">
            <use
              ref="lock"
              class="lock"
              href="../assets/unlocked.svg#Layer_1"
            ></use>
          </svg>
          <!-- <div class="arrow" ref="arrow"></div> -->
          <svg class="arrow-svg" width="28px" height="8px">
            <use
              class="arrow"
              ref="arrow"
              href="../assets/drawn/arrow_drawn2.svg#Layer_2"
            ></use>
          </svg>
        </a>
      </div>
      <h2 class="project-desc">{{ description }}</h2>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ProjectImage",
  data() {
    return {
      isActive: false,
      trig: null
    };
  },
  props: {
    title: String,
    description: String,
    img: String,
    tags: Array,
    link: String,
    type: String,
    locked: Boolean
  },
  computed: {
    image() {
      // To browser, starting root is public. Only works if serving website from base URL
      return "/photos/" + this.img;
      // },
      // activeProject() {
      //   return this.$store.state.activeProject;
    }
  },
  mounted() {
    // console.log(this.title, this.isActive);
    // console.log(this.activeProject);

    var instance = this;
    const projectImage = this.$refs.projectImage;
    const projectContainer = this.$refs.projectContainer;
    const projectTextBelow = this.$refs.projectTextBelow;
    const projectTitle = this.$refs.projectTitle;
    const arrow = this.$refs.arrow;
    const lock = this.$refs.lock;

    // if (this.title === this.activeProject) {
    //   projectImage.classList.remove("dull");
    // }

    projectImage.addEventListener("mouseover", function() {
      if (instance.isActive) {
        projectTitle.childNodes[0].style.color = "var(--purple)";
        arrow.classList.add("purple-arrow");
        if (instance.locked) lock.classList.add("purple-lock");
        // also do this for the title and arrow in ProjectText
        $(".project-text a").css("color", "var(--purple)");
        $(".project-text .arrow").addClass("purple-arrow");
        $(".project-text .lock").addClass("purple-lock");
      }
    });
    projectImage.addEventListener("mouseout", function() {
      if (instance.isActive) {
        projectTitle.childNodes[0].style.color = "black";
        arrow.classList.remove("purple-arrow");
        if (instance.locked) lock.classList.remove("purple-lock");
        $(".project-text a").css("color", "black");
        $(".project-text .arrow").removeClass("purple-arrow");
        $(".project-text .lock").removeClass("purple-lock");
      }
    });

    if (projectContainer == projectContainer.parentNode.firstChild)
      projectImage.classList.remove("dull");

    ScrollTrigger.create({
      trigger: projectContainer,
      start: "top+=5% 50%", // [trigger] [scroller] positions,
      end: "bottom-=5% 50%", // [trigger] [scroller] positions
      // markers: true,
      onEnter: () => {
        // console.log("hit", projectImage);
        $(".project-text").removeClass("fade-out");
        $(".project-text").addClass("fade-in");
        projectImage.classList.remove("dull");
        projectTextBelow.classList.remove("dull");
        instance.isActive = true;
        this.updateParams();
      },
      onEnterBack: () => {
        $(".project-text").removeClass("fade-out");
        $(".project-text").addClass("fade-in");
        projectImage.classList.remove("dull");
        projectTextBelow.classList.remove("dull");
        instance.isActive = true;
        this.updateParams();
      },
      onLeave: () => {
        // Don't fade out last project when scrolling past it
        if (projectContainer !== projectContainer.parentNode.lastChild) {
          $(".project-text").removeClass("fade-in");
          $(".project-text").addClass("fade-out");
          projectImage.classList.add("dull");
          projectTextBelow.classList.add("dull");
          projectTitle.childNodes[0].style.color = "black";
          arrow.classList.remove("purple-arrow");
          if (instance.locked) lock.classList.remove("purple-lock");
          // projectTextBelow.style.visibility = "hidden";
          instance.isActive = false;
        }
      },
      onLeaveBack: () => {
        // Don't fade out first project when scrolling back past it
        if (projectContainer !== projectContainer.parentNode.firstChild) {
          $(".project-text").removeClass("fade-in");
          $(".project-text").addClass("fade-out");
          projectImage.classList.add("dull");
          projectTextBelow.classList.add("dull");
          projectTitle.childNodes[0].style.color = "black";
          arrow.classList.remove("purple-arrow");
          if (instance.locked) lock.classList.remove("purple-lock");
          instance.isActive = false;
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
        type: this.type,
        locked: this.locked,

        activeProject: this.title
      });
      // console.log("ProjectImage: sent parameters to store");
      // },
      // initTrigger() {
      //   if (this.trig.ScrollTrigger) {
      //     this.trig.ScrollTrigger.kill();
      //   }
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
  // max-height:
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
  margin-bottom: 80px;
}

@media only screen and (max-width: 1024px) {
  .project-text-below {
    display: block;
  }
}
</style>
