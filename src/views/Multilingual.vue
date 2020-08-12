<template>
  <div class="study-page">
    <div class="banner img-bg"></div>
    <div class="body">
      <div class="banner-text">
        <h1>Multilingual</h1>
        <h2 class="oversized">{{ tagline }}</h2>
        <h3>Sosolimited, 2020</h3>
      </div>
      <div class="info section">
        <h3 class="half-width">
          Developed for Planet Word, a museum of language in Washington, DC,
          Multilingual gives visitors a chance to appreciate the diversity of
          languages spoken by other visitors through time. Each contribution to
          the visualization is a unique experience focused on one user in the
          context of a connected community. Everyone can track themselves in an
          artwork that enhances the museum whether or not it’s in use.
        </h3>
        <Tags :words="tags" class="half-width" />
      </div>
      <div class="section appear">
        <video muted autoplay loop class="full-width">
          <source
            src="/photos/multilingual/2 Animation-Sequence_edit_trimmed.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="section writing appear stacked">
        <div class="caption two-thirds-width">
          <h2 class="">Data Modeling</h2>
          <h3 class="">
            I used a database of over 6,000 languages and dialects to capture
            the diversity of visitors for the visualization. Meeting with a
            linguist helped me iterate a data model that balanced informational
            richness and aesthetic clarity. Across the landscape of linguistic
            relatedness, color represents a visitor’s language and size shows
            its rarity, letting the museum celebrate underrepresented groups.
          </h3>
        </div>
        <div class="across">
          <img
            id="data-cloud"
            class="one-third-width"
            src="/photos/multilingual/data_cloud.png"
          />
          <div class="arrow"></div>
          <img
            id="map"
            class="one-third-width"
            src="/photos/multilingual/map.png"
          />
          <div class="arrow"></div>
          <img
            id="field"
            class="one-third-width"
            src="/photos/multilingual/field.png"
          />
        </div>
      </div>
      <div class="section writing appear reverse">
        <div class="caption one-third-width">
          <h2>User Interaction</h2>
          <h3>
            A goal of high turnover meant that user input had to be fast, yet
            inclusive and accurate. I developed a touch interface that hooks
            into the database to quickly narrow down searches, letting visitors
            focus instead on the visualization itself.
          </h3>
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
}
</style>
