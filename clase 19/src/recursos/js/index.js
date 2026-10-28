
// import hola from "./productos.js" //no nombrada
import {productosMascotas, categorias} from './productos.js' //nombrada
import {filtrarPorTalle, renderizarCatalogo} from "./funciones.js"

const productosEnCarro = []
//console.log(contenedorProductos)

//contenedorProductos.textContent = '<h3>Producto 1<h3>'

//contenedorProductos.innerHTML = '<h3>Producto 1<h3>'

const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById('boton-evento')
const dialogo = document.getElementById('dialogo')
const productosSeleccionados= document.getElementById('productos-seleccionados')


const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

//Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)

//Eventos
botonEvento.addEventListener('click', (evento)=>{
    //console.log(evento)
    //dialogo.show()
    dialogo.showModal()
})

//Aplicar escuchadores a los botones de los productos
const botonesProducto = contenedorProductos.querySelectorAll('.boton-agregar-producto')
//console.log(botonesProducto)

botonesProducto.forEach ((boton)=>{
    //Cuerpo del callback forEach
    boton.addEventListener('click', (evento)=>{
        //Cuerpo del callback (handler) del listener
        const idProducto = parseInt (boton.dataset.id)
        //console.log(idProducto)
        productosEnCarro.push(idProducto)
        console.log(productosEnCarro)
        productosSeleccionados.textContent = productosEnCarro.length
    })

})


