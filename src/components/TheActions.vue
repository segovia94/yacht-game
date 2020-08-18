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
import { mapState } from 'vuex'

export default {
  name: 'TheActions',

  computed: mapState(['diceRoll', 'lockedDice', 'rollsRemaining', 'showRules']),

  methods: {
    roll() {
      this.$store.commit('lockDice')

      const newRoll = []
      for (let i = 0; i < 5; i++) {
        // Use the old dice roll number if it has been locked.
        if (this.lockedDice.includes(i)) {
          newRoll.push(this.diceRoll[i])
        } else {
          const randomNum = Math.floor(Math.random() * 6) + 1
          newRoll.push(randomNum)
        }
      }

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

.game-actions__button:disabled {
  opacity: 0.25;
  cursor: initial;
}
</style>
