import Vue from "vue";
import App from "./App.vue";
import { router } from "@/routes/index";
import { store } from "@/store/index";
import VueAwesomeSwiper from "vue-awesome-swiper";
import XParticles from "x-particles";
import magicmouse from "magicmouse.js";
import dotenv from "dotenv";

Vue.config.productionTip = false;
dotenv.config();
Vue.use(VueAwesomeSwiper);
Vue.use(XParticles);
Vue.use(magicmouse);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
