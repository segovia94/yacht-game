import Vue from 'vue'
import Vuex from 'vuex'
import { nextPlayer, possibleScores } from '@/lib/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalRounds: 10,
    round: 1,
    diceRoll: [1, 2, 3, 4, 5],
    lockedDice: [],
    selectedDice: [],
    rollsRemaining: 3,
    showRules: false,
    currentPlayer: 'Player 1',
    // TODO: make players editable and possibly create a players class.
    players: {
      'Player 1': {},
      'Player 2': {},
      'Player 3': {}
    },
    possibleScores: {},
    showScoringOptions: false
  },

  mutations: {
    setDiceRoll(state, payload) {
      state.diceRoll = payload
    },

    decreaseRollsRemaining(state) {
      state.rollsRemaining--
    },

    toggleRules(state) {
      state.showRules = !state.showRules
    },

    selectDice(state, payload) {
      state.selectedDice.push(payload)
    },

    removeDice(state, payload) {
      state.selectedDice = state.selectedDice.filter(dice => dice !== payload)
    },

    lockDice(state) {
      state.lockedDice = [...state.lockedDice, ...state.selectedDice]
      state.selectedDice = []
    },

    updatePlayerScore(state, payload) {
      Vue.set(state.players[payload.player], payload.category, payload.score)
      state.possibleScores = {}
    },

    setPossibleScores(state) {
      state.possibleScores = possibleScores(state.players[state.currentPlayer], state.diceRoll)
    },

    showScoringOptions(state) {
      state.showScoringOptions = true
    },

    hideScoringOptions(state) {
      state.showScoringOptions = false
    },

    nextTurn(state) {
      // Advance to the next player.
      const next = nextPlayer(state.players, state.currentPlayer)
      state.currentPlayer = next

      // Increase the round if we are back to the first player.
      if (next === Object.keys(state.players)[0]) {
        state.round++
      }

      // Reset values.
      state.rollsRemaining = 3
      state.lockedDice = []
      state.selectedDice = []
    }
  }
})
