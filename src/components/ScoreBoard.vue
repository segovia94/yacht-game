<template>
  <table class="scoreboard">
    <thead class="scoreboard__head">
      <tr>
        <th class="scoreboard__round">Round 1</th>
        <th><span class="scoreboard__name">John</span></th>
        <th><span class="scoreboard__name">Doe</span></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(category, key) in categories" :key="key">
        <td>{{ category }}</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
    <tfoot class="scoreboard__total">
      <tr>
        <td>Total</td>
        <td>300</td>
        <td>0</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "ScoreBoard",

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
</style>
