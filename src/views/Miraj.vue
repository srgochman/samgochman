<template>
  <div class="study-page">
    <div class="banner img-bg"></div>
    <div class="body">
      <div class="banner-text">
        <h3>Miraj</h3>
        <h2>{{ tagline }}</h2>
        <p>2020</p>
        <p>Sosolimited</p>
      </div>
      <div class="info section">
        <h3 class="two-thirds-width">
          Back in 2016, Sosolimited made an app that transformed a user's spoken
          word into an entrancing collage in real time. Originally developed for
          Apple TV, it was time for an upgrade to a more widely-used platform.
          While bringing the experience to the web, I also focused on enhancing
          visuals, testing and optimizing performance, and deploying with
          Electron for installation.
          <br /><br />
          <a
            id="check"
            href="https://miraj.sosolimited.com/"
            target="_blank"
            rel="noopener"
            >Check it out<img
              height="3"
              class="underline"
              src="../assets/drawn/line3_green.svg"
            />
          </a>
          for yourself!
        </h3>
        <div class="contributions-container one-third-width">
          <p class="contributions">Contributions</p>
          <Tags :words="tags" />
          <p class="contributions">Teammates</p>
          <p>Back-End Developer, Front-End Developer</p>
        </div>
      </div>
      <div class="section appear">
        <video
          class="full-width"
          controls
          preload="metadata"
          poster="/photos/miraj/miraj_poster.jpg"
        >
          <source src="/photos/miraj/miraj.mp4" type="video/mp4" />
        </video>
        <p>Video from Sosolimited's Together Apart intitiative.</p>
      </div>
      <div class="section appear reverse two-thirds-width">
        <div class="caption half-width">
          <h2>Installation</h2>
          <p>
            As a trial for potential future projects, I packaged the web
            experience as an app and installed it on screens around our office,
            including a kiosk that clients and other visitors frequently use.
          </p>
        </div>
        <div class="img-container half-width">
          <img src="/photos/miraj/installation.jpg" />
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

    $("#check").hover(function() {
      $("#check .underline").toggleClass("underline-hover");
    });
  },
  computed: {
    tagline() {
      return contents["projects"].filter(project => {
        return project.title === "Miraj";
      })[0].description;
    },
    tags() {
      return contents["projects"].filter(project => {
        return project.title === "Miraj";
      })[0].tags;
    }
  },
  components: { Tags }
};
</script>

<style lang="scss" scoped>
@import "../scss/studies.scss";

.banner {
  background-image: url("/photos/miraj/miraj_galaxy.jpg");
}

.banner::before {
  background-color: rgba(0, 0, 0, 0.5);
}

.underline {
  object-fit: unset;
  // transform: scaleY(1.7);
  bottom: -2px;
}

video {
  height: 800px;
  object-fit: cover;
  margin-bottom: 10px;
}

@media only screen and (max-width: 1024px) {
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
