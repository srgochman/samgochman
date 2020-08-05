<template>
  <CaseStudy
    title="Phototaxis"
    summary="Developed for Planet Word, a museum of language in Washington, DC,
          Multilingual gives visitors a chance to appreciate the diversity of
          languages spoken by other visitors through time. Each contribution to
          the visualization is a unique experience focused on one user in the
          context of a connected community. With color representing a visitor’s
          language and size showing its rarity, everyone can track themselves in
          an artwork that enhances the museum whether or not it’s in use."
    :content="content"
  ></CaseStudy>
</template>

<script>
import CaseStudy from "../components/CaseStudy.vue";

export default {
  name: "Phototaxis",
  components: { CaseStudy },
  methods: {
    content() {
      return <h3>testing</h3>;
    }
  }
};
</script>

<style lang="scss"></style>
