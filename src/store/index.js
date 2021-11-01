import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';

// Use Vuex before initializing store
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  },
  modules: {
    user
  }
});
