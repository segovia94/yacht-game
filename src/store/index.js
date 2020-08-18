import Vue from 'vue'
import Vuex from 'vuex'
import { categories } from '@/lib/categories'
import { score } from '@/lib/score-engine'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalRounds: 1,
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
    increaseRound(state) {
      state.round++
    },

    resetRounds(state) {
      state.round = 1
    },

    setDiceRoll(state, payload) {
      state.diceRoll = payload
    },

    decreaseRollsRemaining(state) {
      state.rollsRemaining--
    },

    resetRollsRemaining(state) {
      state.rollsRemaining = 3
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
      state.possibleScores = {}
      categories.forEach(cat => {
        if (state.players[state.currentPlayer][cat] === undefined) {
          // Freeze the diceRoll so it doesn't get mutated by a sort.
          const possibleScore = score([...state.diceRoll], cat)
          if (possibleScore !== 0) {
            state.possibleScores[cat] = possibleScore
          }
        }
      })

      if (Object.keys(state.possibleScores).length === 0) {
        categories.forEach(cat => {
          if (state.players[state.currentPlayer][cat] === null) {
            state.possibleScores[cat] = 0
          }
        })
      }
    },

    showScoringOptions(state) {
      state.showScoringOptions = true
    },

    hideScoringOptions(state) {
      state.showScoringOptions = false
    },

    nextTurn(state) {
      const players = Object.keys(state.players)
      let next = players.indexOf(state.currentPlayer) + 1
      let nextPlayer

      if (players[next]) {
        nextPlayer = players[next]
      } else {
        nextPlayer = players[0]
        state.round++
      }

      state.rollsRemaining = 3
      state.currentPlayer = nextPlayer
      state.lockedDice = []
      state.selectedDice = []
    }
  }
})
