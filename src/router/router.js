import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {path: '/inicio', component:() => import('../pages/InicioPrincipal')},
    {path: '/productos', component:() => import('../pages/IngresarProducto')},
    {path: '/ventas', component:() => import('../pages/IngresarVenta')}

]




const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router