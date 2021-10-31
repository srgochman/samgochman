<template>
  <div class="study-page">
    <div class="banner section__background-image"></div>
    <div class="page-body">
      <div class="page-body__banner-text">
        <h3>Anivision</h3>
        <h2>{{ tagline }}</h2>
        <p>2017 – Present</p>
        <!-- <p>DALI Lab @ Dartmouth College</p> -->
      </div>
      <div class="page-body__info section">
        <h3 class="two-thirds-width">
          What if instead of just reading about nocturnal primate vision, you
          could become a tarsier with enormous eyes in virtual reality? I merged
          my existing research in ecology with my studies in human-centered
          design to create a platform that lets students appreciate topics like
          evolution through a first-hand experience of extreme adaptations in
          the animal kingdom. <br /><br />
          As the Founder and now Advisor of the project, I've worked closely
          with several groups of talented students at Dartmouth’s design lab to
          guide strategy and design decisions that propel the learning goals.
          Partnering with professors, schools, and museums has also helped get
          the VR platform into real classrooms and pushed its capabilities in
          every iteration. I now lead a steering committee with stakeholders to
          guide the project as it grows. <br /><br />
          Thanks to funding from NSF Aware #1917002 Infusing Data Science into Undergraduate STEM Education.
        </h3>
        <div class="contributions one-third-width">
          <p class="info-caps">My Role</p>
          <Tags :words="tags" />
          <p class="info-caps">Project Ownership</p>
          <p>
            <a href="https://dali.dartmouth.edu" target="_blank" rel="noopener"
              >DALI Lab</a
            >, Sam Gochman
          </p>
          <p class="info-caps">Teammates</p>
          <p>
            DALI Designers and Developers <br />
            Dr. Nathaniel J Dominy
          </p>
        </div>
      </div>
      <div class="section reverse appear">
        <div class="section__description one-third-width">
          <h2>Immersive Education</h2>
          <p>
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
        <div class="two-thirds-width">
          <video
            controls
            controlsList="nodownload"
            preload="none"
            poster="/photos/anivision/anivision_poster.jpg"
          >
            <source src="/photos/anivision/anivision.mp4" type="video/mp4" />
          </video>
          <p>
            Users can see the benefits of large eyes in dark environments and of
            UV sensitivity for targeting flowers.
          </p>
        </div>
      </div>
      <div class="section section--across appear">
        <img
          class="section__background-image two-thirds-width"
          src="/photos/anivision/VINS_student.jpg"
        />
        <img
          class="section__background-image one-third-width"
          src="/photos/anivision/VINS_class.jpg"
        />
      </div>
      <div class="section section--stacked appear">
        <div class="section__description two-thirds-width">
          <h2>Environments Design</h2>
          <p>
            Using animals with extreme adaptations like the honey bee lets
            students toggle between visual systems while exploring different
            habitats. We used a foundation of scientific literature to design
            environments that encourage self-motivated learning. Users can see
            how different eyes either help or hinder the animal’s behavior like
            seeing a flower’s ultraviolet markings that signal where to find
            nectar.
          </p>
        </div>
        <div class="section--across full-width">
          <img
            class="section__background-image two-thirds-width"
            src="/photos/anivision/beeComparison.jpg"
          />
          <img
            class="section__background-image one-third-width"
            src="/photos/anivision/honeybee.jpg"
          />
        </div>
      </div>
      <div id="results" class="section reverse appear">
        <div class="section__description two-thirds-width">
          <h2>Enhanced Learning</h2>
          <p>
            Throughout development, we tested the platform with students from
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
        >
          <div class="section__image-container full-width">
            <img id="paper" src="/photos/anivision/published.png" />
          </div>
        </a>
      </div>
      <div class="section appear">
        <div class="section__description one-third-width">
          <h2>Presentation</h2>
          <p>
            Beyond publication, we made the platform open source to maximize
            access. I've presented on campus, at a national conference, and at a
            natural history museum to gain interest and partnerships with
            educators.
          </p>
        </div>
        <div class="section__image-container two-thirds-width">
          <img id="leakey" src="/photos/anivision/leakey.jpg" />
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

    $("video").prop("volume", 0.5);
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
  height: 600px;
  object-fit: cover;
  margin-bottom: 10px;
}

.section--across {
  justify-content: space-between;

  a {
    height: 100%;
  }
}

#paper {
  object-fit: scale-down;
  width: 100%;
}

@media only screen and (max-width: 425px) {
  video {
    height: 300px;
  }

  .section--across img {
    height: unset;
    object-fit: unset;
  }
}
</style>
