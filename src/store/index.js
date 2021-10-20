import { createStore } from "vuex";
import { api } from '@/services/api.js'

export default createStore({
  state: {
    users:[],
    user: {},
    login:false
  },
  mutations: {

    SET_USERS(state, payload){
      state.users = payload
    },

    UPDATE_LOGIN(state, payload){
      state.login = payload
    },

    UPDATE_USER(state, payload){
      state.user = payload
    }
  },
  actions: {
    async getUsers(context){
      const {data} = await api.get('/usuario')
      context.commit('SET_USERS', data)
    },

    async show(context, payload){
      const {data} = await api.get(`/usuario/${payload}`)
      context.commit('UPDATE_USER', data)
      context.commit('UPDATE_LOGIN', true)
    }
  },
  getters:{
    $allUsers(state){
      return state.users
    },
    $single(state){
      return state.user
    }
  }
});
