<template>
  <div class="body">
    <!-- <button @click="clearPass" style="margin-top: 10vh; z-index: 10000">
      Clear passCorrect
    </button> -->
    <div id="particles-js"></div>
    <div id="mission" class="section">
      <Mission></Mission>
    </div>
    <div id="mission-description" class="section appear">
      <h3>
        As a developer with roots in biological research and architectural
        design, I appreciate the complexity of people’s relationships with the
        world — and that’s helped me leverage technology to build captivating,
        human-centered experiences for clients in tech, museums, education, and
        entertainment.
      </h3>
      <br />
      <h3 id="contact">
        <img
          height="11"
          id="asterisk"
          src="../assets/drawn/asterisk_green.svg"
        />
        I'm looking for new
        <a
          id="work"
          href="https://www.linkedin.com/in/samuelrgochman/"
          target="_blank"
          rel="noopener"
          >work<img
            height="3"
            class="underline"
            src="../assets/drawn/line1_green.svg"
          />
        </a>
        and would love to
        <div style="display: inline-block">
          <a
            id="connect"
            href="mailto:srgochman@gmail.com"
            target="_blank"
            rel="noopener"
            >connect<img
              height="3"
              class="underline"
              src="../assets/drawn/line2_green.svg"/></a
          >!
        </div>
        Here's a full
        <div style="display: inline-block">
          <a
            id="resume"
            href="/SGochman_resume.pdf"
            target="_blank"
            rel="noopener"
            >resume<img
              height="3"
              class="underline"
              src="../assets/drawn/line4_green.svg"
            /> </a
          >.
        </div>
      </h3>
    </div>

    <div id="skills" class="section appear">
      <h1>Skills</h1>
      <div id="skills-container">
        <Skill
          v-for="skill in skills"
          :key="skill.keywords[0]"
          :description="skill.description"
          :keywords="skill.keywords"
          :color="skill.color"
          :backgroundColor="skill.backgroundColor"
          :delay="skill.delay"
        >
        </Skill>
      </div>
    </div>

    <div id="projects" class="section appear">
      <h1>Selected Projects</h1>
      <div id="projects-container">
        <div id="project-images-container">
          <ProjectImage
            v-for="project in projects"
            ref="project"
            :key="project.title"
            :title="project.title"
            :img="project.img"
            :type="project.type"
            :link="project.link"
            :description="project.description"
            :tags="project.tags"
            :locked="project.locked"
            :arrowType="project.arrowType"
          >
          </ProjectImage>
        </div>
        <ProjectText> </ProjectText>
      </div>
    </div>

    <div id="experience" class="section appear">
      <h1>Experience</h1>
      <div
        class="experience-item"
        v-for="experience in experiences"
        :key="experience.title"
      >
        <h2>{{ experience.title }}</h2>
        <p>
          <a :href="experience.link" target="_blank" rel="noopener">
            <span>{{ experience.firm }}</span>
            <svg v-if="experience.arrowType == 2" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn2.svg#Layer_2"
              ></use>
            </svg>
            <svg v-if="experience.arrowType == 3" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn3.svg#Layer_2"
              ></use>
            </svg>
            <svg v-if="experience.arrowType == 4" width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn4.svg#Layer_2"
              ></use>
            </svg>
          </a>
        </p>
      </div>
    </div>

    <div id="juices-arrow-container">
      <img src="../assets/drawn/juices_arrow.png" />
    </div>
    <div id="juices" class="section appear">
      <h1>Latest Creative Juices</h1>
      <p>
        An archive of prototypes, experiments, and side projects that keep my
        juices flowing. I use tools like Processing, TouchDesigner, Photoshop,
        hammers, and x-acto blades.
      </p>
      <Juices></Juices>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";
import Mission from "../components/Mission.vue";
import Skill from "../components/Skill.vue";
import ProjectImage from "../components/ProjectImage.vue";
import ProjectText from "../components/ProjectText.vue";
import Juices from "../components/Juices.vue";
import contents from "../list-contents.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
import ScrollMagic from "scrollmagic";
import "particles.js/particles";
const particlesJS = window.particlesJS;

