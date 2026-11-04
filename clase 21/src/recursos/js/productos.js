import { URL_PRODUCTOS } from "./config.js"

// async / await
async function obtenerDatos(url) {
    const respuesta = await fetch(url) //<- pedimos un recurso via HTTP -> Response
    const datos = await respuesta.json() //<----- transforma a un objeto javascript
    return datos //<-- arreglo
}

const datos = await obtenerDatos(URL_PRODUCTOS)
// console.log(datos)
export default datos

//2 formas de exportar

//1. de manera no nombrada -> solo puede haber una
//export default productosMascotas

//2. de manera nombrada -> puede haber más de una
//export {productosMascotas, categorias}

//3. combinadas
//export default {productosMascotas, categorias}