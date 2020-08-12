<template>
  <div>{{ total }}</div>
</template>

<script>
export default {
  name: "PlayerTotal",

  props: {
    player: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    total() {
      const values = Object.values(this.player);
      return values.reduce((prev, current) => prev + current, 0);
    }
  }
};
</script>
