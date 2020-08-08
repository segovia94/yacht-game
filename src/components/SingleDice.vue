<template>
  <div class="dice">
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
export default {
  name: "SingleDice",

  props: {
    side: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style>
.dice {
  --dice-size: 3.5rem;
  --dice-size-half: calc(var(--dice-size) / 2);
  --dice-size-half-negative: calc(var(--dice-size-half) * -1);
  perspective: 400px;
}

.cube {
  position: relative;
  width: var(--dice-size);
  height: var(--dice-size);
  transform-style: preserve-3d;
  transform: translateZ(-(var(--dice-size-half)));
  transition: transform 1s;
}

[data-show="1"] {
  transform: translateZ(var(--dice-size-half-negative)) rotateY(0deg);
}
[data-show="2"] {
  transform: translateZ(var(--dice-size-half-negative)) rotateY(-90deg);
}
[data-show="6"] {
  transform: translateZ(var(--dice-size-half-negative)) rotateY(-180deg);
}
[data-show="5"] {
  transform: translateZ(var(--dice-size-half-negative)) rotateY(90deg);
}
[data-show="3"] {
  transform: translateZ(var(--dice-size-half-negative)) rotateX(-90deg);
}
[data-show="4"] {
  transform: translateZ(var(--dice-size-half-negative)) rotateX(90deg);
}

.cube__face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(#fff, #fff 50%, #eee);
  border: 0.05em solid black;
  border-radius: 5%;
  color: black;
  font-size: 2.75em;
  font-weight: bold;
  text-align: center;
  line-height: 1;
}

.cube__face--1 {
  transform: rotateY(0deg) translateZ(var(--dice-size-half));
}
.cube__face--2 {
  transform: rotateY(90deg) translateZ(var(--dice-size-half));
}
.cube__face--6 {
  transform: rotateY(180deg) translateZ(var(--dice-size-half));
}
.cube__face--5 {
  transform: rotateY(-90deg) translateZ(var(--dice-size-half));
}
.cube__face--3 {
  transform: rotateX(90deg) translateZ(var(--dice-size-half));
}
.cube__face--4 {
  transform: rotateX(-90deg) translateZ(var(--dice-size-half));
}
</style>
