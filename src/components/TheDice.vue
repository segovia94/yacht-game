<template>
  <div class="dice-container">
    <div>dice</div>
    <div>dice</div>
    <div>dice</div>
    <div>dice</div>
    <div>dice</div>
  </div>
</template>

<script>
export default {
  name: "TheDice"
};
</script>

<style>
.dice-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
}
</style>
