<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="sam-gochman">Sam Gochman</router-link> |
      <router-link to="/juices" class="creative-container">
        <div class="creative-img"></div>
        <div class="creative-text">
          <span style="color: var(--purple)">Latest</span>
          <span style="color: var(--blue)">Creative</span>
          <span style="color: var(--green)">Juices</span>
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    // window.onload = window.onresize = function() {
    //   document.getElementById("app").style.height = window.innerHeight + "px";
    // };
  },
  components: {}
};
</script>

<style lang="scss">
@import "./scss/colors.scss";
@import "./scss/type.scss";
@import "./scss/reset.scss";

#app,
body,
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

#app {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  font-size: 24px;
  /* font-weight: 200; */
}

.section {
  margin-bottom: 400px;
}

.hidden {
  display: none;
}

a {
  /* display: inline;
  width: min-content;
  margin: 0; */
  text-decoration: none;
  transition: var(--hover);
  color: black;

  :hover {
    /* color: var(--gray); */
    opacity: 0.4;
    transition: var(--hover);
  }
}

#nav {
  width: 100%;
  padding: 20px 0px;
  background-color: white;
  /* border-bottom: lightgray 1px solid; */
  /* box-shadow: rgba(0, 0, 0, 0.15) 0 2px 5px; */
  /* box-shadow: 0 30px 20px white; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: fixed;
  top: 0;
  z-index: 100;

  .sam-gochman {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 800;
    color: black;
    padding-left: 30px;
  }

  .creative-container {
    display: flex;
    flex-direction: row;
    transition: var(--hover);
    padding-right: 30px;
  }

  .creative-img {
    width: 55px;
    height: 55px;
    background-image: url("./assets/test2.png");
    background-size: 250%;
    background-position: 15%;
  }

  .creative-text {
    margin: 0 0 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 800;
  }
}
</style>
