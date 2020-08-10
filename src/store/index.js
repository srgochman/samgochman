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
    type: contents["projects"][0].type,
    locked: contents["projects"][0].locked,

    // activeProject: ""

    targetRoute: ""
  },
  mutations: {
    set_project_params(state, params) {
      state.title = params.title;
      state.description = params.description;
      state.tags = params.tags;
      state.link = params.link;
      state.type = params.type;
      state.locked = params.locked;
      // console.log("store: accessed", state.title);
      // state.activeProject = params.activeProject;
    },
    set_target_route(state, route) {
      state.targetRoute = route;
    }
  },
  getters: {},
  actions: {},
  modules: {}
});
