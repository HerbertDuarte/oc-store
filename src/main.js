import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomeVue from './pages/Home.vue'
import RamPageVue from './pages/RamPage.vue'
import SsdPageVue from './pages/SsdPage.vue'
import PcPageVue from './pages/PcPage.vue'
import NotFoundVue from './pages/NotFound.vue'
import KitsPageVue from './pages/KitsPage.vue'

const router = createRouter({
  history : createWebHistory(),
  routes : [
    {path: '/', name : 'Home', component : HomeVue },
    {path: '/items/ram', name: 'Memória RAM', component: RamPageVue},
    {path: '/items/ssd', name: 'SSD', component: SsdPageVue},
    {path: '/items/kits', name: 'Kit Upgrade', component: KitsPageVue},
    {path: '/items/pc', name : 'PC Completo', component : PcPageVue },
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundVue},
  ]
})

createApp(App).use(router).mount('#app')
