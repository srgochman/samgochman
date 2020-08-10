<template>
  <div class="body">
    <!-- <button @click="clearPass" style="margin-top: 10vh">
      Clear passCorrect
    </button> -->
    <!-- <div id="particles-js"></div> -->
    <div id="mission" class="section">
      <!-- <Sketch></Sketch> -->
      <Mission></Mission>
    </div>
    <div id="mission-description" class="section appear">
      <h3>
        As a developer
        <!-- <a
          class="underline"
          href="https://github.com/srgochman"
          target="_blank"
          rel="noopener"
          >developer</a
        > -->
        with roots in biology and architecture, I appreciate the complexity of
        people’s relationships with the world — and that opens up huge creative
        opportunities.
      </h3>
      <h3 id="contact">
        * I'm looking for new
        <a
          id="work"
          href="https://www.linkedin.com/in/samuelrgochman/"
          target="_blank"
          rel="noopener"
          >work<img
            class="work-underline"
            src="../assets/drawn/line1_purple.svg"
            height="5"
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
              class="connect-underline"
              src="../assets/drawn/line2_purple.svg"
              height="5"/></a
          >!
        </span>
      </h3>
    </div>

    <div id="skills" class="section appear">
      <!-- <h1>Skills</h1> -->
      <div id="skills-drawn" class="section-heading"></div>
      <div class="skills-container">
        <Skill
          v-for="skill in skills"
          :key="skill.keywords[0]"
          :description="skill.description"
          :keywords="skill.keywords"
          :color="skill.color"
          :delay="skill.delay"
        >
        </Skill>
      </div>
    </div>

    <div id="projects" class="section appear">
      <!-- <h1>Selected Work</h1> -->
      <div id="work-drawn" class="section-heading"></div>
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
      <!-- <h1>Experience</h1> -->
      <div id="experience-drawn" class="section-heading"></div>
      <div
        class="experience-item"
        v-for="experience in experiences"
        :key="experience.title"
      >
        <h2>{{ experience.title }}</h2>
        <h3>
          <a :href="experience.link" target="_blank" rel="noopener">{{
            experience.firm
          }}</a
          >{{ experience.unlinked }}
        </h3>
      </div>
    </div>

    <div id="juices-drawn" class="section-heading"></div>
    <router-link to="/juices" id="creative-container" class="section">
      <div id="creative-img"></div>
      <!-- <div id="creative-text">
        <span id="text-latest" style="color: var(--purple)">Latest</span>
        <span id="text-creative" style="color: var(--blue)">Creative</span>
        <span id="text-juices" style="color: var(--green)">Juices</span>
      </div> -->
    </router-link>
  </div>
</template>

<script>
import Mission from "../components/Mission.vue";
import Skill from "../components/Skill.vue";
import ProjectImage from "../components/ProjectImage.vue";
import ProjectText from "../components/ProjectText.vue";
// import Sketch from "../components/Sketch.vue";
import contents from "../list-contents.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ScrollMagic from "scrollmagic";
gsap.registerPlugin(ScrollTrigger);
import "particles.js/particles";
// const particlesJS = window.particlesJS;

export default {
  name: "Home",
  data() {
    return {
      skills: contents["skills"],
      projects: contents["projects"],
      experiences: contents["experiences"]
    };
  },
  computed: {
    image() {
      // To browser, starting root is public. Only works if serving website from base URL
      return "/photos/" + this.img;
    }
  },
  mounted() {
    gsap.timeline().from("#mission", {
      autoAlpha: 0,
      duration: 0.8,
      ease: "power1.inOut",
      delay: 1.3
    });

    $("#work").hover(function() {
      $(".work-underline").toggleClass("work-underline-hover");
    });
    $("#connect").hover(function() {
      $(".connect-underline").toggleClass("connect-underline-hover");
    });

    const homeController = new ScrollMagic.Controller();
    this.homeScroll(homeController);

    // particlesJS.load("particles-js", "particlesjs-config.json");
  },
  methods: {
    clearPass() {
      localStorage.setItem("passCorrect", false);
    },
    homeScroll(controller) {
      $(".section.appear").each(function() {
        // Create a scene for each scene
        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          // can make elements disappear when moved past (using duration of the height of each section, below)
          // duration: this.offsetHeight * 1.3,
          // offset: -200
          triggerHook: 0.75 // 75% down page, alternative for pixel offset
        });
        scene.reverse(false); // prevent sections from disappearing on scrollback
        scene.setClassToggle(this, "visible").addTo(controller);
      });
    },
    sendParams() {
      this.$store.commit("set_project_params", {
        title: this.title,
        description: this.description,
        tags: this.tags,
        link: this.link,
        type: this.type
      });
      console.log("ProjectImage: sent parameters to store");
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
#mission {
  position: relative;
  height: 100vh;
  // display: flex;
  // align-items: center;
}

