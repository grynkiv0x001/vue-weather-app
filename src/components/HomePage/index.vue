<template>
  <div class="home">
    <h2 class="home__welcome">Welcome to vue-weather-app!!!</h2>
    <div class="home__weather">
      <div class="weather__city">
        {{ coords.latt + ', ' + coords.long }}
      </div>
      <div class="weather__info">
        <div class="weather__info-temp">{{ weather.name }}</div>
        <div class="weather__info-status"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    created() {
      const getWeather = setInterval(() => {
        if(!!Object.values(this.coords).filter(Boolean).length) {
          this.fetchData();
          clearInterval(getWeather);
        }
      })
    },
    computed: {
      coords() {
        return this.$store.getters.coords;
      },
      weather() {
        return this.$store.getters.weather;
      }
    },
    methods: {
      async fetchData() {
        await this.$store.dispatch('fetchWeather');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./HomePage.scss";
</style>
