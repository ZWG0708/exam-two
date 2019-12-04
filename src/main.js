import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/App.scss';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
Vue.component('Header',Header);
Vue.component('Footer',Footer);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
