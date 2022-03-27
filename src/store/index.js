import Vue from "vue";
import Vuex from "vuex";
import { MyInfoList } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    datas: [],
  },
  mutations: {
    SET_INFO(state, payload) {
      state.datas = payload;
    },
  },
  actions: {
    FETCH_INFO(context) {
      MyInfoList()
        .then(res => {
          context.commit("SET_INFO", res.data);
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
});