export default {
  name: "Home",
  data() {
    return {
      skills: contents["skills"],
      projects: contents["projects"],
      experiences: contents["experiences"],
      missionTrig: null,
      arrowTrig: null
    };
  },
  mounted() {
    particlesJS.load("particles-js", "particlesjs-config.json");

    // fade in mission section
    gsap.timeline().from("#mission", {
      autoAlpha: 0,
      duration: 0.8,
      ease: "power1.inOut",
      delay: 0.5
    });

    // animate hover for underlines in mission description
    $("#work").hover(function() {
      $("#work .underline").toggleClass("underline-hover");
    });
    $("#connect").hover(function() {
      $("#connect .underline").toggleClass("underline-hover");
    });
    $("#resume").hover(function() {
      $("#resume .underline").toggleClass("underline-hover");
    });

    // animate hover for arrows in experience
    $(".experience-item a").hover(function() {
      $(this)
        .find(".arrow")
        .toggleClass("green-arrow");
    });

    const homeController = new ScrollMagic.Controller();
    $(".section.appear").each(function() {
      // Create a scrollmagic scene for each section
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.75 // 75% down page, alternative for pixel offset
      });
      scene.reverse(false); // prevent sections from disappearing on scrollback
      scene.setClassToggle(this, "visible").addTo(homeController);
    });

    this.$router.app.$root.$once("transitionScroll", () => {
      this.$router.app.$nextTick(() => {
        if (this.$router.history.current.name === "Sam Gochman") {
          // mission scroll tracking
          this.missionTrig = gsap.timeline({
            scrollTrigger: {
              trigger: "#mission",
              start: "top top",
              // markers: true,
              onEnter: () => {
                document.addEventListener("scroll", this.missionScroll);
              },
              onEnterBack: () => {
                document.addEventListener("scroll", this.missionScroll);
              },
              onLeave: () => {
                document.removeEventListener("scroll", this.missionScroll);
              },
              onLeaveBack: () => {
                document.removeEventListener("scroll", this.missionScroll);
              }
            }
          });

          // juices arrow scroll tracking
          this.arrowTrig = gsap.timeline({
            scrollTrigger: {
              trigger: "#juices-arrow-container",
              start: "top bottom",
              // markers: true,
              onEnter: () => {
                document.addEventListener("scroll", this.arrowScroll);
              },
              onEnterBack: () => {
                document.addEventListener("scroll", this.arrowScroll);
              },
              onLeave: () => {
                document.removeEventListener("scroll", this.arrowScroll);
              },
              onLeaveBack: () => {
                document.removeEventListener("scroll", this.arrowScroll);
              }
            }
          });
        }
      });
    });
  },
  methods: {
    clearPass() {
      localStorage.setItem("passCorrect", false);
    },
    missionScroll() {
      const root = document.documentElement;
      let y = (window.scrollY / innerHeight) * 1.5;
      root.style.setProperty("--scroll", y);
    },
    arrowScroll() {
      const root = document.documentElement;
      let arrowTop = $("#juices-arrow-container").offset().top;
      let y = (window.scrollY - arrowTop + innerHeight / 2) / 100;
      root.style.setProperty("--scroll", y);
    }
  },
  beforeRouteLeave(to, from, next) {
    // console.log(this.$router.history.current.name);
    if (this.missionTrig.scrollTrigger) this.missionTrig.scrollTrigger.kill();
    if (this.arrowTrig.scrollTrigger) this.arrowTrig.scrollTrigger.kill();
    document.removeEventListener("scroll", this.missionScroll);
    document.removeEventListener("scroll", this.arrowScroll);

    // send signal via store to other components in Home
    // to each destroy their own triggers via computed/watch
    EventBus.$emit("destroy_triggers");

    // move to next page
    next();
    // console.log("moved off of home");
  },
  components: {
    Mission,
    Skill,
    ProjectImage,
    ProjectText,
    Juices
  }
};
</script>

<style lang="scss">
canvas {
  display: block;
  object-fit: cover;
  // vertical-align: bottom;
}

