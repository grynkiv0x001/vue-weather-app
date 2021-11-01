<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
  import HomePage from './components/HomePage';

  export default {
    name: 'App',
    components: {
      HomePage,
    },
    created() {
      this.fetchData();
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
