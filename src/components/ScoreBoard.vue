<template>
  <table class="scoreboard">
    <thead class="scoreboard__head">
      <tr>
        <th class="scoreboard__round">Round {{ round }}</th>
        <th
          v-for="(score, name) in players"
          :key="name"
          :class="{ 'scoreboard__current-player': name === currentPlayer }"
        >
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
          :class="{
            'has-button': name === currentPlayer && possibleScores[categoryKey],
            'scoreboard__current-player': name === currentPlayer
          }"
        >
          <CategoryButton
            :score="possibleScores[categoryKey]"
            :player="currentPlayer"
            :category="categoryKey"
            v-if="
              showScoringOptions &&
                name === currentPlayer &&
                possibleScores[categoryKey]
            "
          />
          <CategoryButton
            :score="0"
            :player="currentPlayer"
            :category="categoryKey"
            v-else-if="
              showScoringOptions &&
                name === currentPlayer &&
                noScoresPossible &&
                !score[categoryKey] &&
                score[categoryKey] !== 0
            "
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
import { categoriesLabeled, calculateTotal } from '@/lib/helpers'
import { mapState } from 'vuex'
import playerTotal from '@/components/PlayerTotal'
import CategoryButton from '@/components/CategoryButton'

export default {
  name: 'ScoreBoard',

  components: {
    playerTotal,
    CategoryButton
  },

  data() {
    return {
      categories: categoriesLabeled
    }
  },

  computed: {
    noScoresPossible() {
      const scores = Object.values(this.possibleScores)
      const total = calculateTotal(scores)

      return total === 0
    },
    ...mapState([
      'round',
      'players',
      'currentPlayer',
      'possibleScores',
      'showScoringOptions'
    ])
  }
}
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

.scoreboard__current-player {
  background-color: #fdffbd;
  transition: background-color 1s;
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
