<template>
    <form>
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" v-model="produto.nome">

        <label for="preco">Preço R$</label>
        <input type="text" name="preco" id="preco" v-model="produto.preco">

        <label for="fotos">Fotos</label>
        <input type="file" name="fotos" id="fotos" ref="fotos">

        <label for="descricao">Descrição</label>
        <textarea name="descricao" id="descricao" v-model="produto.descricao"/>
        <button class="btn" @click.prevent="adicionar">Adicionar</button>
    </form>
</template>

<script>
import {api} from '@/services/api.js'
export default {
    data(){
        return{
            produto:{
                nome:'',
                preco:'',
                descricao:'',
                fotos:null
            }
        }
    },
    methods:{
        formatarProduto(){
            this.produto.usuario_id = this.$store.state.user.id
        },
        adicionar(){
            this.formatarProduto()
            api.post('/produto', this.produto)
        }
    }
}
</script>

<style lang="scss" scoped>
form{
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    margin-bottom: 60px;

    .btn{
        grid-column: 2;
    }
}
</style>