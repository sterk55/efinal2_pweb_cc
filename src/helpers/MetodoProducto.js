import axios from "axios";

export const ingresarFachada = async (body) => {
    return ingresar(body)
}

export const ingresarVentaFachada = async (body) =>{
    return ingresarVentas(body)
}

export const ingresarDetallesFachada = async (body) =>{
    return ingresarDetalles(body)
}

const ingresar = async (body) => {
    axios.post(`http://localhost:8085/API/V1/Supermaxi/productos`, body).then(r => r.data)
}

const ingresarVentas = async (body) =>{
    axios.post(`http://localhost:8085/API/V1/Supermaxi/ventas`, body).then(r => r.data)
    
}

const ingresarDetalles = async (body) =>{
    axios.post(`http://localhost:8085/API/V1/Supermaxi/detalles`, body).then(r => r.data)

}