<template>
  <div id="app">
    <h1>Vue Weather App</h1>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.fetchData();
    },
    updated() {
      console.log('Coords: ', this.coords);
    },
    computed: {
      coords() {
        return this.$store.getters.coords;
      },
    },
    methods: {
      async fetchData() {
        await this.$store.dispatch('fetchLocation');
      },
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
