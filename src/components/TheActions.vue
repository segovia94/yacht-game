<template>
  <div class="game-actions">
    <div v-if="rollsRemaining">
      {{ rollsRemaining }} Roll<span v-if="rollsRemaining !== 1">s</span> left
    </div>
    <div v-else>
      Choose a point category
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
import { mapState } from "vuex";

export default {
  name: "TheActions",

  computed: mapState(["rollsRemaining"]),

  methods: {
    roll() {
      const newRoll = [];
      for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        newRoll.push(randomNum);
      }
      this.$store.commit("setDiceRoll", newRoll);
      this.$store.commit("decreaseRollsRemaining");
    },
  },
};
</script>

<style>
.game-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
