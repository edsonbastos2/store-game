<template>
    <form>
        <input name="busca" id="busca" type="search" v-model="busca">
        <button id="lupa" @click.prevent="buscaProduto">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </button>
        <!-- <input type="submit" value="Busca" id="lupa" @click.prevent="buscaProduto"> -->
    </form>
</template>

<script>
export default {
    data(){
        return{
            busca:''
        }
    },
    methods:{
        buscaProduto(){
            this.$router.push({query: {q: this.busca}})
        }
    }
}
</script>

<style lang="scss" scoped>
form{
    max-width: 600px;
    margin: 30px auto 60px auto;
    position: relative;

    #busca{
        width: 100%;
        padding: 20px;
        border: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;

    }

    #lupa{
        width: 62px;
        height: 60px;
        position: absolute;
        border: none;
        background-color: #87f;
        cursor: pointer;
        box-shadow: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        svg{
            color: #fff;
            font-weight: bold;
        }
    }
}
</style>