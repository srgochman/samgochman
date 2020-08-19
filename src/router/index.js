import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Juices from "../views/Juices.vue";
import Phototaxis from "../views/Phototaxis.vue";
import Multilingual from "../views/Multilingual.vue";
import WIKN from "../views/WIKN.vue";
import Anivision from "../views/Anivision.vue";
import NotFound from "../views/NotFound.vue";
import Authentication from "../views/Authentication.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,

  // remembers scroll position if the page was visited, otherwise goes to the top of the page
  scrollBehavior: (to, from, savedPosition) =>
    new Promise(resolve => {
      let position = savedPosition ? savedPosition : { x: 0, y: 0 }; // is this 0 a value relative to the starting position or absolute to the top of the page? seems to be an offset
      router.app.$root.$once("transitionScroll", () => {
        router.app.$nextTick(() => resolve(position));
      });
      // return savedPosition ? savedPosition : { x: 0, y: 0 };
    }),
  routes: [
    {
      path: "/",
      name: "Sam Gochman",
      component: Home,
      meta: {
        title: "Sam Gochman"
      }
    },
    {
      path: "/phototaxis",
      name: "Phototaxis",
      component: Phototaxis,
      meta: {
        title: "Phototaxis | Sam Gochman"
      }
    },
    {
      path: "/multilingual",
      name: "Multilingual",
      component: Multilingual,
      meta: {
        title: "Multilingual | Sam Gochman"
      }
    },
    {
      path: "/WIKN",
      name: "WIKN",
      component: WIKN,
      meta: {
        title: "What I Know Now | Sam Gochman"
      }
    },
    {
      path: "/anivision",
      name: "Anivision",
      component: Anivision,
      meta: {
        title: "Anivision | Sam Gochman"
      }
    },
    {
      path: "/juices",
      name: "Latest Creative Juices",
      component: Juices,
      meta: {
        title: "Latest Creative Juices | Sam Gochman"
      }
    },
    {
      path: "/authentication",
      name: "Authentication",
      component: Authentication,
      meta: {
        title: "Authentication"
      }
    },
    {
      path: "/404",
      name: "Not Found",
      component: NotFound,
      meta: {
        title: "Page Not Found"
      }
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});

// set each page's title
router.afterEach(to => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
