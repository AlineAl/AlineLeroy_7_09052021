<template>
  <div id="app">
    <Articles />
  </div>
</template>

<script>
import Articles from './components/Articles';

export default {
  name: 'App',
  components: {
    Articles
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
