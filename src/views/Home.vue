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
        world — and that opens up huge creative opportunities.
      </h3>
      <br />
      <h3 id="contact">
        <img height="11" id="asterisk" src="../assets/drawn/asterisk.svg" />
        I'm looking for new
        <a
          id="work"
          href="https://www.linkedin.com/in/samuelrgochman/"
          target="_blank"
          rel="noopener"
          >work<img
            height="3"
            class="work-underline"
            src="../assets/drawn/line1_purple.svg"
          />
        </a>
        and would love to
        <span style="white-space: nowrap">
          <a
            id="connect"
            href="mailto:srgochman@gmail.com"
            target="_blank"
            rel="noopener"
            >connect<img
              height="3"
              class="connect-underline"
              src="../assets/drawn/line2_purple.svg"/></a
          >!
          <!-- Here's some of my past
          <a
            id="test"
            href="https://www.linkedin.com/in/samuelrgochman/"
            target="_blank"
            rel="noopener"
            >work<img
              height="5"
              class="work-underline"
              src="../assets/drawn/line1_purple.svg"
            /> </a
          >. -->
        </span>
      </h3>
    </div>

    <div id="skills" class="section appear">
      <h1>Skills</h1>
      <!-- <div id="skills-drawn" class="section-heading"></div> -->
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
      <h1>Selected Work</h1>
      <!-- <div id="work-drawn" class="section-heading"></div> -->
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
          >
          </ProjectImage>
        </div>
        <ProjectText> </ProjectText>
      </div>
    </div>

    <div id="experience" class="section appear">
      <h1>Experience</h1>
      <!-- <div id="experience-drawn" class="section-heading"></div> -->
      <div
        class="experience-item"
        v-for="experience in experiences"
        :key="experience.title"
      >
        <h2>{{ experience.title }}</h2>
        <p>
          <a :href="experience.link" target="_blank" rel="noopener">
            <span>{{ experience.firm }}</span>
            <svg width="28px" height="8px">
              <use
                class="arrow"
                href="../assets/drawn/arrow_drawn2.svg#Layer_2"
              ></use></svg
          ></a>
        </p>
      </div>
    </div>

    <!-- <div id="juices-drawn" class="section-heading"></div>
    <router-link to="/juices" id="creative-container" class="section">
      <div id="creative-img"></div>
      <div id="creative-text">
        <span id="text-latest" style="color: var(--purple)">Latest</span>
        <span id="text-creative" style="color: var(--blue)">Creative</span>
        <span id="text-juices" style="color: var(--green)">Juices</span>
      </div>
    </router-link> -->
  </div>
</template>

<script>
import Mission from "../components/Mission.vue";
import Skill from "../components/Skill.vue";
import ProjectImage from "../components/ProjectImage.vue";
import ProjectText from "../components/ProjectText.vue";
import contents from "../list-contents.json";
import { gsap } from "gsap";
import ScrollMagic from "scrollmagic";
import "particles.js/particles";
const particlesJS = window.particlesJS;

