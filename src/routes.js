export const routes = [
    {path: '/', name : 'Home', component : import('./pages/Home.vue') },
    {path: '/items/ram', name: 'Memória RAM', component: import('./pages/RamPage.vue')},
    {path: '/items/ssd', name: 'SSD', component: import('./pages/SsdPage.vue')},
    {path: '/items/kits', name: 'Kit Upgrade', component: import('./pages/SsdPage.vue')},
    {path: '/items/pc', name : 'PC Completo', component : import('./pages/PcPage.vue') },
]