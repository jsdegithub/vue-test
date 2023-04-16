import axios from "axios";

export default {
  namespaced: true,
  state: {
    loading: false,
    error: null,
    orderData: {},
  },
  getters: {
    username: (state, getters, rootState) => {
      return rootState.username;
    },
  },
  mutations: {
    CHECKOUT_REQUEST(state) {
      state.loading = true;
      state.error = null;
    },
    CHECKOUT_SUCCESS(state, payload) {
      state.loading = false;
      state.error = null;
      state.orderData = payload.data;
    },
    CHECKOUT_FAILURE(state, error) {
      state.loading = false;
      state.error = error;
    },
  },
  actions: {
    async checkout({ commit, state, rootState }) {
      console.log("shoppingCart模块下的checkout被触发");
      console.log("在vuex的shoppingCart模块中打印state: ", state);
      console.log("在vuex的shoppingCart模块中打印rootState: ", rootState);
      const getOrderRes = async () => {
        const response = await axios.get("./mock/mockData.js");
        return response;
      };
      commit("CHECKOUT_REQUEST");
      try {
        const { data } = await getOrderRes();
        commit("CHECKOUT_SUCCESS", {
          data,
        });
      } catch (error) {
        commit("CHECKOUT_FAILURE", error.message);
      }
    },
  },
};
