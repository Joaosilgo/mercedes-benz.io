import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Details from "../views/Details.vue";






Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/details/:id",
    name: "Details",
    component: Details,
  },
 // { 
    //path: '*',
 //   path: '/:catchAll(.*)*',
 //  component: NotFound 
 // },
 // ,
    {
    // catch all 404 - define at the very end
    path: "*",
    component: NotFound
    }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;