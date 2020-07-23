<template>
  <div class="skill-container">
    <h2 :style="{ color: color }">{{ keyword }}</h2>
    <!-- <h3 class="skill-title">
      I <span :style="{ color: color }">{{ keyword }}</span
      >{{ title }}
    </h3> -->
    <Tags :words="tags"></Tags>
  </div>
</template>

<script>
import Tags from "./Tags.vue";

export default {
  name: "Skill",
  props: {
    title: String,
    keyword: String,
    color: String,
    tags: Array
  },
  components: {
    Tags
  }
};
</script>

<style lang="scss">
.skill-container {
  // width: 30%;
  width: 300px;
  /* height: 173px; */
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
}

/* .skill-title {
  margin-bottom: 16px;
} */
</style>
