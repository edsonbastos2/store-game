<template>
    <div>
        <form @submit.prevent="onsubmit">
            <label for="nome">Nome</label>
            <input type="text" id="nome" v-model="form.nome">

            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="form.email">

            <label for="senha">Senha</label>
            <input type="password" id="senha" v-model="form.senha">

            <label for="cep">Cep</label>
            <input type="text" id="cep" v-model="form.cep" @keyup="loadingCep">

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

            <div class="button">
            <button class="btn criar">Criar Usuário</button>
            </div>
        </form>

    </div>
</template>

<script>
import {getCep} from '@/services/api.js'
// import {api} from '@/services/api.js'
export default {
    name:'UsuarioForm',
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

    methods:{
        loadingCep(){
            const cep = this.form.cep.replace(/\D/g, '')
            if(cep.length === 8){
                getCep(cep).then(resp => {
                    this.form.rua = resp.data.logradouro
                    this.form.bairro = resp.data.bairro
                    this.form.estado = resp.data.uf
                    this.form.cidade = resp.data.localidade
                })
            }
        },

        async onsubmit(){
            this.form.id = this.form.email
            await this.$store.dispatch('criarUsuario', this.form)
        }

    }
}
</script>

<style lang="scss" scoped>
form{
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: center;

    .button{
        width: 100%;
        grid-column: 2;

        

        
    }
}
</style>