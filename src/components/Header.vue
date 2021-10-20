<template>
    <header class="header">
        <nav>
            <router-link to="/" class="logo">
                <h1>Logo</h1>
            </router-link>
            <router-link v-if="$store.state.login" class="btn" to="/usuario">{{$singleUser}}</router-link>
            <router-link v-else class="btn" to="/login">Vender | Login</router-link>
        </nav>
    </header>
</template>

<script>

export default {
    name:'header',
    computed:{
        $singleUser(){
            const nome = this.$store.getters.$single.nome
            return nome.replace(/ .*/, '')
        }
    }
}
</script>

<style lang="scss" scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}
</style>