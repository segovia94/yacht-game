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
    currentPlayer: "Player 1",
    // TODO: make players editable and possibly create a players class.
    players: {
      "Player 1": {
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
      "Player 2": {
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
      "Player 3": {
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
    },
    possibleScores: {
      ones: null,
      twos: null,
      threes: null,
      fours: null,
      fives: 25,
      sixes: null,
      "full house": 4,
      "four of a kind": null,
      "little straight": null,
      "big straight": null,
      choice: null,
      yacht: null
    },
    showScoringOptions: false
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
      state.selectedDice = new Set(state.selectedDice.add(payload));
    },

    removeDice(state, payload) {
      state.selectedDice = new Set(state.selectedDice.delete(payload));
    },

    lockDice(state) {
      state.lockedDice = new Set([...state.lockedDice, ...state.selectedDice]);
      state.selectedDice.clear();
    },

    updatePlayerScore(state, payload) {
      state.players[payload.player][payload.category] = payload.score;
      state.possibleScores = {}
    },

    showScoringOptions(state) {
      state.showScoringOptions = true;
    },

    hideScoringOptions(state) {
      state.showScoringOptions = false;
    },

    nextTurn(state) {
      const players = Object.keys(state.players);
      let next = players.indexOf(state.currentPlayer) + 1;
      let nextPlayer;

      if (players[next]) {
        nextPlayer = players[next];
      } else {
        nextPlayer = players[0];
        state.round++;
      }

      state.rollsRemaining = 3;
      state.currentPlayer = nextPlayer;
      state.lockedDice = new Set();
      state.selectedDice = new Set();
    },
  }
});
