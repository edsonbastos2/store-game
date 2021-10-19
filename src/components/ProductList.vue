<template>
    <section class="product-container">
        <transition mode="out-in">
            <div class="produtos" v-if="products && products.length">
                <div class="produto" v-for="(product, index) in products" :key="index">
                    <router-link :to="{name:'produto', params: {id:product.id}}">
                        <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].title">
                        <p class="preco">{{getCurrency(product.preco)}}</p>
                        <h2 class="title">{{product.nome}}</h2>
                        <p>{{product.descricao}}</p>
                    </router-link>
                </div>
                <ProductPagination :produtoPorPagina="produtoPorPagina" :produtosTotal="produtosTotal"/>
            </div>
            <div v-else-if="products && products.length === 0">
                <p class="notFound">Busca sem resultados. Tente buscar outro termo.</p>
            </div>
            <loading v-else/>
        </transition>
    </section>
</template>

<script>
import { api } from '@/services/api.js'
import {serialize} from '@/helpers.js'
import ProductPagination from '@/components/ProductPagination.vue'
import Loading from './Loading.vue'
export default {
    components:{
        ProductPagination,
        Loading
    },
    data(){
        return{
            products: null,
            produtoPorPagina: 9,
            produtosTotal: 0
        }
    },
    computed:{
        url(){
            const query = serialize(this.$route.query)
            return `/produto?_limit=${this.produtoPorPagina}${query}`
        },
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
    methods:{
        async getProduct(){
            this.products = null
            const product =  await  api.get(this.url)
            this.produtosTotal = Number(product.headers['x-total-count'])
            this.products = product.data
        }
    },
    watch:{
        url(){
            this.getProduct()
        }
    },
    created(){
        this.getProduct()
    }
}
</script>

<style lang="scss" scoped>
.product-container{
    max-width: 1000px;
    margin: 0 auto;

    .produtos{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin: 30px;

        .produto{
            box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
            padding: 10px;
            transition: all 0.2s;
            background-color: #FFF;
            border-radius: 5px;

            &:hover{
                box-shadow: 0 6px 12px rgba(30, 60, 90, 0.1);
                transform: scale(1.1);
                position: relative;
                z-index: 1;
            }

            img{
                border-radius: 5px;
                margin-bottom: 20px;
            }

            .title{
                margin-bottom: 10px;
            }

            .preco{
                color: #e80;
                font-weight: bolder;
            }
            
        }
    }

    .notFound{
        text-align: center;
    }

}
</style>