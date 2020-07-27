<template>
  <div class="body">
    <div id="mission" class="section">
      <Mission></Mission>
    </div>

    <div class="mission-description">
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

    <div id="skills" class="section">
      <!-- <div id="diagram-container">
        <img id="diagram" src="../assets/people-experiences_handwritten.png" />
      </div> -->
      <!-- <h1>Skills</h1> -->
      <div id="skills-drawn" class="section-heading"></div>
      <div class="skills-container">
        <Skill
          v-for="skill in skills"
          :key="skill.keyword"
          :description="skill.description"
          :keyword="skill.keyword"
          :color="skill.color"
        >
        </Skill>
      </div>
    </div>

    <div id="projects" class="section">
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

    <div id="experience" class="section">
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
  </div>
</template>

<script>
import Mission from "../components/Mission.vue";
import Skill from "../components/Skill.vue";
import Project from "../components/Project.vue";
import contents from "../list-contents.json";
import ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";
import $ from "jquery";

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
    // image(url) {
    //   var images = require.context("../assets/photos/", false, /\.png$/);
    //   console.log(url);
    //   return images("./" + url);
    // }
  },
  mounted() {
    var scrollMagicController = new ScrollMagic.Controller();
    this.projectScroll(scrollMagicController);
    console.log("projectScroll init");
  },
  methods: {
    projectScroll(controller) {
      // var scene = new ScrollMagic.Scene({
      //   triggerElement: "#projects-container"
      //   // offset: -1 * $("#projects-container").height(),
      //   // duration: $("#projects-container").height()
      // });
      // scene
      //   .setPin("#tester-0")
      //   .setClassToggle("#tester-0", "visible")
      //   // .addIndicators()
      //   .addTo(controller);
      // // this.projectIdx++;

      $(".tester").each(function() {
        // Create a scene for each project
        var myScene = new ScrollMagic.Scene({
          triggerElement: this,
          duration: 300
        });
        myScene
          .setPin(this)
          .setClassToggle(this, "visible")
          .addTo(controller);
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
.mission-description {
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

// #diagram-container {
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-bottom: 200px;
// }

// #diagram {
//   // background-image: url(../assets/people-experiences_handwritten.png);
//   // background-size: cover;
//   // width: 85%;
//   width: calc(min(100%, 1024px));
//   // height: 265px;
//   filter: contrast(3);
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

.visible {
  opacity: 1;
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

.section:last-child {
  margin-bottom: 2vh;
}

@media only screen and (max-width: 425px) {
  .mission-description {
    max-width: 100%;
  }
}

@media only screen and (max-width: 1024px) {
  .mission-description {
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
