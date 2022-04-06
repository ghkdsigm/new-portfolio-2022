import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/works",
      name: "work",
      component: () => import("@/views/Works.vue"),
    },
    {
      path: "/404",
      name: "NotFound",
      component: () => import("@/routes/NotFound.vue"),
    },
    {
      path: "*",
      redirect: to => {
        return { name: "NotFound" };
      },
    },
  ],
});
