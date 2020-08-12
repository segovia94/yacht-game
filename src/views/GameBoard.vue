<template>
  <section class="gameboard">
    <TheDice class="gameboard__dice" />
    <TheActions class="gameboard__actions" />
    <TheRules class="gameboard__rules" />
    <ScoreBoard class="gameboard__score-board" />
  </section>
</template>

<script>
import TheDice from '@/components/TheDice'
import TheActions from '@/components/TheActions'
import TheRules from '@/components/TheRules'
import ScoreBoard from '@/components/ScoreBoard'

export default {
  name: 'GameBoard',
  components: {
    TheDice,
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
