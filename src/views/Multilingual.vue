<template>
  <div class="study-page">
    <div class="banner img-bg"></div>
    <div class="body">
      <div class="banner-text">
        <h3>Multilingual</h3>
        <h2>{{ tagline }}</h2>
        <p>2020</p>
        <p>Sosolimited</p>
      </div>
      <div class="info section">
        <h3 class="two-thirds-width">
          Developed for Planet Word, a museum of language in Washington, DC,
          Multilingual will give an expected 100,000 visitors per year a chance
          to appreciate the diversity of languages spoken by other visitors
          through time. Each contribution to the visualization is a unique
          experience focused on one user in the context of a connected
          community. Everyone can track themselves in an artwork that enhances
          the museum whether or not it’s in use.
        </h3>
        <div class="contributions-container one-third-width">
          <p class="contributions">Contributions</p>
          <Tags :words="tags" />
          <p class="contributions">Teammates</p>
          <p>Eric Gunther, Henrique Perigo, Vidhi Trivedi</p>
        </div>
      </div>
      <div class="section appear">
        <video
          class="full-width"
          controls
          preload="metadata"
          poster="/photos/multilingual/pw_08a_patch.jpg"
        >
          <source
            src="/photos/multilingual/2 Animation-Sequence_edit_trimmed.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="section writing appear stacked">
        <div class="caption two-thirds-width">
          <h2 class="">Data Modeling</h2>
          <p class="">
            I used a database of over 6,000 languages and dialects to capture
            the diversity of visitors for the visualization. Diving into
            historical linguistics and meeting with a specialist helped me
            iterate a data model that balanced informational richness with
            aesthetic clarity. Across the landscape of linguistic relatedness,
            color represents a visitor’s language and size shows its rarity,
            letting the museum celebrate underrepresented groups.
          </p>
        </div>
        <div class="across">
          <img
            id="data-cloud"
            class="one-third-width img-bg"
            src="/photos/multilingual/data_cloud.png"
          />
          <div class="arrow"></div>
          <img
            id="map"
            class="one-third-width img-bg"
            src="/photos/multilingual/map.png"
          />
          <div class="arrow"></div>
          <img
            id="field"
            class="one-third-width img-bg"
            src="/photos/multilingual/field.jpg"
          />
        </div>
      </div>
      <div class="section writing appear reverse">
        <div class="caption one-third-width">
          <h2>User Interaction</h2>
          <p>
            A goal of high turnover meant that user input had to be fast, yet
            inclusive and accurate. I developed a touch interface that hooks
            into the database to quickly narrow down searches, letting visitors
            focus instead on the visualization itself.
          </p>
        </div>
        <img
          id="keyboard"
          class="two-thirds-width"
          src="/photos/multilingual/keyboard_cropped.png"
        />
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
  background-color: rgba(0, 0, 0, 0.5);
}

.across {
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
  // margin-right: calc(var(--main-width) * 0.05);
  height: 800px;
  object-fit: cover;
}

@media only screen and (max-width: 1024px) {
  .across {
    justify-content: center;
  }
  .arrow {
    transform: rotate(90deg);
    transform-origin: center;
    display: none;
  }

  video {
    // margin-right: calc(var(--main-width) * 0.05);
    height: 500px;
    object-fit: cover;
  }
}

@media only screen and (max-width: 425px) {
  video {
    height: 400px;
  }
}
</style>
