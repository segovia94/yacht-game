import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    diceRoll: [1, 2, 3, 4, 5],
    rollsRemaining: 3
  },

  mutations: {
    setDiceRoll(state, payload) {
      state.diceRoll = payload;
    },

    decreaseRollsRemaining(state) {
      state.rollsRemaining--;
    },

    resetRollsRemaining(state) {
      state.rollsRemaining = 3;
    }
  },

  actions: {},

  modules: {}
});
