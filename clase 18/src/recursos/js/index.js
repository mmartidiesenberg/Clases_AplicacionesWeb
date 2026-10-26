
// import hola from "./productos.js" //no nombrada
import {productosMascotas, categorias} from './productos.js' //nombrada
import {filtrarPorTalle, renderizarCatalogo} from "./funciones.js"

//console.log(contenedorProductos)

//contenedorProductos.textContent = '<h3>Producto 1<h3>'

//contenedorProductos.innerHTML = '<h3>Producto 1<h3>'

const contenedorProductos = document.getElementById("contenedor-productos")

const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

renderizarCatalogo(contenedorProductos, productosFiltrados)




