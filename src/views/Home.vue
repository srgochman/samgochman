<template>
  <div class="body">
    <div id="mission" class="section">
      <Mission></Mission>
    </div>

    <div id="skills" class="section">
      <div id="diagram-container">
        <div id="diagram"></div>
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
      <h1>Selected Work</h1>
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
      <h1>Experience</h1>
      <div v-for="experience in experiences" :key="experience.title">
        <h2>{{ experience.title }}</h2>
        <h3>
          <a :href="experience.link" target="_blank" rel="noopener">{{
            experience.firm
          }}</a
          >{{ experience.unlinked }}
        </h3>
      </div>
    </div>

    <!-- <div id="education" class="section">
      <h1>Education</h1>
      <div v-for="edu in education" :key="edu.school">
        <h2>
          <a :href="edu.link" target="_blank" rel="noopener">{{ edu.school }}</a
          >{{ edu.unlinked }}
        </h2>
        <h3>{{ edu.study }}</h3>
      </div>
    </div> -->
  </div>
</template>

<script>
import Mission from "../components/Mission.vue";
import Skill from "../components/Skill.vue";
import Project from "../components/Project.vue";
// import { Controller, Scene } from 'react-scrollmagic';
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
    Skill,
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
  background-image: url(../assets/people-experiences_handwritten.png);
  background-size: cover;
  width: 85%;
  height: 265px;
  filter: contrast(3);
}

.skills-container {
  width: 33%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

#projects-container {
  overflow: scroll;
  /* height: 500px; */
  width: 100%;
}

/* #projects-container::-webkit-scrollbar{
  display: none;
} */

#experience,
#education {
  // margin-bottom: 120px;

  a {
    color: black;
    display: inline;
  }

  div {
    margin-bottom: 70px;
  }
}

.section:last-child {
  margin-bottom: 0;
}
</style>
