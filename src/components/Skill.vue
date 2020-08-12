<template>
  <div class="skill-container" ref="skill">
    <h2 class="skill-description" v-html="adjDescription">
      <!-- <h2 class="skill-description"> -->
    </h2>
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
      // this.$root.$once("transitionScroll", () => {
      //   if (this.$route.path == "/") {
      console.log("skill arrived");
      this.tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 83%",
            end: "bottom top"
            // toggleActions: "restart none none none"
            // markers: true
          }
        })
        .from(skill, {
          autoAlpha: 0,
          duration: 0.5,
          ease: "power1.inOut",
          delay: this.delay
        });
      // }
      // });
    }, 500);
  },
  // computed: {
  //   transitionDone() {
  //     return this.$store.state.isTransitionDone;
  //     // },
  //     // targetRoute() {
  //     //   console.log(this.$store.state.targetRoute);
  //     //   return this.$store.state.targetRoute;
  //   }
  // },
  // watch: {
  //   transitionDone() {
  //     console.log("skill arrived");
  //     const { skill } = this.$refs;
  //     this.tl = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: ".skills-container",
  //           start: "top 83%",
  //           end: "bottom top"
  //           // toggleActions: "restart none none none"
  //           // markers: true
  //         }
  //       })
  //       .from(skill, {
  //         autoAlpha: 0,
  //         duration: 0.5,
  //         ease: "power1.inOut",
  //         delay: this.delay
  //       });
  //   }
  // },
  methods: {
    colorize(keyword) {
      this.adjDescription = this.adjDescription.replace(
        keyword,
        `<span style="color: ${this.color}"> ${keyword} </span>`
      );
    }
  },
  beforeDestroy() {
    console.log(window.scrollY);
    // this.tl.scrollTrigger.refresh();
    this.tl.scrollTrigger.kill(); // even necessary?
    // this.tl = null;
  }
};
</script>

<style lang="scss">
.skill-container {
  // width: 100%;
  width: 33%;
  // min-width: 200px;
  margin-bottom: 120px;
  // opacity: 0;
  // width: 300px;
  /* height: 173px; */
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
}

.skill-description {
  // width: 63%;
  width: 80%;
  // font-weight: 600;
  // font-size: 2em;
}

@media only screen and (max-width: 425px) {
  .skill-container,
  .skill-description {
    width: 100%;
  }
}

@media only screen and (min-width: 426px) and (max-width: 1024px) {
  .skill-container {
    width: 100%;
  }

  .skill-description {
    width: 66%;
  }
}
</style>
