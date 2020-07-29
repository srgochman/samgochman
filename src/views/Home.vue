<template>
  <div class="body">
    <div id="mission" class="section">
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
          >!<!-- <div id="arrow"></div> -->
        </span>
      </h3>
    </div>

    <div id="skills" class="section appear">
      <!-- <h1>Skills</h1> -->
      <div id="skills-drawn" class="section-heading"></div>
      <div class="skills-container">
        <Skill
          v-for="skill in skills"
          :key="skill.keyword"
          :description="skill.description"
          :keyword="skill.keyword"
          :color="skill.color"
          :delay="skill.delay"
        >
        </Skill>
      </div>
    </div>

    <div id="projects" class="section appear">
      <!-- <h1>Selected Work</h1> -->
      <div id="work-drawn" class="section-heading"></div>
      <!-- TODO: scrollbox of project images (full width to capture scroll) with absolute positioned project text -->
      <div id="projects-container">
        <!-- scroll sets project to active; if project is not active, hide -->
        <!-- `../assets/photos/${project.img}` -->
        <!-- <img
          v-for="project in projects"
          :key="project.img"
          :src="image(project.img)"
        /> -->
        <Project
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :img="project.img"
          :type="project.type"
          :link="project.link"
          :description="project.description"
          :tags="project.tags"
        >
        </Project>
        <!-- <h2 id="tester-0" class="tester">0</h2>
        <h2 id="tester-1" class="tester">1</h2>
        <h2 id="tester-2" class="tester">2</h2>
        <Project
          v-for="project in projects"
          class="project"
          :key="project.title"
          :img="project.img"
        >
        </Project> -->
        <!-- <Project
          id="project-0"
          class="project"
          :key="projects[0].title"
          :img="projects[0].img"
        >
        </Project>
        <Project
          id="project-1"
          class="project"
          :key="projects[1].title"
          :img="projects[1].img"
        >
        </Project> -->
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
import Project from "../components/Project.vue";
import contents from "../list-contents.json";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ScrollMagic from "scrollmagic";
// gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Home",
  data() {
    return {
      skills: contents["skills"],
      projects: contents["projects"],
      experiences: contents["experiences"],
      projectIdx: 0
    };
  },
  computed: {
    image() {
      // To browser, starting root is public. Only works if serving website from base URL
      return "/photos/" + this.img;
    }
  },
  mounted() {
    // var projectController = new ScrollMagic.Controller();
    // this.projectScroll(projectController);

    var homeController = new ScrollMagic.Controller();
    this.homeScroll(homeController);

    // $(".section.appear").each(function() {
    //   gsap.from(this, {
    //     scrollTrigger: {
    //       trigger: this,
    //       // for seamless resets, make top bottom (start) and reset (4th toggleAction)
    //       // for no resets but appearances mid page, make top 75% and no toggleActions
    //       start: "top 75%", // [trigger] [scroller] positions
    //       // end: "-300px bottom", // [trigger] [scroller] positions
    //       // toggleActions: "restart none none reset",
    //       // toggleClass: "visible",
    //       markers: true
    //     },
    //     autoAlpha: 0,
    //     duration: 0.5,
    //     ease: "power1.inOut"
    //   });
    // });
  },
  methods: {
    // projectScroll(controller) {
    //   // var scene = new ScrollMagic.Scene({
    //   //   triggerElement: "#projects-container"
    //   //   // offset: -1 * $("#projects-container").height(),
    //   //   // duration: $("#projects-container").height()
    //   // });
    //   // scene
    //   //   .setPin("#tester-0")
    //   //   .setClassToggle("#tester-0", "visible")
    //   //   // .addIndicators()
    //   //   .addTo(controller);
    //   // // this.projectIdx++;
    //   $(".tester").each(function() {
    //     // Create a scene for each project
    //     var scene = new ScrollMagic.Scene({
    //       triggerElement: this,
    //       duration: 300
    //     });
    //     scene
    //       .setPin(this)
    //       .setClassToggle(this, "visible")
    //       .addTo(controller);
    //   });
    // }
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
        scene.setClassToggle(this, "visible").addTo(controller);
      });
    }
  },
  components: {
    Mission,
    Skill,
    Project
  }
};
</script>

<style lang="scss">
#mission-description {
  // max-width: calc(max(500px, 30%));
  max-width: 60%;
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
  overflow: scroll;
  /* height: 500px; */
  width: 100%;
}

#tester-0 {
  // position: relative;
  // left: 67%;
}

.tester {
  opacity: 0;
}

/* #projects-container::-webkit-scrollbar{
  display: none;
} */

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
  background-image: url("../assets/photos/test2.png");
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
  font-weight: 800;
}

.section:last-child {
  margin-bottom: 7vh;
}

@media only screen and (max-width: 425px) {
  #mission-description {
    max-width: 100%;
  }

  .section:nth-last-child(-n + 2) {
    margin-bottom: 0;
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

@media only screen and (max-width: 1024px) {
  #mission-description {
    // max-width: 100%;
    margin-bottom: 120px;
  }

  .section-heading {
    transform-origin: left;
    transform: scale(0.8);
    margin: 0 0 50px 0;
    // opacity: 0.4;
  }

  .experience-item {
    margin-bottom: 50px;
  }
}

// @media only screen and (min-width: 426px) and (max-width: 768px) {
// }
</style>
