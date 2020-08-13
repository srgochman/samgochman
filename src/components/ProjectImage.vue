<template>
  <div class="project-container" ref="projectContainer">
    <router-link v-if="type === 'study'" :to="link">
      <img class="project-img dull" :src="image" ref="projectImage" />
    </router-link>
    <a v-else :href="link" target="_blank" rel="noopener">
      <img class="project-img dull" :src="image" ref="projectImage" />
    </a>
    <div class="project-text-below" ref="projectTextBelow">
      <router-link v-if="type === 'study'" :to="link">
        <div class="project-title-container">
          <h3 class="project-title" ref="projectTitle">{{ title }}</h3>
          <svg class="lock-svg" v-if="locked" width="7px" height="10px">
            <use
              ref="lock"
              class="lock"
              href="../assets/unlocked.svg#Layer_1"
            ></use>
          </svg>
          <svg class="arrow-svg" width="28px" height="8px">
            <use
              class="arrow"
              ref="arrow"
              href="../assets/drawn/arrow_drawn2.svg#Layer_2"
            ></use>
          </svg>
        </div>
        <h2 class="project-desc">{{ description }}</h2>
      </router-link>
      <a v-else :href="link" target="_blank" rel="noopener">
        <div class="project-title-container">
          <h3 class="project-title" ref="projectTitle">{{ title }}</h3>
          <svg class="lock-svg" v-if="locked" width="7px" height="10px">
            <use
              ref="lock"
              class="lock"
              href="../assets/unlocked.svg#Layer_1"
            ></use>
          </svg>
          <svg class="arrow-svg" width="28px" height="8px">
            <use
              class="arrow"
              ref="arrow"
              href="../assets/drawn/arrow_drawn2.svg#Layer_2"
            ></use>
          </svg>
        </div>
        <h2 class="project-desc">{{ description }}</h2>
      </a>
    </div>
  </div>
</template>

<script>
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
    locked: Boolean
  },
  data() {
    return {
      isActive: false,
      trig: null,

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
    setTimeout(() => {
      const instance = this;
      const projectContainer = this.$refs.projectContainer;
      this.projectImage = this.$refs.projectImage;

      // following 4 are for text below image, only shown on narrow screens
      this.projectTextBelow = this.$refs.projectTextBelow;
      this.projectTitle = this.$refs.projectTitle;
      this.arrow = this.$refs.arrow;
      this.lock = this.$refs.lock;

      projectContainer.addEventListener("mouseover", function() {
        if (instance.isActive) {
          // text below (narrow screens)
          instance.projectTitle.style.color = "var(--purple)";
          instance.arrow.classList.add("purple-arrow");
          if (instance.locked) instance.lock.classList.add("purple-lock");

          // ProjectText (wide screens)
          $(".project-text a").css("color", "var(--purple)");
          $(".project-text .arrow").addClass("purple-arrow");
          $(".project-text .lock").addClass("purple-lock");
        }
      });
      projectContainer.addEventListener("mouseout", function() {
        if (instance.isActive) {
          // text below (narrow screens)
          instance.projectTitle.style.color = "black";
          instance.arrow.classList.remove("purple-arrow");
          if (instance.locked) instance.lock.classList.remove("purple-lock");

          // ProjectText (wide screens)
          $(".project-text a").css("color", "black");
          $(".project-text .arrow").removeClass("purple-arrow");
          $(".project-text .lock").removeClass("purple-lock");
        }
      });

      // this.projectTextBelow.addEventListener("mouseover", function() {
      //   if (instance.isActive) {
      //     instance.projectTitle.childNodes[0].style.color = "var(--purple)";
      //     instance.arrow.classList.add("purple-arrow");
      //     if (instance.locked) instance.lock.classList.add("purple-lock");
      //     $(".project-title-container .project-title").css(
      //       "color",
      //       "var(--purple)"
      //     );
      //     $(".project-title-container .arrow").addClass("purple-arrow");
      //     $(".project-title-container .lock").addClass("purple-lock");
      //   }
      // });
      // this.projectTextBelow.addEventListener("mouseout", function() {
      //   if (instance.isActive) {
      //     instance.projectTitle.childNodes[0].style.color = "black";
      //     instance.arrow.classList.remove("purple-arrow");
      //     if (instance.locked) instance.lock.classList.remove("purple-lock");
      //     $(".project-text a").css("color", "black");
      //     $(".project-text .arrow").removeClass("purple-arrow");
      //     $(".project-text .lock").removeClass("purple-lock");
      //   }
      // });

      if (projectContainer == projectContainer.parentNode.firstChild)
        this.projectImage.classList.remove("dull");

      this.trig = ScrollTrigger.create({
        trigger: projectContainer,
        start: "top+=5% 50%", // [trigger] [scroller] positions,
        end: "bottom-=5% 50%", // [trigger] [scroller] positions
        // markers: true,
        onEnter: () => {
          this.enter();
        },
        onEnterBack: () => {
          this.enter();
        },
        onLeave: () => {
          // Don't fade out last project when scrolling past it
          if (projectContainer !== projectContainer.parentNode.lastChild) {
            this.leave();
          }
        },
        onLeaveBack: () => {
          // Don't fade out first project when scrolling back past it
          if (projectContainer !== projectContainer.parentNode.firstChild) {
            this.leave();
          }
        }
      });
    }, 500);
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
        locked: this.locked
        // activeProject: this.title
      });
    },
    enter() {
      $(".project-text").removeClass("fade-out");
      $(".project-text").addClass("fade-in");
      this.projectImage.classList.remove("dull");
      this.projectTextBelow.classList.remove("dull");
      this.isActive = true;
      this.updateParams();
    },
    leave() {
      $(".project-text").removeClass("fade-in");
      $(".project-text").addClass("fade-out");
      this.projectImage.classList.add("dull");
      this.projectTextBelow.classList.add("dull");
      this.projectTitle.style.color = "black";
      this.arrow.classList.remove("purple-arrow");
      if (this.locked) this.lock.classList.remove("purple-lock");
      // projectTextBelow.style.visibility = "hidden";
      this.isActive = false;
    }
  },
  beforeDestroy() {
    this.trig.kill();
  }
};
</script>

<style lang="scss">
// scrolltrigger transitions for images
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
  margin-right: 4%;
  width: 100%;
  height: 65vh;
  // height: 800px;
  // max-height:
  object-fit: cover;
  border-radius: 2px;
  transition: opacity 200ms ease-out;
}

.dull {
  opacity: 0.3;
  transition: opacity 200ms ease-out;
}

@media only screen and (max-width: 1024px) {
  .project-img {
    margin: 0;
    height: 40vh;
  }
}

@media only screen and (min-width: 426px) and (max-width: 1024px) {
  .project-img {
    height: 60vh;
  }
}
</style>

<style lang="scss" scoped>
// hide duplicated below-text on wide screens
.project-text-below {
  display: none;
}

@media only screen and (max-width: 1024px) {
  .project-text-below {
    display: block;
  }

  .project-desc {
    margin: 10px 0 80px 0;
  }
}
</style>
