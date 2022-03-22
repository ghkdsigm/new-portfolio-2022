import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import store from "@/store/index";
import VueAwesomeSwiper from "vue-awesome-swiper";
import XParticles from "x-particles";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(XParticles);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
