<template>
  <div class="study-page">
    <div class="banner img-bg"></div>
    <div class="body">
      <div class="banner-text">
        <h3>Multilingual</h3>
        <h2>{{ tagline }}</h2>
        <p>2020</p>
        <!-- <p>Sosolimited</p> -->
      </div>
      <div class="info section">
        <h3 class="two-thirds-width">
          Developed for Planet Word, a museum of language in Washington, DC, and
          deployed in October 2020, Multilingual will give an expected 100,000
          visitors per year a chance to appreciate the diversity of languages
          spoken by other visitors through time. Each contribution to the
          visualization is a unique experience that lets a user track themself
          connected community.
          <br /><br />
          In addition to building the interface for user interaction, I
          developed the initial concept with the team and handled the language
          data to ground the design in academic research and realistic patterns
          of the world population.
        </h3>
        <div class="contributions-container one-third-width">
          <p class="contributions">My Role</p>
          <Tags :words="tags" />
          <p class="contributions">Project Ownership</p>
          <p>Sosolimited LLC</p>
          <p class="contributions">Teammates</p>
          <p>
            Creative Director: Eric Gunther <br />
            UI Designer: Vidhi Trivedi<br />
            3D Developer: Henrique Périgo
          </p>
        </div>
      </div>
      <div class="section appear">
        <video
          class="full-width"
          controls
          controlsList="nodownload"
          preload="none"
          poster="/photos/multilingual/pw_08a_patch.jpg"
        >
          <source
            src="/photos/multilingual/2_Animation-Sequence_edit_trimmed.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="section appear reverse across">
        <div class="caption one-third-width">
          <h2>Concept Development</h2>
          <p>
            At the start of the project, I thought a lot about the client's goal
            of telling a story about inclusivity and connection. I worked with
            the designer and creative director to progress from an emotional
            concept to an artwork that enhances the museum whether or not the
            installation is actively in use.
          </p>
        </div>
        <img
          id="mind-map"
          class="one-third-width img-bg"
          src="/photos/multilingual/mind_map.jpg"
        />
        <img
          id="globe"
          class="one-third-width img-bg"
          src="/photos/multilingual/globe.jpg"
        />
      </div>
      <div class="section appear stacked">
        <div class="caption two-thirds-width">
          <h2>Data Modeling</h2>
          <p>
            I used a database of over 6,000 languages and dialects to capture
            the diversity of visitors for the visualization. Diving into
            historical linguistics and meeting with a specialist helped me
            iterate a data model that balanced informational richness with
            aesthetic clarity. Across the landscape of linguistic relatedness,
            color represents a visitor’s language and size shows its rarity,
            letting the museum celebrate underrepresented groups.
          </p>
        </div>
        <div id="data-images" class="across">
          <img
            id="data-cloud"
            class="one-third-width img-bg"
            src="/photos/multilingual/data_cloud.png"
          />
          <div class="arrow"></div>
          <img
            id="map"
            class="one-third-width img-bg"
            src="/photos/multilingual/map.jpg"
          />
          <div class="arrow"></div>
          <img
            id="field"
            class="one-third-width img-bg"
            src="/photos/multilingual/field.jpg"
          />
        </div>
      </div>
      <div class="section appear reverse">
        <div class="caption one-third-width">
          <h2>Interaction Development</h2>
          <p>
            A goal of high turnover meant that user input had to be fast, yet
            inclusive and precise. I developed a touch interface via an Electron
            app that hooks into the database to quickly narrow down searches. This
            lets visitors focus instead on the visualization itself, which is an openFrameworks app that communicates with the keyboard for a seamless experience.
          </p>
        </div>
        <div class="img-container two-thirds-width">
          <img id="keyboard" src="/photos/multilingual/keyboard_cropped.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from "../components/Tags.vue";
import contents from "../list-contents.json";
import ScrollMagic from "scrollmagic";

export default {
  name: "Multilingual",
  beforeRouteEnter(to, from, next) {
    // set targetRoute in localStorage to this path name
    localStorage.setItem("targetRoute", "Multilingual");

    // go to authentication page unless password has already been entered
    localStorage.getItem("passCorrect") == "true"
      ? next()
      : next({ name: "Authentication" });
  },
  mounted() {
    const sectionController = new ScrollMagic.Controller();
    $(".section.appear").each(function() {
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.75 // 75% down page, alternative for pixel offset
      });
      scene.reverse(false); // prevent sections from disappearing on scrollback
      scene.setClassToggle(this, "visible").addTo(sectionController);
    });
  },
  computed: {
    tagline() {
      return contents["projects"].filter(project => {
        return project.title === "Multilingual";
      })[0].description;
    },
    tags() {
      return contents["projects"].filter(project => {
        return project.title === "Multilingual";
      })[0].tags;
    }
  },
  components: { Tags }
};
</script>

<style lang="scss" scoped>
@import "../scss/studies.scss";

.banner {
  background-image: url("/photos/multilingual/pw_00_no text.jpg");
}

.banner::before {
  background-color: rgba(0, 0, 0, 0.4);
}

#data-images {
  justify-content: space-between;
  align-items: center;
}

.arrow {
  background-image: url("../assets/drawn/arrow_drawn2.svg");
  background-size: cover;
  width: 28px;
  height: 8px;
  transform: scale(1);
}

video {
  height: 800px;
  object-fit: cover;
}

@media only screen and (max-width: 1024px) {
  video {
    height: 500px;
    object-fit: cover;
  }
}

@media only screen and (min-width: 426px) and (max-width: 768px) {
  #mind-map,
  #globe {
    width: calc(50% - 2%);
  }
}

@media only screen and (max-width: 425px) {
  video {
    height: 300px;
  }

  .arrow {
    // transform: rotate(90deg);
    // transform-origin: center;
    display: none;
  }
}
</style>
