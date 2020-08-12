<template>
  <div class="skill-container" ref="skill">
    <h2 class="skill-description" v-html="adjDescription"></h2>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Skill",
  props: {
    description: String,
    keywords: Array,
    color: String,
    delay: Number
  },
  data() {
    return {
      adjDescription: "",
      wordList: [],
      tl: null
    };
  },
  mounted() {
    // ScrollTrigger.refresh();

    this.adjDescription = this.description;
    for (var i = 0; i < this.keywords.length; i++) {
      this.colorize(this.keywords[i]);
    }

    const { skill } = this.$refs;

    setTimeout(() => {
      this.tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#skills-container",
            start: "top 83%",
            end: "bottom top"
            // markers: true
          }
        })
        .from(skill, {
          autoAlpha: 0,
          duration: 0.5,
          ease: "power1.inOut",
          delay: this.delay
        });
    }, 300);
  },
  methods: {
    colorize(keyword) {
      this.adjDescription = this.adjDescription.replace(
        keyword,
        `<span style="color: ${this.color}"> ${keyword} </span>`
      );
    }
  },
  beforeDestroy() {
    // this.tl.scrollTrigger.refresh();
    this.tl.scrollTrigger.kill();
  }
};
</script>

<style lang="scss">
.skill-container {
  width: 33%;
  // min-width: 200px;
  margin-bottom: 120px;
  // opacity: 0;
}

.skill-description {
  // width: 63%;
  width: 80%;
}

@media only screen and (min-width: 426px) and (max-width: 1024px) {
  .skill-container {
    width: 100%;
  }

  .skill-description {
    width: 66%;
  }
}

@media only screen and (max-width: 425px) {
  .skill-container,
  .skill-description {
    width: 100%;
  }
}
</style>
