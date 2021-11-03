<template>
    <section class="login">
        <h1>Login</h1>
        <form>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" v-model="form.email">
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="form.senha">
            <button class="btn" @click.prevent="logar">Logar</button>
        </form>
        <p class="perdeu">
            <a href="/" target="_blank">Perdeu sua senha? clique aqui</a>
        </p>
        <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeInDown">
            <CreateLogin/>
        </transition>
    </section>
</template>

<script>
import CreateLogin from '@/components/CreateLogin.vue'
export default {
    components:{
        CreateLogin
    },
    name:'login',
    data(){
        return{
            form:{
                email:'',
                senha:''
            }
        }
    },
    methods:{
        logar(){
            this.$store.dispatch('show', this.form.email)
            this.$router.push({name: 'usuario'})
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;

    h1{
        text-align: center;
        font-size: 2rem;
        color: #87f;
        margin: 40px 0 ;
    }

    form{
        display: grid;
    }

    .btn{
        width: 100%;
        max-width: 300px;
        margin:0 auto;
    }

    .perdeu{
        text-align: center;
        margin: 20px auto 0 auto;

        a{
            font-size: 1rem;
        }

        a:hover{
            color: #87f;
            text-decoration: underline;
        }
    }
}
</style>