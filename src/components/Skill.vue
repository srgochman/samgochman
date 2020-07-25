<template>
  <div class="skill-container">
    <!-- <h2 :style="{ color: color }">{{ keyword }}</h2> -->
    <h2 class="skill-description">
      I <span :style="{ color: color, fontWeight: 600 }">{{ keyword }}</span
      >{{ description }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    description: String,
    keyword: String,
    color: String
  },
  components: {}
};
</script>

<style lang="scss">
.skill-container {
  width: 33%;
  // width: 300px;
  /* height: 173px; */
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
}

.skill-description {
  // margin-bottom: 16px;
  width: 66%;
  // font-weight: 600;
}
</style>
