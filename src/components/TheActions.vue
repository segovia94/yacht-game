<template>
  <div class="game-actions">
    <div>
      <div v-if="rollsRemaining">
        {{ rollsRemaining }} Roll<span v-if="rollsRemaining !== 1">s</span> left
      </div>
      <div v-else>
        Choose a point category
      </div>
      <button @click="toggleRules" class="game-actions__toggle-rules">
        <span v-if="!showRules">Show</span><span v-else>Hide</span> Rules
      </button>
    </div>

    <button
      :disabled="!rollsRemaining"
      @click="roll"
      class="game-actions__button"
    >
      Roll
    </button>
  </div>
</template>

<script>
import { rollDice } from '@/lib/helpers'
import { mapState } from 'vuex'

export default {
  name: 'TheActions',

  computed: mapState(['diceRoll', 'lockedDice', 'rollsRemaining', 'showRules']),

  methods: {
    roll() {
      this.$store.commit('lockDice')

      // Roll the dice.
      const newRoll = rollDice(this.lockedDice, this.diceRoll)

      this.$store.commit('setDiceRoll', newRoll)
      this.$store.commit('setPossibleScores')
      this.$store.commit('decreaseRollsRemaining')
      this.$store.commit('showScoringOptions')
    },

    toggleRules() {
      this.$store.commit('toggleRules')
    }
  }
}
</script>

<style>
.game-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.game-actions__toggle-rules {
  padding: 0.25rem 1rem;
  background: #408f3b;
  border: none;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
}

@media screen and (min-width: 930px) {
  .game-actions__toggle-rules {
    display: none;
  }
}

.game-actions__button {
  padding: 0.5rem 4rem;
  background: var(--red-dark);
  border: none;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  text-transform: uppercase;
  cursor: pointer;
}

.game-actions__button:hover,
.game-actions__button:focus {
  box-shadow: 0 0 0 .125rem var(--red);
  opacity: .9;
  outline-style: solid;
  outline-color: transparent;
}

.game-actions__button:disabled,
.game-actions__button:disabled:focus,
.game-actions__button:disabled:hover {
  opacity: 0.25;
  cursor: initial;
  box-shadow: none;
}
</style>
