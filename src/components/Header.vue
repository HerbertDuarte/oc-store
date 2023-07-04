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
        <div class="flex items-center gap-2 text-lg sm:text-2xl font py-3">
          <Gauge size="28"/>
          <span class="hidden xs:block">Over Clock Store</span>
          <span class="xs:hidden block">OC Store</span>
        </div>
      </div>

      <form class="flex-1 hidden md:block">
        <input class="w-full rounded px-2 py-1 bg-red-100 focus:outline-none text-zinc-600 font-medium text-lg" type="text" name="search" id="tech-search" placeholder="O que você busca?">
      </form>

      <!-- icones cart / search / profile -->
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
    <div :class='{ "hidden" : isClose, "flex items-center justify-between md:flex-row flex-col pb-0 sm:block " : true}'>
      <nav class="sm:h-10 inline-flex items-center justify-start gap-2 md:gap-4 flex-col sm:flex-row text-red-100">
        <div v-for="page in routes">
          <RouterLink 
          v-if="page.list" 
          :to="page.path" 
          :class='{"md:text-xl text-lg px-1 py-2 rounded" : true, "text-white font-bold" : pathName == page.path} '
          v-on:click="changePage(page.path)"  
          >
          {{ page.name }}
        </RouterLink>
      </div>
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
    },
    changePage(element){
      this.pathName = element
      this.changeMenu()
    }
  },
}
</script>