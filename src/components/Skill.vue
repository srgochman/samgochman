<template>
  <div class="skill-container" ref="skill">
    <h3
      class="skill-description"
      v-html="adjDescription"
      :style="{ borderColor: color, backgroundColor: backgroundColor }"
    ></h3>
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
    backgroundColor: String,
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

    // setTimeout(() => {
    // this.$nextTick(function() {
    this.$router.app.$root.$once("transitionScroll", () => {
      this.$router.app.$nextTick(() => {
        if (this.$router.history.current.name === "Sam Gochman") {
          // console.log("on home page");
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
        }
      });
    });
    // });
    // }, 300);
  },
  methods: {
    colorize(keyword) {
      this.adjDescription = this.adjDescription.replace(
        keyword,
        // `<span style="color: ${this.color}"> ${keyword} </span>`
        // `<span style="font-weight: 700"> ${keyword} </span>`
        `<span style="color: ${this.color}; font-weight: 700"> ${keyword} </span>`
      );
    }
  },
  beforeDestroy() {
    if (this.$router.history.current.name === "Sam Gochman") {
      this.tl.scrollTrigger.kill();
    }
  }
};
</script>

<style lang="scss">
.skill-container {
  width: 63%;
  // min-width: 200px;
  margin-bottom: 50px;
  // opacity: 0;
}

.skill-description {
  // width: 63%;
  // width: 80%;
  padding: 25px 45px;
  border-radius: 2px 7px 7px 2px;
  border-left: solid 6px;
  // font-weight: 200;
  // font-size: 2em;
}

// @media only screen and (min-width: 1025px) {
//   .skill-description {
//     font-size: 2em;
//   }
// }

@media only screen and (min-width: 426px) and (max-width: 1024px) {
  .skill-container {
    width: 100%;
  }

  .skill-description {
    padding: 20px 30px;
  }
}

@media only screen and (max-width: 425px) {
  .skill-container {
    width: 100%;
  }

  .skill-description {
    // width: 100%;
    border-left: solid 5px;
    padding: 15px 25px;
  }
}
</style>
