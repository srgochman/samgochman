<template>
  <div class="study-page">
    <div class="banner section__background-image"></div>
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
    <div class="page-body">
      <div class="page-body__banner-text">
        <h3>Phototaxis</h3>
        <h2>{{ tagline }}</h2>
        <p>2019</p>
        <!-- <p>EskewDumezRipple</p> -->
      </div>
      <div class="page-body__info section">
        <h3 class="two-thirds-width">
          People rarely get the opportunity to have a dialogue with light. As an
          artistic culmination of my research fellowship in audiovisual
          perception, I created a temporary exhibition space for interaction,
          experimentation, and play. The responsive installation allowed people
          to have a firsthand experience of the feedback loop between light,
          environments, and behavior.
          <br /><br />
          I initiated and led the project, working on perceptual research,
          architectural and experience design, prototyping and digital
          development, fabrication, and later visualization of the experience.
          Along the way, I recruited others in and out of the studio for design
          feedback and help with construction.
        </h3>
        <div class="contributions one-third-width">
          <p class="info-caps">My Role</p>
          <Tags :words="tags" />
          <p class="info-caps">Project Ownership</p>
          <p>EskewDumezRipple, Sam Gochman</p>
          <p class="info-caps">Teammates</p>
          <p>
            Architects: Ian O'Cain, Javier Marcano <br />
            Designer: Marion Forbes <br />
            Computing Consultant: Scott Brookes
          </p>
        </div>
      </div>
      <div class="section section--stacked appear">
        <div class="section__description two-thirds-width">
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
        <div class="section__image-container full-width">
          <img id="exposure" src="/photos/phototaxis/exposure.jpg" />
        </div>
      </div>
      <div class="section appear section--stacked">
        <div class="section__description two-thirds-width">
          <h2>Interaction Development</h2>
          <p>
            To let the user and environment respond to each other, I prototyped
            interactions using an Arduino and various sensors. Bouncing between
            coding and physical testing was key for developing a legible
            relationship between light level and proximity.
          </p>
        </div>
        <div id="interaction" class="section--across">
          <div class="section__image-container two-thirds-width">
            <img src="/photos/phototaxis/prototype.jpg" />
          </div>
          <div class="section__image-container one-third-width">
            <img
              src="/photos/phototaxis/sketches.jpg"
              style="object-fit: cover; height: 100%;"
            />
          </div>
        </div>
      </div>
      <div class="section appear">
        <div class="section__description one-third-width">
          <h2>Installation</h2>
          <p>
            I designed and built a structure that could mediate the intersection
            of digital and physical spaces. My teammates provided invaluable
            feedback on the concept and structural integrity, as well as extra
            hands during fabrication. We used tools like a CNC mill and 3D
            printers to make custom components for holding sensors and bulbs.
            Semitransparent veils diffused the light while the microcontroller
            affected brightness and logged data throughout the exhibition.
          </p>
        </div>
        <div class="section__image-container two-thirds-width">
          <img id="diagram" src="/photos/phototaxis/exploded.png" />
        </div>
      </div>
      <div class="section reverse appear">
        <div class="section__description one-third-width">
          <h2>Analysis & Visualization</h2>
          <p>
            I used the datalog to map behavior to the dropoff of light. Although
            people did tend to spend more time at the front and back where where
            brightness was at its extremes, the more telling insights came from
            qualitative data. Instead of approaching the installation linearly,
            people meandered, probed, and even cartwheeled and choreographed.
            The installation became a platform for experimentation,
            collaboration, and play. This taught me an important lesson: rather
            than designing a monolithic experience, design an opportunity for a
            spectrum of experiences.
          </p>
        </div>
        <div class="section__image-container two-thirds-width">
          <img id="graph" src="/photos/phototaxis/graph.png" />
        </div>
      </div>
      <div class="section section--across appear">
        <img
          class="section__background-image one-third-width"
          src="/photos/phototaxis/jump.jpg"
        />
        <img
          class="section__background-image two-thirds-width"
          src="/photos/phototaxis/christian.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tags from "../components/Tags.vue";
import contents from "../home-contents.json";
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
  object-fit: cover;
}

.banner.section__background-image {
  background-image: url("/photos/phototaxis/phototaxis_silhouette.png");
  object-fit: cover;
  display: none;
}

#interaction {
  justify-content: space-between;
}

@media (hover: none) and (pointer: coarse) {
  .banner {
    display: none;
  }

  .banner.section__background-image {
    display: block;
  }

  .banner::before {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
