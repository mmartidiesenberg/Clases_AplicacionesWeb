async function obtenerDatos(url){
    const respuesta = await fetch(url) //<- pedimos un recurso via http
    const datos = await respuesta.json()
    return datos //<- arreglo
}

const datosProductos = await obtenerDatos ('./recursos/datos/productos.json')

export {datosProductos}
console.log(datosProductos)