export default {
  name: "Home",
  data() {
    return {
      skills: contents["skills"],
      projects: contents["projects"],
      experiences: contents["experiences"]
    };
  },
  mounted() {
    // fade in mission section
    gsap.timeline().from("#mission", {
      autoAlpha: 0,
      duration: 0.8,
      ease: "power1.inOut",
      delay: 0.5
    });

    // animate hover for underlines in mission description
    $("#work").hover(function() {
      $(".work-underline").toggleClass("work-underline-hover");
    });
    $("#connect").hover(function() {
      $(".connect-underline").toggleClass("connect-underline-hover");
    });

    // animate hover for arrows in experience
    $(".experience-item a").hover(function() {
      $(this)
        .find(".arrow")
        .toggleClass("purple-arrow");
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

    particlesJS.load("particles-js", "particlesjs-config.json");
  },
  methods: {
    clearPass() {
      localStorage.setItem("passCorrect", false);
    }
  },
  components: {
    Mission,
    Skill,
    ProjectImage,
    ProjectText
    // Sketch
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
  // width: 33%;
  width: 907px;
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
  top: 13px;
  left: -25px;
}

.work-underline,
.connect-underline {
  // content: "";
  position: absolute;
  bottom: -1px;
  left: 0px;
  width: 100%;
  transform: scaleY(1.5);
  opacity: 1;
  visibility: visible;
  transition: var(--hover);
}

.work-underline-hover,
.connect-underline-hover {
  left: 0px;
  // width: 0;
  // width: calc(100% - 1px);
  // transform: scaleX(0);
  visibility: hidden;
  opacity: 0;
}

// .underline {
//   text-decoration: solid underline var(--purple);
//   text-underline-position: under;
//   text-decoration-thickness: 5px;
//   border-bottom: solid var(--purple) 2px;
//   color: var(--purple);
//   font-weight: 700;
// }

// .underline::before {
//   content: "";
//   position: absolute;
//   width: calc(100% - 1px);
//   // width: 20px;
//   height: 3px;
//   bottom: 0;
//   left: 1px;
//   background-color: var(--purple);
//   visibility: visible;
//   transition: var(--hover);
// }

// .underline:hover::before {
//   visibility: hidden;
//   width: 0;
//   // width: calc(100% - 1px);
//   left: 1px;
// }

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

.purple-arrow {
  fill: var(--purple) !important;
  // opacity: 1 !important;
  transition: fill 0.2s ease-in-out;
}

.purple-lock {
  fill: var(--purple) !important;
  transition: fill 0.2s ease-in-out;
}

.section-heading {
  height: 13px;
  margin: 0 0 70px 0;
}

#skills-drawn {
  // width: 150px;
  background-image: url("../assets/drawn/skills_drawn.svg");
  background-repeat: no-repeat;
}

#skills-container {
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  // justify-content: space-between;
}

#work-drawn {
  // width: 150px;
  background-image: url("../assets/drawn/work_drawn.svg");
  background-repeat: no-repeat;
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

#experience-drawn {
  // width: 115px;
  background-image: url("../assets/drawn/experience_drawn.svg");
  background-repeat: no-repeat;
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

// #juices-drawn {
//   width: 233px;
//   height: 15px;
//   background-image: url("../assets/drawn/LCJ_drawn.svg");
//   background-repeat: no-repeat;
// }

// #creative-container {
//   display: flex;
//   flex-direction: row;
//   padding-right: calc(min(5vw, 50px));
//   transition: var(--hover);
//   // padding-right: 15vw;
//   // position: fixed;
//   // bottom: 50px;
//   // left: 50px;
//   // visibility: hidden;
// }

// #creative-img {
//   width: 233px;
//   height: 233px;
//   border-radius: 2px;
//   background-image: url("/photos/test2.png");
//   background-size: 250%;
//   background-position: 15%;
// }

// #creative-text {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   margin: 0 0 0 12px;
//   text-transform: uppercase;
//   font-size: 14px;
//   font-weight: 700;
// }

@media only screen and (min-width: 426px) and (max-width: 1024px) {
  #mission-description {
    width: 100%;
    // max-width: 100%;
    margin-bottom: 120px;
  }

  #asterisk {
    transform: scale(0.8);
    top: 6px;
    left: -22px;
  }

  .section-heading {
    transform-origin: left;
    transform: scale(0.8);
    margin: 0 0 50px 0;
    // opacity: 0.4;
  }

  #projects-container {
    flex-direction: column;
  }

  #project-images-container {
    width: 100%;
  }

  .experience-item {
    margin-bottom: 50px;
  }
}

@media only screen and (max-width: 425px) {
  #mission,
  #particles-js {
    height: 70vh;
  }

  #mission-description {
    width: 100%;
  }

  #asterisk {
    transform: scale(0.8);
    top: 6px;
    left: -15px;
  }

  // .section:nth-last-child(-n + 2) {
  //   margin-bottom: 0;
  // }

  .section-heading {
    transform-origin: left;
    transform: scale(0.8);
    margin: 0 0 50px 0;
    // opacity: 0.4;
  }

  #projects-container {
    flex-direction: column;
  }

  #project-images-container {
    width: 100%;
  }

  .experience-item {
    margin-bottom: 50px;
  }

  // #creative-container {
  //   width: 86vw;
  //   // margin: 13vh 0 7vw 0;
  //   margin: 0 0 7vw 0;
  // }

  // #creative-img {
  //   width: 86vw;
  //   height: 86vw;
  // }

  // #creative-text {
  //   margin: 0 0 0 12px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  //   text-transform: uppercase;
  //   font-size: 14px;
  //   font-weight: 800;
  // }
}

@media only screen and (min-height: 1100px) {
  #mission,
  #particles-js {
    height: 70vh;
  }
}
</style>
