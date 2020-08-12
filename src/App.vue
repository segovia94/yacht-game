<template>
  <div class="app">
    <GameBoard />
  </div>
</template>

<script>
import GameBoard from '@/views/GameBoard'

export default {
  name: 'App',
  components: {
    GameBoard
  }
}
</script>

<style>
:root {
  --green: #076d00;
  --red: #ff0000;
  --red-dark: #c40101;
  --yellow: #f7ff00;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  background-color: var(--green);
  font-size: 16px;
}

@media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
}

@media screen and (min-width: 1920px) {
  html {
    font-size: 36px;
  }
}

body {
  margin: 1rem;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  line-height: 1.6;
  font-size: 1rem;
}

@media screen and (min-width: 930px) {
  body {
    margin: 2rem;
  }
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
