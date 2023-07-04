import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import { routes } from './routes'

const router = createRouter({
  history : createWebHistory(),
  routes : [
    {path: '/', name : 'Home', component : import('./pages/Home.vue') , list : true},
    {path: '/items/ram', name: 'Memória RAM', component: import('./pages/RamPage.vue'), list : true},
    {path: '/items/ssd', name: 'SSD', component: import('./pages/SsdPage.vue'), list : true},
    {path: '/items/kits', name: 'Kit Upgrade', component: import('./pages/SsdPage.vue'), list : true},
    {path: '/items/pc', name : 'PC Completo', component : import('./pages/PcPage.vue') , list : true},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: import('./pages/NotFound.vue'), list : false},
  ]
})

createApp(App).use(router).mount('#app')
