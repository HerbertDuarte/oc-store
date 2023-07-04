<script setup>
  import Header from './components/Header.vue';
  import './style.css'
  import { RouterView } from 'vue-router';
</script>

<template>
  <Header></Header>
  <RouterView class="pt-16 sm:pt-28 w-full"></RouterView>
  <p>teste </p>
</template>

<script>
  export default {
    name : 'App',
    data(){
      return {
        
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
