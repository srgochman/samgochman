<template>
  <div class="study-page">
    <div class="banner">
      <video muted autoplay loop>
        <source src="/photos/phototaxis/Phototaxis.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="body">
      <div class="banner-text">
        <h3>Phototaxis</h3>
        <h2 class="oversized">
          Merging digital and physical spaces to experience a raw interaction
          with light
        </h2>
      </div>
      <div class="info section">
        <h3 class="half-width">
          People rarely get the opportunity to have a dialogue with light. As an
          artistic culmination of my research fellowship in audiovisual
          perception, I created a space for interaction, experimentation, and
          play. The responsive installation allowed people to experience
          firsthand the feedback loop between light, environments, and behavior.
          <br />
          <br />
          EskewDumezRipple, 2019
        </h3>
        <Tags :words="tags" class="half-width" />
      </div>
      <div class="section writing appear stacked">
        <div class="caption">
          <h2 class="one-third-width">Experience Design</h2>
          <h3 class="one-third-width">
            Almost all organisms move in response to light. Part exhibition,
            part experiment, Phototaxis explored its namesake by letting people
            understand their own relationships with light, other people, and the
            space they are in.
          </h3>
        </div>
        <img
          id="exposure"
          class="full-width"
          src="/photos/phototaxis/exposure.jpg"
        />
      </div>
      <div class="section writing appear reverse">
        <div class="caption one-third-width">
          <h2>Interaction Development</h2>
          <h3>
            To let the user and environment respond to each other, I prototyped
            interactions using an Arduino and various sensors. Bouncing between
            coding and testing movement was key for developing a legible
            relationship between light level and proximity.
          </h3>
        </div>
        <img
          id="diagram"
          class="two-thirds-width"
          src="/photos/phototaxis/prototype.jpg"
        />
      </div>
      <div class="section writing appear">
        <div class="caption one-third-width">
          <h2>Installation</h2>
          <h3>
            I, with the help of some recruited architects, designed and
            fabricated a structure that could mediate the intersection of
            digital and physical spaces. A semitransparent veil diffused the
            light while a microcontroller affected brightness and logged data
            throughout the exhibition.
          </h3>
        </div>
        <img
          id="diagram"
          class="two-thirds-width"
          src="/photos/phototaxis/exploded.png"
        />
      </div>
      <div class="section writing appear reverse">
        <div class="caption one-third-width">
          <h2>Reflection</h2>
          <h3>
            Although people spent more time at the extremes of distance and
            brightness, the more telling insights didn’t come from quantitative
            data. While I observed the experiment, participants observed each
            other, which led them to experiment on their own. People probed,
            meandered, and even cartwheeled and choreographed. The installation
            became a platform for collaboration and play.
          </h3>
        </div>
        <img
          id="graph"
          class="two-thirds-width"
          src="/photos/phototaxis/graph.png"
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
  name: "Phototaxis",
  computed: {
    tags() {
      return contents["projects"].filter(project => {
        return project.title === "Phototaxis";
      })[0].tags;
    }
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
  methods: {},
  components: { Tags }
};
</script>

<style lang="scss" scoped>
@import "../scss/studies.scss";

// .banner {
//   background-image: url("/photos/multilingual/pw_00_no text.jpg");
// }

.banner::before {
  background-color: rgba(0, 0, 0, 0.1);
}

.banner,
video {
  background-color: black;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

// #diagram {
//   min-width: 600px;
// }
</style>
