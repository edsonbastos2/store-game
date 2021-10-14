<template>
  <section>
      <h1>Compre ou Venda</h1>
      <Search/>
      <ListaProduto/>
  </section>
</template>

<script>
import Search from '@/components/SearchProduct.vue'
import ListaProduto from '@/components/ProductList.vue'
export default {
    components:{
        Search,
        ListaProduto
    }
}
</script>

<style lang="scss" scoped>
h1{
    color: #87f;
    font-size: 2rem;
    text-align: center;
    margin-top: 30px;
}
</style>
