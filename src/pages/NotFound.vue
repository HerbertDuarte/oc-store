<script setup>
  import {XCircle} from 'lucide-vue-next'
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center flex-col">
    <p class="text-4xl font-medium">OPS!</p>
    <P class="text-xl"> Página não encontrada :(</P>
    <RouterLink to="/"  class="text-xl font-semibold text-red-600 hover:text-red-400">Retornar para a Home</RouterLink>
    <XCircle class="text-red-500 my-2" size="64"/>
  </div>
</template>
<script>
export default {
  name : 'NotFound',
  data(){
    return {
    }
  }
}
</script>