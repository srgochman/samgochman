import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Juices from "../views/Juices.vue";

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
    }
  ]
});

export default router;
