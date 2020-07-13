<template>
  <div class="tags-container">
    <div v-for="tagCategory in tagCategories" :key="tagCategory.category">
      <div class="tag" v-for="word in words" :key="word">
        <span
          v-if="tagCategory.words.includes(word)"
          :style="{
            color: tagCategory.category.color,
            backgroundColor: tagCategory.category.backgroundColor
          }"
        >
          {{ word }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import contents from "../list-contents.json";

export default {
  name: "Tags",
  props: {
    words: Array
  },
  data() {
    return {
      tagCategories: contents["tags"]
    };
  },
  computed: {
    // filteredWords () {
    //   filters this.words;
    //   return {
    //   };
    // }
  },
  components: {}
};
</script>

<style lang="scss">
.tags-container {
  margin: 0 0 70px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

/* .tag {
  margin: 0 10px 10px 0;
  border: solid 1px;
  border-radius: 5px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 300;
} */

/* .tag {
  margin: 0 10px 10px 0;
  border-left: solid 3px;
  border-radius: 2px;
  padding: 7px 13px;
  font-size: 14px;
  font-weight: 600;
} */

.tag {
  margin: 0 10px 10px 0;
  border-radius: 15px;
  /* border-radius: 5px; */
  border-radius: 15px;
  /* padding: 4px 10px; */
  padding: 7px 13px;
  font-size: 14px;
  font-weight: 600;
}
</style>
