<script setup>
  import Product from '../components/Product.vue';
  import '../style.css'
</script>

<template>
  <main class="w-full inline-flex items-center justify-center p-1 sm:px-4 text-zinc-800">
    <div class="flex justify-start items-center flex-wrap mx-auto w-content">
      <Product :list="productsList"/>
    </div>
  </main>
</template>

<script>
  import products from '../products'

  export default {
    name : 'Home',
    data(){
      return {
        productsList : products
      }
    }
  }
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
