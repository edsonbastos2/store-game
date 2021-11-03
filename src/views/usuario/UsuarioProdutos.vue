<template>
    <div>
        <section class="usuario_produto">
            <h2 ref="h2">Adicionar Produto</h2>
            <ProdutoAdicionar/>
            <h2>Seus Produtos</h2>
            <transition-group v-if="this.$produtoUsuario"
              enter-active-class="animate__animated animate__fadeInRight"
              leave-active-class="animate__animated animate__fadeInRight"
              name="list" tag="ul">
                <li v-for="(produto, index) in $produtoUsuario" :key="index">
                    <ProdutoItem :produto="produto">
                        <p>{{produto.descricao}}</p>
                        <button class="btn" @click.prevent="deletar(produto.id)">&times;</button>
                    </ProdutoItem>
                </li>
            </transition-group>
        </section>
    </div>
</template>

<script>
import ProdutoAdicionar from '@/components/ProdutoAdicionar.vue'
import ProdutoItem from '@/components/ProdutoItem.vue'
import {api} from '@/services/api.js'

export default {
    name:'UsuarioProdutos',
    components:{
        ProdutoAdicionar,
        ProdutoItem
    },
    data(){
        return{
            produtosUser:null
        }
    },
    beforeUpdate(){
        if(this.$login){
            this.getAllProduct()
        }
    },
    computed:{
        
        $singleUser(){
             return this.$store.getters.$single
        },
        $produtoUsuario(){
            return this.$store.getters.$singleProdutoUsuario
        },
        $login(){
            return this.$store.getters.$login
        }
    },
    methods:{
        getAllProduct(){
            this.$store.dispatch('getUsuarioProduto',this.$store.getters.$single.email)
        },
        deletar(id){
            const confi = window.confirm('Tem certeza ?')
            if(confi){
                api.delete(`/produto/${id}`).then(() => {
                    this.$store.dispatch('getUsuarioProduto', this.$store.getters.$single.email)
                })
            }
        }
    },
    watch:{
        $login(){
            this.getAllProduct()
        }
    }
    
}
</script>

<style lang="scss" scoped>
.usuario_produto{
    h2{
        margin: 20px 0;
    }
}
</style>