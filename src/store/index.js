import Vue from 'vue'
import Vuex from 'vuex'
import { nextPlayer, possibleScores, rollDice } from '@/lib/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalRounds: 2,
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
    toggleRules(state) {
      state.showRules = !state.showRules
    },

    selectDice(state, payload) {
      state.selectedDice.push(payload)
    },

    removeDiceFromSelected(state, payload) {
      state.selectedDice = state.selectedDice.filter(dice => dice !== payload)
    },

    rollDice(state) {
      // Lock any selected dice before rolling.
      state.lockedDice = [...state.lockedDice, ...state.selectedDice]
      state.selectedDice = []

      // Roll the dice.
      state.diceRoll = rollDice(state.lockedDice, state.diceRoll)

      // Reduce the number of rolls remaining.
      state.rollsRemaining--
      
      // Create the possible scores for each category and reveal them.
      state.possibleScores = possibleScores(state.players[state.currentPlayer], state.diceRoll)
      state.showScoringOptions = true
    },

    updatePlayerScore(state, payload) {
      Vue.set(state.players[payload.player], payload.category, payload.score)
      state.possibleScores = {}
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
      state.showScoringOptions = false
    }
  }
})
