import Vue from "vue";
import Vuex from "vuex";
import { MyInfoList, MyOperationList, MyFront } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    datas: [],
    opeartiondata: [],
    frontworks: [],
  },
  mutations: {
    SET_INFO(state, payload) {
      state.datas = payload;
    },
    SET_OPERATION(state, payload) {
      state.opeartiondata = payload;
    },
    SET_MYFRONT(state, payload) {
      state.frontworks = payload;
    },
  },
  actions: {
    FETCH_INFO(context) {
      MyInfoList()
        .then(res => {
          context.commit("SET_INFO", res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    FETCH_OPERATION(context) {
      MyOperationList()
        .then(res => {
          context.commit("SET_OPERATION", res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    FECTH_MYFRONT(context) {
      MyFront()
        .then(res => {
          context.commit("SET_MYFRONT", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
});
