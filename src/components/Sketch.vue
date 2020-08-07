<template>
  <div id="canvas-container"></div>
</template>

<script>
import VizObject from "../sketch.js";
const P5 = require("p5");

export default {
  data() {
    return {
      p5ctx: null,
      viz: null
    };
  },
  mounted() {
    this.viz = new VizObject();
    this.p5ctx = new P5(this.viz.setP5Ref.bind(this.viz), "canvas-container");
  },
  beforeDestroy() {
    this.viz.stopAndCleanup();
    this.p5ctx.remove();
  },
  watch: {
    // audio_playing() {
    //   this.viz.audioPlayingChanged(this.audio_playing);
    // }
  },
  computed: {
    // audio_playing() {
    //   return this.$store.state.audio_playing;
    // }
  },
  props: {},
  methods: {
    // saveScreenshot() {
    //   const canvas = document.getElementById("defaultCanvas0");
    //   canvas.toBlob(blob => {
    //     this.$store.commit("set_screenshot_blob", blob);
    //   });
    // }
  },
  components: {}
};
</script>

<style lang="scss">
#canvas-container {
  //   display: flex;
  //   justify-content: center;
  //   max-height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
