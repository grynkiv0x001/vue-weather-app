<template>
  <div id="app">
    <h1>Hello, World!</h1>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      console.log('ENV VAR: ', process.env.VUE_APP_API_KEY);
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
