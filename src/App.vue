<template>
  <div id="app">
    <Header/>
      <main id="main">
        <transition
         mode="out-in"
         enter-active-class="animate__animated animate__fadeInRight"
         leave-active-class="animate__animated animate__fadeInRight"
         >
          <router-view />
        </transition>
      </main>
    <Footer/>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
#app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  #main{
    flex: 1;
  }
}
</style>
