<template>
  <button class="category-button" @click="updateScore">{{ score }}</button>
</template>

<script>
export default {
  name: "CategoryButton",

  props: {
    score: {
      type: Number,
      default: 0
    },
    player: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },

  methods: {
    updateScore() {
      this.$store.commit("updatePlayerScore", {
        score: this.score,
        player: this.player,
        category: this.category
      })
      this.$store.commit("hideScoringOptions");
      this.$store.commit("nextTurn");
    }
  },
};
</script>

<style>
.category-button {
  display: block;
  width: 100%;
  padding: 0.2rem 0;
  background-color: var(--red);
  border: 0;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  opacity: 1;
  animation-duration: 1s;
  animation-name: delay-visibility;
}

@keyframes delay-visibility {
  0% {
    opacity: 0;
  }

  70% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
