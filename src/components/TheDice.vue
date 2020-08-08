<template>
  <div class="dice-container">
    <SingleDice v-for="(roll, index) in rolls" :key="index" :side="roll" />
    <button @click="roll">Roll (temporary)</button>
  </div>
</template>

<script>
import SingleDice from "@/components/SingleDice";

export default {
  name: "TheDice",

  components: {
    SingleDice
  },

  data() {
    return {
      rolls: [2, 3, 4, 1, 2]
    };
  },

  methods: {
    roll() {
      this.rolls.length = 0;
      for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        this.rolls.push(randomNum);
      }
    }
  }
};
</script>

<style>
.dice-container {
  display: flex;
  justify-content: space-between;
}
</style>