canvas {
  display: block;
  // vertical-align: bottom;
}

// particles.js container
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  // background-color: #ffffff;
  // background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: 1;
}

#mission-description {
  // max-width: calc(max(500px, 30%));
  width: 50%;
  margin-bottom: 200px;
  // position: absolute;
  // left: 67%;
  // flex-grow: 1;
  // flex-basis: 33%;

  h3 {
    margin-bottom: 30px;
  }
}

.work-underline,
.connect-underline {
  content: "";
  position: absolute;
  width: 100%;
  // width: 20px;
  opacity: 1;
  // transform-origin: left;
  // transform: scaleX(1);
  transform: scaleY(1.5);
  // height: 5px;
  bottom: 0;
  left: 0px;
  // background-color: var(--purple);
  visibility: visible;
  // transition: all 0.2s ease-in 0s;
  transition: var(--hover);
}

.work-underline-hover,
.connect-underline-hover {
  visibility: hidden;
  // width: 0;
  // width: calc(100% - 1px);
  opacity: 0;
  // transform: scaleX(0);
  left: 0px;
}

// .underline {
//   text-decoration: solid underline var(--purple);
//   text-underline-position: under;
//   text-decoration-thickness: 5px;
//   border-bottom: solid var(--purple) 2px;
//   color: var(--purple);
//   font-weight: 800;
// }

.section-heading {
  margin: 0 0 70px 0;
  // opacity: 0.3;
}

#skills-drawn {
  background-image: url("../assets/drawn/skills_drawn.svg");
  background-repeat: no-repeat;
  // width: 150px;
  height: 15px;
}

.skills-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

#work-drawn {
  background-image: url("../assets/drawn/work_drawn.svg");
  background-repeat: no-repeat;
  // width: 150px;
  height: 15px;
}

#projects-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#project-images-container {
  overflow: scroll;
  /* height: 500px; */
  width: 63%;
}

#experience-drawn {
  background-image: url("../assets/drawn/experience_drawn.svg");
  background-repeat: no-repeat;
  // width: 115px;
  height: 15px;
}

.experience-item {
  margin-bottom: 40px;
}

#experience,
#education {
  a {
    color: black;
    display: inline;
  }
}

#juices-drawn {
  background-image: url("../assets/drawn/LCJ_drawn.svg");
  background-repeat: no-repeat;
  width: 233px;
  height: 15px;
}

#creative-container {
  // visibility: hidden;
  display: flex;
  flex-direction: row;
  transition: var(--hover);
  padding-right: calc(min(5vw, 50px));
  // padding-right: 15vw;
  // position: fixed;
  // bottom: 50px;
  // left: 50px;
}

#creative-img {
  width: 233px;
  height: 233px;
  background-image: url("/photos/test2.png");
  background-size: 250%;
  background-position: 15%;
  border-radius: 2px;
}

#creative-text {
  margin: 0 0 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
}

@media only screen and (max-width: 425px) {
  #mission-description {
    width: 100%;
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

  #creative-container {
    width: 86vw;
    // margin: 13vh 0 7vw 0;
    margin: 0 0 7vw 0;
  }

  #creative-img {
    width: 86vw;
    height: 86vw;
  }

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

@media only screen and (min-width: 426px) and (max-width: 1024px) {
  #mission-description {
    width: 66%;
    // max-width: 100%;
    margin-bottom: 120px;
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

// @media only screen and (min-width: 426px) and (max-width: 768px) {
// }
</style>
