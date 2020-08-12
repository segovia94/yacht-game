import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    round: 1,
    diceRoll: [1, 2, 3, 4, 5],
    lockedDice: new Set(),
    selectedDice: new Set(),
    rollsRemaining: 3,
    showRules: false,
    currentPlayer: "",
    // TODO: make players editable and possibly create a players class.
    players: {
      John: {
        ones: 3,
        twos: null,
        threes: null,
        fours: null,
        fives: null,
        sixes: null,
        "full house": null,
        "four of a kind": null,
        "little straight": null,
        "big straight": null,
        choice: null,
        yacht: null
      },
      Jane: {
        ones: null,
        twos: null,
        threes: 12,
        fours: null,
        fives: null,
        sixes: 6,
        "full house": null,
        "four of a kind": null,
        "little straight": null,
        "big straight": null,
        choice: null,
        yacht: null
      },
      FooBar: {
        ones: null,
        twos: null,
        threes: null,
        fours: null,
        fives: null,
        sixes: null,
        "full house": null,
        "four of a kind": null,
        "little straight": null,
        "big straight": null,
        choice: null,
        yacht: null
      }
    }
  },

  mutations: {
    increaseRound(state) {
      state.round++;
    },

    resetRounds(state) {
      state.round = 1;
    },

    setDiceRoll(state, payload) {
      state.diceRoll = payload;
    },

    decreaseRollsRemaining(state) {
      state.rollsRemaining--;
    },

    resetRollsRemaining(state) {
      state.rollsRemaining = 3;
    },

    toggleRules(state) {
      state.showRules = !state.showRules;
    },

    selectDice(state, payload) {
      state.selectedDice.add(payload);
    },

    removeDice(state, payload) {
      state.selectedDice.delete(payload);
    },

    lockDice(state) {
      state.lockedDice = new Set([...state.lockedDice, ...state.selectedDice]);
      state.selectedDice.clear();
    }
  },

  actions: {},

  modules: {}
});
