import Vue from "vue";
import VueRouter from "vue-router";

import * as names from "./names";

import HomePage from "../views/PageAccueil.vue";

Vue.use(VueRouter);

const routes = [{ path: "/", name: names.HOMEPAGE, component: HomePage }];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("from", from);
  console.log("to", to);
  next();
});

export default router;
