<template>
  <button class="category-button">{{ score }}</button>
</template>

<script>
export default {
  name: "CategoryButton",

  props: {
    score: {
      type: Number,
      default: 0,
    },
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
}
</style>
