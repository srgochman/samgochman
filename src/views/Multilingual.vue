<template>
  <div class="study-page">
    <div class="banner image"></div>
    <div class="body">
      <div class="banner-text">
        <h3>Multilingual</h3>
        <h2 class="oversized">
          Bringing voice-controlled digital art to an accessable platform
        </h2>
      </div>
      <div class="info section">
        <h3 class="two-thirds-width">Multilingual</h3>
        <Tags :words="tags" class="one-third-width" />
      </div>
      <div class="section appear reverse">
        <div class="caption one-third-width">
          <h2>Heading</h2>
          <h3>Description...</h3>
        </div>
        <!-- <div id="idle-screen" class="image-bg two-thirds-width first"></div> -->
        <img
          id="idle-screen"
          class="two-thirds-width"
          src="/photos/multilingual/pw_02.jpg"
        />
      </div>
      <div class="section appear">
        <div class="caption one-third-width">
          <h2>Heading</h2>
          <h3>Description...</h3>
        </div>
        <img
          id="idle-screen"
          class="two-thirds-width"
          src="/photos/multilingual/pw_02.jpg"
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
  computed: {
    tags() {
      return contents["projects"].filter(project => {
        return project.title === "Multilingual";
      })[0].tags;
    }
  },
  mounted() {
    const controller = new ScrollMagic.Controller();
    this.sectionScroll(controller);
  },
  methods: {
    sectionScroll(controller) {
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
    }
  },
  components: { Tags }
};
</script>

<style lang="scss" scoped>
@import "../scss/studies.scss";

.banner {
  background-image: url("/photos/multilingual/multilingual_patch.png");
}

.banner::before {
  background-color: rgba(0, 0, 0, 0.5);
}

// #idle-screen {
//   background-image: url("/photos/multilingual/pw_02.jpg");
// }
</style>
