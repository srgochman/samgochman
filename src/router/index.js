import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Juices from "../views/Juices.vue";
import Phototaxis from "../views/Phototaxis.vue";
import Multilingual from "../views/Multilingual.vue";
import WIKN from "../views/WIKN.vue";
import Anivision from "../views/Anivision.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Sam Gochman",
      component: Home
    },
    {
      path: "/juices",
      name: "Latest Creative Juices",
      component: Juices
    },
    {
      path: "/phototaxis",
      name: "Phototaxis",
      component: Phototaxis
    },
    {
      path: "/multilingual",
      name: "Multilingual",
      component: Multilingual
    },
    {
      path: "/WIKN",
      name: "WIKN",
      component: WIKN
    },
    {
      path: "/anivision",
      name: "Anivision",
      component: Anivision
    }
  ]
});

export default router;
