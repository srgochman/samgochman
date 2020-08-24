<template>
  <div id="lcj" class="section">
    <h1>Latest Creative Juices</h1>
    <Juices></Juices>
  </div>
</template>

<script>
import Juices from "../components/Juices.vue";

export default {
  name: "TestView",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {
    Juices
  }
};
</script>

<style lang="scss" scoped>
</style>
