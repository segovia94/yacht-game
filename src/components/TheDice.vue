<template>
  <div class="dice-container">
    <SingleDice
      v-for="(roll, index) in diceRoll"
      :key="index"
      :position="index"
      :side="roll"
      :locked="lockedDice.has(index)"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SingleDice from "@/components/SingleDice";

export default {
  name: "TheDice",

  components: {
    SingleDice
  },

  computed: mapState(["diceRoll", "lockedDice"])
};
</script>

<style>
.dice-container {
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
}
</style>
