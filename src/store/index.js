import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import user from './modules/user';
import weather from './modules/weather';

// Use Vuex before initializing store
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  },
  modules: {
    user,
    weather,
  }
});
