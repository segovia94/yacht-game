<template>
  <div
    class="dice dice--numbers"
    :class="{ 'dice--locked': locked, 'dice--selected': selected }"
  >
    <button v-if="clickable" class="dice__toggle" @click="toggleLock">
      {{ side }}
    </button>
    <div class="cube" :data-show="side">
      <div class="cube__face cube__face--1">1</div>
      <div class="cube__face cube__face--6">6</div>
      <div class="cube__face cube__face--2">2</div>
      <div class="cube__face cube__face--5">5</div>
      <div class="cube__face cube__face--3">3</div>
      <div class="cube__face cube__face--4">4</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SingleDice',

  props: {
    position: {
      type: Number,
      default: 0
    },
    side: {
      type: Number,
      default: 1
    },
    locked: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    selected() {
      return this.selectedDice.includes(this.position)
    },
    clickable() {
      return !this.locked && this.rollsRemaining > 0 && this.rollsRemaining < 3
    },
    ...mapState(['selectedDice', 'rollsRemaining'])
  },

  methods: {
    toggleLock() {
      if (this.selected) {
        this.$store.commit('removeDiceFromSelected', this.position)
      } else {
        this.$store.commit('selectDice', this.position)
      }
    }
  }
}
</script>

<style>
.dice {
  --dice-size: clamp(3rem, 15vw, 6rem);
  --dice-size-half: calc(var(--dice-size) / 2);
  --dice-size-half-negative: calc(var(--dice-size-half) * -1);
  perspective: 400px;
  position: relative;
  padding: 0.2rem;
  border-radius: 5%;
}

@media screen and (min-width: 930px) {
  .dice {
    --dice-size: 3.5rem;
  }
}

.dice--selected {
  background-color: var(--yellow);
}

.dice--locked {
  background-color: var(--red);
}

.dice__toggle {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  border: 0;
  background: transparent;
  cursor: pointer;
  opacity: 0;
}

.cube {
  position: relative;
  width: var(--dice-size);
  height: var(--dice-size);
  transform-style: preserve-3d;
  transform: translateZ(-(var(--dice-size-half)));
  transition: transform 1s;
}

[data-show='1'] {
  transform: translateZ(var(--dice-size-half-negative)) rotateY(0deg);
}
[data-show='2'] {
  transform: translateZ(var(--dice-size-half-negative)) rotateY(-90deg);
}
[data-show='6'] {
  transform: translateZ(var(--dice-size-half-negative)) rotateY(-180deg);
}
[data-show='5'] {
  transform: translateZ(var(--dice-size-half-negative)) rotateY(90deg);
}
[data-show='3'] {
  transform: translateZ(var(--dice-size-half-negative)) rotateX(-90deg);
}
[data-show='4'] {
  transform: translateZ(var(--dice-size-half-negative)) rotateX(90deg);
}

.cube__face {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  background-size: cover;
  border: 0.05em solid black;
  border-radius: 5%;
  font-size: 2.75em;
  text-indent: -9999px;
}

.cube__face--1 {
  background-image: url('~@/assets/dice-1.svg');
  transform: rotateY(0deg) translateZ(var(--dice-size-half));
}
.cube__face--2 {
  background-image: url('~@/assets/dice-2.svg');
  transform: rotateY(90deg) translateZ(var(--dice-size-half));
}
.cube__face--6 {
  background-image: url('~@/assets/dice-6.svg');
  transform: rotateY(180deg) translateZ(var(--dice-size-half));
}
.cube__face--5 {
  background-image: url('~@/assets/dice-5.svg');
  transform: rotateY(-90deg) translateZ(var(--dice-size-half));
}
.cube__face--3 {
  background-image: url('~@/assets/dice-3.svg');
  transform: rotateX(90deg) translateZ(var(--dice-size-half));
}
.cube__face--4 {
  background-image: url('~@/assets/dice-4.svg');
  transform: rotateX(-90deg) translateZ(var(--dice-size-half));
}

/* Optionally show numbers instead of dice graphics */
.dice--numbers .cube__face {
  background-image: radial-gradient(#fff, #fff 50%, #eee);
  color: black;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  text-indent: initial;
}
</style>
