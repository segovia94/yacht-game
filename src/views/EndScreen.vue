<template>
  <section class="endscreen">
    <div>
      <h1 v-if="tie" class="endscreen__title">It's a Tie!</h1>
      <div v-else>
        <h1 class="endscreen__title">{{ winner.name }} Wins!!!</h1>
        <h2>{{ winner.total }} points</h2>
      </div>

      <ul v-for="player in totals" :key="player.name" class="endscreen__totals">
        <li>{{ player.name }}: {{ player.total }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EndScreen',

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
}

.endscreen__title {
  margin-top: 0;
  line-height: 1;
  text-transform: uppercase;
}

.endscreen__totals {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
