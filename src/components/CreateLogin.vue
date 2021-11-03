<template>
    <div>
        <h2>Crie sua conta</h2>
        <transition mode="out-in">
            <button v-if="!open" @click="open = !open" class="btn">Criar Conta</button>
            <UserForm v-else>
                
            </UserForm>
        </transition>
    </div>
</template>

<script>
import UserForm from '@/components/UsuarioForm.vue'
export default {
    components:{
        UserForm
    },
    name:'CriarLogin',
    data(){
        return{
            open: false
        }
    },
    methods:{
        createUser(e){
            // this.$store.dispatch('criarUsuario', this.$store.state.user)
            console.log('button login',e)
        }
    }
}
</script>

<style lang="scss" scoped>
h2{
    text-align: center;
    margin: 40px 0 10px 0;
}

.btn{
    width: 100%;
    max-width: 300px;
    margin: 0 auto;

}
    .criar{
        max-width: 100%;

        &:hover{
            transform: none;
        }
    }
</style>