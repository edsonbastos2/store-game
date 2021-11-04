<template>
    <form>
        <label for="nome">Nome</label>
        <input type="text" id="nome" v-model="form.nome">
        <label for="email">E-mail</label>
        <input type="text" id="email" v-model="form.email">
        <label for="senha">Senha</label>
        <input type="text" id="senha" v-model="form.senha">
        <label for="cep">Cep</label>
        <input type="text" id="cep" v-model="form.cep">
        <label for="rua">Rua</label>
        <input type="text" id="rua" v-model="form.rua">
        <label for="numero">Número</label>
        <input type="text" id="numero" v-model="form.numero">
        <label for="bairro">Bairro</label>
        <input type="text" id="bairro" v-model="form.bairro">
        <label for="cidade">Cidade</label>
        <input type="text" id="cidade" v-model="form.cidade">
        <label for="estado">Estado</label>
        <input type="text" id="estado" v-model="form.estado">
        <button class="btn" @click.prevent="update">Atualizar</button>
    </form>
</template>

<script>
import { api } from '@/services/api.js'
export default {
    name:'FormUserFull',
    data(){
        return{
            form:{
                nome:'',
                email:'',
                senha:'',
                cep:'',
                rua:'',
                numero:'',
                bairro:'',
                cidade:'',
                estado:''
            }
        }
    },
    computed:{
        $user(){
            return this.$store.getters.$single
        }
    },
    methods:{
        getUser(){
            this.$store.dispatch('userSingle').then( resp => {
                this.form = resp.data
            })
        },
        update(){
            api.put(`/usuario/${this.$user.id}/`, this.form)
        }
    },
    created(){
        this.getUser()
    }
}
</script>

<style lang="scss" scoped>
form{
    display: grid;
    grid-template-columns: 100px 1fr;
    margin-top: 40px;

    .btn{
        grid-column: 2;
    }
}
</style>