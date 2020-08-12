<template>
  <button
    class="category-button"
    :class="{ 'category-button--pulse': rollsRemaining < 1 }"
    @click="updateScore"
  >
    {{ score }}
  </button>
</template>

<script>
import { mapState } from "vuex";

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

  computed: mapState(["rollsRemaining"]),

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
  animation: 1s delay-visibility;
}

.category-button--pulse {
  animation: 1s pulse 3 ease-in-out;
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

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
