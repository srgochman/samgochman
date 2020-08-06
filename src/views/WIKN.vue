<template>
  <div class="study-page">
    <div class="banner img-bg"></div>
    <div class="body">
      <div class="banner-text">
        <h1>What I Know Now</h1>
        <h2 class="oversized">{{ tagline }}</h2>
        <h3>Sosolimited, in progress</h3>
      </div>
      <div class="info section">
        <h3 class="half-width">
          The challenges of 2020 showed us that we need to come together with
          empathetic ears and eyes. This project lets anyone record their own
          personal experience and emotions and watch their voice paint a unique
          signature that adds to a large-scale, community-wide generative
          collage.
        </h3>
        <Tags :words="tags" class="half-width" />
      </div>
      <div class="section writing ui appear reverse">
        <div class="caption one-third-width">
          <h2>Capturing a Story</h2>
          <h3>
            Each user responds to a prompt, and their audio waveform gives
            feedback that their voice is being recorded and transcribed. After
            considering many options for input, I advocated for voice as an
            expressive and widely accessible medium for input.
          </h3>
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
          <h3>
            The story is played back while a unique shareable signature is
            generated in real-time. I used audio parameters like pitch and
            volume, as well as semantic parameters like number and emotion of
            words, to translate voice into art.
          </h3>
        </div>
        <video id="ui-review" class="one-third-width" muted>
          <source src="/photos/WIKN/WIKN_patch_review.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="section writing ui appear reverse">
        <!-- <div class="one-third-width"></div> -->
        <div class="caption one-third-width">
          <h2>Community Exploration</h2>
          <h3>
            Once a user contributes their story, they can scan through a virtual
            mosaic made from other submissions and hear—and see—the voices in
            their neighborhood or organization.
          </h3>
        </div>
        <video id="ui-macro" class="one-third-width" muted>
          <source src="/photos/WIKN/macro_scroll.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="section writing appear">
        <div class="caption one-third-width">
          <h2>Translations</h2>
          <h3>
            To really drive home the uniqueness of each person’s experience, we
            needed to conceptualize a visual language that avoided
            self-similarity. With a handle on the data, I worked with designers
            to map legibly the data extracted from voice recordings onto a set
            of visual parameters in p5.js.
          </h3>
        </div>
        <img class="one-third-width" src="/photos/WIKN/doodle.jpg" />
        <img class="one-third-width" src="/photos/WIKN/brushes.png" />
      </div>
      <div class="section writing appear reverse">
        <div class="caption one-third-width">
          <h2>Public Visibility</h2>
          <h3>
            In the future, partners can sponsor a physical version of the mural.
            Anyone could then approach the print, scan a QR code, and browse
            across the artwork to hear the experiences of those in the
            community.
          </h3>
        </div>
        <img
          id="print"
          class="two-thirds-width"
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
  computed: {
    tagline() {
      return contents["projects"].filter(project => {
        return project.title === "Anivision";
      })[0].description;
    },
    tags() {
      return contents["projects"].filter(project => {
        return project.title === "What I Know Now";
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

    $("video").each(function() {
      const instance = this;
      ScrollTrigger.create({
        trigger: instance,
        start: "top 100%", // [trigger] [scroller] positions,
        end: "bottom 0%", // [trigger] [scroller] positions
        // markers: true,
        onEnter: () => {
          // console.log("enter");
          instance.play();
        },
        onEnterBack: () => {
          // console.log("enterBack");
          instance.play();
        },
        onLeave: () => {
          // console.log("leave");
          instance.pause();
          instance.currentTime = 0;
        },
        onLeaveBack: () => {
          // console.log("leaveBack");
          instance.pause();
          instance.currentTime = 0;
        }
      });
    });

    // const vidPlayer = new ScrollMagic.Controller();
    // $("video").each(function() {
    //   const instance = this;
    //   var scene = new ScrollMagic.Scene({
    //     triggerElement: instance,
    //     triggerHook: 1
    //   });
    //   // scene.reverse(false);
    //   scene
    //     .on("enter", function() {
    //       instance.play();
    //       console.log("entered");
    //     })
    //     .on("leave", function() {
    //       console.log("left");
    //       instance.pause();
    //       instance.currentTime = 0;
    //     })
    //     .addTo(vidPlayer);
    // });
  },
  methods: {},
  components: { Tags }
};
</script>

<style lang="scss" scoped>
@import "../scss/studies.scss";

.banner {
  background-image: url("/photos/WIKN/WIKN_mural.png");
}

.banner::before {
  background-color: rgba(0, 0, 0, 0.4);
}

.ui {
  justify-content: center;
}

#ui-record,
#ui-review,
#ui-macro {
  object-fit: unset;
  border-radius: 55px;
  transform: scale(0.7);
  transform-origin: top center;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
}

// #print {
//   padding-right: calc(var(--main-width) * 0.05);
// }
</style>
