<template>
  <section class="gameboard">
    <DiceRow class="gameboard__dice" />
    <TheActions class="gameboard__actions" />
    <TheRules class="gameboard__rules" />
    <ScoreBoard class="gameboard__score-board" />
  </section>
</template>

<script>
import DiceRow from '@/components/DiceRow.vue'
import TheActions from '@/components/TheActions.vue'
import TheRules from '@/components/TheRules.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'

export default {
  name: 'GameBoard',
  components: {
    DiceRow,
    TheActions,
    TheRules,
    ScoreBoard
  }
}
</script>

<style scoped>
.gameboard {
  display: grid;
  row-gap: 1rem;
}

@media screen and (min-width: 930px) {
  .gameboard {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content 1fr;
    column-gap: 3rem;
    row-gap: 1.5rem;
  }
}

.gameboard__dice {
  grid-column: 1 / 2;
}

.gameboard__actions {
  grid-column: 1 / 2;
}

.gameboard__rules {
  grid-column: 1 / 2;
}

@media screen and (min-width: 930px) {
  .gameboard__score-board {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
  }
}
</style>
