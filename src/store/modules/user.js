export default {
  state: {
    coords: {
      latt: '',
      long: '',
    },
  },
  actions: {
    fetchLocation(context) {
      try {
        navigator.geolocation?.getCurrentPosition((position) => {
          const coords = {
            latt: position?.coords?.latitude,
            long: position?.coords?.longitude,
          };

          context.commit('setCoords', coords)
        });
      } catch (error) {
        console.log(error);
        this.fetchLocation();
      }
    },
  },
  mutations: {
    setCoords(state, coords) {
      state.coords = coords;
    },
  },
  getters: {
    coords(state) {
      return state.coords;
    },
  },
};
