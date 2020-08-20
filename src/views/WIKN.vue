<template>
  <div class="study-page">
    <div class="banner img-bg"></div>
    <div class="body">
      <div class="banner-text">
        <h3>What I Know Now</h3>
        <h2>{{ tagline }}</h2>
        <p>In Progress</p>
        <p>Sosolimited</p>
      </div>
      <div class="info section">
        <h3 class="two-thirds-width">
          The challenges of 2020 showed us that we need to come together with
          empathetic ears and eyes. This project lets anyone record their own
          personal experience and emotions and watch their voice paint a unique
          signature that adds to a large-scale, community-wide generative
          collage.
          <br /><br />
          In this team-led project, I had the opportunity to influence project
          direction and take charge of whole parts of the system like UI
          development and audio handling.
        </h3>
        <div class="contributions-container one-third-width">
          <p class="contributions">Contributions</p>
          <Tags :words="tags" />
          <p class="contributions">Teammates</p>
          <p>
            Creative Director, 2 UI/UX Designers, 2 Creative Coders, UX
            Developer, Backend Developer
          </p>
        </div>
      </div>
      <div class="section writing ui appear reverse">
        <div class="caption one-third-width">
          <h2>Capturing a Story</h2>
          <p>
            I developed the front-end experience and internal mechanics that
            visualize, record, and transcribe a user's voice as they respond to
            a prompt. After considering many options for input, I advocated for
            voice as an expressive and widely accessible medium.
          </p>
        </div>
        <video id="ui-record" class="one-third-width" muted>
          <source
            src="/photos/WIKN/WIKN_patch_recording.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="section writing ui appear">
        <div class="caption one-third-width">
          <h2>Audio Visualization</h2>
          <p>
            The story is played back while a unique shareable signature is
            generated in real-time. I used audio parameters like pitch and
            volume, as well as semantic parameters like number and emotion of
            words, to help translate voice into art.
          </p>
        </div>
        <video id="ui-review" class="one-third-width" muted>
          <source src="/photos/WIKN/WIKN_patch_review.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="section writing ui appear reverse">
        <!-- <div class="one-third-width"></div> -->
        <div class="caption one-third-width">
          <h2>Community Exploration</h2>
          <p>
            Once a user contributes their story, they can scan through a virtual
            mosaic made from other submissions and select to hear—and see—the
            voices in their neighborhood or organization.
          </p>
        </div>
        <video id="ui-macro" class="one-third-width" muted>
          <source src="/photos/WIKN/macro_scroll.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="section writing appear">
        <div class="caption one-third-width">
          <h2>Translations</h2>
          <p>
            To really drive home the uniqueness of each person’s experience, we
            needed to conceptualize a visual language that avoided
            self-similarity. With a handle on the audio data, I worked with the
            designers and a developer to legibly map the data extracted from
            voice recordings onto a set of visual parameters in p5.js.
          </p>
        </div>
        <img class="one-third-width" src="/photos/WIKN/doodle.jpg" />
        <img class="one-third-width" src="/photos/WIKN/brushes.png" />
      </div>
      <div class="section writing appear reverse">
        <div class="caption one-third-width">
          <h2>Public Visibility</h2>
          <p>
            In the future, partners can sponsor a physical version of the mural.
            Anyone could then approach the print, scan a QR code, and browse
            across the artwork to hear the experiences of those in the
            community.
          </p>
        </div>
        <img
          id="print"
          class="two-thirds-width img-bg"
          src="/photos/WIKN/WIKN_mural_crop_landscape.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tags from "../components/Tags.vue";
import contents from "../list-contents.json";
import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "WIKN",
  data() {
    return {
      trig: []
    };
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

    this.$router.app.$root.$once("transitionScroll", () => {
      this.$router.app.$nextTick(() => {
        if (this.$router.history.current.name === "WIKN") {
          const instance = this;
          $("video").each(function() {
            const videoInstance = this;
            const videoTrig = ScrollTrigger.create({
              trigger: videoInstance,
              start: "top 100%", // [trigger] [scroller] positions,
              end: "bottom 0%", // [trigger] [scroller] positions
              // markers: true,
              onEnter: () => {
                videoInstance.play();
              },
              onEnterBack: () => {
                videoInstance.play();
              },
              onLeave: () => {
                videoInstance.pause();
                videoInstance.currentTime = 0;
              },
              onLeaveBack: () => {
                videoInstance.pause();
                videoInstance.currentTime = 0;
              }
            });
            instance.trig.push(videoTrig);
          });
        }
      });
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
  beforeDestroy() {
    if (this.$router.history.current.name === "WIKN") {
      for (let i = 0; i < this.trig.length; i++) {
        this.trig[i].kill();
      }
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
  // margin-bottom: 0;
}

#ui-record,
#ui-review,
#ui-macro {
  object-fit: unset;
  width: 270px;
  height: 590px;
  border-radius: 40px;
  // transform: scale(0.7);
  // transform-origin: top center;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
  // margin-right: calc(min(7vw, calc(var(--main-width) * 0.05)));
  margin-right: calc(min(7vw, 72px));
}

#ui-review {
  // margin-left: calc(min(7vw, calc(var(--main-width) * 0.05)));
  margin-left: calc(min(7vw, 72px));
  margin-right: 0;
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .ui {
    // justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
  }

  #ui-record,
  #ui-review,
  #ui-macro {
    width: 251px;
    height: 550px;
    border-radius: 35px;
    margin-left: 0;
    margin-right: 0;
  }
}

@media only screen and (max-width: 768px) {
  .ui {
    // justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }

  #ui-record,
  #ui-review,
  #ui-macro {
    width: 180px;
    height: 394px;
    border-radius: 25px;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