// particles.js container
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: 1;
}

#mission {
  position: relative;
  height: 100vh;
  margin-bottom: 50px;
}

#mission-description {
  width: 64%;
  // width: 907px;
  // max-width: calc(max(500px, 30%));
  // margin-bottom: 200px;
  // font-size: 2em;

  p {
    margin-bottom: 30px;
  }
}

#contact {
  position: relative;
}

#asterisk {
  position: absolute;
  top: 10px;
  left: -25px;
}

.underline {
  // content: "";
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  transform: scaleY(1.2);
  opacity: 1;
  visibility: visible;
  transition: var(--hover);
}

.underline-hover {
  left: 0px;
  visibility: hidden;
  opacity: 0;
}

.arrow {
  background-size: cover;
  transform-origin: top left;
  transform: scale(0.15, 0.2);
  fill: black;
  // opacity: 0;
  transition: fill 0.2s ease-in-out;
}

.lock {
  background-size: cover;
  transform-origin: top left;
  transform: scale(0.1);
  fill: black;
  transition: fill 0.2s ease-in-out;
}

.green-arrow {
  fill: var(--green) !important;
  // opacity: 1 !important;
  transition: fill 0.2s ease-in-out;
}

.green-lock {
  fill: var(--green) !important;
  transition: fill 0.2s ease-in-out;
}

.section-heading {
  height: 13px;
  margin: 0 0 70px 0;
}

#skills-container {
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  // justify-content: space-between;
}

#projects-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#project-images-container {
  width: 63%;
  // height: 500px;
  // overflow: scroll;
}

.experience-item {
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0 !important;
  }

  p {
    display: inline-block;
  }

  a {
    // display: inline-block;
    // display: flex;
    // flex-direction: row;
    // // justify-content: flex-start;
    // align-items: center;

    & > span {
      margin-right: 10px;
    }

    & > svg {
      // vertical-align: middle;
      margin-bottom: 2px;
    }
  }
}

#juices-arrow-section {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 400px;

  & svg {
    transform-origin: center;
    transform: scale(3);
    position: relative;
  }
}

#juices-arrow-container {
  width: 100%;
  // height: 100%;
  position: relative;
  background: white;
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
  transform: scale(0.8);

  &::before {
    content: "";
    display: block;
    width: 95%;
    height: 95%;
    position: absolute;
    top: 50%;
    // right: 0;
    // bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
    background: linear-gradient(
      120deg,
      var(--purple) calc(var(--scroll, 0) * 100% - 300%),
      var(--blue) calc(var(--scroll, 0) * 100%),
      var(--green) calc(var(--scroll, 0) * 100% + 300%)
    );
  }

  img {
    padding: 20px;
  }
}

#juices p {
  width: 66%;
  margin-bottom: 30px;
}

@media only screen and (max-width: 1024px) {
  // #mission-description {
  //   width: 100%;
  //   // max-width: 100%;
  //   margin-bottom: 120px;
  // }

  #asterisk {
    transform: scale(0.8);
    top: 6px;
    left: -22px;
  }

  .section-heading {
    transform-origin: left;
    transform: scale(0.8);
    margin: 0 0 50px 0;
  }

  // #projects-container {
  //   flex-direction: column;
  // }

  // #project-images-container {
  //   width: 100%;
  // }

  .experience-item {
    margin-bottom: 50px;
  }

  #juices-arrow-container {
    transform: scale(0.5);
    margin-bottom: 150px;
  }

  #juices p {
    width: 100%;
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 768px),
  only screen and (orientation: landscape) and (max-width: 820px) {
  #mission-description {
    width: 100%;
    // max-width: 100%;
    margin-bottom: 120px;
  }

  #projects-container {
    flex-direction: column;
  }

  #project-images-container {
    width: 100%;
  }
}

@media only screen and (max-width: 425px) {
  #mission,
  #particles-js {
    height: calc(175px + 31vh);
  }

  #asterisk {
    left: -17px;
  }
}

@media only screen and (min-height: 1100px) {
  #mission,
  #particles-js {
    height: 70vh;
  }
}
</style>
