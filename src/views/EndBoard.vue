<template>
  <section class="endboard">
    <h1 v-if="tie">It's a Tie!</h1>
    <div v-else>
      <h1>{{ winner.name }} Wins!!!</h1>
      <h2>{{ winner.total }} points</h2>
    </div>

    <ul v-for="player in totals" :key="player.name" class="endboard__totals">
      <li>{{ player.name }}: {{ player.total }}</li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EndBoard',

  computed: {
    totals() {
      return Object.keys(this.players).map(person => {
        const values = Object.values(this.players[person])
        return {
          name: person,
          total: values.reduce((prev, current) => prev + current, 0)
        }
      })
    },

    winner() {
      return this.totals.reduce((prev, current) => {
        return current.total > prev.total ? current : prev
      })
    },

    tie() {
      const totals = this.totals.map(player => player.total)
      return (new Set(totals)).size !== totals.length;
    },

    ...mapState(['players'])
  }
}
</script>

<style scoped>
.endboard {
  text-align: center;
}

.endboard__totals {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
