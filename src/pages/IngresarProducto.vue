<template>
  <h1>Ingresar Producto</h1>
<table>
    <tr>
        <td><label for="">Codigo de Barras: </label></td>
        <td><input type="text" name="" id="idCodigoBarras"></td>
    </tr>
    <tr>
        <td><label for="">Nombre: </label></td>
        <td><input type="text" name="" id="idNombre"></td>
    </tr>
    <tr>
        <td><label for="">Categoria: </label></td>
        <td><input type="text" name="" id="idCategoria"></td>
    </tr>
    <tr>
        <td><label for="">Stock: </label></td>
        <td><input type="text" name="" id="idStock"></td>
    </tr>
    <tr>
        <td><label for="">Precio: </label></td>
        <td><input type="text" name="" id="idPrecio"></td>
    </tr>

</table>
<br>

<button class="btn btn-outline-success" @click="insertar()">Guardar Producto</button>

</template>

<script>
import {ingresarFachada} from "../helpers/MetodoProducto"

export default {
 data(){
        return{
            codigoBarras:"",
            nombre:"",
            categoria:"",
            stock:null,
            precio: null
        }
    },
    methods:{
        insertar(){
            console.log("Guardado");
          
        const productoNew={
            codigoBarras: document.getElementById("idCodigoBarras").value,
            nombre: document.getElementById("idNombre").value,
            categoria: document.getElementById("idCategoria").value,
            stock: document.getElementById("idStock").value,
            precio: document.getElementById("idPrecio").value

        }
        document.getElementById("idCodigoBarras").value = "",
        document.getElementById("idNombre").value = "",
        document.getElementById("idCategoria").value = "",
        document.getElementById("idStock").value ="",
        document.getElementById("idPrecio").value = ""
        ingresarFachada(productoNew)

    }
    }
}

</script>

<style>

table{
    margin: 0 auto;
}

</style>