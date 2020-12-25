<template>
  <div class="page-body">
    <!-- <button @click="clearPass" style="margin-top: 10vh; z-index: 10000">
      Clear passCorrect
    </button> -->
    <div id="particles-js"></div>
    <div class="section section--mission-comp">
      <Mission></Mission>
    </div>
    <div class="section section--mission-description appear">
      <h3>
        As a developer with roots in biological research and architectural
        design, I appreciate the complexity of people’s relationships with the
        world — and that’s helped me leverage technology to build captivating,
        human-centered experiences for clients in tech, museums, education, and
        entertainment.
      </h3>
      <br />
      <h3 class="mission__contact">
        <!-- <img
          height="11"
          class="mission__asterisk"
          src="../assets/drawn/asterisk_green.svg"
        /> -->
        <em>I'm looking for new work and would love to connect!</em>
        <div class="mission__links">
          <a
            href="mailto:srgochman@gmail.com"
            title="email"
            target="_blank"
            rel="noopener"
          >
            <svg
              class="mission__logo"
              xmlns="http://www.w3.org/2000/svg"
              height="15px"
              viewBox="0 0 495.4 330.9"
            >
              <svg:style type="text/css">
                .st0 {
                  fill: none;
                  stroke: #ffffff;
                  stroke-width: 27;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 10;
                }
              </svg:style>
              <path
                d="M444.9,330.9H51.8c-20.8,0-37.6-16.9-37.6-37.6V37.6C14.1,16.9,31,0,51.8,0h393.1c20.8,0,37.6,16.9,37.6,37.6v255.6
	C482.6,314.1,465.7,330.9,444.9,330.9z"
              />
              <polyline
                class="st0"
                points="14.1,70.1 248.3,223.5 482.6,70.1 "
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/samuelrgochman/"
            title="LinkedIn"
            target="_blank"
            rel="noopener"
          >
            <svg
              class="mission__logo"
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 468.5 452"
            >
              <path
                d="M266.1,171.2c11.3-7.8,21.7-16.2,33.1-22.8c21.4-12.2,44.8-16.2,69.3-14.7c23.7,1.4,45.4,8.4,64,23.6
		c16.7,13.6,28.1,31,34.5,51.5c1.4,4.3,1.4,9.2,1.4,13.8c0.1,73.5,0.1,147,0.1,220.6c0,7.6-1.2,8.8-8.7,8.8c-29,0-58,0-87,0
		c-7.2,0-8.4-1.3-8.4-8.5c0-57.2,0.1-114.4-0.1-171.5c0-8.9-0.9-18-2.6-26.8c-3.1-16.2-13.4-25.5-29.5-28.5
		c-10.6-2-21.1-2.6-31.6,0.9c-21.2,7-34.5,25.1-34.5,47.4c0,59.2,0,118.4,0,177.5c0,8.4-1.1,9.5-9.4,9.5c-28.7,0-57.3,0-86,0
		c-7.4,0-8.6-1-8.6-8.3c0-99.2,0-198.4,0-297.6c0-6.9,1.3-8.1,8.2-8.1c29.2,0,58.3,0,87.5,0c6.9,0,8.3,1.5,8.3,8.6
		C266.1,155,266.1,163.5,266.1,171.2z"
              />
              <path
                d="M104,295.1c0,49.3,0,98.7,0,148c0,7.7-1.1,8.8-9,8.9c-28.8,0-57.7,0-86.5,0c-7.1,0-8.5-1.3-8.5-8.4c0-99,0-198,0-297
		c0-7.2,1.3-8.6,8.4-8.6c29,0,58,0,86.9,0c7.6,0,8.7,1.1,8.7,8.6C104,196.1,104,245.6,104,295.1z"
              />
              <path
                d="M0,52.1C0,23.1,23,0.1,52,0c28.7-0.1,52,23,52.1,51.4c0,29.4-22.9,52.6-52,52.5C23,103.9,0,81,0,52.1z"
              />
            </svg>
          </a>
          <a
            href="/SGochman_resume.pdf"
            title="full resume"
            target="_blank"
            rel="noopener"
          >
            <svg
              class="mission__logo"
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 349.3 452"
            >
              <svg:style type="text/css">
                .st0 {
                  fill: none;
                  stroke: #ffffff;
                  stroke-width: 28.2545;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 10;
                }
              </svg:style>
              <path
                d="M314.2,452H35.1C15.7,452,0,436.3,0,416.9V35.1C0,15.7,15.7,0,35.1,0h279.2c19.4,0,35.1,15.7,35.1,35.1v381.9
	C349.3,436.3,333.6,452,314.2,452z"
              />
              <line class="st0" x1="87.5" y1="118.3" x2="203.7" y2="118.3" />
              <line class="st0" x1="87.5" y1="226" x2="261.8" y2="226" />
              <line class="st0" x1="87.5" y1="333.7" x2="261.8" y2="333.7" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/srgoch/"
            title="Instagram"
            target="_blank"
            rel="noopener"
          >
            <svg
              class="mission__logo"
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 298.5 300"
            >
              <path
                d="M202.4,300c-35.2,0-70.4,0-105.7,0c-4.3-0.4-8.5-0.8-12.8-1.1c-46.7-2.3-76.7-30.2-82.2-76.7C1,215.9,0.6,209.4,0,203
	c0-35.3,0-70.7,0-106c0.4-4.3,0.8-8.5,1.1-12.8C3.3,37.3,31.2,7.3,77.5,1.7C83.9,1,90.3,0.6,96.7,0c35.2,0,70.4,0,105.7,0
	c4.1,0.4,8.2,0.8,12.3,1c21,1.4,40.5,6.8,56.6,21.4C289.4,39,297.3,60.3,297.8,84c0.8,44,1.1,88,0,131.9
	c-1.2,46.8-29.9,76.8-76.1,82.3C215.2,299,208.8,299.4,202.4,300z"
              />
              <path
                fill="white"
                d="M226.3,150.1c0,42.8-34.3,77-77.1,76.9c-42.3-0.1-76.4-34.5-76.4-77.1c0-42.8,34.3-77,77.1-76.9
	C192.2,73,226.3,107.5,226.3,150.1z M149.5,100c-27.3,0-49.8,22.5-49.8,49.9c0,27.4,22.3,50,49.6,50.1c27.6,0.1,50.1-22.5,50.1-50.1
	C199.3,122.4,176.9,100,149.5,100z"
              />
              <path
                fill="white"
                d="M247.3,69.9c0,10.1-8.1,18.1-18.1,18.1c-9.8-0.1-17.7-8-17.9-17.8c-0.1-10,7.8-18.2,17.9-18.3
	C239.3,51.9,247.3,59.8,247.3,69.9z"
              />
            </svg>
          </a>
        </div>
      </h3>
    </div>

    <div class="section section--skills appear">
      <h1>Skills</h1>
      <div class="stacked">
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

    <div class="section section--experience appear">
      <h1>Experience</h1>
      <div
        class="experience__item"
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
      <br />
      <a
        class="cta-button"
        href="/SGochman_resume.pdf"
        title="full resume"
        target="_blank"
        rel="noopener"
        >Full resume</a
      >
    </div>

    <div class="juices__arrow-container">
      <img src="../assets/drawn/juices_arrow.png" />
    </div>
    <div class="section section--juices appear">
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
// Homepage view housing Particles, Mission, Skill, ProjectImage, ProjectText, Tags, and Juices

