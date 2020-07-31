<template>
  <div class="skill-container" ref="skill">
    <!-- <h2 :style="{ color: color }">{{ keyword }}</h2> -->
    <h2 class="skill-description">
      I <span :style="{ color: color, fontWeight: 600 }">{{ keyword }}</span
      >{{ description }}
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
    keyword: String,
    color: String,
    delay: Number
  },
  components: {},
  mounted() {
    const { skill } = this.$refs;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 83%",
          end: "bottom top",
          toggleActions: "restart none none none"
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
  methods: {}
};
</script>

<style lang="scss">
.skill-container {
  width: 100%;
  // min-width: 200px;
  margin-bottom: 70px;
  // opacity: 0;
  // width: 300px;
  /* height: 173px; */
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
}

.skill-description {
  width: 50%;
  // margin-bottom: 16px;
  font-weight: 600;
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
