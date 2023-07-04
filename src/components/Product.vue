<template>
  <div v-for="item in list" 
    class="w-full flex flex-col xs:flex-row sm:block sm:w-[48%] md:w-plg xl:w-pxl 2xl:w-p2xl 3xl:w-p3xl 3xl:m-1.5 m-1 xl:m-3 border-2 border-zinc-200 p-1.5 rounded-lg cursor-pointer"> 
    <img class="w-full xs:w-4/12 sm:w-full py-3" :src="item.image" :alt="item.name">
    
    <div class="flex flex-col justify-between flex-1 pl-2 sm:p-0">
      <p class="pt-2 font-medium sm:line-clamp-2">
        {{ item.name }}
      </p>
      <div class="flex justify-between items-end">
        <div>
          <p class="line-through text-zinc-500">
            {{ (item.price*1.315).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}
          </p>
          <p class="text-2xl font-medium text-red-600">
            {{ (item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    list : Array
  },
  methods : {
  }
}
</script>