<template>
  <div class="tags-container">
    <!-- borderLeftColor: categories[findCategory(word)].borderColor -->
    <div
      class="tag"
      v-for="word in words"
      :key="word"
      :style="{
        color: categories[findCategory(word)].color,
        backgroundColor: categories[findCategory(word)].backgroundColor
      }"
    >
      {{ word }}
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
      categories: contents["tags"]
    };
  },
  methods: {
    findCategory(word) {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].words.includes(word)) {
          return i;
        }
      }
    }
  },
  computed: {
    // tagCategory() {
    //   const categories = contents["tags"];
    //   for (category in categories) {
    //   }
    //   return {};
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

// .tag {
//   margin: 0 10px 10px 0;
//   border: solid 2px;
//   border-radius: 5px;
//   padding: 4px 10px;
//   font-size: 14px;
//   font-weight: 600;
// }

.tag {
  margin: 0 10px 10px 0;
  // border-radius: 15px;
  border-radius: 2px;
  border-left: solid 3px;
  /* padding: 4px 10px; */
  padding: 6px 11px;
  font-size: 12px;
  font-weight: 600;
}
</style>
