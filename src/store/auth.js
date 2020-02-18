import { authService } from '../services/auth.service'
import { router } from '../router'

const state = {
  token: '',
  status: null
}

const actions = {
  login({ commit }, { username, password }) {
    authService.login(username, password)
      .then(
        token => {
          commit('loginSuccess', token)
          router.push('/')
        }
      )
  },
  logout({ commit }) {
    commit('logout')
  },
  signup({ commit }, { username, password }) {
    const user = authService.signup(username, password)
    commit('signupSuccess', user)
  }
}

const mutations = {
  loginRequest(state) {
    state.status = { loggingIn: true }
  },
  loginSuccess (state, token) {
    state.token = token
  },
  logout (state) {
    state.token = null
  },
  signupSuccess (state, user) {
    state.stasus  = { signuped: true, user: user }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
