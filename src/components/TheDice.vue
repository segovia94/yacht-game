<template>
  <div class="dice-container">
    <SingleDice v-for="(roll, index) in diceRoll" :key="index" :side="roll" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SingleDice from "@/components/SingleDice";

export default {
  name: "TheDice",

  components: {
    SingleDice,
  },

  computed: mapState(["diceRoll"]),
};
</script>

<style>
.dice-container {
  display: flex;
  justify-content: space-between;
}
</style>
