<template>
    <div>
        <p>{{$user}}</p>
    </div>
</template>

<script>
export default {
    name:'usuario',
    computed:{
        $user(){
            return this.$store.getters.$single
        }
    }
}
</script>

<style lang="scss" scoped>

</style>