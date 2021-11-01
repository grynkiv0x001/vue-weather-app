export default {
  state: {
    weather: {},
  },
  actions: {
    async fetchWeather({commit, rootGetters}) {
      try {
        const url = process.env.VUE_APP_API_URL;
        const api = process.env.VUE_APP_API_KEY;
        const { latt, long } = { ...rootGetters.coords };

        const request = `${url}lat=${latt}&lon=${long}&appid=${api}&units=metric`;

        const res = await fetch(request);
        const json = await res.json();

        commit('updateWeather', json);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    updateWeather(state, weather) {
      state.weather = weather;
    },
  },
  getters: {
    weather(state) {
      return state.weather;
    },
  }
};
