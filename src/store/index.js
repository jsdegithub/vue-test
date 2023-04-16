import Vue from "vue";
import Vuex from "vuex";

import shoppingCart from "./modules/shoppingCart";

Vue.use(Vuex);

// 建议在index.js里只用来组装模块,不要定义全局的state,getter,mutation,action
// 可参照官方文档: https://v3.vuex.vuejs.org/zh/guide/structure.html 的目录结构
export default new Vuex.Store({
  state: {
    username: "jinshuo",
    usermoney: 100,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
  },
  mutations: {
    changeMoney(state, payload) {
      state.usermoney += payload.money;
    },
  },
  actions: {
    changeMoney(context, payload) {
      context.commit("changeMoney", payload);
    },
    checkout({ commit, state, rootState }, payload) {
      console.log("全局作用域下的checkout被触发");
    },
  },
  modules: {
    shoppingCart,
  },
});