import { EventBus } from "../event-bus.js";
import Mission from "../components/Mission.vue";
import Skill from "../components/Skill.vue";
import ProjectImage from "../components/ProjectImage.vue";
import ProjectText from "../components/ProjectText.vue";
import Juices from "../components/Juices.vue";
import contents from "../home-contents.json";
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
    gsap.timeline().from(".section--mission-comp", {
      autoAlpha: 0,
      duration: 0.8,
      ease: "power1.inOut",
      delay: 0.5
    });

    // animate hover for underlines in mission description
    // $("#work").hover(function() {
    //   $("#work .underline").toggleClass("underline-hover");
    // });
    // $("#connect").hover(function() {
    //   $("#connect .underline").toggleClass("underline-hover");
    // });
    // $("#resume").hover(function() {
    //   $("#resume .underline").toggleClass("underline-hover");
    // });

    // animate hover for arrows in experience
    $(".experience__item a").hover(function() {
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
              trigger: ".section--mission-comp",
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
              trigger: ".juices__arrow-container",
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
      let arrowTop = $(".juices__arrow-container").offset().top;
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

.section--mission-comp {
  position: relative;
  height: 100vh;
  margin-bottom: 50px;
}

.section--mission-description {
  width: 64%;
  // width: 907px;
  // max-width: calc(max(500px, 30%));
}

// .mission__asterisk {
//   position: absolute;
//   top: 10px;
//   left: -25px;
// }

// .underline {
//   // content: "";
//   position: absolute;
//   bottom: 0px;
//   left: 0px;
//   width: 100%;
//   transform: scaleY(1.2);
//   opacity: 1;
//   visibility: visible;
//   transition: var(--hover);
// }

// .underline-hover {
//   left: 0px;
//   visibility: hidden;
//   opacity: 0;
// }

.mission__contact {
  position: relative;
}

.mission__links {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 25px;

  & > * {
    margin-right: 40px;
  }
}

.mission__logo {
  fill: black;
  transition: var(--hover);
  &:hover {
    fill: var(--green);
    transition: var(--hover);
  }
}

.arrow {
  background-size: cover;
  transform-origin: top left;
  transform: scale(0.15, 0.2);
  fill: black;
  // opacity: 0;
  transition: fill 0.2s ease-in-out;
}

.green-arrow {
  fill: var(--green) !important;
  // opacity: 1 !important;
  transition: fill 0.2s ease-in-out;
}

.lock {
  background-size: cover;
  transform-origin: top left;
  transform: scale(0.1);
  fill: black;
  transition: fill 0.2s ease-in-out;
}

.green-lock {
  fill: var(--green) !important;
  transition: fill 0.2s ease-in-out;
}

// .section-heading {
//   height: 13px;
//   margin: 0 0 70px 0;
// }

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

.experience__item {
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

// #juices-arrow-section {
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-bottom: 400px;

//   & svg {
//     transform-origin: center;
//     transform: scale(3);
//     position: relative;
//   }
// }

.juices__arrow-container {
  width: 100%;
  // height: 100%;
  position: relative;
  background: white;
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
  transform: scale(0.7);

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

.section--juices p {
  width: 66%;
  margin-bottom: 30px;
}

@media only screen and (max-width: 1024px) {
  // .mission__asterisk {
  //   transform: scale(0.8);
  //   top: 6px;
  //   left: -22px;
  // }

  // .section-heading {
  //   transform-origin: left;
  //   transform: scale(0.8);
  //   margin: 0 0 50px 0;
  // }

  .experience__item {
    margin-bottom: 50px;
  }

  .juices__arrow-container {
    transform: scale(0.5);
    margin-bottom: 150px;
  }

  .section--juices p {
    width: 100%;
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 768px),
  only screen and (orientation: landscape) and (max-width: 820px) {
  .section--mission-description {
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
  .section--mission-comp,
  #particles-js {
    height: calc(175px + 31vh);
  }

  // .mission__asterisk {
  //   left: -17px;
  // }
}

@media only screen and (min-height: 1100px) {
  .section--mission-comp,
  #particles-js {
    height: 70vh;
  }
}
</style>
