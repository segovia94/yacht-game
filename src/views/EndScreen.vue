<template>
  <section class="endscreen">
    <div>
      <h1 v-if="tie" class="endscreen__title">It's a Tie!</h1>
      <div v-else>
        <h1 class="endscreen__title">{{ winner.name }} Wins!!!</h1>
        <h2 class="endscreen__score">{{ winner.total }} points</h2>
      </div>

      <ul class="endscreen__totals">
        <li v-for="player in totals" :key="player.name">
          {{ player.name }}: {{ player.total }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { playerTotals } from '@/lib/helpers'
import { mapState } from 'vuex'

export default {
  name: 'EndScreen',

  computed: {
    totals() {
      return playerTotals(this.players)
    },

    winner() {
      return this.totals.reduce((prev, current) => {
        return current.total > prev.total ? current : prev
      })
    },

    tie() {
      const totals = this.totals
        .map(player => player.total)
        .sort()
        .reverse()
      return totals[0] === totals[1]
    },

    ...mapState(['players'])
  }
}
</script>

<style scoped>
.endscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgba(0, 15, 2, 0.9);
  font-size: 2rem;
  text-align: center;
  backdrop-filter: blur(4px);
}

.endscreen__title {
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
}

.endscreen__score {
  margin-top: 0;
  font-size: 1.5rem;
}

.endscreen__totals {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
}
</style>
