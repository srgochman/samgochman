<template>
  <div class="skill-container" ref="skill">
    <!-- <h2 :style="{ color: color }">{{ keyword }}</h2> -->
    <h2 class="skill-description" v-html="adjDescription">
      <!-- <h2 class="skill-description"> -->
      <!-- <span v-for="word in wordList" :key="word">
        <span v-if="matches(word)" :style="{ color: color }">{{ word }}</span>
        <span v-else>{{ word }}</span>
      </span> -->
      <!-- {{ adjDescription }} -->
    </h2>
  </div>
</template>

<script>
// import ScrollMagic from "scrollmagic";
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
      wordList: []
    };
  },
  mounted() {
    // this.wordList = this.description.split(" ");
    this.adjDescription = this.description;
    for (var i = 0; i < this.keywords.length; i++) {
      this.colorize(this.keywords[i]);
    }

    const { skill } = this.$refs;
    gsap
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
  },
  methods: {
    // matches(word) {
    //   console.log("match");
    //   return word === this.keyword;
    // },
    colorize(keyword) {
      this.adjDescription = this.adjDescription.replace(
        keyword,
        `<span style="color: ${this.color}"> ${keyword} </span>`
      );
      // const words = this.description.split(" ");
      // console.log(words);
      // for (var i = 0; i < words.length; i++) {
      //   if (words[i] === keywords) {
      //     // words[i].style;
      //     console.log("match:", words[i]);
      //     words[i] = "<span :style='{ color: color }'>" + words[i] + "</span>";
      //   }
      // }
      // this.adjDescription = words.join(" ");
      // console.log(keyword, "colored:", this.adjDescription);
    }
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
