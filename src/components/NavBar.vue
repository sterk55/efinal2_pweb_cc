<template>
<table>
    <tr>
        <td>  <router-link to="/inicio" class="nav">Inicio</router-link></td>
        <td>  <router-link to="/productos" class="nav">Producto</router-link></td>
        <td>  <router-link to="/ventas" class="nav">Venta</router-link></td>
    </tr>
</table>

</template>

<script>
export default {
    name:"NavegacionVue"

}
</script>

<style>
table{

    margin: 0 auto;

}

.nav{
    margin: 0px 50px;
}
    
    
    


</style>