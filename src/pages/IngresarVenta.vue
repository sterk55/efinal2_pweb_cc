<template>
  <h1>Ingresar Venta</h1>
  <br>
  <table>
    <tr>
      <td>Numero Venta</td>
    </tr>
    <tr>
      <td><input type="text" name="" id="idNumVenta"></td>
    </tr>
    <tr>
      <td><label for="">Cedula</label></td>
    </tr>
    <tr>
      <td><input type="text" name="" id="idCedula"></td>
    </tr>

  </table>
<br>
<table>
  <tr>
    <td><table >
  <tr>
    <td><label for="">Codigo de Barras</label></td>
  </tr>
  <tr>
    <td><input type="text" name="" id=""></td>
  </tr>
</table></td>
<td>
  <table>
  <tr>
    <td><label for="">Cantidad</label></td>
  </tr>
  <tr>
    <td><input type="text" name="" id="idCantidad"></td>
  </tr>
</table>
</td>
<td><button class="btn btn-outline-success">Agregar</button></td>
  </tr>
</table>
<br>
<table border=1>
  <tr>
    <td ><label class="abierto" for="">C. Barras</label></td>
    <td ><label class="abierto" for="">Nombre</label></td>
    <td ><label class="abierto" for="">Cantidad</label></td>
    <td ><label class="abierto" for="">Precio</label></td>
    <td ><label class="abierto" for="">SubTotal</label></td>
  </tr>
</table>
<br>
<button class="btn btn-outline-success" @click="ingresarVenta()">Ingresar la Venta</button>
</template>

<script>
import { ingresarVentaFachada, ingresarDetallesFachada } from '@/helpers/MetodoProducto';
export default {
    data(){
        return{
          numVenta:null,
          cedCliente:null,
          totalVenta:null,
          cantidad:null,
          precioUnitario:null,
          subTotal:null
        }
    },
    methods:{
      ingresarVenta(){
        const ventaNew={
          numVenta: document.getElementById("idNumVenta").value,
          cedCliente: document.getElementById('idCedula').value,
          totalVenta: 0,
        }
        const detallesNew={
          cantidad: document.getElementById("idCantidad").value

        }
        document.getElementById("idNumVenta").value = "",
        document.getElementById("idCedula").value = "",
        document.getElementById("idCantidad").value = ""

        ingresarVentaFachada(ventaNew)
        ingresarDetallesFachada(detallesNew)

      }


    }
}
</script>

<style>
.abierto{
  margin: 0 11px;
}

label{
  color: darkcyan;
}
input{
  border-style: outset;
}
</style>
