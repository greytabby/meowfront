import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import auth from './auth'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    auth
  },
  strict: true,
  plugins: [createPersistedState({
    key: "meow",
    paths: ['auth.token'],
    storage: window.sessionStorage
  })]
})
