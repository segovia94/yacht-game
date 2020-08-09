<template>
  <table class="scoreboard">
    <thead class="scoreboard__head">
      <tr>
        <th class="scoreboard__round">Round {{ round }}</th>
        <th v-for="(score, name) in players" :key="name">
          <span class="scoreboard__name">{{ name }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(category, categoryKey) in categories" :key="categoryKey">
        <td>{{ category }}</td>
        <td
          v-for="(score, name) in players"
          :key="name"
          :class="{ 'has-button': score[categoryKey] }"
        >
          <CategoryButton
            :score="score[categoryKey]"
            v-if="score[categoryKey] && categoryKey === 'threes'"
          />
          <div v-else>{{ score[categoryKey] }}</div>
        </td>
      </tr>
    </tbody>
    <tfoot class="scoreboard__total">
      <tr>
        <td>Total</td>
        <td v-for="(score, name) in players" :key="name">
          <playerTotal :player="score" />
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { mapState } from "vuex";
import playerTotal from "@/components/PlayerTotal";
import CategoryButton from "@/components/CategoryButton";

export default {
  name: "ScoreBoard",

  components: {
    playerTotal,
    CategoryButton,
  },

  data() {
    return {
      categories: {
        ones: "Ones",
        twos: "Twos",
        threes: "Threes",
        fours: "Fours",
        fives: "Fives",
        sixes: "Sixes",
        "full house": "Full House",
        "four of a kind": "Four-of-a-Kind",
        "little straight": "Little Straight",
        "big straight": "Big Straight",
        choice: "Choice",
        yacht: "Yacht",
      },
    };
  },

  computed: mapState(["round", "players"]),
};
</script>

<style>
.scoreboard {
  border-collapse: collapse;
  background-color: white;
  color: black;
}

.scoreboard td {
  padding: 0 1rem;
  border-top: 1px solid black;
  text-align: center;
}

.scoreboard td + td {
  border-left: 1px solid black;
}

.scoreboard td:first-child {
  text-align: left;
}

.scoreboard__round {
  padding-left: 1rem;
  text-align: left;
}

.scoreboard__name {
  transform: rotate(208deg);
  writing-mode: vertical-lr;
}

.scoreboard__total {
  background-color: #712600;
  color: white;
  font-weight: bold;
}

.scoreboard .has-button {
  padding: 0 0.25rem;
}
</style>
