<template>
  <div class="body">
    <div id="mission" class="section">
      <Mission></Mission>
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
        <!-- <Project
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :img="project.img"
          :type="project.type"
          :link="project.link"
          :description="project.description"
          :tags="project.tags"
        >
        </Project> -->
        <h2 id="tester-0" class="tester">0</h2>
        <h2 id="tester-1" class="tester">1</h2>
        <h2 id="tester-2" class="tester">2</h2>
        <Project
          v-for="project in projects"
          class="project"
          :key="project.title"
          :img="project.img"
        >
        </Project>
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

// .section-heading {
//   opacity: 0.3;
// }

#skills-drawn {
  background-image: url("../assets/drawn/skills_drawn.svg");
  background-repeat: no-repeat;
  // width: 150px;
  height: 15px;
  margin: 0 0 70px 0;
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
  margin: 0 0 70px 0;
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
  margin: 0 0 70px 0;
}

.experience-item {
  margin-bottom: 70px;
}

#experience,
#education {
  // margin-bottom: 120px;

  a {
    color: black;
    display: inline;
  }
}

.section:last-child {
  margin-bottom: 5vh;
}
</style>
