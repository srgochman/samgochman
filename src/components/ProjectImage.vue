<template>
  <div class="project-container" ref="projectContainer">
    <!-- router-link keeps user on same window for case studies -->
    <router-link v-if="type === 'study'" :to="link">
      <img class="project-img dull" :src="image" ref="projectImage" />
      <div class="project-text-below" ref="projectTextBelow">
        <div class="project-title-container">
          <p class="project-title" ref="projectTitle">{{ title }}</p>
          <svg class="lock-svg" v-if="locked" width="7px" height="10px">
            <use
              ref="lock"
              class="lock"
              href="../assets/unlocked.svg#Layer_1"
            ></use>
          </svg>
          <svg
            v-if="arrowType == 2"
            class="arrow-svg"
            width="28px"
            height="8px"
          >
            <use
              class="arrow"
              ref="arrow"
              href="../assets/drawn/arrow_drawn2.svg#Layer_2"
            ></use>
          </svg>
          <svg
            v-if="arrowType == 3"
            class="arrow-svg"
            width="28px"
            height="8px"
          >
            <use
              class="arrow"
              ref="arrow"
              href="../assets/drawn/arrow_drawn3.svg#Layer_2"
            ></use>
          </svg>
          <svg
            v-if="arrowType == 4"
            class="arrow-svg"
            width="28px"
            height="8px"
          >
            <use
              class="arrow"
              ref="arrow"
              href="../assets/drawn/arrow_drawn4.svg#Layer_2"
            ></use>
          </svg>
        </div>
        <h2 class="project-desc">{{ description }}</h2>
      </div>
    </router-link>
    <!-- opens new window for external links -->
    <a
      v-else-if="type === 'product'"
      :href="link"
      target="_blank"
      rel="noopener"
    >
      <img class="project-img dull" :src="image" ref="projectImage" />
      <div class="project-text-below" ref="projectTextBelow">
        <div class="project-title-container">
          <p class="project-title" ref="projectTitle">{{ title }}</p>
          <svg class="lock-svg" v-if="locked" width="7px" height="10px">
            <use
              ref="lock"
              class="lock"
              href="../assets/unlocked.svg#Layer_1"
            ></use>
          </svg>
          <svg
            v-if="arrowType == 2"
            class="arrow-svg"
            width="28px"
            height="8px"
          >
            <use
              class="arrow"
              ref="arrow"
              href="../assets/drawn/arrow_drawn2.svg#Layer_2"
            ></use>
          </svg>
          <svg
            v-if="arrowType == 3"
            class="arrow-svg"
            width="28px"
            height="8px"
          >
            <use
              class="arrow"
              ref="arrow"
              href="../assets/drawn/arrow_drawn3.svg#Layer_2"
            ></use>
          </svg>
          <svg
            v-if="arrowType == 4"
            class="arrow-svg"
            width="28px"
            height="8px"
          >
            <use
              class="arrow"
              ref="arrow"
              href="../assets/drawn/arrow_drawn4.svg#Layer_2"
            ></use>
          </svg>
        </div>
        <h2 class="project-desc">{{ description }}</h2>
      </div>
    </a>
    <!-- no link for other projects -->
    <div v-else>
      <img class="project-img dull" :src="image" ref="projectImage" />
      <div class="project-text-below" ref="projectTextBelow">
        <div class="project-title-container">
          <p class="project-title" ref="projectTitle">{{ title }}</p>
        </div>
        <h2 class="project-desc">{{ description }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
// Image for projects in scrolling list
// Also contains text below image for narrow screens
// Props passed in from Home.vue
// Project triggers send active project information to Store

import { EventBus } from "../event-bus.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ProjectImage",
  props: {
    title: String,
    description: String,
    img: String,
    tags: Array,
    link: String,
    type: String,
    locked: Boolean,
    arrowType: Number
  },
  data() {
    return {
      isActive: false,
      trig: null,

      projectContainer: null,
      projectImage: null,
      projectTextBelow: null,
      projectTitle: null,
      arrow: null,
      lock: null
    };
  },
  computed: {
    image() {
      // To browser, starting root is public. Only works if serving website from base URL
      return "/photos/" + this.img;
    }
  },
  mounted() {
    this.$router.app.$root.$once("transitionScroll", () => {
      this.$router.app.$nextTick(() => {
        if (this.$router.history.current.name === "Sam Gochman") {
          // const instance = this;
          this.projectContainer = this.$refs.projectContainer;
          this.projectImage = this.$refs.projectImage;

          // following 4 are for text below image, only shown on narrow screens
          this.projectTextBelow = this.$refs.projectTextBelow;
          this.projectTitle = this.$refs.projectTitle;
          this.arrow = this.$refs.arrow;
          this.lock = this.$refs.lock;

          this.projectContainer.addEventListener(
            "mouseover",
            this.hoverProject
          );
          this.projectContainer.addEventListener(
            "mouseout",
            this.unhoverProject
          );

          if (
            this.projectContainer == this.projectContainer.parentNode.firstChild
          )
            this.projectImage.classList.remove("dull");

          this.trig = ScrollTrigger.create({
            trigger: this.projectContainer,
            start: "top-=15px 50%", // [trigger] [scroller] positions,
            end: "bottom+=15px 50%", // [trigger] [scroller] positions
            // markers: true,
            onEnter: () => {
              this.enter();
            },
            onEnterBack: () => {
              this.enter();
            },
            onLeave: () => {
              // Don't fade out last project when scrolling past it
              if (
                this.projectContainer !==
                this.projectContainer.parentNode.lastChild
              ) {
                this.leave();
              }
            },
            onLeaveBack: () => {
              // Don't fade out first project when scrolling back past it
              if (
                this.projectContainer !==
                this.projectContainer.parentNode.firstChild
              ) {
                this.leave();
              }
            }
          });
          EventBus.$on("destroy_triggers", this.killTriggers);
        }
      });
    });
  },
  methods: {
    // update store values with this project's props
    updateParams() {
      this.$store.commit("set_project_params", {
        title: this.title,
        description: this.description,
        tags: this.tags,
        link: this.link,
        type: this.type,
        locked: this.locked,
        arrowType: this.arrowType
        // activeProject: this.title
      });
    },
    // show active project
    enter() {
      // image (all screens)
      this.projectImage.classList.remove("dull");
      // text below (narrow screens)
      this.projectTextBelow.classList.remove("dull");

      this.isActive = true;
      this.updateParams();
    },
    // dull inactive projects
    leave() {
      // image (all screens)
      this.projectImage.classList.add("dull");
      // text below (narrow screens)
      this.projectTextBelow.classList.add("dull");
      this.projectTitle.style.color = "black";
      if (this.arrow) this.arrow.classList.remove("green-arrow");
      if (this.locked) this.lock.classList.remove("green-lock");

      this.isActive = false;
    },
    // highlight active project info on hover
    hoverProject() {
      if (this.isActive) {
        // text below (narrow screens)
        this.projectTitle.style.color = "var(--green)";
        if (this.arrow) this.arrow.classList.add("green-arrow");
        if (this.locked) this.lock.classList.add("green-lock");

        // ProjectText (wide screens)
        $(".project-text a").css("color", "var(--green)");
        $(".project-text .arrow").addClass("green-arrow");
        $(".project-text .lock").addClass("green-lock");
      }
    },
    // remove highlights on active project info off of hover
    unhoverProject() {
      if (this.isActive) {
        // text below (narrow screens)
        this.projectTitle.style.color = "black";
        if (this.arrow) this.arrow.classList.remove("green-arrow");
        if (this.locked) this.lock.classList.remove("green-lock");

        // ProjectText (wide screens)
        $(".project-text a").css("color", "black");
        $(".project-text .arrow").removeClass("green-arrow");
        $(".project-text .lock").removeClass("green-lock");
      }
    },
    killTriggers() {
      this.trig.kill();
      EventBus.$off("destroy_triggers", this.killTriggers);
      this.projectContainer.removeEventListener("mouseover", this.hoverProject);
      this.projectContainer.removeEventListener(
        "mouseout",
        this.unhoverProject
      );
    }
  }
};
</script>

