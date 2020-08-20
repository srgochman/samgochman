<template>
  <div class="study-page">
    <div class="banner img-bg"></div>
    <div class="body">
      <div class="banner-text">
        <h3>Anivision</h3>
        <h2>{{ tagline }}</h2>
        <p>2017 – Present</p>
        <p>DALI Lab @ Dartmouth College</p>
      </div>
      <div class="info section">
        <h3 class="two-thirds-width">
          What if instead of just reading about nocturnal primate vision, you
          could become a tarsier with enormous eyes in virtual reality? I merged
          my existing research in ecology with my studies in human-centered
          design to create a platform that lets students appreciate topics like
          evolution through a first-hand experience of extreme adaptations in
          the animal kingdom. <br /><br />
          As the founder and now advisor of the project, I've worked closely
          with several groups of students at Dartmouth’s design lab to guide
          strategy and design decisions that propel the learning goals.
          Partnering with professors and local high schools and museums has also
          helped get the VR platform into real classrooms and pushed its
          capabilities in every iteration.
        </h3>
        <div class="contributions-container one-third-width">
          <p class="contributions">Contributions</p>
          <Tags :words="tags" />
          <p class="contributions">Teammates</p>
          <p>DALI Designers and Developers, Dartmouth Anthropology Professor</p>
        </div>
      </div>
      <!-- <div id="vid-section" class="section appear"></div> -->
      <div id="vid-section" class="section writing appear reverse">
        <div class="caption one-third-width">
          <h2 class="">Immersive Education</h2>
          <p class="">
            Emerging technologies like virtual reality create new opportunities
            to both overcome mental fatigue<a
              href="https://www.researchgate.net/publication/323121980_Cognitive_Fatigue_and_the_Wellbeing_and_Academic_Attainment_of_University_Students#read"
              target="_blank"
              rel="noopener"
              ><sup>1</sup></a
            >
            in the classroom and learn through curiosity and exploration.
            Teachers can use this platform across disciplines like physiology,
            perceptual psychology, physics, and even philosophy. Whether
            learning about adaptation, eye lenses, or subjective worldviews,
            students appreciate classroom concepts through intuition.
          </p>
        </div>
        <video class="two-thirds-width" controls>
          <source src="/photos/anivision/anivision.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="section across appear">
        <img
          class="two-thirds-width img-bg"
          src="/photos/anivision/VINS_student.jpg"
        />
        <img
          class="one-third-width img-bg"
          src="/photos/anivision/VINS_class.jpg"
        />
      </div>
      <div class="section writing appear stacked">
        <div class="caption">
          <h2 class="two-thirds-width">Environments Design</h2>
          <p class="two-thirds-width">
            Using animals with extreme adaptations like the honey bee lets
            students toggle between visual systems while exploring different
            habitats. Keeping in mind real ecology, we designed environments
            that encourage self-motivated learning. Users can see how different
            eyes either help or hinder the animal’s behavior like seeing a
            flower’s ultraviolet markings that signal where to find nectar.
          </p>
        </div>
        <div class="across">
          <img
            class="one-third-width img-bg"
            src="/photos/anivision/honeybee.jpg"
          />
          <img
            class="two-thirds-width img-bg"
            src="/photos/anivision/beeComparison.jpg"
          />
        </div>
      </div>
      <div id="results" class="section writing appear reverse">
        <!-- <div class="spacer one-third-width"></div> -->
        <div class="caption two-thirds-width">
          <h2>Enhanced Learning</h2>
          <p>
            Throughout development, we’ve tested the platform with students from
            middle school through college. With more formal testing, we
            published in an open access educational journal to communicate how
            this immersive system can improve the learning experience.
            <br />
            <br />
            <strong>85% of student testers preferred this VR experience</strong>
            over traditional classroom methods.
            <br />
            <br />
            <strong>
              92% of students demonstrated an understanding of the lesson's key
              takeaways</strong
            >
            (e.g., advantages of large eyes in dark environments).
          </p>
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
          <p>
            Beyond publication, we made the platform open source to maximize
            access. I've presented on campus, at a national conference, and at a
            natural history museum to gain interest and partnerships with
            educators.
          </p>
        </div>
        <img
          id="leakey"
          class="two-thirds-width img-bg"
          src="/photos/anivision/leakey.jpg"
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
  background-image: url("/photos/anivision/anivision_KUA.jpg");
}

.banner::before {
  background-color: rgba(0, 0, 0, 0.5);
}

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

  #leakey {
    height: 200px;
  }
}
</style>
