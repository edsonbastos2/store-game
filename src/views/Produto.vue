<template>
    <section>
        <div v-if="produto" class="produto">
            <ul class="foto" v-if="produto.fotos">
                <li v-for="(foto, index) in produto.fotos" :key="index">
                    <img :src="foto.src" :alt="foto.title">
                </li>
            </ul>
            <div class="info">
                <p class="preco">{{getCurrency(produto.preco)}}</p>
                <h1 class="title">{{produto.title}}</h1>
                <p class="desc">{{produto.descricao}}</p>
                <button class="btn" :disabled="produto.vendido === 'true'">
                    {{produto.vendido === 'false' ? 'Comprar' : 'Vendido'}}
                </button>
            </div>
        </div>
        <Loading v-else/>
    </section>
</template>

<script>
import {api} from '@/services/api.js'
export default {
    name:'produto',
    props:['id'],
    data(){
        return {produto: null}
    },
    methods:{
        async getProduto(){
            const resp = await api.get(`/produto/${this.id}`)
            this.produto = resp.data
        }
    },
    computed:{
        getCurrency(){
            return (valor) =>{
            valor = Number(valor)
            if(!isNaN(valor)){
                return valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })
            }else{
                return ""
            }
        }
        }
    },
    created(){
        this.getProduto()
    }
}
</script>

<style lang="scss" scoped>
.produto{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 60px 20px;
    max-width: 900px;
    margin: 0 auto;

    .preco{
        color: #e80;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 40px;
    }

    .desc{
        font-size: 1.3rem;
    }

    .btn{
        margin-top: 40px;
        width: 200px;
    }
}
</style>