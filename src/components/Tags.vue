<template>
  <div class="tags-container">
    <div class="tag-category" v-for="category in words" :key="category.color">
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
export default {
  name: "Tags",
  props: {
    words: Array
  }
};
</script>

<style lang="scss">
.tags-container {
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 0 70px 0;
}

.tag-category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.tag {
  margin: 0 10px 10px 0;
  border-radius: 2px;
  border-left: solid 3px;
  padding: 6px 11px 6px 9px;
  font-size: 0.875em;
  font-weight: 700;
}

@media only screen and (max-width: 1024px) {
  .tag {
    padding: 3px 7px 3px 6px;
    font-size: 0.8em;
  }
}
</style>
