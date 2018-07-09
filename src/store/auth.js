const state = {
  ready: false,
  authenticated: false,
  user: null
}
const actions = {
  login (context, payload) {
    context.commit('login', payload)
    context.commit('authenticate')
  },
  logout (context) {
    context.commit('logout')
  },
  ready (context) {
    context.commit('ready')
  }
}
const mutations = {
  login (state, payload) {
    state.user = payload
  },
  logout (state) {
    state.user = null
    state.authenticated = false
    state.ready = false
  },
  authenticate (state) {
    state.authenticated = true
  },
  ready (state) {
    state.ready = true
  }
}

const auth = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default auth
