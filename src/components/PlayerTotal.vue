<template>
  <div>{{ total }}</div>
</template>

<script>
import { sumTotal } from '@/lib/helpers'

export default {
  name: 'PlayerTotal',

  props: {
    player: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    total() {
      const scores = Object.values(this.player)
      return sumTotal(scores)
    }
  }
}
</script>
