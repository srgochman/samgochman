<template>
  <div class="skill" ref="skill">
    <h3
      class="skill__description"
      v-html="adjDescription"
      :style="{ borderColor: color, backgroundColor: backgroundColor }"
    ></h3>
  </div>
</template>

<script>
// Component for each instance in Skills section
// Props passed from Home.vue

import { EventBus } from "../event-bus.js";
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
    this.adjDescription = this.description;
    for (var i = 0; i < this.keywords.length; i++) {
      this.colorize(this.keywords[i]);
    }

    const { skill } = this.$refs;

    this.$router.app.$root.$once("transitionScroll", () => {
      this.$router.app.$nextTick(() => {
        if (this.$router.history.current.name === "Sam Gochman") {
          this.tl = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".section--skills",
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
          EventBus.$on("destroy_triggers", this.killTriggers);
        }
      });
    });
  },
  methods: {
    colorize(keyword) {
      this.adjDescription = this.adjDescription.replace(
        keyword,
        `<span style="color: ${this.color}; font-weight: 400"> ${keyword} </span>`
      );
    },
    killTriggers() {
      this.tl.scrollTrigger.kill();
      EventBus.$off("destroy_triggers", this.killTriggers);
    }
  }
};
</script>

<style lang="scss">
.skill {
  width: 63%;
  // min-width: 200px;
  margin-bottom: 40px;
  // opacity: 0;
}

.skill__description {
  padding: 25px 35px;
  // border-radius: 0px 5px 5px 0px;
  // -webkit-border-radius: 0px 5px 5px 0px;
  // -moz-border-radius: 0px 5px 5px 0px;
  border-left: solid 6px;
}

@media only screen and (min-width: 426px) and (max-width: 768px),
  only screen and (orientation: landscape) and (max-width: 820px) {
  .skill {
    width: 100%;
    margin-bottom: 40px;
  }

  .skill__description {
    padding: 20px 30px;
  }
}

@media only screen and (max-width: 425px) {
  .skill {
    width: 100%;
    margin-bottom: 30px;
  }

  .skill__description {
    border-left: solid 5px;
    padding: 15px 25px;
  }
}
</style>
