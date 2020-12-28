<template>
  <div class="study-page">
    <div class="banner section__background-image"></div>
    <div class="page-body">
      <div class="page-body__banner-text">
        <h3>What I Know Now</h3>
        <h2>{{ tagline }}</h2>
        <p>2020, In Progress</p>
        <!-- <p>Sosolimited</p> -->
      </div>
      <div class="page-body__info section">
        <h3 class="two-thirds-width">
          The challenges of 2020 showed us that we need to come together with
          empathetic ears and eyes. This piece lets anyone record their own
          personal experience and emotions and watch their voice paint a unique
          signature that adds to a large-scale, community-wide generative
          collage.
          <br /><br />
          As the UI Developer on this team-led project, I influenced project
          direction and took charge of whole sections of the codebase pertaining
          to the interface and audio handling.
        </h3>
        <div class="contributions one-third-width">
          <p class="info-caps">My Role</p>
          <Tags :words="tags" />
          <p class="info-caps">Project Ownership</p>
          <p>Sosolimited LLC</p>
          <p class="info-caps">Team</p>
          <p>
            Creative Director: Eric Gunther <br />
            UI/UX Designers: Deb Levison, Vidhi Trivedi <br />
            UI/UX Developers: Me, Jon Corbett <br />
            Creative Coders: Henrique Périgo, Dalma Földesi <br />
            Backend Developer: Wes Thomas
          </p>
        </div>
      </div>
      <div class="section ui reverse appear">
        <div class="section__description one-third-width">
          <h2>Story Capture</h2>
          <p>
            I developed the front-end experience and internal mechanics that
            visualize, record, and transcribe a user's voice as they respond to
            a prompt. After considering many options for input, I advocated for
            voice as an expressive and widely accessible medium.
          </p>
        </div>
        <video
          class="ui-record one-third-width"
          muted
          autoplay
          loop
          playsinline
          preload="none"
          poster="/photos/WIKN/WIKN_patch_recording.jpg"
        >
          <source
            src="/photos/WIKN/WIKN_patch_recording.mp4"
            type="video/mp4"
          />
        </video>
        <img
          class="ui-record one-third-width"
          src="/photos/WIKN/WIKN_patch_recording.jpg"
        />
      </div>
      <div class="section ui appear">
        <div class="section__description one-third-width">
          <h2>Audio Visualization</h2>
          <p>
            The story is played back while a unique shareable signature is
            generated in real-time. I used audio parameters like frequency and
            volume, as well as semantic parameters like the emotional content of
            words, to help translate voice into art.
          </p>
        </div>
        <video
          class="ui-review one-third-width"
          muted
          autoplay
          loop
          playsinline
          preload="none"
          poster="/photos/WIKN/WIKN_patch_review.jpg"
        >
          <source src="/photos/WIKN/WIKN_patch_review.mp4" type="video/mp4" />
        </video>
        <img
          class="ui-review one-third-width"
          src="/photos/WIKN/WIKN_patch_review.jpg"
        />
      </div>
      <div class="section ui reverse appear">
        <div class="section__description one-third-width">
          <h2>Community Exploration</h2>
          <p>
            Once a user contributes their story, they can scan through a virtual
            mosaic made from other submissions and select to hear—and see—the
            voices in their neighborhood or organization.
          </p>
        </div>
        <video
          class="ui-macro one-third-width"
          muted
          autoplay
          loop
          playsinline
          preload="none"
          poster="/photos/WIKN/macro_scroll.jpg"
        >
          <source src="/photos/WIKN/macro_scroll.mp4" type="video/mp4" />
        </video>
        <img
          class="ui-macro one-third-width"
          src="/photos/WIKN/macro_scroll.jpg"
        />
      </div>
      <div class="section section--across appear">
        <div class="section__description one-third-width">
          <h2>Translations</h2>
          <p>
            To really drive home the uniqueness of each person’s experience, we
            needed to conceptualize a visual language that avoided
            self-similarity. With a handle on the audio data, I worked with the
            designers and a developer to legibly map the data extracted from
            voice recordings onto a set of visual parameters in p5.js.
          </p>
        </div>
        <div id="doodle" class="section__image-container one-third-width">
          <img src="/photos/WIKN/doodle.jpg" />
        </div>
        <div id="brushes" class="section__image-container one-third-width">
          <img src="/photos/WIKN/brushes.png" />
        </div>
      </div>
      <div class="section reverse appear">
        <div class="section__description one-third-width">
          <h2>Public Visibility</h2>
          <p>
            Future partners can sponsor a physical version of the mural, letting
            anyone scan a QR code and browse across the artwork to see and hear
            the experiences of their community members.
          </p>
        </div>
        <div class="section__image-container two-thirds-width">
          <img id="print" src="/photos/WIKN/WIKN_mural_crop_landscape.png" />
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
  name: "WIKN",
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    // set targetRoute in localStorage to this path name
    localStorage.setItem("targetRoute", "WIKN");

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
        return project.title === "What I Know Now";
      })[0].description;
    },
    tags() {
      return contents["projects"].filter(project => {
        return project.title === "What I Know Now";
      })[0].tags;
    }
  },
  components: { Tags }
};
</script>

<style lang="scss" scoped>
@import "../scss/studies.scss";

.banner {
  background-image: url("/photos/WIKN/WIKN_mural.jpg");
}

.banner::before {
  background-color: rgba(0, 0, 0, 0.4);
}

.ui {
  justify-content: center;
}

.ui-record,
.ui-review,
.ui-macro {
  object-fit: unset;
  width: 270px;
  height: 590px;
  border-radius: 40px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
  margin-right: calc(min(7vw, 72px));
}

.ui-review {
  margin-left: calc(min(7vw, 72px));
  margin-right: 0;
}

img.ui-record,
img.ui-review,
img.ui-macro {
  display: none;
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  // .ui {
  //   flex-direction: column;
  //   align-items: flex-start;
  // }

  .ui-record,
  .ui-review,
  .ui-macro {
    width: 200px;
    height: 437.8px;
    border-radius: 20px;
    margin-left: 0;
    margin-right: calc(min(7vw, 60px));
  }

  .ui-review {
    margin-left: calc(min(7vw, 60px));
    margin-right: 0;
  }
}

@media only screen and (max-width: 768px) {
  .ui {
    // flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .section__description {
      width: calc(50% - 2%);
      margin-right: 5%;
    }
  }

  .ui-record,
  .ui-review,
  .ui-macro {
    width: 180px;
    height: 394px;
    border-radius: 20px;
    margin-left: 0;
    margin-right: 0;
  }
}

@media only screen and (min-width: 426px) and (max-width: 768px) {
  #doodle,
  #brushes {
    width: calc(50% - 2%);
  }
}

@media only screen and (max-width: 425px) {
  .ui {
    flex-direction: column;
    align-items: center;

    .section__description {
      width: 100%;
    }
  }
}

@media (hover: none) and (pointer: coarse) {
  video.ui-record,
  video.ui-review,
  video.ui-macro {
    display: none;
  }

  img.ui-record,
  img.ui-review,
  img.ui-macro {
    display: block;
  }
}
</style>
