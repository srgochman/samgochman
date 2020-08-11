<template>
  <div class="study-page">
    <div class="banner img-bg"></div>
    <div class="body">
      <div class="banner-text">
        <h1>Anivision</h1>
        <h2 class="oversized">{{ tagline }}</h2>
        <h3>DALI Lab @ Dartmouth College, 2017 – Present</h3>
      </div>
      <div class="info section">
        <h3 class="half-width">
          Merging my backgrounds in science research and human-centered design,
          I created a platform that lets students appreciate topics like
          evolution through a first-hand experience of extreme adaptations in
          the animal kingdom. Partnering with Dartmouth’s design lab,
          professors, and local high schools has helped get the project into
          real classrooms and pushed its capabilities in every iteration.
        </h3>
        <Tags :words="tags" class="half-width" />
      </div>
      <!-- <div id="vid-section" class="section appear"></div> -->
      <div id="vid-section" class="section writing appear reverse">
        <div class="caption one-third-width">
          <h2 class="">Immersive Education</h2>
          <h3 class="">
            What if instead of just reading about nocturnal primate vision, you
            could become a tarsier with enormous eyes in virtual reality?
            Teachers can use this platform across disciplines like physiology,
            perceptual psychology, physics, and even philosophy. Whether
            learning about adaptation, eye lenses, or subjective worldviews,
            students appreciate classroom concepts through intuition.
          </h3>
        </div>
        <video class="two-thirds-width" controls>
          <source src="/photos/anivision/anivision.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="section across appear">
        <img
          class="two-thirds-width"
          src="/photos/anivision/VINS_student.jpg"
        />
        <img class="one-third-width" src="/photos/anivision/VINS_class.jpg" />
      </div>
      <div class="section writing appear stacked">
        <div class="caption">
          <h2 class="one-third-width">Environments Design</h2>
          <h3 class="one-third-width">
            Using animals with extreme adaptations like the honey bee lets
            students toggle between visual systems while exploring different
            habitats. Keeping in mind real ecology, we designed environments
            that encourage self-motivated learning. Users can see how different
            eyes either help or hinder the animal’s behavior like seeing a
            flower’s ultraviolet markings that signal where to find nectar.
          </h3>
        </div>
        <div class="across">
          <img class="one-third-width" src="/photos/anivision/honeybee.jpg" />
          <img
            class="two-thirds-width"
            src="/photos/anivision/beeComparison.png"
          />
        </div>
      </div>
      <div id="results" class="section writing appear reverse">
        <!-- <div class="spacer one-third-width"></div> -->
        <div class="caption two-thirds-width">
          <h2 class="half-width">Enhanced Learning</h2>
          <h3 class="half-width">
            Throughout development, we’ve tested the platform with students from
            middle school through college. With more formal testing, we
            published in an open access educational journal to communicate how
            this immersive system can improve the learning experience.
            <br />
            <br />
            <strong>85%</strong> of student testers preferred this VR experience
            over traditional classroom methods.
            <br />
            <br />
            <strong>92%</strong> of students understood the lesson's key
            takeaways (e.g., advantages of large eyes in dark environments).
          </h3>
        </div>
        <a
          class="one-third-width"
          href="https://evolution-outreach.biomedcentral.com/articles/10.1186/s12052-019-0101-6"
          target="_blank"
          rel="noopener"
          ><img id="paper" src="/photos/anivision/published.png"
        /></a>
      </div>
      <div class="section writing appear">
        <div class="caption one-third-width">
          <h2>Communication</h2>
          <h3>
            Beyond publication, we made the platform open source to maximize
            access. I presented at a national conference, natural history
            museum, and on campus to gain interest and partnerships with
            educators.
          </h3>
        </div>
        <img class="two-thirds-width" src="/photos/anivision/leakey.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import Tags from "../components/Tags.vue";
import contents from "../list-contents.json";
import ScrollMagic from "scrollmagic";

export default {
  name: "Anivision",
  computed: {
    tagline() {
      return contents["projects"].filter(project => {
        return project.title === "Anivision";
      })[0].description;
    },
    tags() {
      return contents["projects"].filter(project => {
        return project.title === "Anivision";
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

.banner {
  background-image: url("/photos/anivision/anivision_KUA.png");
}

.banner::before {
  background-color: rgba(0, 0, 0, 0.5);
}

// #vid-section {
//   justify-content: start;
// }

video {
  // margin-right: calc(var(--main-width) * 0.05);
  height: 600px;
  object-fit: cover;
}

.across {
  justify-content: space-between;
  // align-items: center;

  a {
    height: 100%;
  }

  // img {
  //   height: 100%;
  //   object-fit: cover;
  // }
}

// #results {
//   justify-content: start;
// }

#paper {
  object-fit: scale-down;
  width: 100%;
}

@media only screen and (max-width: 425px) {
  video {
    height: 300px;
  }

  .across img {
    height: unset;
    object-fit: unset;
  }
}
</style>
