<template>
  <div class="study-page">
    <div class="banner img-bg">
      <!-- <div class="banner-text-gradient"></div> -->
    </div>
    <!-- <div class="body-bg"> -->
    <div class="body">
      <div class="banner-text">
        <h3>{{ title }}</h3>
        <h2 class="oversized">{{ tagline }}</h2>
      </div>
      <div class="info section">
        <h3 class="half-width">{{ summary }}</h3>
        <Tags :words="tags" class="half-width" />
      </div>
      {{ content }}
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import Tags from "../components/Tags.vue";
import contents from "../list-contents.json";
import ScrollMagic from "scrollmagic";

export default {
  name: "CaseStudy",
  props: {
    title: String,
    summary: String,
    content: Function
  },
  computed: {
    tagline() {
      return contents["projects"].filter(project => {
        return project.title === this.title;
      })[0].description;
    },
    tags() {
      return contents["projects"].filter(project => {
        return project.title === this.title;
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
</style>
