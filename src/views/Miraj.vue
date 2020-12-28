<template>
  <div class="study-page">
    <div class="banner section__background-image"></div>
    <div class="page-body">
      <div class="page-body__banner-text">
        <h3>Miraj</h3>
        <h2>{{ tagline }}</h2>
        <p>2020</p>
        <!-- <p>Sosolimited</p> -->
      </div>
      <div class="page-body__info section">
        <h3 class="two-thirds-width">
          Back in 2016, Sosolimited made an app that transformed a user's spoken
          word into an entrancing collage in real time. Originally developed for
          Apple TV, it was time for an upgrade to a more widely-used platform.
          While transforming the experience into a web app, I also focused on
          enhancing visuals, testing and optimizing performance, and deploying
          Electron for installation.
          <br /><br />
          <!-- <a
            class="cta-button"
            href="https://miraj.sosolimited.com/"
            target="_blank"
            rel="noopener"
            >Launch Miraj
          </a> -->
        </h3>
        <div class="contributions one-third-width">
          <p class="info-caps">My Role</p>
          <Tags :words="tags" />
          <p class="info-caps">Project Ownership</p>
          <p>Sosolimited LLC</p>
          <p class="info-caps">Teammates</p>
          <p>
            Back-End Developer: Wes Thomas <br />
            Motion Developer: Jon Corbett
          </p>
        </div>
      </div>
      <div class="section appear">
        <video
          class="full-width"
          controls
          controlsList="nodownload"
          preload="none"
          poster="/photos/miraj/miraj_poster.jpg"
        >
          <source src="/photos/miraj/miraj.mp4" type="video/mp4" />
        </video>
        <p class="two-thirds-width">
          Video from Sosolimited's Together Apart intitiative. Spoken words are
          transcribed and then images are pulled from a search engine, segmented
          using openCV, and displayed dynamically in real-time.
        </p>
      </div>
      <div class="section appear reverse two-thirds-width">
        <div class="section__description half-width">
          <h2>Installation</h2>
          <p>
            As a trial for future projects, I packaged the web experience as an
            app and installed it on screens around our office, including a kiosk
            that clients and other visitors frequently use.
          </p>
        </div>
        <div class="section__image-container half-width">
          <img src="/photos/miraj/installation.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from "../components/Tags.vue";
import contents from "../home-contents.json";
import ScrollMagic from "scrollmagic";

export default {
  name: "Miraj",
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

    $("video").prop("volume", 0.5);
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

video {
  height: 800px;
  object-fit: cover;
  margin-bottom: 10px;
}

@media only screen and (max-width: 1024px) {
  video {
    height: 500px;
    object-fit: cover;
  }
}

@media only screen and (max-width: 425px) {
  video {
    height: 300px;
  }
}
</style>
