<template>
    <section class="usuario">
        <nav class="sidenav">
            <ul>
                <li>
                    <router-link :to="{name: 'usuario'}">Produtos</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'compras'}">Compras</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'vendas'}">Vendas</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'usuario-editar'}">Editar usuário</router-link>
                </li>
                <li>
                    <button @click.prevent="deslogar">Deslogar</button>
                </li>
            </ul>
        </nav>
        <transition
         enter-active-class="animate__animated animate__fadeInRight"
         leave-active-class="animate__animated animate__fadeInRight"
         mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
export default {
    name:'usuario',
    computed:{
        $user(){
            return this.$store.getters.$single
        },
       
    },
    methods:{
        deslogar(){
            this.$store.dispatch('logoutUsuario')
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
.usuario{
    display: grid;
    grid-template-columns: minmax(140px, 200px) 1fr;
    max-width: 900px;
    margin: 40px auto;
    gap: 30px;
    padding: 20px;

    @media (max-width: 500px){
        .usuario{
            grid-template-columns: 1fr;
            margin: 0 auto;
        }
    }

    .sidenav a{
        padding: 10px;
        display: block;
        background-color: #dee0e4;
        margin-bottom: 10px;
        border-radius: 5px;

    }

    button{
        width: 100%;
        border: none;
        padding: 10px;
        border-radius: 5px;
        background-color: #dee0e4;
        text-align: left;
        font-size: 1rem;
        color: #345;
        cursor: pointer;
        font-family: sans-serif;
    }

    .sidenav a.router-link-exact-active, .sidenav a:hover, button:hover{
        background-color: #87f;
        color: #fff;
    }
}
</style>