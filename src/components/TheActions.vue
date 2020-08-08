<template>
  <div class="game-actions">
    <div>{{ rollsRemaining }} Rolls left</div>
    <button v-if="rollsRemaining" @click="roll">Roll</button>
    <div v-else>
      Choose a point category
    </div>
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
}
</style>
