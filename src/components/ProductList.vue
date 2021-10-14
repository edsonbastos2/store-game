<template>
    <section class="product-container">
        <div class="produtos" v-if="products && products.length">
            <div class="produto" v-for="product in products" :key="product.id">
                <router-link to="/">
                    <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].title">
                    <p class="preco">{{product.preco}}</p>
                    <h2 class="title">{{product.nome}}</h2>
                    <p>{{product.descricao}}</p>
                </router-link>
            </div>
        </div>
        <div v-else-if="products && products.length === 0">
            <p class="notFound">Busca sem resultados. Tente buscar outro termo.</p>
        </div>
    </section>
</template>

<script>
import { api } from '@/services/api.js'
import {serialize} from '@/helpers.js'
export default {
    data(){
        return{
            products:[],
            produtoPorPagina: 9
        }
    },
    computed:{
        url(){
            const query = serialize(this.$route.query)
            return `/produto?_limit=${this.produtoPorPagina}${query}`
        }
    },
    methods:{
        async getProduct(){
           const product = await api.get(this.url)
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