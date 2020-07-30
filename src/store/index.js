import Vue from "vue";
import Vuex from "vuex";
import contents from "../list-contents.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // default content for project description, empty values would be "" or []
    title: contents["projects"][0].title,
    description: contents["projects"][0].description,
    tags: contents["projects"][0].tags,
    link: contents["projects"][0].link,
    type: contents["projects"][0].type
  },
  mutations: {
    set_project_params(state, params) {
      state.title = params.title;
      state.description = params.description;
      state.tags = params.tags;
      state.link = params.link;
      state.type = params.type;
      console.log("store: accessed", state.title);
    }
  },
  getters: {},
  actions: {},
  modules: {}
});