<style lang="scss">
.project-container {
  margin-bottom: 30px;
  width: 100%;
}

.project-img {
  // margin-right: 4%;
  width: 100%;
  height: 65vh;
  // height: 800px;
  // max-height: 500px;
  min-height: 300px;
  object-fit: cover;
  // border-radius: 3px;
  // -webkit-border-radius: 3px;
  // -moz-border-radius: 3px;
  transition: opacity 200ms ease;
  transition-delay: 200ms;
}

.project-text-below {
  .project-title {
    color: black;
    transition: var(--hover);
  }
}

.dull {
  opacity: 0.3;
  transition: opacity 200ms ease;
  transition-delay: 200ms;
}

@media only screen and (min-width: 426px) and (max-width: 768px),
  only screen and (orientation: landscape) and (max-device-width: 820px) {
  .project-img {
    height: 60vh;
  }
}

@media only screen and (max-width: 425px) {
  .project-img {
    // margin: 0;
    height: 40vh;
  }
}
</style>

<style lang="scss" scoped>
// hide duplicated below-text on wide screens
.project-text-below {
  display: none;
}

@media only screen and (max-width: 768px),
  only screen and (orientation: landscape) and (max-width: 820px) {
  .project-text-below {
    display: block;
    transition: opacity 200ms ease;
    transition-delay: 200ms;

    .project-title-container {
      // margin-top: 10px;

      svg {
        margin-bottom: 2px;
      }
    }

    .project-desc {
      margin: 10px 0 60px 0;
    }
  }
}
</style>
