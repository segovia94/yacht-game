<template>
  <div class="dice-face">
    <div class="visually-hidden"><slot /></div>
    <template v-if="side == 1">
      <div class="spot spot-center"></div>
    </template>
    <template v-if="side == 2">
      <div class="spot spot-tl"></div>
      <div class="spot spot-br"></div>
    </template>
    <template v-if="side == 3">
      <div class="spot spot-tl"></div>
      <div class="spot spot-center"></div>
      <div class="spot spot-br"></div>
    </template>
    <template v-if="side == 4">
      <div class="spot spot-tl"></div>
      <div class="spot spot-tr"></div>
      <div class="spot spot-bl"></div>
      <div class="spot spot-br"></div>
    </template>
    <template v-if="side == 5">
      <div class="spot spot-tl"></div>
      <div class="spot spot-tr"></div>
      <div class="spot spot-center"></div>
      <div class="spot spot-bl"></div>
      <div class="spot spot-br"></div>
    </template>
    <template v-if="side == 6">
      <div class="spot spot-tl"></div>
      <div class="spot spot-tr"></div>
      <div class="spot spot-ml"></div>
      <div class="spot spot-mr"></div>
      <div class="spot spot-bl"></div>
      <div class="spot spot-br"></div>
    </template>  
  </div>
</template>

<script>
export default {
  name: 'DiceFace',

  props: {
    side: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style>
.dice-face {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  background-image: radial-gradient(#fff, #fff 50%, #eee);
}

.spot {
  background: black;
  border-radius: 50%;
  transform: scale(1.3);
}

.spot-tl {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.spot-tr {
  grid-column: 6 / 7;
  grid-row: 2 / 3;
}

.spot-ml {
  grid-column: 2 / 3;
  grid-row: 4 / 5;
}

.spot-mr {
  grid-column: 6 / 7;
  grid-row: 4 / 5;
}

.spot-bl {
  grid-column: 2 / 3;
  grid-row: 6 / 7;
}

.spot-br {
  grid-column: 6 / 7;
  grid-row: 6 / 7;
}

.spot-center {
  grid-column: 4 / 5;
  grid-row: 4 / 5;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
