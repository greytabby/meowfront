import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import { router } from './router'
import { store } from './store/index.js'
import { config } from './config'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  axios,
  config,
  render: h => h(App)
}).$mount('#app')
