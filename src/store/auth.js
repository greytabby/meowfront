const state = {
  token: ''
}

const mutations = {
  login (state, token) {
    state.token = token
  },
  logout (state) {
    state.token = null
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
