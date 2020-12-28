<template>
  <div class="tags__container">
    <div class="tags__category" v-for="category in words" :key="category.color">
      <div
        class="tag"
        v-for="word in category.words"
        :key="word"
        :style="{
          color: category.color,
          backgroundColor: category.backgroundColor
        }"
      >
        {{ word }}
      </div>
    </div>
  </div>
</template>

<script>
// Tag component for each tag instance
// Props passed in from ProjectText.vue

export default {
  name: "Tags",
  props: {
    words: Array
  }
};
</script>

<style lang="scss">
.tags__container {
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 0 35px 0;
}

.tags__category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.tag {
  margin: 0 10px 10px 0;
  // border-radius: 0px 3px 3px 0px;
  // -webkit-border-radius: 0px 3px 3px 0px;
  // -moz-border-radius: 0px 3px 3px 0px;
  border-left: solid 3px;
  padding: 6px 11px 6px 9px;
  font-size: 0.875em;
  font-weight: 500; // 700
}

@media only screen and (min-width: 769px) and (max-width: 1250px) {
  .tag {
    padding: 5px 9px 5px 8px;
    font-size: 1.1vw;
  }
}

@media only screen and (max-width: 768px) {
  .tag {
    padding: 3px 7px 3px 6px;
    font-size: 0.8em;
  }
}
</style>
