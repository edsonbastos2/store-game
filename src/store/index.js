import { createStore } from "vuex";
import { api } from '@/services/api.js'

export default createStore({
  strict:true,

  state: {
    users:[],
    user:{
      id:"",
      email: "",
      nome: "",
      senha: "",
      rua: "",
      cep: "",
      numero: "",
      estado: "",
      cidade: ""
    },
    login:false,
    usuario_produto: []
  },
  mutations: {

    UPDATE_LOGIN(state, payload){
      state.login = payload
    },

    SET_USERS(state, payload){
      state.users.push(Object.assign(payload))
    },

    SET_USER(state, payload){
      state.user = payload
    },

    UPDATE_USUARIO_PRODUTO(state, payload){
      state.usuario_produto=payload
    },
    
    ADD_USUARIO_PRODUTO(state, payload){
      state.usuario_produto.unshift(payload)
    }
  },
  actions: {
    async single(context){
      const resp = await api.get(`/usuario/${context.state.user.id}`)
      context.commit('SET_USER', resp.data)
      return resp
    },

    async userSingle(context){
      const resp = await api.get(`/usuario/${context.state.user.id}`)
      return resp
    },

    async getUsuarioProduto(context, payload){
     const resp =  await api.get(`/produto?usuario_id=${payload}`)
      context.commit('UPDATE_USUARIO_PRODUTO', resp.data)
    },
    async getUsers(context){
     const resp =  await api.get('/usuario')
     context.commit('SET_USERS', resp.data)
    },

    async show(context, payload){
      const {data} = await api.get(`/usuario/${payload}`)
      context.commit('SET_USER', data)
      context.commit('UPDATE_LOGIN', true)
    },


    async criarUsuario(context, payload){
      await api.post('/usuario', payload)
    },

    logoutUsuario(context){
      context.commit('SET_USER', {})
      context.commit('UPDATE_LOGIN', false)
    }

  },
  getters:{
    $allUsers(state){
      return state.users
    },
    $single(state){
      return state.user
    },
    $singleProdutoUsuario(state){
      return state.usuario_produto
    },
    $login(state){
      return state.login
    }

  }
});
