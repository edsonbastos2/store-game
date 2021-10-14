import { createStore } from "vuex";
import { api } from '@/services/api.js'

export default createStore({
  state: {
    users:[]
  },
  mutations: {
    SET_USERS(state, payload){
      state.users = payload
    }
  },
  actions: {
    async getUsers(context){
      const {data} = await api.get('/usuario')
      context.commit('SET_USERS', data)
    }
  },
  getters:{
    $allUsers(state){
      return state.users
    }
  }
});
