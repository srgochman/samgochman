<template>
  <div class="skill-container">
    <!-- <h2 :style="{ color: color }">{{ keyword }}</h2> -->
    <h3 class="skill-description">
      I <span :style="{ color: color, fontWeight: 600 }">{{ keyword }}</span
      >{{ description }}
    </h3>
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
  // min-width: 200px;
  margin-bottom: 80px;
  // width: 300px;
  /* height: 173px; */
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
}

.skill-description {
  width: 80%;
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
