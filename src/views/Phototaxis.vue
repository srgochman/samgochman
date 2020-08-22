<template>
  <div class="study-page">
    <div class="banner img-bg"></div>
    <div class="banner">
      <video
        muted
        autoplay
        loop
        playsinline
        preload="none"
        poster="/photos/phototaxis/phototaxis_silhouette.png"
      >
        <source src="/photos/phototaxis/Phototaxis_cut.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="body">
      <div class="banner-text">
        <h3>Phototaxis</h3>
        <h2>{{ tagline }}</h2>
        <p>2019</p>
        <p>EskewDumezRipple</p>
      </div>
      <div class="info section">
        <h3 class="two-thirds-width">
          People rarely get the opportunity to have a dialogue with light. As an
          artistic culmination of my research fellowship in audiovisual
          perception, I created a space for interaction, experimentation, and
          play. The responsive installation allowed people to experience
          firsthand the feedback loop between light, environments, and behavior.
          <br /><br />
          I initiated and led the project, working on perceptual research,
          architectural and experience design, digital development, fabrication,
          and later visualization of the experience. Along the way, I recruited
          others in and out of the studio for feedback and help with
          construction.
        </h3>
        <div class="contributions-container one-third-width">
          <p class="contributions">Contributions</p>
          <Tags :words="tags" />
          <p class="contributions">Teammates</p>
          <p>2 Architects, Designer, Computing Consultant</p>
        </div>
      </div>
      <div class="section appear stacked">
        <div class="caption two-thirds-width">
          <h2>Experience Design</h2>
          <p>
            Almost all organisms move in response to light. Part exhibition,
            part experiment, Phototaxis explored its namesake by letting people
            understand their own relationships with light, other people, and the
            space they occupy. I placed the installation in the center of a room
            that could be relatively isolated from outside light to open up
            exploration from all angles.
          </p>
        </div>
        <div class="img-container full-width">
          <img id="exposure" src="/photos/phototaxis/exposure.jpg" />
        </div>
      </div>
      <div class="section appear reverse">
        <div class="caption one-third-width">
          <h2>Interaction Development</h2>
          <p>
            To let the user and environment respond to each other, I prototyped
            interactions using an Arduino and various sensors. Bouncing between
            coding and physical testing was key for developing a legible
            relationship between light level and proximity.
          </p>
        </div>
        <div class="img-container two-thirds-width">
          <img src="/photos/phototaxis/prototype.jpg" />
        </div>
      </div>
      <div class="section appear">
        <div class="caption one-third-width">
          <h2>Installation</h2>
          <p>
            With the help of my teammates, I designed and fabricated a structure
            that could mediate the intersection of digital and physical spaces.
            Semitransparent veils diffused the light while the microcontroller
            affected brightness and logged data throughout the exhibition.
          </p>
        </div>
        <div class="img-container two-thirds-width">
          <img id="diagram" src="/photos/phototaxis/exploded.png" />
        </div>
      </div>
      <div class="section appear reverse">
        <div class="caption one-third-width">
          <h2>Reflection</h2>
          <p>
            Although people spent more time at the extremes of distance and
            brightness, the more telling insights didn’t come from quantitative
            data. While I observed the experiment, participants observed each
            other, which led them to experiment on their own. People probed,
            meandered, and even cartwheeled and choreographed. The installation
            became a platform for collaboration and play.
          </p>
        </div>
        <div class="img-container two-thirds-width">
          <img id="graph" src="/photos/phototaxis/graph.png" />
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
  name: "Phototaxis",
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
        return project.title === "Phototaxis";
      })[0].description;
    },
    tags() {
      return contents["projects"].filter(project => {
        return project.title === "Phototaxis";
      })[0].tags;
    }
  },
  components: { Tags }
};
</script>

<style lang="scss" scoped>
@import "../scss/studies.scss";

// .banner::before {
//   background-color: rgba(0, 0, 0, 0.1);
// }

.banner,
video {
  background-color: black;
  width: 100vw;
  // height: 100vh;
  object-fit: cover;
}

.banner.img-bg {
  background-image: url("/photos/phototaxis/phototaxis_silhouette.png");
  object-fit: cover;
  display: none;
}

@media (hover: none) and (pointer: coarse) {
  .banner {
    display: none;
  }

  .banner.img-bg {
    display: block;
  }

  .banner::before {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
