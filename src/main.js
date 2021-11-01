import Vue from 'vue';

// Store
import { store } from './store';

// Components
import App from './App.vue';

// TODO: find out about this config?
Vue.config.productionTip = false;

new Vue({
  store, // Use App Store
  render: (h) => h(App),
}).$mount('#app');
