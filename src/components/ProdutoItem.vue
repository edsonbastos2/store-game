<template>
    <div class="produto" v-if="produto">
        <router-link class="produto_img" :to="{name:'produto', params:{id:produto.id}}">
            <img v-if="produto.foto" :src="produto.foto[0].src" :alt="produto.foto[0].title">
            <p>Ver Produto</p>
        </router-link>
        <div class="info">
            <p class="preco">{{getCurrency(produto.preco)}}</p>
            <h2 class="titulo">{{produto.nome}}</h2>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        produto:{
            type:Object,
            required: true
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
}
</script>

<style lang="scss" scoped>
.produto{
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    gap: 20px;
    margin-bottom: 40px;
    position: relative;

    .produto_img{
        border-radius: 5px;
        overflow: hidden;
        height: 100px;
    }

    .info{
        align-self: flex-end;
    }
}
</style>