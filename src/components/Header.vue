<script setup>
import {Gauge, User2, ShoppingCart, Search, Menu} from 'lucide-vue-next'
import {routes} from '../routes'
</script>
<template>
  <header class="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-3 fixed top-0 left-0">

    <!-- barra superior -->
    <div class="flex justify-between md:justify-normal items-center flex-row gap-6">

      <div class="flex items-center gap-3">
        <div v-on:click="changeMenu" class="cursor-pointer sm:hidden">
          <Menu/>
        </div>
        <div class="flex items-center gap-2 text-2xl font-medium py-3">
          <Gauge size="28"/>
          <span>Over Clock Store</span>
        </div>
      </div>

      <form class="flex-1 hidden md:block">
        <input class="w-full rounded px-2 py-1 bg-red-100 focus:outline-none text-zinc-600 font-medium text-lg" type="text" name="search" id="tech-search" placeholder="O que você busca?">
      </form>

      <div class="flex items-center gap-3">
        <RouterLink class="flex justify-center items-center gap-2" to="/login">
          <User2/>
          <span class="text-xl hidden md:block">Faça o Login</span>
        </RouterLink>
        <RouterLink to="/cart" class="">
          <ShoppingCart />
        </RouterLink>
        <RouterLink to="/search" class="md:hidden block">
          <Search />
        </RouterLink>
      </div>

    </div>


    <!-- navegação -->
    <div :class='{ "hidden" : isClose, "flex items-center justify-between md:flex-row flex-col pb-4 sm:pb-0 sm:block" : true}'>
      <nav class="sm:h-10 inline-flex items-center justify-start gap-2 md:gap-4 flex-col sm:flex-row">
        <RouterLink 
          v-if="routes" 
          v-for="page in routes" 
          :to="page.path" 
          :class='{"md:text-xl text-lg p-1" : true, "border-b-4 border-white" : pathName == page.path} '
          v-on:click="pathName = page.path"  
          >
          {{ page.name }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name:'Header',
  data(){
    return {
      pathName: window.location.pathname,
      isClose: true
    }
  },
  methods:{
    changeMenu(){
      if(this.isClose){
        this.isClose = false
      }else{
        this.isClose = true
      }
    }
  },
  mounted(){
  },
  computed : {
    
  }
}
</script>