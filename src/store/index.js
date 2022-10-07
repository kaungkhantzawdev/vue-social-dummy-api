import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: null,
    user: null,
    posts: null
  },
  getters: {
  },
  mutations: {
    setAuth(state, auth){
      state.auth = auth
    },
    setUser(state, user){
      state.user = user
    },
    removeToken(state){
      state.auth = null
      state.user = null
      localStorage.removeItem('auth')
      localStorage.removeItem('user')
    },

    setPosts(state, posts){
      state.posts = posts
    }
  },
  actions: {
    setAuthToken({commit}, auth){
      commit('setAuth', auth)
    },
    setUserDetail({commit}, user){
      commit('setUser', user)
    },
    setRemoveToken({commit}){
      commit('removeToken')
    },
    setAllPosts({commit}, posts){
      commit('setPosts', posts)
    }
  },
  modules: {
  },
})
