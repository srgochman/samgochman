<template>
  <div class="body">
    <div id="mission" class="section">
      <Mission></Mission>
    </div>

    <div id="skills" class="section">
      <div id="diagram-container">
        <img id="diagram" src="../assets/people-experiences_handwritten.png" />
      </div>
      <!-- <h1>Skills</h1>
      <div class="skills-container">
        <Skill
          v-for="skill in skills"
          :key="skill.keyword"
          :title="skill.title"
          :keyword="skill.keyword"
          :color="skill.color"
          :tags="skill.tags"
        >
        </Skill>
      </div> -->
    </div>

    <div id="projects" class="section">
      <!-- <h1>Selected Work</h1> -->
      <div id="work-drawn" class="section-heading"></div>
      <!-- TODO: scrollbox of project images (full width to capture scroll) with absolute positioned project text -->
      <div id="projects-container">
        <!-- scroll sets project to active; if project is not active, hide -->
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
import Project from "../components/Project.vue";
import contents from "../list-contents.json";

export default {
  name: "Home",
  data() {
    return {
      skills: contents["skills"],
      projects: contents["projects"],
      experiences: contents["experiences"],
      education: contents["education"]
    };
  },
  components: {
    Mission,
    Project
  }
};
</script>

<style lang="scss">
#diagram-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
}

#diagram {
  // background-image: url(../assets/people-experiences_handwritten.png);
  // background-size: cover;
  // width: 85%;
  width: calc(min(100%, 1024px));
  // height: 265px;
  filter: contrast(3);
}

// .section-heading {
//   opacity: 0.3;
// }

#work-drawn {
  background-image: url("../assets/work_drawn.svg");
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

/* #projects-container::-webkit-scrollbar{
  display: none;
} */

#experience-drawn {
  background-image: url("../assets/experience_drawn.svg");
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
