<template>
  <div class="dice-container">
    <DiceSingle
      v-for="(roll, index) in diceRoll"
      :key="index"
      :position="index"
      :side="roll"
      :locked="lockedDice.includes(index)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DiceSingle from '@/components/DiceSingle.vue'

export default {
  name: 'DiceRow',

  components: {
    DiceSingle
  },

  computed: mapState(['diceRoll', 'lockedDice'])
}
</script>

<style>
.dice-container {
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
}
</style>
