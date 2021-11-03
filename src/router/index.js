import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Produto from '@/views/Produto.vue'
import Login from '@/views/Login.vue'
import Usuario from '@/views/usuario/Usuario.vue'
import UsuarioProdutos from '@/views/usuario/UsuarioProdutos.vue'
import UsuarioEditar from '@/views/usuario/UsuarioEditar.vue'
import UsuarioVendas from '@/views/usuario/UsuarioVendas.vue'
import UsuarioCompras from '@/views/usuario/UsuarioCompras.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/usuario',
    component: Usuario,
    children:[
      {
        path:'',
        name:'usuario',
        component: UsuarioProdutos
      },
      {
        path:'compras',
        name:'compras',
        component: UsuarioCompras
      },
      {
        path:'vendas',
        name:'vendas',
        component: UsuarioVendas
      },
      {
        path:'editar',
        name:'usuario-editar',
        component: UsuarioEditar
      }
    ]
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: Produto,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
})

export default router
