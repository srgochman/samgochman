import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Juices from "../views/Juices.vue";
import Multilingual from "../views/Multilingual.vue";
import WIKN from "../views/WIKN.vue";
import Fenway from "../views/Fenway.vue";
import SOTS from "../views/SOTS.vue";
import Anivision from "../views/Anivision.vue";
import GMB from "../views/GMB.vue";

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
      path: "/fenway",
      name: "Fenway",
      component: Fenway
    },
    {
      path: "/athena",
      name: "SOTS",
      component: SOTS
    },
    {
      path: "/anivision",
      name: "Anivision",
      component: Anivision
    },
    {
      path: "/qualcomm",
      name: "GMB",
      component: GMB
    }
  ]
});

export default router;
