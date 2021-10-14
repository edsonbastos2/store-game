<template>
    <header class="header">
        <nav>
            <router-link to="/" class="logo">
                <h1>Logo</h1>
            </router-link>
            <router-link class="btn" to="/login">Vender | Login</router-link>
        </nav>
    </header>
</template>

<script>

export default {
    name:'header'
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